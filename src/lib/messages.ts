import * as incentivetx from "../generated/babylon/incentive/tx";
import { BTC_STAKER } from "../utils/constants";
import { REGISTRY_TYPE_URLS } from "../utils/constants";

export const createMessages = () => ({
  createWithdrawRewardMsg(address: string) {
    const withdrawRewardMsg = incentivetx.MsgWithdrawReward.fromPartial({
      type: BTC_STAKER,
      address,
    });

    return {
      typeUrl: REGISTRY_TYPE_URLS.MsgWithdrawReward,
      value: withdrawRewardMsg,
    };
  },
});
