import {
  BankExtension,
  Coin,
  QueryClient,
  createProtobufRpcClient,
  setupBankExtension
} from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"

import * as btclightclientquery from "../generated/babylon/btclightclient/v1/query"
import * as incentivequery from "../generated/babylon/incentive/query"
import * as incentivetx from "../generated/babylon/incentive/tx"
import { REWARD_GAUGE_KEY_BTC_DELEGATION, BTC_STAKER } from "../utils/constants"
import { REGISTRY_TYPE_URLS } from "../utils/registry"

export interface BabylonClientConfig {
  rpc: string
}

export class BabylonClient {
  private queryClient: QueryClient
  private incentiveQueryClient: incentivequery.QueryClientImpl
  private btclightclientQueryClient: btclightclientquery.QueryClientImpl
  private bankExtension: BankExtension
  protected config: BabylonClientConfig

  constructor(config: BabylonClientConfig) {
    this.config = config
  }

  private async init(): Promise<void> {
    const tmClient = await Tendermint34Client.connect(this.config.rpc)
    this.queryClient = QueryClient.withExtensions(tmClient, setupBankExtension)
    this.bankExtension = setupBankExtension(this.queryClient)

    const rpc = createProtobufRpcClient(this.queryClient)
    this.incentiveQueryClient = new incentivequery.QueryClientImpl(rpc)
    this.btclightclientQueryClient = new btclightclientquery.QueryClientImpl(
      rpc
    )
  }

  static async connect(config: BabylonClientConfig): Promise<BabylonClient> {
    const client = new BabylonClient(config)
    await client.init()
    return client
  }

  // ============================
  // MESSAGE CREATION UTILITIES
  // ============================

  createWithdrawRewardMsg(address: string) {
    const withdrawRewardMsg = incentivetx.MsgWithdrawReward.fromPartial({
      type: BTC_STAKER,
      address
    })

    return {
      typeUrl: REGISTRY_TYPE_URLS.MsgWithdrawReward,
      value: withdrawRewardMsg
    }
  }

  // ============================
  // READ METHODS (Query Operations)
  // ============================

  /**
   * Gets the rewards of an address in the Babylon chain.
   * @param {string} address - The address to get the rewards of.
   * @returns {Promise<number>} - The rewards of the address.
   */
  async getRewards(address: string): Promise<number> {
    try {
      const req = incentivequery.QueryRewardGaugesRequest.fromPartial({
        address
      })

      const rewards = await this.incentiveQueryClient.RewardGauges(req)
      if (!rewards || !rewards.rewardGauges) {
        return 0
      }

      const coins = rewards.rewardGauges[REWARD_GAUGE_KEY_BTC_DELEGATION]?.coins
      if (!coins) {
        return 0
      }

      const withdrawnCoins =
        rewards.rewardGauges[
          REWARD_GAUGE_KEY_BTC_DELEGATION
        ]?.withdrawnCoins.reduce(
          (acc: number, coin: Coin) => acc + Number(coin.amount),
          0
        ) || 0

      return (
        coins.reduce(
          (acc: number, coin: Coin) => acc + Number(coin.amount),
          0
        ) - withdrawnCoins
      )
    } catch (error) {
      // If error message contains "reward gauge not found", silently return 0
      // This is to handle the case where the user has no rewards, meaning
      // they have not staked
      if (
        error instanceof Error &&
        error.message.includes("reward gauge not found")
      ) {
        return 0
      }
      throw new Error(`Failed to fetch rewards for ${address}: ${error}`)
    }
  }

  /**
   * Gets the balance of an address in the Babylon chain.
   * @param {string} address - The address to get the balance of.
   * @param {string} denom - The denom of the balance to get.
   * @returns {Promise<number>} - The balance of the address.
   */
  async getBalance(address: string, denom: string = "ubbn"): Promise<number> {
    try {
      const balance = await this.bankExtension.bank.balance(address, denom)
      return Number(balance?.amount ?? 0)
    } catch (error) {
      throw new Error(`Failed to fetch balance for ${address}: ${error}`)
    }
  }

  /**
   * Gets the tip of the Bitcoin blockchain.
   * @returns {Promise<BTCHeaderInfoResponse>} - The tip of the Bitcoin blockchain.
   */
  async getBTCTip(): Promise<btclightclientquery.BTCHeaderInfoResponse> {
    try {
      const req = btclightclientquery.QueryTipRequest.fromPartial({})
      const { header } = await this.btclightclientQueryClient.Tip(req)
      return header
    } catch (error) {
      throw new Error(`Failed to fetch BTC tip: ${error}`)
    }
  }
}
