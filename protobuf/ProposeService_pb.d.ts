// package: coop.rchain.casper.protocol
// file: ProposeService.proto

import * as jspb from "google-protobuf";
import * as CasperMessage_pb from "./CasperMessage_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as Either_pb from "./Either_pb";
import * as scalapb_scalapb_pb from "./scalapb/scalapb_pb";

export class PrintUnmatchedSendsQuery extends jspb.Message {
  getPrintunmatchedsends(): boolean;
  setPrintunmatchedsends(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrintUnmatchedSendsQuery.AsObject;
  static toObject(includeInstance: boolean, msg: PrintUnmatchedSendsQuery): PrintUnmatchedSendsQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrintUnmatchedSendsQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrintUnmatchedSendsQuery;
  static deserializeBinaryFromReader(message: PrintUnmatchedSendsQuery, reader: jspb.BinaryReader): PrintUnmatchedSendsQuery;
}

export namespace PrintUnmatchedSendsQuery {
  export type AsObject = {
    printunmatchedsends: boolean,
  }
}

