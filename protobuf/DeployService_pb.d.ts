// package: coop.rchain.casper.protocol
// file: DeployService.proto

import * as jspb from "google-protobuf";
import * as CasperMessage_pb from "./CasperMessage_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as scalapb_scalapb_pb from "./scalapb/scalapb_pb";
import * as RhoTypes_pb from "./RhoTypes_pb";
import * as Either_pb from "./Either_pb";

export class FindDeployQuery extends jspb.Message {
  getDeployid(): Uint8Array | string;
  getDeployid_asU8(): Uint8Array;
  getDeployid_asB64(): string;
  setDeployid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindDeployQuery.AsObject;
  static toObject(includeInstance: boolean, msg: FindDeployQuery): FindDeployQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindDeployQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindDeployQuery;
  static deserializeBinaryFromReader(message: FindDeployQuery, reader: jspb.BinaryReader): FindDeployQuery;
}

export namespace FindDeployQuery {
  export type AsObject = {
    deployid: Uint8Array | string,
  }
}

export class FindDeployInBlockQuery extends jspb.Message {
  getUser(): Uint8Array | string;
  getUser_asU8(): Uint8Array;
  getUser_asB64(): string;
  setUser(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindDeployInBlockQuery.AsObject;
  static toObject(includeInstance: boolean, msg: FindDeployInBlockQuery): FindDeployInBlockQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindDeployInBlockQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindDeployInBlockQuery;
  static deserializeBinaryFromReader(message: FindDeployInBlockQuery, reader: jspb.BinaryReader): FindDeployInBlockQuery;
}

export namespace FindDeployInBlockQuery {
  export type AsObject = {
    user: Uint8Array | string,
    timestamp: number,
  }
}

export class BlockQuery extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockQuery.AsObject;
  static toObject(includeInstance: boolean, msg: BlockQuery): BlockQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockQuery;
  static deserializeBinaryFromReader(message: BlockQuery, reader: jspb.BinaryReader): BlockQuery;
}

export namespace BlockQuery {
  export type AsObject = {
    hash: string,
  }
}

export class BlocksQuery extends jspb.Message {
  getDepth(): number;
  setDepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlocksQuery.AsObject;
  static toObject(includeInstance: boolean, msg: BlocksQuery): BlocksQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlocksQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlocksQuery;
  static deserializeBinaryFromReader(message: BlocksQuery, reader: jspb.BinaryReader): BlocksQuery;
}

export namespace BlocksQuery {
  export type AsObject = {
    depth: number,
  }
}

export class DataAtNameQuery extends jspb.Message {
  getDepth(): number;
  setDepth(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): RhoTypes_pb.Par | undefined;
  setName(value?: RhoTypes_pb.Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAtNameQuery.AsObject;
  static toObject(includeInstance: boolean, msg: DataAtNameQuery): DataAtNameQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataAtNameQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAtNameQuery;
  static deserializeBinaryFromReader(message: DataAtNameQuery, reader: jspb.BinaryReader): DataAtNameQuery;
}

export namespace DataAtNameQuery {
  export type AsObject = {
    depth: number,
    name?: RhoTypes_pb.Par.AsObject,
  }
}

export class ContinuationAtNameQuery extends jspb.Message {
  getDepth(): number;
  setDepth(value: number): void;

  clearNamesList(): void;
  getNamesList(): Array<RhoTypes_pb.Par>;
  setNamesList(value: Array<RhoTypes_pb.Par>): void;
  addNames(value?: RhoTypes_pb.Par, index?: number): RhoTypes_pb.Par;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContinuationAtNameQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ContinuationAtNameQuery): ContinuationAtNameQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContinuationAtNameQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContinuationAtNameQuery;
  static deserializeBinaryFromReader(message: ContinuationAtNameQuery, reader: jspb.BinaryReader): ContinuationAtNameQuery;
}

export namespace ContinuationAtNameQuery {
  export type AsObject = {
    depth: number,
    namesList: Array<RhoTypes_pb.Par.AsObject>,
  }
}

export class DeployServiceResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeployServiceResponse): DeployServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployServiceResponse;
  static deserializeBinaryFromReader(message: DeployServiceResponse, reader: jspb.BinaryReader): DeployServiceResponse;
}

export namespace DeployServiceResponse {
  export type AsObject = {
    message: string,
  }
}

export class BlockQueryResponse extends jspb.Message {
  hasBlockinfo(): boolean;
  clearBlockinfo(): void;
  getBlockinfo(): BlockInfo | undefined;
  setBlockinfo(value?: BlockInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockQueryResponse): BlockQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockQueryResponse;
  static deserializeBinaryFromReader(message: BlockQueryResponse, reader: jspb.BinaryReader): BlockQueryResponse;
}

export namespace BlockQueryResponse {
  export type AsObject = {
    blockinfo?: BlockInfo.AsObject,
  }
}

export class LightBlockQueryResponse extends jspb.Message {
  hasBlockinfo(): boolean;
  clearBlockinfo(): void;
  getBlockinfo(): LightBlockInfo | undefined;
  setBlockinfo(value?: LightBlockInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LightBlockQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LightBlockQueryResponse): LightBlockQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LightBlockQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LightBlockQueryResponse;
  static deserializeBinaryFromReader(message: LightBlockQueryResponse, reader: jspb.BinaryReader): LightBlockQueryResponse;
}

export namespace LightBlockQueryResponse {
  export type AsObject = {
    blockinfo?: LightBlockInfo.AsObject,
  }
}

export class VisualizeDagQuery extends jspb.Message {
  getDepth(): number;
  setDepth(value: number): void;

  getShowjustificationlines(): boolean;
  setShowjustificationlines(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisualizeDagQuery.AsObject;
  static toObject(includeInstance: boolean, msg: VisualizeDagQuery): VisualizeDagQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisualizeDagQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisualizeDagQuery;
  static deserializeBinaryFromReader(message: VisualizeDagQuery, reader: jspb.BinaryReader): VisualizeDagQuery;
}

export namespace VisualizeDagQuery {
  export type AsObject = {
    depth: number,
    showjustificationlines: boolean,
  }
}

export class VisualizeBlocksResponse extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisualizeBlocksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VisualizeBlocksResponse): VisualizeBlocksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisualizeBlocksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisualizeBlocksResponse;
  static deserializeBinaryFromReader(message: VisualizeBlocksResponse, reader: jspb.BinaryReader): VisualizeBlocksResponse;
}

export namespace VisualizeBlocksResponse {
  export type AsObject = {
    content: string,
  }
}

export class MachineVerifyQuery extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineVerifyQuery.AsObject;
  static toObject(includeInstance: boolean, msg: MachineVerifyQuery): MachineVerifyQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MachineVerifyQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MachineVerifyQuery;
  static deserializeBinaryFromReader(message: MachineVerifyQuery, reader: jspb.BinaryReader): MachineVerifyQuery;
}

export namespace MachineVerifyQuery {
  export type AsObject = {
  }
}

export class MachineVerifyResponse extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineVerifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MachineVerifyResponse): MachineVerifyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MachineVerifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MachineVerifyResponse;
  static deserializeBinaryFromReader(message: MachineVerifyResponse, reader: jspb.BinaryReader): MachineVerifyResponse;
}

export namespace MachineVerifyResponse {
  export type AsObject = {
    content: string,
  }
}

export class ListeningNameDataResponse extends jspb.Message {
  clearBlockresultsList(): void;
  getBlockresultsList(): Array<DataWithBlockInfo>;
  setBlockresultsList(value: Array<DataWithBlockInfo>): void;
  addBlockresults(value?: DataWithBlockInfo, index?: number): DataWithBlockInfo;

  getLength(): number;
  setLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListeningNameDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListeningNameDataResponse): ListeningNameDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListeningNameDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListeningNameDataResponse;
  static deserializeBinaryFromReader(message: ListeningNameDataResponse, reader: jspb.BinaryReader): ListeningNameDataResponse;
}

export namespace ListeningNameDataResponse {
  export type AsObject = {
    blockresultsList: Array<DataWithBlockInfo.AsObject>,
    length: number,
  }
}

export class ListeningNameContinuationResponse extends jspb.Message {
  clearBlockresultsList(): void;
  getBlockresultsList(): Array<ContinuationsWithBlockInfo>;
  setBlockresultsList(value: Array<ContinuationsWithBlockInfo>): void;
  addBlockresults(value?: ContinuationsWithBlockInfo, index?: number): ContinuationsWithBlockInfo;

  getLength(): number;
  setLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListeningNameContinuationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListeningNameContinuationResponse): ListeningNameContinuationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListeningNameContinuationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListeningNameContinuationResponse;
  static deserializeBinaryFromReader(message: ListeningNameContinuationResponse, reader: jspb.BinaryReader): ListeningNameContinuationResponse;
}

export namespace ListeningNameContinuationResponse {
  export type AsObject = {
    blockresultsList: Array<ContinuationsWithBlockInfo.AsObject>,
    length: number,
  }
}

export class PrivateNamePreviewQuery extends jspb.Message {
  getUser(): Uint8Array | string;
  getUser_asU8(): Uint8Array;
  getUser_asB64(): string;
  setUser(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getNameqty(): number;
  setNameqty(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateNamePreviewQuery.AsObject;
  static toObject(includeInstance: boolean, msg: PrivateNamePreviewQuery): PrivateNamePreviewQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrivateNamePreviewQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrivateNamePreviewQuery;
  static deserializeBinaryFromReader(message: PrivateNamePreviewQuery, reader: jspb.BinaryReader): PrivateNamePreviewQuery;
}

export namespace PrivateNamePreviewQuery {
  export type AsObject = {
    user: Uint8Array | string,
    timestamp: number,
    nameqty: number,
  }
}

export class PrivateNamePreviewResponse extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<Uint8Array | string>;
  getIdsList_asU8(): Array<Uint8Array>;
  getIdsList_asB64(): Array<string>;
  setIdsList(value: Array<Uint8Array | string>): void;
  addIds(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateNamePreviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrivateNamePreviewResponse): PrivateNamePreviewResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrivateNamePreviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrivateNamePreviewResponse;
  static deserializeBinaryFromReader(message: PrivateNamePreviewResponse, reader: jspb.BinaryReader): PrivateNamePreviewResponse;
}

export namespace PrivateNamePreviewResponse {
  export type AsObject = {
    idsList: Array<Uint8Array | string>,
  }
}

export class LastFinalizedBlockQuery extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastFinalizedBlockQuery.AsObject;
  static toObject(includeInstance: boolean, msg: LastFinalizedBlockQuery): LastFinalizedBlockQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastFinalizedBlockQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastFinalizedBlockQuery;
  static deserializeBinaryFromReader(message: LastFinalizedBlockQuery, reader: jspb.BinaryReader): LastFinalizedBlockQuery;
}

export namespace LastFinalizedBlockQuery {
  export type AsObject = {
  }
}

export class LastFinalizedBlockResponse extends jspb.Message {
  hasBlockinfo(): boolean;
  clearBlockinfo(): void;
  getBlockinfo(): BlockInfo | undefined;
  setBlockinfo(value?: BlockInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastFinalizedBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LastFinalizedBlockResponse): LastFinalizedBlockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastFinalizedBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastFinalizedBlockResponse;
  static deserializeBinaryFromReader(message: LastFinalizedBlockResponse, reader: jspb.BinaryReader): LastFinalizedBlockResponse;
}

export namespace LastFinalizedBlockResponse {
  export type AsObject = {
    blockinfo?: BlockInfo.AsObject,
  }
}

export class LightBlockInfo extends jspb.Message {
  getBlockhash(): string;
  setBlockhash(value: string): void;

  getBlocksize(): string;
  setBlocksize(value: string): void;

  getBlocknumber(): number;
  setBlocknumber(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getDeploycount(): number;
  setDeploycount(value: number): void;

  getTuplespacehash(): string;
  setTuplespacehash(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getFaulttolerance(): number;
  setFaulttolerance(value: number): void;

  getMainparenthash(): string;
  setMainparenthash(value: string): void;

  clearParentshashlistList(): void;
  getParentshashlistList(): Array<string>;
  setParentshashlistList(value: Array<string>): void;
  addParentshashlist(value: string, index?: number): string;

  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LightBlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LightBlockInfo): LightBlockInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LightBlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LightBlockInfo;
  static deserializeBinaryFromReader(message: LightBlockInfo, reader: jspb.BinaryReader): LightBlockInfo;
}

export namespace LightBlockInfo {
  export type AsObject = {
    blockhash: string,
    blocksize: string,
    blocknumber: number,
    version: number,
    deploycount: number,
    tuplespacehash: string,
    timestamp: number,
    faulttolerance: number,
    mainparenthash: string,
    parentshashlistList: Array<string>,
    sender: string,
  }
}

export class BlockInfo extends jspb.Message {
  getBlockhash(): string;
  setBlockhash(value: string): void;

  getBlocksize(): string;
  setBlocksize(value: string): void;

  getBlocknumber(): number;
  setBlocknumber(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getDeploycount(): number;
  setDeploycount(value: number): void;

  getTuplespacehash(): string;
  setTuplespacehash(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getFaulttolerance(): number;
  setFaulttolerance(value: number): void;

  getMainparenthash(): string;
  setMainparenthash(value: string): void;

  clearParentshashlistList(): void;
  getParentshashlistList(): Array<string>;
  setParentshashlistList(value: Array<string>): void;
  addParentshashlist(value: string, index?: number): string;

  getSender(): string;
  setSender(value: string): void;

  getShardid(): string;
  setShardid(value: string): void;

  clearBondsvalidatorlistList(): void;
  getBondsvalidatorlistList(): Array<string>;
  setBondsvalidatorlistList(value: Array<string>): void;
  addBondsvalidatorlist(value: string, index?: number): string;

  clearDeploycostList(): void;
  getDeploycostList(): Array<string>;
  setDeploycostList(value: Array<string>): void;
  addDeploycost(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BlockInfo): BlockInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockInfo;
  static deserializeBinaryFromReader(message: BlockInfo, reader: jspb.BinaryReader): BlockInfo;
}

export namespace BlockInfo {
  export type AsObject = {
    blockhash: string,
    blocksize: string,
    blocknumber: number,
    version: number,
    deploycount: number,
    tuplespacehash: string,
    timestamp: number,
    faulttolerance: number,
    mainparenthash: string,
    parentshashlistList: Array<string>,
    sender: string,
    shardid: string,
    bondsvalidatorlistList: Array<string>,
    deploycostList: Array<string>,
  }
}

export class DataWithBlockInfo extends jspb.Message {
  clearPostblockdataList(): void;
  getPostblockdataList(): Array<RhoTypes_pb.Par>;
  setPostblockdataList(value: Array<RhoTypes_pb.Par>): void;
  addPostblockdata(value?: RhoTypes_pb.Par, index?: number): RhoTypes_pb.Par;

  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): LightBlockInfo | undefined;
  setBlock(value?: LightBlockInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataWithBlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DataWithBlockInfo): DataWithBlockInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataWithBlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataWithBlockInfo;
  static deserializeBinaryFromReader(message: DataWithBlockInfo, reader: jspb.BinaryReader): DataWithBlockInfo;
}

export namespace DataWithBlockInfo {
  export type AsObject = {
    postblockdataList: Array<RhoTypes_pb.Par.AsObject>,
    block?: LightBlockInfo.AsObject,
  }
}

export class ContinuationsWithBlockInfo extends jspb.Message {
  clearPostblockcontinuationsList(): void;
  getPostblockcontinuationsList(): Array<WaitingContinuationInfo>;
  setPostblockcontinuationsList(value: Array<WaitingContinuationInfo>): void;
  addPostblockcontinuations(value?: WaitingContinuationInfo, index?: number): WaitingContinuationInfo;

  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): LightBlockInfo | undefined;
  setBlock(value?: LightBlockInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContinuationsWithBlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContinuationsWithBlockInfo): ContinuationsWithBlockInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContinuationsWithBlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContinuationsWithBlockInfo;
  static deserializeBinaryFromReader(message: ContinuationsWithBlockInfo, reader: jspb.BinaryReader): ContinuationsWithBlockInfo;
}

export namespace ContinuationsWithBlockInfo {
  export type AsObject = {
    postblockcontinuationsList: Array<WaitingContinuationInfo.AsObject>,
    block?: LightBlockInfo.AsObject,
  }
}

export class WaitingContinuationInfo extends jspb.Message {
  clearPostblockpatternsList(): void;
  getPostblockpatternsList(): Array<RhoTypes_pb.BindPattern>;
  setPostblockpatternsList(value: Array<RhoTypes_pb.BindPattern>): void;
  addPostblockpatterns(value?: RhoTypes_pb.BindPattern, index?: number): RhoTypes_pb.BindPattern;

  hasPostblockcontinuation(): boolean;
  clearPostblockcontinuation(): void;
  getPostblockcontinuation(): RhoTypes_pb.Par | undefined;
  setPostblockcontinuation(value?: RhoTypes_pb.Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WaitingContinuationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WaitingContinuationInfo): WaitingContinuationInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WaitingContinuationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WaitingContinuationInfo;
  static deserializeBinaryFromReader(message: WaitingContinuationInfo, reader: jspb.BinaryReader): WaitingContinuationInfo;
}

export namespace WaitingContinuationInfo {
  export type AsObject = {
    postblockpatternsList: Array<RhoTypes_pb.BindPattern.AsObject>,
    postblockcontinuation?: RhoTypes_pb.Par.AsObject,
  }
}

