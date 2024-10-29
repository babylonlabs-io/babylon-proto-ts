// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: babylon/btccheckpoint/v1/tx.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { BTCSpvProof } from "./btccheckpoint";
import { Params } from "./params";

export const protobufPackage = "babylon.btccheckpoint.v1";

/**
 * MsgInsertBTCSpvProof defines request to insert a new checkpoint into the
 * store
 */
export interface MsgInsertBTCSpvProof {
  submitter: string;
  proofs: BTCSpvProof[];
}

/**
 * MsgInsertBTCSpvProofResponse defines the response for the
 * MsgInsertBTCSpvProof message
 */
export interface MsgInsertBTCSpvProofResponse {
}

/** MsgUpdateParams defines a message to update the btccheckpoint module params. */
export interface MsgUpdateParams {
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet implemented
   * in cosmos-proto
   */
  authority: string;
  /**
   * params defines the btccheckpoint parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}

/** MsgUpdateParamsResponse defines the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponse {
}

function createBaseMsgInsertBTCSpvProof(): MsgInsertBTCSpvProof {
  return { submitter: "", proofs: [] };
}

export const MsgInsertBTCSpvProof: MessageFns<MsgInsertBTCSpvProof> = {
  encode(message: MsgInsertBTCSpvProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    for (const v of message.proofs) {
      BTCSpvProof.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgInsertBTCSpvProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInsertBTCSpvProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.submitter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proofs.push(BTCSpvProof.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgInsertBTCSpvProof {
    return {
      submitter: isSet(object.submitter) ? globalThis.String(object.submitter) : "",
      proofs: globalThis.Array.isArray(object?.proofs) ? object.proofs.map((e: any) => BTCSpvProof.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgInsertBTCSpvProof): unknown {
    const obj: any = {};
    if (message.submitter !== "") {
      obj.submitter = message.submitter;
    }
    if (message.proofs?.length) {
      obj.proofs = message.proofs.map((e) => BTCSpvProof.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgInsertBTCSpvProof>, I>>(base?: I): MsgInsertBTCSpvProof {
    return MsgInsertBTCSpvProof.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgInsertBTCSpvProof>, I>>(object: I): MsgInsertBTCSpvProof {
    const message = createBaseMsgInsertBTCSpvProof();
    message.submitter = object.submitter ?? "";
    message.proofs = object.proofs?.map((e) => BTCSpvProof.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgInsertBTCSpvProofResponse(): MsgInsertBTCSpvProofResponse {
  return {};
}

export const MsgInsertBTCSpvProofResponse: MessageFns<MsgInsertBTCSpvProofResponse> = {
  encode(_: MsgInsertBTCSpvProofResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgInsertBTCSpvProofResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInsertBTCSpvProofResponse();
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

  fromJSON(_: any): MsgInsertBTCSpvProofResponse {
    return {};
  },

  toJSON(_: MsgInsertBTCSpvProofResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgInsertBTCSpvProofResponse>, I>>(base?: I): MsgInsertBTCSpvProofResponse {
    return MsgInsertBTCSpvProofResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgInsertBTCSpvProofResponse>, I>>(_: I): MsgInsertBTCSpvProofResponse {
    const message = createBaseMsgInsertBTCSpvProofResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams: MessageFns<MsgUpdateParams> = {
  encode(message: MsgUpdateParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
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

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse> = {
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** InsertBTCSpvProof tries to insert a new checkpoint into the store. */
  InsertBTCSpvProof(request: MsgInsertBTCSpvProof): Promise<MsgInsertBTCSpvProofResponse>;
  /** UpdateParams updates the btccheckpoint module parameters. */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceName = "babylon.btccheckpoint.v1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.InsertBTCSpvProof = this.InsertBTCSpvProof.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  InsertBTCSpvProof(request: MsgInsertBTCSpvProof): Promise<MsgInsertBTCSpvProofResponse> {
    const data = MsgInsertBTCSpvProof.encode(request).finish();
    const promise = this.rpc.request(this.service, "InsertBTCSpvProof", data);
    return promise.then((data) => MsgInsertBTCSpvProofResponse.decode(new BinaryReader(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
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
