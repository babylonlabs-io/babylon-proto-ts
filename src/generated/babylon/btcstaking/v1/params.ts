// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: babylon/btcstaking/v1/params.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "babylon.btcstaking.v1";

/** Params defines the parameters for the module. */
export interface Params {
  /**
   * covenant_pks is the list of public keys held by the covenant committee
   * each PK follows encoding in BIP-340 spec on Bitcoin
   */
  covenantPks: Uint8Array[];
  /**
   * covenant_quorum is the minimum number of signatures needed for the covenant
   * multisignature
   */
  covenantQuorum: number;
  /**
   * slashing address is the address that the slashed BTC goes to
   * the address is in string on Bitcoin
   */
  slashingAddress: string;
  /**
   * min_slashing_tx_fee_sat is the minimum amount of tx fee (quantified
   * in Satoshi) needed for the pre-signed slashing tx
   * TODO: change to satoshi per byte?
   */
  minSlashingTxFeeSat: number;
  /** min_commission_rate is the chain-wide minimum commission rate that a finality provider can charge their delegators */
  minCommissionRate: string;
  /**
   * slashing_rate determines the portion of the staked amount to be slashed,
   * expressed as a decimal (e.g., 0.5 for 50%).
   */
  slashingRate: string;
  /** max_active_finality_providers is the maximum number of active finality providers in the BTC staking protocol */
  maxActiveFinalityProviders: number;
  /** min_unbonding_time is the minimum time for unbonding transaction timelock in BTC blocks */
  minUnbondingTime: number;
  /**
   * min_unbonding_rate is the minimum amount of BTC that are required in unbonding
   * output, expressed as a fraction of staking output
   * example: if min_unbonding_rate=0.9, then the unbonding output value
   * must be at least 90% of staking output, for staking request to be considered
   * valid
   */
  minUnbondingRate: string;
}

/** StoredParams attach information about the version of stored parameters */
export interface StoredParams {
  /**
   * version of the stored parameters. Each parameters update
   * increments version number by 1
   */
  version: number;
  /** NOTE: Parameters must always be provided */
  params: Params | undefined;
}

function createBaseParams(): Params {
  return {
    covenantPks: [],
    covenantQuorum: 0,
    slashingAddress: "",
    minSlashingTxFeeSat: 0,
    minCommissionRate: "",
    slashingRate: "",
    maxActiveFinalityProviders: 0,
    minUnbondingTime: 0,
    minUnbondingRate: "",
  };
}

export const Params: MessageFns<Params> = {
  encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.covenantPks) {
      writer.uint32(10).bytes(v!);
    }
    if (message.covenantQuorum !== 0) {
      writer.uint32(16).uint32(message.covenantQuorum);
    }
    if (message.slashingAddress !== "") {
      writer.uint32(26).string(message.slashingAddress);
    }
    if (message.minSlashingTxFeeSat !== 0) {
      writer.uint32(32).int64(message.minSlashingTxFeeSat);
    }
    if (message.minCommissionRate !== "") {
      writer.uint32(42).string(message.minCommissionRate);
    }
    if (message.slashingRate !== "") {
      writer.uint32(50).string(message.slashingRate);
    }
    if (message.maxActiveFinalityProviders !== 0) {
      writer.uint32(56).uint32(message.maxActiveFinalityProviders);
    }
    if (message.minUnbondingTime !== 0) {
      writer.uint32(64).uint32(message.minUnbondingTime);
    }
    if (message.minUnbondingRate !== "") {
      writer.uint32(74).string(message.minUnbondingRate);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.covenantPks.push(reader.bytes());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.covenantQuorum = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.slashingAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.minSlashingTxFeeSat = longToNumber(reader.int64());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.minCommissionRate = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.slashingRate = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.maxActiveFinalityProviders = reader.uint32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.minUnbondingTime = reader.uint32();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.minUnbondingRate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      covenantPks: globalThis.Array.isArray(object?.covenantPks)
        ? object.covenantPks.map((e: any) => bytesFromBase64(e))
        : [],
      covenantQuorum: isSet(object.covenantQuorum) ? globalThis.Number(object.covenantQuorum) : 0,
      slashingAddress: isSet(object.slashingAddress) ? globalThis.String(object.slashingAddress) : "",
      minSlashingTxFeeSat: isSet(object.minSlashingTxFeeSat) ? globalThis.Number(object.minSlashingTxFeeSat) : 0,
      minCommissionRate: isSet(object.minCommissionRate) ? globalThis.String(object.minCommissionRate) : "",
      slashingRate: isSet(object.slashingRate) ? globalThis.String(object.slashingRate) : "",
      maxActiveFinalityProviders: isSet(object.maxActiveFinalityProviders)
        ? globalThis.Number(object.maxActiveFinalityProviders)
        : 0,
      minUnbondingTime: isSet(object.minUnbondingTime) ? globalThis.Number(object.minUnbondingTime) : 0,
      minUnbondingRate: isSet(object.minUnbondingRate) ? globalThis.String(object.minUnbondingRate) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.covenantPks?.length) {
      obj.covenantPks = message.covenantPks.map((e) => base64FromBytes(e));
    }
    if (message.covenantQuorum !== 0) {
      obj.covenantQuorum = Math.round(message.covenantQuorum);
    }
    if (message.slashingAddress !== "") {
      obj.slashingAddress = message.slashingAddress;
    }
    if (message.minSlashingTxFeeSat !== 0) {
      obj.minSlashingTxFeeSat = Math.round(message.minSlashingTxFeeSat);
    }
    if (message.minCommissionRate !== "") {
      obj.minCommissionRate = message.minCommissionRate;
    }
    if (message.slashingRate !== "") {
      obj.slashingRate = message.slashingRate;
    }
    if (message.maxActiveFinalityProviders !== 0) {
      obj.maxActiveFinalityProviders = Math.round(message.maxActiveFinalityProviders);
    }
    if (message.minUnbondingTime !== 0) {
      obj.minUnbondingTime = Math.round(message.minUnbondingTime);
    }
    if (message.minUnbondingRate !== "") {
      obj.minUnbondingRate = message.minUnbondingRate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.covenantPks = object.covenantPks?.map((e) => e) || [];
    message.covenantQuorum = object.covenantQuorum ?? 0;
    message.slashingAddress = object.slashingAddress ?? "";
    message.minSlashingTxFeeSat = object.minSlashingTxFeeSat ?? 0;
    message.minCommissionRate = object.minCommissionRate ?? "";
    message.slashingRate = object.slashingRate ?? "";
    message.maxActiveFinalityProviders = object.maxActiveFinalityProviders ?? 0;
    message.minUnbondingTime = object.minUnbondingTime ?? 0;
    message.minUnbondingRate = object.minUnbondingRate ?? "";
    return message;
  },
};

function createBaseStoredParams(): StoredParams {
  return { version: 0, params: undefined };
}

export const StoredParams: MessageFns<StoredParams> = {
  encode(message: StoredParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StoredParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoredParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StoredParams {
    return {
      version: isSet(object.version) ? globalThis.Number(object.version) : 0,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: StoredParams): unknown {
    const obj: any = {};
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StoredParams>, I>>(base?: I): StoredParams {
    return StoredParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StoredParams>, I>>(object: I): StoredParams {
    const message = createBaseStoredParams();
    message.version = object.version ?? 0;
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
