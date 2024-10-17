// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: babylon/btcstaking/v1/events.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  BTCDelegationStatus,
  bTCDelegationStatusFromJSON,
  bTCDelegationStatusToJSON,
  FinalityProvider,
  SelectiveSlashingEvidence,
} from "./btcstaking";

export const protobufPackage = "babylon.btcstaking.v1";

/** EventNewFinalityProvider is the event emitted when a finality provider is created */
export interface EventNewFinalityProvider {
  fp: FinalityProvider | undefined;
}

/**
 * EventBTCDelegationStateUpdate is the event emitted when a BTC delegation's state is
 * updated. There are the following possible state transitions:
 * - non-existing -> pending, which happens upon `MsgCreateBTCDelegation`
 * - pending -> active, which happens upon `MsgAddCovenantSigs`
 * - active -> unbonded, which happens upon `MsgBTCUndelegate` or upon staking tx timelock expires
 */
export interface EventBTCDelegationStateUpdate {
  /**
   * staking_tx_hash is the hash of the staking tx.
   * It uniquely identifies a BTC delegation
   */
  stakingTxHash: string;
  /** new_state is the new state of this BTC delegation */
  newState: BTCDelegationStatus;
}

/**
 * EventSelectiveSlashing is the event emitted when an adversarial
 * finality provider selectively slashes a BTC delegation. This will
 * result in slashing of all BTC delegations under this finality provider.
 */
export interface EventSelectiveSlashing {
  /** evidence is the evidence of selective slashing */
  evidence: SelectiveSlashingEvidence | undefined;
}

/**
 * EventPowerDistUpdate is an event that affects voting power distirbution
 * of BTC staking protocol
 */
export interface EventPowerDistUpdate {
  /** slashed_fp means a finality provider is slashed */
  slashedFp?:
    | EventPowerDistUpdate_EventSlashedFinalityProvider
    | undefined;
  /** btc_del_state_update means a BTC delegation's state is updated */
  btcDelStateUpdate?: EventBTCDelegationStateUpdate | undefined;
}

/**
 * EventSlashedFinalityProvider defines an event that a finality provider
 * is slashed
 * TODO: unify with existing slashing events
 */
export interface EventPowerDistUpdate_EventSlashedFinalityProvider {
  pk: Uint8Array;
}

function createBaseEventNewFinalityProvider(): EventNewFinalityProvider {
  return { fp: undefined };
}

export const EventNewFinalityProvider: MessageFns<EventNewFinalityProvider> = {
  encode(message: EventNewFinalityProvider, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fp !== undefined) {
      FinalityProvider.encode(message.fp, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventNewFinalityProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewFinalityProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fp = FinalityProvider.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventNewFinalityProvider {
    return { fp: isSet(object.fp) ? FinalityProvider.fromJSON(object.fp) : undefined };
  },

  toJSON(message: EventNewFinalityProvider): unknown {
    const obj: any = {};
    if (message.fp !== undefined) {
      obj.fp = FinalityProvider.toJSON(message.fp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventNewFinalityProvider>, I>>(base?: I): EventNewFinalityProvider {
    return EventNewFinalityProvider.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventNewFinalityProvider>, I>>(object: I): EventNewFinalityProvider {
    const message = createBaseEventNewFinalityProvider();
    message.fp = (object.fp !== undefined && object.fp !== null) ? FinalityProvider.fromPartial(object.fp) : undefined;
    return message;
  },
};

function createBaseEventBTCDelegationStateUpdate(): EventBTCDelegationStateUpdate {
  return { stakingTxHash: "", newState: 0 };
}

export const EventBTCDelegationStateUpdate: MessageFns<EventBTCDelegationStateUpdate> = {
  encode(message: EventBTCDelegationStateUpdate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.stakingTxHash !== "") {
      writer.uint32(10).string(message.stakingTxHash);
    }
    if (message.newState !== 0) {
      writer.uint32(16).int32(message.newState);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventBTCDelegationStateUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCDelegationStateUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stakingTxHash = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.newState = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventBTCDelegationStateUpdate {
    return {
      stakingTxHash: isSet(object.stakingTxHash) ? globalThis.String(object.stakingTxHash) : "",
      newState: isSet(object.newState) ? bTCDelegationStatusFromJSON(object.newState) : 0,
    };
  },

  toJSON(message: EventBTCDelegationStateUpdate): unknown {
    const obj: any = {};
    if (message.stakingTxHash !== "") {
      obj.stakingTxHash = message.stakingTxHash;
    }
    if (message.newState !== 0) {
      obj.newState = bTCDelegationStatusToJSON(message.newState);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBTCDelegationStateUpdate>, I>>(base?: I): EventBTCDelegationStateUpdate {
    return EventBTCDelegationStateUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventBTCDelegationStateUpdate>, I>>(
    object: I,
  ): EventBTCDelegationStateUpdate {
    const message = createBaseEventBTCDelegationStateUpdate();
    message.stakingTxHash = object.stakingTxHash ?? "";
    message.newState = object.newState ?? 0;
    return message;
  },
};

function createBaseEventSelectiveSlashing(): EventSelectiveSlashing {
  return { evidence: undefined };
}

export const EventSelectiveSlashing: MessageFns<EventSelectiveSlashing> = {
  encode(message: EventSelectiveSlashing, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.evidence !== undefined) {
      SelectiveSlashingEvidence.encode(message.evidence, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventSelectiveSlashing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSelectiveSlashing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.evidence = SelectiveSlashingEvidence.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventSelectiveSlashing {
    return { evidence: isSet(object.evidence) ? SelectiveSlashingEvidence.fromJSON(object.evidence) : undefined };
  },

  toJSON(message: EventSelectiveSlashing): unknown {
    const obj: any = {};
    if (message.evidence !== undefined) {
      obj.evidence = SelectiveSlashingEvidence.toJSON(message.evidence);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventSelectiveSlashing>, I>>(base?: I): EventSelectiveSlashing {
    return EventSelectiveSlashing.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventSelectiveSlashing>, I>>(object: I): EventSelectiveSlashing {
    const message = createBaseEventSelectiveSlashing();
    message.evidence = (object.evidence !== undefined && object.evidence !== null)
      ? SelectiveSlashingEvidence.fromPartial(object.evidence)
      : undefined;
    return message;
  },
};

function createBaseEventPowerDistUpdate(): EventPowerDistUpdate {
  return { slashedFp: undefined, btcDelStateUpdate: undefined };
}

export const EventPowerDistUpdate: MessageFns<EventPowerDistUpdate> = {
  encode(message: EventPowerDistUpdate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.slashedFp !== undefined) {
      EventPowerDistUpdate_EventSlashedFinalityProvider.encode(message.slashedFp, writer.uint32(10).fork()).join();
    }
    if (message.btcDelStateUpdate !== undefined) {
      EventBTCDelegationStateUpdate.encode(message.btcDelStateUpdate, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventPowerDistUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPowerDistUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.slashedFp = EventPowerDistUpdate_EventSlashedFinalityProvider.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.btcDelStateUpdate = EventBTCDelegationStateUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPowerDistUpdate {
    return {
      slashedFp: isSet(object.slashedFp)
        ? EventPowerDistUpdate_EventSlashedFinalityProvider.fromJSON(object.slashedFp)
        : undefined,
      btcDelStateUpdate: isSet(object.btcDelStateUpdate)
        ? EventBTCDelegationStateUpdate.fromJSON(object.btcDelStateUpdate)
        : undefined,
    };
  },

  toJSON(message: EventPowerDistUpdate): unknown {
    const obj: any = {};
    if (message.slashedFp !== undefined) {
      obj.slashedFp = EventPowerDistUpdate_EventSlashedFinalityProvider.toJSON(message.slashedFp);
    }
    if (message.btcDelStateUpdate !== undefined) {
      obj.btcDelStateUpdate = EventBTCDelegationStateUpdate.toJSON(message.btcDelStateUpdate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPowerDistUpdate>, I>>(base?: I): EventPowerDistUpdate {
    return EventPowerDistUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventPowerDistUpdate>, I>>(object: I): EventPowerDistUpdate {
    const message = createBaseEventPowerDistUpdate();
    message.slashedFp = (object.slashedFp !== undefined && object.slashedFp !== null)
      ? EventPowerDistUpdate_EventSlashedFinalityProvider.fromPartial(object.slashedFp)
      : undefined;
    message.btcDelStateUpdate = (object.btcDelStateUpdate !== undefined && object.btcDelStateUpdate !== null)
      ? EventBTCDelegationStateUpdate.fromPartial(object.btcDelStateUpdate)
      : undefined;
    return message;
  },
};

function createBaseEventPowerDistUpdate_EventSlashedFinalityProvider(): EventPowerDistUpdate_EventSlashedFinalityProvider {
  return { pk: new Uint8Array(0) };
}

export const EventPowerDistUpdate_EventSlashedFinalityProvider: MessageFns<
  EventPowerDistUpdate_EventSlashedFinalityProvider
> = {
  encode(
    message: EventPowerDistUpdate_EventSlashedFinalityProvider,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.pk.length !== 0) {
      writer.uint32(10).bytes(message.pk);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventPowerDistUpdate_EventSlashedFinalityProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPowerDistUpdate_EventSlashedFinalityProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pk = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPowerDistUpdate_EventSlashedFinalityProvider {
    return { pk: isSet(object.pk) ? bytesFromBase64(object.pk) : new Uint8Array(0) };
  },

  toJSON(message: EventPowerDistUpdate_EventSlashedFinalityProvider): unknown {
    const obj: any = {};
    if (message.pk.length !== 0) {
      obj.pk = base64FromBytes(message.pk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPowerDistUpdate_EventSlashedFinalityProvider>, I>>(
    base?: I,
  ): EventPowerDistUpdate_EventSlashedFinalityProvider {
    return EventPowerDistUpdate_EventSlashedFinalityProvider.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventPowerDistUpdate_EventSlashedFinalityProvider>, I>>(
    object: I,
  ): EventPowerDistUpdate_EventSlashedFinalityProvider {
    const message = createBaseEventPowerDistUpdate_EventSlashedFinalityProvider();
    message.pk = object.pk ?? new Uint8Array(0);
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
