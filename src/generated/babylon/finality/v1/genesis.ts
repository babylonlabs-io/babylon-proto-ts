// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: babylon/finality/v1/genesis.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Evidence, FinalityProviderSigningInfo, IndexedBlock, PubRandCommit } from "./finality";
import { Params } from "./params";

export const protobufPackage = "babylon.finality.v1";

/** GenesisState defines the finality module's genesis state. */
export interface GenesisState {
  /** params the current params of the state. */
  params:
    | Params
    | undefined;
  /** indexed_blocks all the btc blocks and if their status are finalized. */
  indexedBlocks: IndexedBlock[];
  /** evidences all the evidences ever registered. */
  evidences: Evidence[];
  /** votes_sigs contains all the votes of finality providers ever registered. */
  voteSigs: VoteSig[];
  /** public_randomness contains all the public randomness ever commited from the finality providers. */
  publicRandomness: PublicRandomness[];
  /** pub_rand_commit contains all the public randomness commitment ever commited from the finality providers. */
  pubRandCommit: PubRandCommitWithPK[];
  /**
   * signing_infos represents a map between finality provider public key and their
   * signing infos.
   */
  signingInfos: SigningInfo[];
  /**
   * missed_blocks represents a map between finality provider public key and their
   * missed blocks.
   */
  missedBlocks: FinalityProviderMissedBlocks[];
}

/**
 * VoteSig the vote of an finality provider
 * with the block of the vote, the finality provider btc public key and the vote signature.
 */
export interface VoteSig {
  /** block_height is the height of the voted block. */
  blockHeight: number;
  /** fp_btc_pk is the BTC PK of the finality provider that casts this vote */
  fpBtcPk: Uint8Array;
  /**
   * finality_sig is the finality signature to this block
   * where finality signature is an EOTS signature, i.e.
   */
  finalitySig: Uint8Array;
}

/** PublicRandomness the block height and public randomness that the finality provider has submitted. */
export interface PublicRandomness {
  /** block_height is the height of block which the finality provider submited public randomness. */
  blockHeight: number;
  /** fp_btc_pk is the BTC PK of the finality provider that casts this vote. */
  fpBtcPk: Uint8Array;
  /** pub_rand is the public randomness the finality provider has committed to. */
  pubRand: Uint8Array;
}

/** PubRandCommitWithPK is the public randomness commitment with the finality provider's BTC public key */
export interface PubRandCommitWithPK {
  /** fp_btc_pk is the BTC PK of the finality provider that commits the public randomness */
  fpBtcPk: Uint8Array;
  /** pub_rand_commit is the public randomness commitment */
  pubRandCommit: PubRandCommit | undefined;
}

/** SigningInfo stores finality provider signing info of corresponding BTC public key. */
export interface SigningInfo {
  /** fp_btc_pk is the BTC PK of the finality provider */
  fpBtcPk: Uint8Array;
  /** fp_signing_info represents the signing info of this finality provider. */
  fpSigningInfo: FinalityProviderSigningInfo | undefined;
}

/**
 * FinalityProviderMissedBlocks contains array of missed blocks of corresponding
 * BTC public key.
 */
export interface FinalityProviderMissedBlocks {
  /** fp_btc_pk is the BTC PK of the finality provider */
  fpBtcPk: Uint8Array;
  /** missed_blocks is an array of missed blocks by the finality provider. */
  missedBlocks: MissedBlock[];
}

/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlock {
  /** index is the height at which the block was missed. */
  index: number;
  /** missed is the missed status. */
  missed: boolean;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    indexedBlocks: [],
    evidences: [],
    voteSigs: [],
    publicRandomness: [],
    pubRandCommit: [],
    signingInfos: [],
    missedBlocks: [],
  };
}

export const GenesisState: MessageFns<GenesisState> = {
  encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).join();
    }
    for (const v of message.indexedBlocks) {
      IndexedBlock.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.evidences) {
      Evidence.encode(v!, writer.uint32(26).fork()).join();
    }
    for (const v of message.voteSigs) {
      VoteSig.encode(v!, writer.uint32(34).fork()).join();
    }
    for (const v of message.publicRandomness) {
      PublicRandomness.encode(v!, writer.uint32(42).fork()).join();
    }
    for (const v of message.pubRandCommit) {
      PubRandCommitWithPK.encode(v!, writer.uint32(50).fork()).join();
    }
    for (const v of message.signingInfos) {
      SigningInfo.encode(v!, writer.uint32(58).fork()).join();
    }
    for (const v of message.missedBlocks) {
      FinalityProviderMissedBlocks.encode(v!, writer.uint32(66).fork()).join();
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

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.indexedBlocks.push(IndexedBlock.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.evidences.push(Evidence.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.voteSigs.push(VoteSig.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.publicRandomness.push(PublicRandomness.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.pubRandCommit.push(PubRandCommitWithPK.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.signingInfos.push(SigningInfo.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.missedBlocks.push(FinalityProviderMissedBlocks.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      indexedBlocks: globalThis.Array.isArray(object?.indexedBlocks)
        ? object.indexedBlocks.map((e: any) => IndexedBlock.fromJSON(e))
        : [],
      evidences: globalThis.Array.isArray(object?.evidences)
        ? object.evidences.map((e: any) => Evidence.fromJSON(e))
        : [],
      voteSigs: globalThis.Array.isArray(object?.voteSigs) ? object.voteSigs.map((e: any) => VoteSig.fromJSON(e)) : [],
      publicRandomness: globalThis.Array.isArray(object?.publicRandomness)
        ? object.publicRandomness.map((e: any) => PublicRandomness.fromJSON(e))
        : [],
      pubRandCommit: globalThis.Array.isArray(object?.pubRandCommit)
        ? object.pubRandCommit.map((e: any) => PubRandCommitWithPK.fromJSON(e))
        : [],
      signingInfos: globalThis.Array.isArray(object?.signingInfos)
        ? object.signingInfos.map((e: any) => SigningInfo.fromJSON(e))
        : [],
      missedBlocks: globalThis.Array.isArray(object?.missedBlocks)
        ? object.missedBlocks.map((e: any) => FinalityProviderMissedBlocks.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.indexedBlocks?.length) {
      obj.indexedBlocks = message.indexedBlocks.map((e) => IndexedBlock.toJSON(e));
    }
    if (message.evidences?.length) {
      obj.evidences = message.evidences.map((e) => Evidence.toJSON(e));
    }
    if (message.voteSigs?.length) {
      obj.voteSigs = message.voteSigs.map((e) => VoteSig.toJSON(e));
    }
    if (message.publicRandomness?.length) {
      obj.publicRandomness = message.publicRandomness.map((e) => PublicRandomness.toJSON(e));
    }
    if (message.pubRandCommit?.length) {
      obj.pubRandCommit = message.pubRandCommit.map((e) => PubRandCommitWithPK.toJSON(e));
    }
    if (message.signingInfos?.length) {
      obj.signingInfos = message.signingInfos.map((e) => SigningInfo.toJSON(e));
    }
    if (message.missedBlocks?.length) {
      obj.missedBlocks = message.missedBlocks.map((e) => FinalityProviderMissedBlocks.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.indexedBlocks = object.indexedBlocks?.map((e) => IndexedBlock.fromPartial(e)) || [];
    message.evidences = object.evidences?.map((e) => Evidence.fromPartial(e)) || [];
    message.voteSigs = object.voteSigs?.map((e) => VoteSig.fromPartial(e)) || [];
    message.publicRandomness = object.publicRandomness?.map((e) => PublicRandomness.fromPartial(e)) || [];
    message.pubRandCommit = object.pubRandCommit?.map((e) => PubRandCommitWithPK.fromPartial(e)) || [];
    message.signingInfos = object.signingInfos?.map((e) => SigningInfo.fromPartial(e)) || [];
    message.missedBlocks = object.missedBlocks?.map((e) => FinalityProviderMissedBlocks.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVoteSig(): VoteSig {
  return { blockHeight: 0, fpBtcPk: new Uint8Array(0), finalitySig: new Uint8Array(0) };
}

export const VoteSig: MessageFns<VoteSig> = {
  encode(message: VoteSig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.blockHeight !== 0) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.fpBtcPk.length !== 0) {
      writer.uint32(18).bytes(message.fpBtcPk);
    }
    if (message.finalitySig.length !== 0) {
      writer.uint32(26).bytes(message.finalitySig);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): VoteSig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.blockHeight = longToNumber(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fpBtcPk = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.finalitySig = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VoteSig {
    return {
      blockHeight: isSet(object.blockHeight) ? globalThis.Number(object.blockHeight) : 0,
      fpBtcPk: isSet(object.fpBtcPk) ? bytesFromBase64(object.fpBtcPk) : new Uint8Array(0),
      finalitySig: isSet(object.finalitySig) ? bytesFromBase64(object.finalitySig) : new Uint8Array(0),
    };
  },

  toJSON(message: VoteSig): unknown {
    const obj: any = {};
    if (message.blockHeight !== 0) {
      obj.blockHeight = Math.round(message.blockHeight);
    }
    if (message.fpBtcPk.length !== 0) {
      obj.fpBtcPk = base64FromBytes(message.fpBtcPk);
    }
    if (message.finalitySig.length !== 0) {
      obj.finalitySig = base64FromBytes(message.finalitySig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VoteSig>, I>>(base?: I): VoteSig {
    return VoteSig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VoteSig>, I>>(object: I): VoteSig {
    const message = createBaseVoteSig();
    message.blockHeight = object.blockHeight ?? 0;
    message.fpBtcPk = object.fpBtcPk ?? new Uint8Array(0);
    message.finalitySig = object.finalitySig ?? new Uint8Array(0);
    return message;
  },
};

function createBasePublicRandomness(): PublicRandomness {
  return { blockHeight: 0, fpBtcPk: new Uint8Array(0), pubRand: new Uint8Array(0) };
}

export const PublicRandomness: MessageFns<PublicRandomness> = {
  encode(message: PublicRandomness, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.blockHeight !== 0) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.fpBtcPk.length !== 0) {
      writer.uint32(18).bytes(message.fpBtcPk);
    }
    if (message.pubRand.length !== 0) {
      writer.uint32(26).bytes(message.pubRand);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PublicRandomness {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicRandomness();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.blockHeight = longToNumber(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fpBtcPk = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pubRand = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublicRandomness {
    return {
      blockHeight: isSet(object.blockHeight) ? globalThis.Number(object.blockHeight) : 0,
      fpBtcPk: isSet(object.fpBtcPk) ? bytesFromBase64(object.fpBtcPk) : new Uint8Array(0),
      pubRand: isSet(object.pubRand) ? bytesFromBase64(object.pubRand) : new Uint8Array(0),
    };
  },

  toJSON(message: PublicRandomness): unknown {
    const obj: any = {};
    if (message.blockHeight !== 0) {
      obj.blockHeight = Math.round(message.blockHeight);
    }
    if (message.fpBtcPk.length !== 0) {
      obj.fpBtcPk = base64FromBytes(message.fpBtcPk);
    }
    if (message.pubRand.length !== 0) {
      obj.pubRand = base64FromBytes(message.pubRand);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublicRandomness>, I>>(base?: I): PublicRandomness {
    return PublicRandomness.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublicRandomness>, I>>(object: I): PublicRandomness {
    const message = createBasePublicRandomness();
    message.blockHeight = object.blockHeight ?? 0;
    message.fpBtcPk = object.fpBtcPk ?? new Uint8Array(0);
    message.pubRand = object.pubRand ?? new Uint8Array(0);
    return message;
  },
};

function createBasePubRandCommitWithPK(): PubRandCommitWithPK {
  return { fpBtcPk: new Uint8Array(0), pubRandCommit: undefined };
}

export const PubRandCommitWithPK: MessageFns<PubRandCommitWithPK> = {
  encode(message: PubRandCommitWithPK, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fpBtcPk.length !== 0) {
      writer.uint32(10).bytes(message.fpBtcPk);
    }
    if (message.pubRandCommit !== undefined) {
      PubRandCommit.encode(message.pubRandCommit, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PubRandCommitWithPK {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubRandCommitWithPK();
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
          if (tag !== 18) {
            break;
          }

          message.pubRandCommit = PubRandCommit.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PubRandCommitWithPK {
    return {
      fpBtcPk: isSet(object.fpBtcPk) ? bytesFromBase64(object.fpBtcPk) : new Uint8Array(0),
      pubRandCommit: isSet(object.pubRandCommit) ? PubRandCommit.fromJSON(object.pubRandCommit) : undefined,
    };
  },

  toJSON(message: PubRandCommitWithPK): unknown {
    const obj: any = {};
    if (message.fpBtcPk.length !== 0) {
      obj.fpBtcPk = base64FromBytes(message.fpBtcPk);
    }
    if (message.pubRandCommit !== undefined) {
      obj.pubRandCommit = PubRandCommit.toJSON(message.pubRandCommit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PubRandCommitWithPK>, I>>(base?: I): PubRandCommitWithPK {
    return PubRandCommitWithPK.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PubRandCommitWithPK>, I>>(object: I): PubRandCommitWithPK {
    const message = createBasePubRandCommitWithPK();
    message.fpBtcPk = object.fpBtcPk ?? new Uint8Array(0);
    message.pubRandCommit = (object.pubRandCommit !== undefined && object.pubRandCommit !== null)
      ? PubRandCommit.fromPartial(object.pubRandCommit)
      : undefined;
    return message;
  },
};

function createBaseSigningInfo(): SigningInfo {
  return { fpBtcPk: new Uint8Array(0), fpSigningInfo: undefined };
}

export const SigningInfo: MessageFns<SigningInfo> = {
  encode(message: SigningInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fpBtcPk.length !== 0) {
      writer.uint32(10).bytes(message.fpBtcPk);
    }
    if (message.fpSigningInfo !== undefined) {
      FinalityProviderSigningInfo.encode(message.fpSigningInfo, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SigningInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningInfo();
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
          if (tag !== 18) {
            break;
          }

          message.fpSigningInfo = FinalityProviderSigningInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SigningInfo {
    return {
      fpBtcPk: isSet(object.fpBtcPk) ? bytesFromBase64(object.fpBtcPk) : new Uint8Array(0),
      fpSigningInfo: isSet(object.fpSigningInfo)
        ? FinalityProviderSigningInfo.fromJSON(object.fpSigningInfo)
        : undefined,
    };
  },

  toJSON(message: SigningInfo): unknown {
    const obj: any = {};
    if (message.fpBtcPk.length !== 0) {
      obj.fpBtcPk = base64FromBytes(message.fpBtcPk);
    }
    if (message.fpSigningInfo !== undefined) {
      obj.fpSigningInfo = FinalityProviderSigningInfo.toJSON(message.fpSigningInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SigningInfo>, I>>(base?: I): SigningInfo {
    return SigningInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SigningInfo>, I>>(object: I): SigningInfo {
    const message = createBaseSigningInfo();
    message.fpBtcPk = object.fpBtcPk ?? new Uint8Array(0);
    message.fpSigningInfo = (object.fpSigningInfo !== undefined && object.fpSigningInfo !== null)
      ? FinalityProviderSigningInfo.fromPartial(object.fpSigningInfo)
      : undefined;
    return message;
  },
};

function createBaseFinalityProviderMissedBlocks(): FinalityProviderMissedBlocks {
  return { fpBtcPk: new Uint8Array(0), missedBlocks: [] };
}

export const FinalityProviderMissedBlocks: MessageFns<FinalityProviderMissedBlocks> = {
  encode(message: FinalityProviderMissedBlocks, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fpBtcPk.length !== 0) {
      writer.uint32(10).bytes(message.fpBtcPk);
    }
    for (const v of message.missedBlocks) {
      MissedBlock.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FinalityProviderMissedBlocks {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalityProviderMissedBlocks();
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
          if (tag !== 18) {
            break;
          }

          message.missedBlocks.push(MissedBlock.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinalityProviderMissedBlocks {
    return {
      fpBtcPk: isSet(object.fpBtcPk) ? bytesFromBase64(object.fpBtcPk) : new Uint8Array(0),
      missedBlocks: globalThis.Array.isArray(object?.missedBlocks)
        ? object.missedBlocks.map((e: any) => MissedBlock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FinalityProviderMissedBlocks): unknown {
    const obj: any = {};
    if (message.fpBtcPk.length !== 0) {
      obj.fpBtcPk = base64FromBytes(message.fpBtcPk);
    }
    if (message.missedBlocks?.length) {
      obj.missedBlocks = message.missedBlocks.map((e) => MissedBlock.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinalityProviderMissedBlocks>, I>>(base?: I): FinalityProviderMissedBlocks {
    return FinalityProviderMissedBlocks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinalityProviderMissedBlocks>, I>>(object: I): FinalityProviderMissedBlocks {
    const message = createBaseFinalityProviderMissedBlocks();
    message.fpBtcPk = object.fpBtcPk ?? new Uint8Array(0);
    message.missedBlocks = object.missedBlocks?.map((e) => MissedBlock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMissedBlock(): MissedBlock {
  return { index: 0, missed: false };
}

export const MissedBlock: MessageFns<MissedBlock> = {
  encode(message: MissedBlock, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.index !== 0) {
      writer.uint32(8).int64(message.index);
    }
    if (message.missed !== false) {
      writer.uint32(16).bool(message.missed);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MissedBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissedBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = longToNumber(reader.int64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.missed = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MissedBlock {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      missed: isSet(object.missed) ? globalThis.Boolean(object.missed) : false,
    };
  },

  toJSON(message: MissedBlock): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.missed !== false) {
      obj.missed = message.missed;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MissedBlock>, I>>(base?: I): MissedBlock {
    return MissedBlock.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MissedBlock>, I>>(object: I): MissedBlock {
    const message = createBaseMissedBlock();
    message.index = object.index ?? 0;
    message.missed = object.missed ?? false;
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
