// package: 
// file: Either.proto

import * as jspb from "google-protobuf";
import * as scalapb_scalapb_pb from "./scalapb/scalapb_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class EitherAny extends jspb.Message {
  getTypeUrl(): string;
  setTypeUrl(value: string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EitherAny.AsObject;
  static toObject(includeInstance: boolean, msg: EitherAny): EitherAny.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EitherAny, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EitherAny;
  static deserializeBinaryFromReader(message: EitherAny, reader: jspb.BinaryReader): EitherAny;
}

export namespace EitherAny {
  export type AsObject = {
    typeUrl: string,
    value: Uint8Array | string,
  }
}

export class EitherError extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<string>;
  setMessagesList(value: Array<string>): void;
  addMessages(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EitherError.AsObject;
  static toObject(includeInstance: boolean, msg: EitherError): EitherError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EitherError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EitherError;
  static deserializeBinaryFromReader(message: EitherError, reader: jspb.BinaryReader): EitherError;
}

export namespace EitherError {
  export type AsObject = {
    messagesList: Array<string>,
  }
}

export class EitherSuccess extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): EitherAny | undefined;
  setResponse(value?: EitherAny): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EitherSuccess.AsObject;
  static toObject(includeInstance: boolean, msg: EitherSuccess): EitherSuccess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EitherSuccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EitherSuccess;
  static deserializeBinaryFromReader(message: EitherSuccess, reader: jspb.BinaryReader): EitherSuccess;
}

export namespace EitherSuccess {
  export type AsObject = {
    response?: EitherAny.AsObject,
  }
}

export class Either extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): EitherError | undefined;
  setError(value?: EitherError): void;

  hasSuccess(): boolean;
  clearSuccess(): void;
  getSuccess(): EitherSuccess | undefined;
  setSuccess(value?: EitherSuccess): void;

  getContentCase(): Either.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Either.AsObject;
  static toObject(includeInstance: boolean, msg: Either): Either.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Either, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Either;
  static deserializeBinaryFromReader(message: Either, reader: jspb.BinaryReader): Either;
}

export namespace Either {
  export type AsObject = {
    error?: EitherError.AsObject,
    success?: EitherSuccess.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    ERROR = 1,
    SUCCESS = 2,
  }
}

