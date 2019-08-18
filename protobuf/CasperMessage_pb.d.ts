// package: coop.rchain.casper.protocol
// file: CasperMessage.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as scalapb_scalapb_pb from "./scalapb/scalapb_pb";
import * as RhoTypes_pb from "./RhoTypes_pb";
import * as Either_pb from "./Either_pb";

export class HasBlockRequest extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HasBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HasBlockRequest): HasBlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HasBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HasBlockRequest;
  static deserializeBinaryFromReader(message: HasBlockRequest, reader: jspb.BinaryReader): HasBlockRequest;
}

export namespace HasBlockRequest {
  export type AsObject = {
    hash: Uint8Array | string,
  }
}

export class HasBlock extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HasBlock.AsObject;
  static toObject(includeInstance: boolean, msg: HasBlock): HasBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HasBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HasBlock;
  static deserializeBinaryFromReader(message: HasBlock, reader: jspb.BinaryReader): HasBlock;
}

export namespace HasBlock {
  export type AsObject = {
    hash: Uint8Array | string,
  }
}

export class BlockRequest extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockRequest): BlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockRequest;
  static deserializeBinaryFromReader(message: BlockRequest, reader: jspb.BinaryReader): BlockRequest;
}

export namespace BlockRequest {
  export type AsObject = {
    hash: Uint8Array | string,
  }
}

export class ForkChoiceTipRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForkChoiceTipRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForkChoiceTipRequest): ForkChoiceTipRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForkChoiceTipRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForkChoiceTipRequest;
  static deserializeBinaryFromReader(message: ForkChoiceTipRequest, reader: jspb.BinaryReader): ForkChoiceTipRequest;
}

export namespace ForkChoiceTipRequest {
  export type AsObject = {
  }
}

export class ApprovedBlockCandidate extends jspb.Message {
  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): BlockMessage | undefined;
  setBlock(value?: BlockMessage): void;

  getRequiredsigs(): number;
  setRequiredsigs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovedBlockCandidate.AsObject;
  static toObject(includeInstance: boolean, msg: ApprovedBlockCandidate): ApprovedBlockCandidate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApprovedBlockCandidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApprovedBlockCandidate;
  static deserializeBinaryFromReader(message: ApprovedBlockCandidate, reader: jspb.BinaryReader): ApprovedBlockCandidate;
}

export namespace ApprovedBlockCandidate {
  export type AsObject = {
    block?: BlockMessage.AsObject,
    requiredsigs: number,
  }
}

export class UnapprovedBlock extends jspb.Message {
  hasCandidate(): boolean;
  clearCandidate(): void;
  getCandidate(): ApprovedBlockCandidate | undefined;
  setCandidate(value?: ApprovedBlockCandidate): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnapprovedBlock.AsObject;
  static toObject(includeInstance: boolean, msg: UnapprovedBlock): UnapprovedBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnapprovedBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnapprovedBlock;
  static deserializeBinaryFromReader(message: UnapprovedBlock, reader: jspb.BinaryReader): UnapprovedBlock;
}

export namespace UnapprovedBlock {
  export type AsObject = {
    candidate?: ApprovedBlockCandidate.AsObject,
    timestamp: number,
    duration: number,
  }
}

export class Signature extends jspb.Message {
  getPublickey(): Uint8Array | string;
  getPublickey_asU8(): Uint8Array;
  getPublickey_asB64(): string;
  setPublickey(value: Uint8Array | string): void;

  getAlgorithm(): string;
  setAlgorithm(value: string): void;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    publickey: Uint8Array | string,
    algorithm: string,
    sig: Uint8Array | string,
  }
}

export class BlockApproval extends jspb.Message {
  hasCandidate(): boolean;
  clearCandidate(): void;
  getCandidate(): ApprovedBlockCandidate | undefined;
  setCandidate(value?: ApprovedBlockCandidate): void;

  hasSig(): boolean;
  clearSig(): void;
  getSig(): Signature | undefined;
  setSig(value?: Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockApproval.AsObject;
  static toObject(includeInstance: boolean, msg: BlockApproval): BlockApproval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockApproval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockApproval;
  static deserializeBinaryFromReader(message: BlockApproval, reader: jspb.BinaryReader): BlockApproval;
}

export namespace BlockApproval {
  export type AsObject = {
    candidate?: ApprovedBlockCandidate.AsObject,
    sig?: Signature.AsObject,
  }
}

export class ApprovedBlock extends jspb.Message {
  hasCandidate(): boolean;
  clearCandidate(): void;
  getCandidate(): ApprovedBlockCandidate | undefined;
  setCandidate(value?: ApprovedBlockCandidate): void;

  clearSigsList(): void;
  getSigsList(): Array<Signature>;
  setSigsList(value: Array<Signature>): void;
  addSigs(value?: Signature, index?: number): Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovedBlock.AsObject;
  static toObject(includeInstance: boolean, msg: ApprovedBlock): ApprovedBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApprovedBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApprovedBlock;
  static deserializeBinaryFromReader(message: ApprovedBlock, reader: jspb.BinaryReader): ApprovedBlock;
}

export namespace ApprovedBlock {
  export type AsObject = {
    candidate?: ApprovedBlockCandidate.AsObject,
    sigsList: Array<Signature.AsObject>,
  }
}

export class ApprovedBlockRequest extends jspb.Message {
  getIdentifier(): string;
  setIdentifier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovedBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApprovedBlockRequest): ApprovedBlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApprovedBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApprovedBlockRequest;
  static deserializeBinaryFromReader(message: ApprovedBlockRequest, reader: jspb.BinaryReader): ApprovedBlockRequest;
}

export namespace ApprovedBlockRequest {
  export type AsObject = {
    identifier: string,
  }
}

export class NoApprovedBlockAvailable extends jspb.Message {
  getIdentifier(): string;
  setIdentifier(value: string): void;

  getNodeidentifer(): string;
  setNodeidentifer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoApprovedBlockAvailable.AsObject;
  static toObject(includeInstance: boolean, msg: NoApprovedBlockAvailable): NoApprovedBlockAvailable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NoApprovedBlockAvailable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoApprovedBlockAvailable;
  static deserializeBinaryFromReader(message: NoApprovedBlockAvailable, reader: jspb.BinaryReader): NoApprovedBlockAvailable;
}

export namespace NoApprovedBlockAvailable {
  export type AsObject = {
    identifier: string,
    nodeidentifer: string,
  }
}

export class BlockMessage extends jspb.Message {
  getBlockhash(): Uint8Array | string;
  getBlockhash_asU8(): Uint8Array;
  getBlockhash_asB64(): string;
  setBlockhash(value: Uint8Array | string): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasBody(): boolean;
  clearBody(): void;
  getBody(): Body | undefined;
  setBody(value?: Body): void;

  clearJustificationsList(): void;
  getJustificationsList(): Array<Justification>;
  setJustificationsList(value: Array<Justification>): void;
  addJustifications(value?: Justification, index?: number): Justification;

  getSender(): Uint8Array | string;
  getSender_asU8(): Uint8Array;
  getSender_asB64(): string;
  setSender(value: Uint8Array | string): void;

  getSeqnum(): number;
  setSeqnum(value: number): void;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  getSigalgorithm(): string;
  setSigalgorithm(value: string): void;

  getShardid(): string;
  setShardid(value: string): void;

  getExtrabytes(): Uint8Array | string;
  getExtrabytes_asU8(): Uint8Array;
  getExtrabytes_asB64(): string;
  setExtrabytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BlockMessage): BlockMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockMessage;
  static deserializeBinaryFromReader(message: BlockMessage, reader: jspb.BinaryReader): BlockMessage;
}

export namespace BlockMessage {
  export type AsObject = {
    blockhash: Uint8Array | string,
    header?: Header.AsObject,
    body?: Body.AsObject,
    justificationsList: Array<Justification.AsObject>,
    sender: Uint8Array | string,
    seqnum: number,
    sig: Uint8Array | string,
    sigalgorithm: string,
    shardid: string,
    extrabytes: Uint8Array | string,
  }
}

export class BlockMetadataInternal extends jspb.Message {
  getBlockhash(): Uint8Array | string;
  getBlockhash_asU8(): Uint8Array;
  getBlockhash_asB64(): string;
  setBlockhash(value: Uint8Array | string): void;

  clearParentsList(): void;
  getParentsList(): Array<Uint8Array | string>;
  getParentsList_asU8(): Array<Uint8Array>;
  getParentsList_asB64(): Array<string>;
  setParentsList(value: Array<Uint8Array | string>): void;
  addParents(value: Uint8Array | string, index?: number): Uint8Array | string;

  getSender(): Uint8Array | string;
  getSender_asU8(): Uint8Array;
  getSender_asB64(): string;
  setSender(value: Uint8Array | string): void;

  clearJustificationsList(): void;
  getJustificationsList(): Array<Justification>;
  setJustificationsList(value: Array<Justification>): void;
  addJustifications(value?: Justification, index?: number): Justification;

  clearBondsList(): void;
  getBondsList(): Array<Bond>;
  setBondsList(value: Array<Bond>): void;
  addBonds(value?: Bond, index?: number): Bond;

  getBlocknum(): number;
  setBlocknum(value: number): void;

  getSeqnum(): number;
  setSeqnum(value: number): void;

  getInvalid(): boolean;
  setInvalid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockMetadataInternal.AsObject;
  static toObject(includeInstance: boolean, msg: BlockMetadataInternal): BlockMetadataInternal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockMetadataInternal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockMetadataInternal;
  static deserializeBinaryFromReader(message: BlockMetadataInternal, reader: jspb.BinaryReader): BlockMetadataInternal;
}

export namespace BlockMetadataInternal {
  export type AsObject = {
    blockhash: Uint8Array | string,
    parentsList: Array<Uint8Array | string>,
    sender: Uint8Array | string,
    justificationsList: Array<Justification.AsObject>,
    bondsList: Array<Bond.AsObject>,
    blocknum: number,
    seqnum: number,
    invalid: boolean,
  }
}

export class Header extends jspb.Message {
  clearParentshashlistList(): void;
  getParentshashlistList(): Array<Uint8Array | string>;
  getParentshashlistList_asU8(): Array<Uint8Array>;
  getParentshashlistList_asB64(): Array<string>;
  setParentshashlistList(value: Array<Uint8Array | string>): void;
  addParentshashlist(value: Uint8Array | string, index?: number): Uint8Array | string;

  getPoststatehash(): Uint8Array | string;
  getPoststatehash_asU8(): Uint8Array;
  getPoststatehash_asB64(): string;
  setPoststatehash(value: Uint8Array | string): void;

  getDeployshash(): Uint8Array | string;
  getDeployshash_asU8(): Uint8Array;
  getDeployshash_asB64(): string;
  setDeployshash(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getDeploycount(): number;
  setDeploycount(value: number): void;

  getExtrabytes(): Uint8Array | string;
  getExtrabytes_asU8(): Uint8Array;
  getExtrabytes_asB64(): string;
  setExtrabytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    parentshashlistList: Array<Uint8Array | string>,
    poststatehash: Uint8Array | string,
    deployshash: Uint8Array | string,
    timestamp: number,
    version: number,
    deploycount: number,
    extrabytes: Uint8Array | string,
  }
}

export class DeployData extends jspb.Message {
  getDeployer(): Uint8Array | string;
  getDeployer_asU8(): Uint8Array;
  getDeployer_asB64(): string;
  setDeployer(value: Uint8Array | string): void;

  getTerm(): string;
  setTerm(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  getSigalgorithm(): string;
  setSigalgorithm(value: string): void;

  getPhloprice(): number;
  setPhloprice(value: number): void;

  getPhlolimit(): number;
  setPhlolimit(value: number): void;

  getValidafterblocknumber(): number;
  setValidafterblocknumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployData.AsObject;
  static toObject(includeInstance: boolean, msg: DeployData): DeployData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployData;
  static deserializeBinaryFromReader(message: DeployData, reader: jspb.BinaryReader): DeployData;
}

export namespace DeployData {
  export type AsObject = {
    deployer: Uint8Array | string,
    term: string,
    timestamp: number,
    sig: Uint8Array | string,
    sigalgorithm: string,
    phloprice: number,
    phlolimit: number,
    validafterblocknumber: number,
  }
}

export class ProcessedDeploy extends jspb.Message {
  hasDeploy(): boolean;
  clearDeploy(): void;
  getDeploy(): DeployData | undefined;
  setDeploy(value?: DeployData): void;

  hasCost(): boolean;
  clearCost(): void;
  getCost(): RhoTypes_pb.PCost | undefined;
  setCost(value?: RhoTypes_pb.PCost): void;

  clearDeploylogList(): void;
  getDeploylogList(): Array<Event>;
  setDeploylogList(value: Array<Event>): void;
  addDeploylog(value?: Event, index?: number): Event;

  clearPaymentlogList(): void;
  getPaymentlogList(): Array<Event>;
  setPaymentlogList(value: Array<Event>): void;
  addPaymentlog(value?: Event, index?: number): Event;

  getErrored(): boolean;
  setErrored(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessedDeploy.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessedDeploy): ProcessedDeploy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessedDeploy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessedDeploy;
  static deserializeBinaryFromReader(message: ProcessedDeploy, reader: jspb.BinaryReader): ProcessedDeploy;
}

export namespace ProcessedDeploy {
  export type AsObject = {
    deploy?: DeployData.AsObject,
    cost?: RhoTypes_pb.PCost.AsObject,
    deploylogList: Array<Event.AsObject>,
    paymentlogList: Array<Event.AsObject>,
    errored: boolean,
  }
}

export class Body extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): RChainState | undefined;
  setState(value?: RChainState): void;

  clearDeploysList(): void;
  getDeploysList(): Array<ProcessedDeploy>;
  setDeploysList(value: Array<ProcessedDeploy>): void;
  addDeploys(value?: ProcessedDeploy, index?: number): ProcessedDeploy;

  getExtrabytes(): Uint8Array | string;
  getExtrabytes_asU8(): Uint8Array;
  getExtrabytes_asB64(): string;
  setExtrabytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Body.AsObject;
  static toObject(includeInstance: boolean, msg: Body): Body.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Body, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Body;
  static deserializeBinaryFromReader(message: Body, reader: jspb.BinaryReader): Body;
}

export namespace Body {
  export type AsObject = {
    state?: RChainState.AsObject,
    deploysList: Array<ProcessedDeploy.AsObject>,
    extrabytes: Uint8Array | string,
  }
}

export class Justification extends jspb.Message {
  getValidator(): Uint8Array | string;
  getValidator_asU8(): Uint8Array;
  getValidator_asB64(): string;
  setValidator(value: Uint8Array | string): void;

  getLatestblockhash(): Uint8Array | string;
  getLatestblockhash_asU8(): Uint8Array;
  getLatestblockhash_asB64(): string;
  setLatestblockhash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Justification.AsObject;
  static toObject(includeInstance: boolean, msg: Justification): Justification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Justification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Justification;
  static deserializeBinaryFromReader(message: Justification, reader: jspb.BinaryReader): Justification;
}

export namespace Justification {
  export type AsObject = {
    validator: Uint8Array | string,
    latestblockhash: Uint8Array | string,
  }
}

export class RChainState extends jspb.Message {
  getPrestatehash(): Uint8Array | string;
  getPrestatehash_asU8(): Uint8Array;
  getPrestatehash_asB64(): string;
  setPrestatehash(value: Uint8Array | string): void;

  getPoststatehash(): Uint8Array | string;
  getPoststatehash_asU8(): Uint8Array;
  getPoststatehash_asB64(): string;
  setPoststatehash(value: Uint8Array | string): void;

  clearBondsList(): void;
  getBondsList(): Array<Bond>;
  setBondsList(value: Array<Bond>): void;
  addBonds(value?: Bond, index?: number): Bond;

  getBlocknumber(): number;
  setBlocknumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RChainState.AsObject;
  static toObject(includeInstance: boolean, msg: RChainState): RChainState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RChainState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RChainState;
  static deserializeBinaryFromReader(message: RChainState, reader: jspb.BinaryReader): RChainState;
}

export namespace RChainState {
  export type AsObject = {
    prestatehash: Uint8Array | string,
    poststatehash: Uint8Array | string,
    bondsList: Array<Bond.AsObject>,
    blocknumber: number,
  }
}

export class Event extends jspb.Message {
  hasProduce(): boolean;
  clearProduce(): void;
  getProduce(): ProduceEvent | undefined;
  setProduce(value?: ProduceEvent): void;

  hasConsume(): boolean;
  clearConsume(): void;
  getConsume(): ConsumeEvent | undefined;
  setConsume(value?: ConsumeEvent): void;

  hasComm(): boolean;
  clearComm(): void;
  getComm(): CommEvent | undefined;
  setComm(value?: CommEvent): void;

  getEventInstanceCase(): Event.EventInstanceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    produce?: ProduceEvent.AsObject,
    consume?: ConsumeEvent.AsObject,
    comm?: CommEvent.AsObject,
  }

  export enum EventInstanceCase {
    EVENT_INSTANCE_NOT_SET = 0,
    PRODUCE = 1,
    CONSUME = 2,
    COMM = 3,
  }
}

export class ProduceEvent extends jspb.Message {
  getChannelshash(): Uint8Array | string;
  getChannelshash_asU8(): Uint8Array;
  getChannelshash_asB64(): string;
  setChannelshash(value: Uint8Array | string): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getPersistent(): boolean;
  setPersistent(value: boolean): void;

  getSequencenumber(): number;
  setSequencenumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProduceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ProduceEvent): ProduceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProduceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProduceEvent;
  static deserializeBinaryFromReader(message: ProduceEvent, reader: jspb.BinaryReader): ProduceEvent;
}

export namespace ProduceEvent {
  export type AsObject = {
    channelshash: Uint8Array | string,
    hash: Uint8Array | string,
    persistent: boolean,
    sequencenumber: number,
  }
}

export class ConsumeEvent extends jspb.Message {
  clearChannelshashesList(): void;
  getChannelshashesList(): Array<Uint8Array | string>;
  getChannelshashesList_asU8(): Array<Uint8Array>;
  getChannelshashesList_asB64(): Array<string>;
  setChannelshashesList(value: Array<Uint8Array | string>): void;
  addChannelshashes(value: Uint8Array | string, index?: number): Uint8Array | string;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getPersistent(): boolean;
  setPersistent(value: boolean): void;

  getSequencenumber(): number;
  setSequencenumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumeEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumeEvent): ConsumeEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsumeEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumeEvent;
  static deserializeBinaryFromReader(message: ConsumeEvent, reader: jspb.BinaryReader): ConsumeEvent;
}

export namespace ConsumeEvent {
  export type AsObject = {
    channelshashesList: Array<Uint8Array | string>,
    hash: Uint8Array | string,
    persistent: boolean,
    sequencenumber: number,
  }
}

export class CommEvent extends jspb.Message {
  hasConsume(): boolean;
  clearConsume(): void;
  getConsume(): ConsumeEvent | undefined;
  setConsume(value?: ConsumeEvent): void;

  clearProducesList(): void;
  getProducesList(): Array<ProduceEvent>;
  setProducesList(value: Array<ProduceEvent>): void;
  addProduces(value?: ProduceEvent, index?: number): ProduceEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommEvent.AsObject;
  static toObject(includeInstance: boolean, msg: CommEvent): CommEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommEvent;
  static deserializeBinaryFromReader(message: CommEvent, reader: jspb.BinaryReader): CommEvent;
}

export namespace CommEvent {
  export type AsObject = {
    consume?: ConsumeEvent.AsObject,
    producesList: Array<ProduceEvent.AsObject>,
  }
}

export class Bond extends jspb.Message {
  getValidator(): Uint8Array | string;
  getValidator_asU8(): Uint8Array;
  getValidator_asB64(): string;
  setValidator(value: Uint8Array | string): void;

  getStake(): number;
  setStake(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bond.AsObject;
  static toObject(includeInstance: boolean, msg: Bond): Bond.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bond, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bond;
  static deserializeBinaryFromReader(message: Bond, reader: jspb.BinaryReader): Bond;
}

export namespace Bond {
  export type AsObject = {
    validator: Uint8Array | string,
    stake: number,
  }
}

