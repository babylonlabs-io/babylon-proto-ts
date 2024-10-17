// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: babylon/checkpointing/v1/genesis.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { PubKey } from "../../../cosmos/crypto/ed25519/keys";
import { BlsKey } from "./bls_key";

export const protobufPackage = "babylon.checkpointing.v1";

/** GenesisState defines the checkpointing module's genesis state. */
export interface GenesisState {
  /** genesis_keys defines the public keys for the genesis validators */
  genesisKeys: GenesisKey[];
}

/** GenesisKey defines public key information about the genesis validators */
export interface GenesisKey {
  /** validator_address is the address corresponding to a validator */
  validatorAddress: string;
  /** bls_key defines the BLS key of the validator at genesis */
  blsKey:
    | BlsKey
    | undefined;
  /** val_pubkey defines the ed25519 public key of the validator at genesis */
  valPubkey: PubKey | undefined;
}

function createBaseGenesisState(): GenesisState {
  return { genesisKeys: [] };
}

export const GenesisState: MessageFns<GenesisState> = {
  encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.genesisKeys) {
      GenesisKey.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.genesisKeys.push(GenesisKey.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      genesisKeys: globalThis.Array.isArray(object?.genesisKeys)
        ? object.genesisKeys.map((e: any) => GenesisKey.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.genesisKeys?.length) {
      obj.genesisKeys = message.genesisKeys.map((e) => GenesisKey.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.genesisKeys = object.genesisKeys?.map((e) => GenesisKey.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGenesisKey(): GenesisKey {
  return { validatorAddress: "", blsKey: undefined, valPubkey: undefined };
}

export const GenesisKey: MessageFns<GenesisKey> = {
  encode(message: GenesisKey, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.blsKey !== undefined) {
      BlsKey.encode(message.blsKey, writer.uint32(18).fork()).join();
    }
    if (message.valPubkey !== undefined) {
      PubKey.encode(message.valPubkey, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenesisKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.blsKey = BlsKey.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.valPubkey = PubKey.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisKey {
    return {
      validatorAddress: isSet(object.validatorAddress) ? globalThis.String(object.validatorAddress) : "",
      blsKey: isSet(object.blsKey) ? BlsKey.fromJSON(object.blsKey) : undefined,
      valPubkey: isSet(object.valPubkey) ? PubKey.fromJSON(object.valPubkey) : undefined,
    };
  },

  toJSON(message: GenesisKey): unknown {
    const obj: any = {};
    if (message.validatorAddress !== "") {
      obj.validatorAddress = message.validatorAddress;
    }
    if (message.blsKey !== undefined) {
      obj.blsKey = BlsKey.toJSON(message.blsKey);
    }
    if (message.valPubkey !== undefined) {
      obj.valPubkey = PubKey.toJSON(message.valPubkey);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisKey>, I>>(base?: I): GenesisKey {
    return GenesisKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisKey>, I>>(object: I): GenesisKey {
    const message = createBaseGenesisKey();
    message.validatorAddress = object.validatorAddress ?? "";
    message.blsKey = (object.blsKey !== undefined && object.blsKey !== null)
      ? BlsKey.fromPartial(object.blsKey)
      : undefined;
    message.valPubkey = (object.valPubkey !== undefined && object.valPubkey !== null)
      ? PubKey.fromPartial(object.valPubkey)
      : undefined;
    return message;
  },
};

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
