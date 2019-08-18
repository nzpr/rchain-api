// package: coop.rchain.comm.protocol.routing
// file: routing.proto

import * as jspb from "google-protobuf";
import * as scalapb_scalapb_pb from "./scalapb/scalapb_pb";
import * as CasperMessage_pb from "./CasperMessage_pb";

export class Node extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getHost(): Uint8Array | string;
  getHost_asU8(): Uint8Array;
  getHost_asB64(): string;
  setHost(value: Uint8Array | string): void;

  getTcpPort(): number;
  setTcpPort(value: number): void;

  getUdpPort(): number;
  setUdpPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Node.AsObject;
  static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Node;
  static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
  export type AsObject = {
    id: Uint8Array | string,
    host: Uint8Array | string,
    tcpPort: number,
    udpPort: number,
  }
}

export class Header extends jspb.Message {
  hasSender(): boolean;
  clearSender(): void;
  getSender(): Node | undefined;
  setSender(value?: Node): void;

  getNetworkid(): string;
  setNetworkid(value: string): void;

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
    sender?: Node.AsObject,
    networkid: string,
  }
}

export class Heartbeat extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Heartbeat.AsObject;
  static toObject(includeInstance: boolean, msg: Heartbeat): Heartbeat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Heartbeat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Heartbeat;
  static deserializeBinaryFromReader(message: Heartbeat, reader: jspb.BinaryReader): Heartbeat;
}

export namespace Heartbeat {
  export type AsObject = {
  }
}

export class HeartbeatResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeartbeatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HeartbeatResponse): HeartbeatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeartbeatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeartbeatResponse;
  static deserializeBinaryFromReader(message: HeartbeatResponse, reader: jspb.BinaryReader): HeartbeatResponse;
}

export namespace HeartbeatResponse {
  export type AsObject = {
  }
}

export class ProtocolHandshake extends jspb.Message {
  getNonce(): Uint8Array | string;
  getNonce_asU8(): Uint8Array;
  getNonce_asB64(): string;
  setNonce(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolHandshake.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolHandshake): ProtocolHandshake.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtocolHandshake, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolHandshake;
  static deserializeBinaryFromReader(message: ProtocolHandshake, reader: jspb.BinaryReader): ProtocolHandshake;
}

export namespace ProtocolHandshake {
  export type AsObject = {
    nonce: Uint8Array | string,
  }
}

export class ProtocolHandshakeResponse extends jspb.Message {
  getNonce(): Uint8Array | string;
  getNonce_asU8(): Uint8Array;
  getNonce_asB64(): string;
  setNonce(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolHandshakeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolHandshakeResponse): ProtocolHandshakeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtocolHandshakeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolHandshakeResponse;
  static deserializeBinaryFromReader(message: ProtocolHandshakeResponse, reader: jspb.BinaryReader): ProtocolHandshakeResponse;
}

export namespace ProtocolHandshakeResponse {
  export type AsObject = {
    nonce: Uint8Array | string,
  }
}

export class Packet extends jspb.Message {
  getTypeid(): string;
  setTypeid(value: string): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Packet.AsObject;
  static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Packet;
  static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
}

export namespace Packet {
  export type AsObject = {
    typeid: string,
    content: Uint8Array | string,
  }
}

export class Disconnect extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Disconnect.AsObject;
  static toObject(includeInstance: boolean, msg: Disconnect): Disconnect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Disconnect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Disconnect;
  static deserializeBinaryFromReader(message: Disconnect, reader: jspb.BinaryReader): Disconnect;
}

export namespace Disconnect {
  export type AsObject = {
  }
}

export class Protocol extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasHeartbeat(): boolean;
  clearHeartbeat(): void;
  getHeartbeat(): Heartbeat | undefined;
  setHeartbeat(value?: Heartbeat): void;

  hasProtocolHandshake(): boolean;
  clearProtocolHandshake(): void;
  getProtocolHandshake(): ProtocolHandshake | undefined;
  setProtocolHandshake(value?: ProtocolHandshake): void;

  hasProtocolHandshakeResponse(): boolean;
  clearProtocolHandshakeResponse(): void;
  getProtocolHandshakeResponse(): ProtocolHandshakeResponse | undefined;
  setProtocolHandshakeResponse(value?: ProtocolHandshakeResponse): void;

  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): Packet | undefined;
  setPacket(value?: Packet): void;

  hasDisconnect(): boolean;
  clearDisconnect(): void;
  getDisconnect(): Disconnect | undefined;
  setDisconnect(value?: Disconnect): void;

  getMessageCase(): Protocol.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Protocol.AsObject;
  static toObject(includeInstance: boolean, msg: Protocol): Protocol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Protocol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Protocol;
  static deserializeBinaryFromReader(message: Protocol, reader: jspb.BinaryReader): Protocol;
}

export namespace Protocol {
  export type AsObject = {
    header?: Header.AsObject,
    heartbeat?: Heartbeat.AsObject,
    protocolHandshake?: ProtocolHandshake.AsObject,
    protocolHandshakeResponse?: ProtocolHandshakeResponse.AsObject,
    packet?: Packet.AsObject,
    disconnect?: Disconnect.AsObject,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    HEARTBEAT = 2,
    PROTOCOL_HANDSHAKE = 3,
    PROTOCOL_HANDSHAKE_RESPONSE = 4,
    PACKET = 5,
    DISCONNECT = 6,
  }
}

export class TLRequest extends jspb.Message {
  hasProtocol(): boolean;
  clearProtocol(): void;
  getProtocol(): Protocol | undefined;
  setProtocol(value?: Protocol): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TLRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TLRequest): TLRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TLRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TLRequest;
  static deserializeBinaryFromReader(message: TLRequest, reader: jspb.BinaryReader): TLRequest;
}

export namespace TLRequest {
  export type AsObject = {
    protocol?: Protocol.AsObject,
  }
}

export class InternalServerError extends jspb.Message {
  getError(): Uint8Array | string;
  getError_asU8(): Uint8Array;
  getError_asB64(): string;
  setError(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalServerError.AsObject;
  static toObject(includeInstance: boolean, msg: InternalServerError): InternalServerError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InternalServerError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalServerError;
  static deserializeBinaryFromReader(message: InternalServerError, reader: jspb.BinaryReader): InternalServerError;
}

export namespace InternalServerError {
  export type AsObject = {
    error: Uint8Array | string,
  }
}

export class Ack extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ack.AsObject;
  static toObject(includeInstance: boolean, msg: Ack): Ack.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ack;
  static deserializeBinaryFromReader(message: Ack, reader: jspb.BinaryReader): Ack;
}

export namespace Ack {
  export type AsObject = {
    header?: Header.AsObject,
  }
}

export class TLResponse extends jspb.Message {
  hasAck(): boolean;
  clearAck(): void;
  getAck(): Ack | undefined;
  setAck(value?: Ack): void;

  hasInternalservererror(): boolean;
  clearInternalservererror(): void;
  getInternalservererror(): InternalServerError | undefined;
  setInternalservererror(value?: InternalServerError): void;

  getPayloadCase(): TLResponse.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TLResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TLResponse): TLResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TLResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TLResponse;
  static deserializeBinaryFromReader(message: TLResponse, reader: jspb.BinaryReader): TLResponse;
}

export namespace TLResponse {
  export type AsObject = {
    ack?: Ack.AsObject,
    internalservererror?: InternalServerError.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    ACK = 1,
    INTERNALSERVERERROR = 2,
  }
}

export class ChunkHeader extends jspb.Message {
  hasSender(): boolean;
  clearSender(): void;
  getSender(): Node | undefined;
  setSender(value?: Node): void;

  getTypeid(): string;
  setTypeid(value: string): void;

  getCompressed(): boolean;
  setCompressed(value: boolean): void;

  getContentlength(): number;
  setContentlength(value: number): void;

  getNetworkid(): string;
  setNetworkid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChunkHeader.AsObject;
  static toObject(includeInstance: boolean, msg: ChunkHeader): ChunkHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChunkHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChunkHeader;
  static deserializeBinaryFromReader(message: ChunkHeader, reader: jspb.BinaryReader): ChunkHeader;
}

export namespace ChunkHeader {
  export type AsObject = {
    sender?: Node.AsObject,
    typeid: string,
    compressed: boolean,
    contentlength: number,
    networkid: string,
  }
}

export class ChunkData extends jspb.Message {
  getContentdata(): Uint8Array | string;
  getContentdata_asU8(): Uint8Array;
  getContentdata_asB64(): string;
  setContentdata(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChunkData.AsObject;
  static toObject(includeInstance: boolean, msg: ChunkData): ChunkData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChunkData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChunkData;
  static deserializeBinaryFromReader(message: ChunkData, reader: jspb.BinaryReader): ChunkData;
}

export namespace ChunkData {
  export type AsObject = {
    contentdata: Uint8Array | string,
  }
}

export class Chunk extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ChunkHeader | undefined;
  setHeader(value?: ChunkHeader): void;

  hasData(): boolean;
  clearData(): void;
  getData(): ChunkData | undefined;
  setData(value?: ChunkData): void;

  getContentCase(): Chunk.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chunk.AsObject;
  static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chunk;
  static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
}

export namespace Chunk {
  export type AsObject = {
    header?: ChunkHeader.AsObject,
    data?: ChunkData.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    HEADER = 1,
    DATA = 2,
  }
}

