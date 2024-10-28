// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: babylon/finality/v1/finality.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "babylon.finality.v1";

/** IndexedBlock is the necessary metadata and finalization status of a block */
export interface IndexedBlock {
  /** height is the height of the block */
  height: number;
  /** app_hash is the AppHash of the block */
  appHash: Uint8Array;
  /**
   * finalized indicates whether the IndexedBlock is finalised by 2/3
   * finality providers or not
   */
  finalized: boolean;
}

/**
 * PubRandCommit is a commitment to a series of public randomness
 * currently, the commitment is a root of a Merkle tree that includes
 * a series of public randomness
 */
export interface PubRandCommit {
  /** start_height is the height of the first commitment */
  startHeight: number;
  /** num_pub_rand is the number of committed public randomness */
  numPubRand: number;
  /**
   * commitment is the value of the commitment
   * currently, it is the root of the merkle tree constructed by the public randomness
   */
  commitment: Uint8Array;
  /** epoch_num defines the epoch number that the commit falls into */
  epochNum: number;
}

/**
 * Evidence is the evidence that a finality provider has signed finality
 * signatures with correct public randomness on two conflicting Babylon headers
 */
export interface Evidence {
  /** fp_btc_pk is the BTC PK of the finality provider that casts this vote */
  fpBtcPk: Uint8Array;
  /** block_height is the height of the conflicting blocks */
  blockHeight: number;
  /** pub_rand is the public randomness the finality provider has committed to */
  pubRand: Uint8Array;
  /** canonical_app_hash is the AppHash of the canonical block */
  canonicalAppHash: Uint8Array;
  /** fork_app_hash is the AppHash of the fork block */
  forkAppHash: Uint8Array;
  /**
   * canonical_finality_sig is the finality signature to the canonical block
   * where finality signature is an EOTS signature, i.e.,
   * the `s` in a Schnorr signature `(r, s)`
   * `r` is the public randomness that is already committed by the finality provider
   */
  canonicalFinalitySig: Uint8Array;
  /**
   * fork_finality_sig is the finality signature to the fork block
   * where finality signature is an EOTS signature
   */
  forkFinalitySig: Uint8Array;
}

/**
 * FinalityProviderSigningInfo defines a finality provider's signing info for monitoring their
 * liveness activity.
 */
export interface FinalityProviderSigningInfo {
  /** fp_btc_pk is the BTC PK of the finality provider that casts this vote */
  fpBtcPk: Uint8Array;
  /** start_height is the block height at which finality provider become active */
  startHeight: number;
  /**
   * missed_blocks_counter defines a counter to avoid unnecessary array reads.
   * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
   */
  missedBlocksCounter: number;
  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailedUntil: Date | undefined;
}

function createBaseIndexedBlock(): IndexedBlock {
  return { height: 0, appHash: new Uint8Array(0), finalized: false };
}

export const IndexedBlock: MessageFns<IndexedBlock> = {
  encode(message: IndexedBlock, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    if (message.finalized !== false) {
      writer.uint32(24).bool(message.finalized);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): IndexedBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexedBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToNumber(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.appHash = reader.bytes();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.finalized = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexedBlock {
    return {
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(0),
      finalized: isSet(object.finalized) ? globalThis.Boolean(object.finalized) : false,
    };
  },

  toJSON(message: IndexedBlock): unknown {
    const obj: any = {};
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.appHash.length !== 0) {
      obj.appHash = base64FromBytes(message.appHash);
    }
    if (message.finalized !== false) {
      obj.finalized = message.finalized;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexedBlock>, I>>(base?: I): IndexedBlock {
    return IndexedBlock.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexedBlock>, I>>(object: I): IndexedBlock {
    const message = createBaseIndexedBlock();
    message.height = object.height ?? 0;
    message.appHash = object.appHash ?? new Uint8Array(0);
    message.finalized = object.finalized ?? false;
    return message;
  },
};

function createBasePubRandCommit(): PubRandCommit {
  return { startHeight: 0, numPubRand: 0, commitment: new Uint8Array(0), epochNum: 0 };
}

export const PubRandCommit: MessageFns<PubRandCommit> = {
  encode(message: PubRandCommit, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.startHeight !== 0) {
      writer.uint32(8).uint64(message.startHeight);
    }
    if (message.numPubRand !== 0) {
      writer.uint32(16).uint64(message.numPubRand);
    }
    if (message.commitment.length !== 0) {
      writer.uint32(26).bytes(message.commitment);
    }
    if (message.epochNum !== 0) {
      writer.uint32(32).uint64(message.epochNum);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PubRandCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubRandCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.startHeight = longToNumber(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.numPubRand = longToNumber(reader.uint64());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.commitment = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): PubRandCommit {
    return {
      startHeight: isSet(object.startHeight) ? globalThis.Number(object.startHeight) : 0,
      numPubRand: isSet(object.numPubRand) ? globalThis.Number(object.numPubRand) : 0,
      commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(0),
      epochNum: isSet(object.epochNum) ? globalThis.Number(object.epochNum) : 0,
    };
  },

  toJSON(message: PubRandCommit): unknown {
    const obj: any = {};
    if (message.startHeight !== 0) {
      obj.startHeight = Math.round(message.startHeight);
    }
    if (message.numPubRand !== 0) {
      obj.numPubRand = Math.round(message.numPubRand);
    }
    if (message.commitment.length !== 0) {
      obj.commitment = base64FromBytes(message.commitment);
    }
    if (message.epochNum !== 0) {
      obj.epochNum = Math.round(message.epochNum);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PubRandCommit>, I>>(base?: I): PubRandCommit {
    return PubRandCommit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PubRandCommit>, I>>(object: I): PubRandCommit {
    const message = createBasePubRandCommit();
    message.startHeight = object.startHeight ?? 0;
    message.numPubRand = object.numPubRand ?? 0;
    message.commitment = object.commitment ?? new Uint8Array(0);
    message.epochNum = object.epochNum ?? 0;
    return message;
  },
};

function createBaseEvidence(): Evidence {
  return {
    fpBtcPk: new Uint8Array(0),
    blockHeight: 0,
    pubRand: new Uint8Array(0),
    canonicalAppHash: new Uint8Array(0),
    forkAppHash: new Uint8Array(0),
    canonicalFinalitySig: new Uint8Array(0),
    forkFinalitySig: new Uint8Array(0),
  };
}

export const Evidence: MessageFns<Evidence> = {
  encode(message: Evidence, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fpBtcPk.length !== 0) {
      writer.uint32(10).bytes(message.fpBtcPk);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.pubRand.length !== 0) {
      writer.uint32(26).bytes(message.pubRand);
    }
    if (message.canonicalAppHash.length !== 0) {
      writer.uint32(34).bytes(message.canonicalAppHash);
    }
    if (message.forkAppHash.length !== 0) {
      writer.uint32(42).bytes(message.forkAppHash);
    }
    if (message.canonicalFinalitySig.length !== 0) {
      writer.uint32(50).bytes(message.canonicalFinalitySig);
    }
    if (message.forkFinalitySig.length !== 0) {
      writer.uint32(58).bytes(message.forkFinalitySig);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fpBtcPk = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.blockHeight = longToNumber(reader.uint64());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pubRand = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.canonicalAppHash = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.forkAppHash = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.canonicalFinalitySig = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.forkFinalitySig = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Evidence {
    return {
      fpBtcPk: isSet(object.fpBtcPk) ? bytesFromBase64(object.fpBtcPk) : new Uint8Array(0),
      blockHeight: isSet(object.blockHeight) ? globalThis.Number(object.blockHeight) : 0,
      pubRand: isSet(object.pubRand) ? bytesFromBase64(object.pubRand) : new Uint8Array(0),
      canonicalAppHash: isSet(object.canonicalAppHash) ? bytesFromBase64(object.canonicalAppHash) : new Uint8Array(0),
      forkAppHash: isSet(object.forkAppHash) ? bytesFromBase64(object.forkAppHash) : new Uint8Array(0),
      canonicalFinalitySig: isSet(object.canonicalFinalitySig)
        ? bytesFromBase64(object.canonicalFinalitySig)
        : new Uint8Array(0),
      forkFinalitySig: isSet(object.forkFinalitySig) ? bytesFromBase64(object.forkFinalitySig) : new Uint8Array(0),
    };
  },

  toJSON(message: Evidence): unknown {
    const obj: any = {};
    if (message.fpBtcPk.length !== 0) {
      obj.fpBtcPk = base64FromBytes(message.fpBtcPk);
    }
    if (message.blockHeight !== 0) {
      obj.blockHeight = Math.round(message.blockHeight);
    }
    if (message.pubRand.length !== 0) {
      obj.pubRand = base64FromBytes(message.pubRand);
    }
    if (message.canonicalAppHash.length !== 0) {
      obj.canonicalAppHash = base64FromBytes(message.canonicalAppHash);
    }
    if (message.forkAppHash.length !== 0) {
      obj.forkAppHash = base64FromBytes(message.forkAppHash);
    }
    if (message.canonicalFinalitySig.length !== 0) {
      obj.canonicalFinalitySig = base64FromBytes(message.canonicalFinalitySig);
    }
    if (message.forkFinalitySig.length !== 0) {
      obj.forkFinalitySig = base64FromBytes(message.forkFinalitySig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Evidence>, I>>(base?: I): Evidence {
    return Evidence.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Evidence>, I>>(object: I): Evidence {
    const message = createBaseEvidence();
    message.fpBtcPk = object.fpBtcPk ?? new Uint8Array(0);
    message.blockHeight = object.blockHeight ?? 0;
    message.pubRand = object.pubRand ?? new Uint8Array(0);
    message.canonicalAppHash = object.canonicalAppHash ?? new Uint8Array(0);
    message.forkAppHash = object.forkAppHash ?? new Uint8Array(0);
    message.canonicalFinalitySig = object.canonicalFinalitySig ?? new Uint8Array(0);
    message.forkFinalitySig = object.forkFinalitySig ?? new Uint8Array(0);
    return message;
  },
};

function createBaseFinalityProviderSigningInfo(): FinalityProviderSigningInfo {
  return { fpBtcPk: new Uint8Array(0), startHeight: 0, missedBlocksCounter: 0, jailedUntil: undefined };
}

export const FinalityProviderSigningInfo: MessageFns<FinalityProviderSigningInfo> = {
  encode(message: FinalityProviderSigningInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fpBtcPk.length !== 0) {
      writer.uint32(10).bytes(message.fpBtcPk);
    }
    if (message.startHeight !== 0) {
      writer.uint32(16).int64(message.startHeight);
    }
    if (message.missedBlocksCounter !== 0) {
      writer.uint32(24).int64(message.missedBlocksCounter);
    }
    if (message.jailedUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.jailedUntil), writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FinalityProviderSigningInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalityProviderSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fpBtcPk = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startHeight = longToNumber(reader.int64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.missedBlocksCounter = longToNumber(reader.int64());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.jailedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinalityProviderSigningInfo {
    return {
      fpBtcPk: isSet(object.fpBtcPk) ? bytesFromBase64(object.fpBtcPk) : new Uint8Array(0),
      startHeight: isSet(object.startHeight) ? globalThis.Number(object.startHeight) : 0,
      missedBlocksCounter: isSet(object.missedBlocksCounter) ? globalThis.Number(object.missedBlocksCounter) : 0,
      jailedUntil: isSet(object.jailedUntil) ? fromJsonTimestamp(object.jailedUntil) : undefined,
    };
  },

  toJSON(message: FinalityProviderSigningInfo): unknown {
    const obj: any = {};
    if (message.fpBtcPk.length !== 0) {
      obj.fpBtcPk = base64FromBytes(message.fpBtcPk);
    }
    if (message.startHeight !== 0) {
      obj.startHeight = Math.round(message.startHeight);
    }
    if (message.missedBlocksCounter !== 0) {
      obj.missedBlocksCounter = Math.round(message.missedBlocksCounter);
    }
    if (message.jailedUntil !== undefined) {
      obj.jailedUntil = message.jailedUntil.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinalityProviderSigningInfo>, I>>(base?: I): FinalityProviderSigningInfo {
    return FinalityProviderSigningInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinalityProviderSigningInfo>, I>>(object: I): FinalityProviderSigningInfo {
    const message = createBaseFinalityProviderSigningInfo();
    message.fpBtcPk = object.fpBtcPk ?? new Uint8Array(0);
    message.startHeight = object.startHeight ?? 0;
    message.missedBlocksCounter = object.missedBlocksCounter ?? 0;
    message.jailedUntil = object.jailedUntil ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
