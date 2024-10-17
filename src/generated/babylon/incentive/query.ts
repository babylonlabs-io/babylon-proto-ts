// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: babylon/incentive/query.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Gauge, RewardGauge } from "./incentive";
import { Params } from "./params";

export const protobufPackage = "babylon.incentive";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

/** QueryRewardGaugesRequest is request type for the Query/RewardGauges RPC method. */
export interface QueryRewardGaugesRequest {
  /** address is the address of the stakeholder in bech32 string */
  address: string;
}

/** QueryRewardGaugesResponse is response type for the Query/RewardGauges RPC method. */
export interface QueryRewardGaugesResponse {
  /**
   * reward_gauges is the map of reward gauges, where key is the stakeholder type
   * and value is the reward gauge holding all rewards for the stakeholder in that type
   */
  rewardGauges: { [key: string]: RewardGauge };
}

export interface QueryRewardGaugesResponse_RewardGaugesEntry {
  key: string;
  value: RewardGauge | undefined;
}

/** QueryBTCStakingGaugeRequest is request type for the Query/BTCStakingGauge RPC method. */
export interface QueryBTCStakingGaugeRequest {
  /** height is the queried Babylon height */
  height: number;
}

/** QueryBTCStakingGaugeResponse is response type for the Query/BTCStakingGauge RPC method. */
export interface QueryBTCStakingGaugeResponse {
  /** gauge is the BTC staking gauge at the queried height */
  gauge: Gauge | undefined;
}

/** QueryBTCTimestampingGaugeRequest is request type for the Query/BTCTimestampingGauge RPC method. */
export interface QueryBTCTimestampingGaugeRequest {
  /** epoch_num is the queried epoch number */
  epochNum: number;
}

/** QueryBTCTimestampingGaugeResponse is response type for the Query/BTCTimestampingGauge RPC method. */
export interface QueryBTCTimestampingGaugeResponse {
  /** gauge is the BTC timestamping gauge at the queried epoch */
  gauge: Gauge | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest: MessageFns<QueryParamsRequest> = {
  encode(_: QueryParamsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse: MessageFns<QueryParamsResponse> = {
  encode(message: QueryParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryRewardGaugesRequest(): QueryRewardGaugesRequest {
  return { address: "" };
}

export const QueryRewardGaugesRequest: MessageFns<QueryRewardGaugesRequest> = {
  encode(message: QueryRewardGaugesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardGaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRewardGaugesRequest {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: QueryRewardGaugesRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRewardGaugesRequest>, I>>(base?: I): QueryRewardGaugesRequest {
    return QueryRewardGaugesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardGaugesRequest>, I>>(object: I): QueryRewardGaugesRequest {
    const message = createBaseQueryRewardGaugesRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryRewardGaugesResponse(): QueryRewardGaugesResponse {
  return { rewardGauges: {} };
}

export const QueryRewardGaugesResponse: MessageFns<QueryRewardGaugesResponse> = {
  encode(message: QueryRewardGaugesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.rewardGauges).forEach(([key, value]) => {
      QueryRewardGaugesResponse_RewardGaugesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardGaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = QueryRewardGaugesResponse_RewardGaugesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.rewardGauges[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRewardGaugesResponse {
    return {
      rewardGauges: isObject(object.rewardGauges)
        ? Object.entries(object.rewardGauges).reduce<{ [key: string]: RewardGauge }>((acc, [key, value]) => {
          acc[key] = RewardGauge.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: QueryRewardGaugesResponse): unknown {
    const obj: any = {};
    if (message.rewardGauges) {
      const entries = Object.entries(message.rewardGauges);
      if (entries.length > 0) {
        obj.rewardGauges = {};
        entries.forEach(([k, v]) => {
          obj.rewardGauges[k] = RewardGauge.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRewardGaugesResponse>, I>>(base?: I): QueryRewardGaugesResponse {
    return QueryRewardGaugesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardGaugesResponse>, I>>(object: I): QueryRewardGaugesResponse {
    const message = createBaseQueryRewardGaugesResponse();
    message.rewardGauges = Object.entries(object.rewardGauges ?? {}).reduce<{ [key: string]: RewardGauge }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = RewardGauge.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseQueryRewardGaugesResponse_RewardGaugesEntry(): QueryRewardGaugesResponse_RewardGaugesEntry {
  return { key: "", value: undefined };
}

export const QueryRewardGaugesResponse_RewardGaugesEntry: MessageFns<QueryRewardGaugesResponse_RewardGaugesEntry> = {
  encode(
    message: QueryRewardGaugesResponse_RewardGaugesEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      RewardGauge.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardGaugesResponse_RewardGaugesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardGaugesResponse_RewardGaugesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = RewardGauge.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRewardGaugesResponse_RewardGaugesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? RewardGauge.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: QueryRewardGaugesResponse_RewardGaugesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = RewardGauge.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRewardGaugesResponse_RewardGaugesEntry>, I>>(
    base?: I,
  ): QueryRewardGaugesResponse_RewardGaugesEntry {
    return QueryRewardGaugesResponse_RewardGaugesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardGaugesResponse_RewardGaugesEntry>, I>>(
    object: I,
  ): QueryRewardGaugesResponse_RewardGaugesEntry {
    const message = createBaseQueryRewardGaugesResponse_RewardGaugesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? RewardGauge.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseQueryBTCStakingGaugeRequest(): QueryBTCStakingGaugeRequest {
  return { height: 0 };
}

export const QueryBTCStakingGaugeRequest: MessageFns<QueryBTCStakingGaugeRequest> = {
  encode(message: QueryBTCStakingGaugeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryBTCStakingGaugeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBTCStakingGaugeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToNumber(reader.uint64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBTCStakingGaugeRequest {
    return { height: isSet(object.height) ? globalThis.Number(object.height) : 0 };
  },

  toJSON(message: QueryBTCStakingGaugeRequest): unknown {
    const obj: any = {};
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBTCStakingGaugeRequest>, I>>(base?: I): QueryBTCStakingGaugeRequest {
    return QueryBTCStakingGaugeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBTCStakingGaugeRequest>, I>>(object: I): QueryBTCStakingGaugeRequest {
    const message = createBaseQueryBTCStakingGaugeRequest();
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseQueryBTCStakingGaugeResponse(): QueryBTCStakingGaugeResponse {
  return { gauge: undefined };
}

export const QueryBTCStakingGaugeResponse: MessageFns<QueryBTCStakingGaugeResponse> = {
  encode(message: QueryBTCStakingGaugeResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryBTCStakingGaugeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBTCStakingGaugeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gauge = Gauge.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBTCStakingGaugeResponse {
    return { gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined };
  },

  toJSON(message: QueryBTCStakingGaugeResponse): unknown {
    const obj: any = {};
    if (message.gauge !== undefined) {
      obj.gauge = Gauge.toJSON(message.gauge);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBTCStakingGaugeResponse>, I>>(base?: I): QueryBTCStakingGaugeResponse {
    return QueryBTCStakingGaugeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBTCStakingGaugeResponse>, I>>(object: I): QueryBTCStakingGaugeResponse {
    const message = createBaseQueryBTCStakingGaugeResponse();
    message.gauge = (object.gauge !== undefined && object.gauge !== null) ? Gauge.fromPartial(object.gauge) : undefined;
    return message;
  },
};

function createBaseQueryBTCTimestampingGaugeRequest(): QueryBTCTimestampingGaugeRequest {
  return { epochNum: 0 };
}

export const QueryBTCTimestampingGaugeRequest: MessageFns<QueryBTCTimestampingGaugeRequest> = {
  encode(message: QueryBTCTimestampingGaugeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.epochNum !== 0) {
      writer.uint32(8).uint64(message.epochNum);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryBTCTimestampingGaugeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBTCTimestampingGaugeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.epochNum = longToNumber(reader.uint64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBTCTimestampingGaugeRequest {
    return { epochNum: isSet(object.epochNum) ? globalThis.Number(object.epochNum) : 0 };
  },

  toJSON(message: QueryBTCTimestampingGaugeRequest): unknown {
    const obj: any = {};
    if (message.epochNum !== 0) {
      obj.epochNum = Math.round(message.epochNum);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBTCTimestampingGaugeRequest>, I>>(
    base?: I,
  ): QueryBTCTimestampingGaugeRequest {
    return QueryBTCTimestampingGaugeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBTCTimestampingGaugeRequest>, I>>(
    object: I,
  ): QueryBTCTimestampingGaugeRequest {
    const message = createBaseQueryBTCTimestampingGaugeRequest();
    message.epochNum = object.epochNum ?? 0;
    return message;
  },
};

function createBaseQueryBTCTimestampingGaugeResponse(): QueryBTCTimestampingGaugeResponse {
  return { gauge: undefined };
}

export const QueryBTCTimestampingGaugeResponse: MessageFns<QueryBTCTimestampingGaugeResponse> = {
  encode(message: QueryBTCTimestampingGaugeResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryBTCTimestampingGaugeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBTCTimestampingGaugeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gauge = Gauge.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBTCTimestampingGaugeResponse {
    return { gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined };
  },

  toJSON(message: QueryBTCTimestampingGaugeResponse): unknown {
    const obj: any = {};
    if (message.gauge !== undefined) {
      obj.gauge = Gauge.toJSON(message.gauge);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBTCTimestampingGaugeResponse>, I>>(
    base?: I,
  ): QueryBTCTimestampingGaugeResponse {
    return QueryBTCTimestampingGaugeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBTCTimestampingGaugeResponse>, I>>(
    object: I,
  ): QueryBTCTimestampingGaugeResponse {
    const message = createBaseQueryBTCTimestampingGaugeResponse();
    message.gauge = (object.gauge !== undefined && object.gauge !== null) ? Gauge.fromPartial(object.gauge) : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** RewardGauge queries the reward gauge of a given stakeholder address */
  RewardGauges(request: QueryRewardGaugesRequest): Promise<QueryRewardGaugesResponse>;
  /** BTCStakingGauge queries the BTC staking gauge of a given height */
  BTCStakingGauge(request: QueryBTCStakingGaugeRequest): Promise<QueryBTCStakingGaugeResponse>;
  /** BTCTimestampingGauge queries the BTC timestamping gauge of a given epoch */
  BTCTimestampingGauge(request: QueryBTCTimestampingGaugeRequest): Promise<QueryBTCTimestampingGaugeResponse>;
}

export const QueryServiceName = "babylon.incentive.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.RewardGauges = this.RewardGauges.bind(this);
    this.BTCStakingGauge = this.BTCStakingGauge.bind(this);
    this.BTCTimestampingGauge = this.BTCTimestampingGauge.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }

  RewardGauges(request: QueryRewardGaugesRequest): Promise<QueryRewardGaugesResponse> {
    const data = QueryRewardGaugesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RewardGauges", data);
    return promise.then((data) => QueryRewardGaugesResponse.decode(new BinaryReader(data)));
  }

  BTCStakingGauge(request: QueryBTCStakingGaugeRequest): Promise<QueryBTCStakingGaugeResponse> {
    const data = QueryBTCStakingGaugeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BTCStakingGauge", data);
    return promise.then((data) => QueryBTCStakingGaugeResponse.decode(new BinaryReader(data)));
  }

  BTCTimestampingGauge(request: QueryBTCTimestampingGaugeRequest): Promise<QueryBTCTimestampingGaugeResponse> {
    const data = QueryBTCTimestampingGaugeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BTCTimestampingGauge", data);
    return promise.then((data) => QueryBTCTimestampingGaugeResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
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
