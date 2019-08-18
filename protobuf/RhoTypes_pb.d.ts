// package: 
// file: RhoTypes.proto

import * as jspb from "google-protobuf";
import * as scalapb_scalapb_pb from "./scalapb/scalapb_pb";

export class Par extends jspb.Message {
  clearSendsList(): void;
  getSendsList(): Array<Send>;
  setSendsList(value: Array<Send>): void;
  addSends(value?: Send, index?: number): Send;

  clearReceivesList(): void;
  getReceivesList(): Array<Receive>;
  setReceivesList(value: Array<Receive>): void;
  addReceives(value?: Receive, index?: number): Receive;

  clearNewsList(): void;
  getNewsList(): Array<New>;
  setNewsList(value: Array<New>): void;
  addNews(value?: New, index?: number): New;

  clearExprsList(): void;
  getExprsList(): Array<Expr>;
  setExprsList(value: Array<Expr>): void;
  addExprs(value?: Expr, index?: number): Expr;

  clearMatchesList(): void;
  getMatchesList(): Array<Match>;
  setMatchesList(value: Array<Match>): void;
  addMatches(value?: Match, index?: number): Match;

  clearUnforgeablesList(): void;
  getUnforgeablesList(): Array<GUnforgeable>;
  setUnforgeablesList(value: Array<GUnforgeable>): void;
  addUnforgeables(value?: GUnforgeable, index?: number): GUnforgeable;

  clearBundlesList(): void;
  getBundlesList(): Array<Bundle>;
  setBundlesList(value: Array<Bundle>): void;
  addBundles(value?: Bundle, index?: number): Bundle;

  clearConnectivesList(): void;
  getConnectivesList(): Array<Connective>;
  setConnectivesList(value: Array<Connective>): void;
  addConnectives(value?: Connective, index?: number): Connective;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Par.AsObject;
  static toObject(includeInstance: boolean, msg: Par): Par.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Par, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Par;
  static deserializeBinaryFromReader(message: Par, reader: jspb.BinaryReader): Par;
}

export namespace Par {
  export type AsObject = {
    sendsList: Array<Send.AsObject>,
    receivesList: Array<Receive.AsObject>,
    newsList: Array<New.AsObject>,
    exprsList: Array<Expr.AsObject>,
    matchesList: Array<Match.AsObject>,
    unforgeablesList: Array<GUnforgeable.AsObject>,
    bundlesList: Array<Bundle.AsObject>,
    connectivesList: Array<Connective.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
  }
}

export class TaggedContinuation extends jspb.Message {
  hasParBody(): boolean;
  clearParBody(): void;
  getParBody(): ParWithRandom | undefined;
  setParBody(value?: ParWithRandom): void;

  hasScalaBodyRef(): boolean;
  clearScalaBodyRef(): void;
  getScalaBodyRef(): number;
  setScalaBodyRef(value: number): void;

  getTaggedContCase(): TaggedContinuation.TaggedContCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaggedContinuation.AsObject;
  static toObject(includeInstance: boolean, msg: TaggedContinuation): TaggedContinuation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaggedContinuation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaggedContinuation;
  static deserializeBinaryFromReader(message: TaggedContinuation, reader: jspb.BinaryReader): TaggedContinuation;
}

export namespace TaggedContinuation {
  export type AsObject = {
    parBody?: ParWithRandom.AsObject,
    scalaBodyRef: number,
  }

  export enum TaggedContCase {
    TAGGED_CONT_NOT_SET = 0,
    PAR_BODY = 1,
    SCALA_BODY_REF = 2,
  }
}

export class ParWithRandom extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): Par | undefined;
  setBody(value?: Par): void;

  getRandomstate(): Uint8Array | string;
  getRandomstate_asU8(): Uint8Array;
  getRandomstate_asB64(): string;
  setRandomstate(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParWithRandom.AsObject;
  static toObject(includeInstance: boolean, msg: ParWithRandom): ParWithRandom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParWithRandom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParWithRandom;
  static deserializeBinaryFromReader(message: ParWithRandom, reader: jspb.BinaryReader): ParWithRandom;
}

export namespace ParWithRandom {
  export type AsObject = {
    body?: Par.AsObject,
    randomstate: Uint8Array | string,
  }
}

export class PCost extends jspb.Message {
  getCost(): number;
  setCost(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PCost.AsObject;
  static toObject(includeInstance: boolean, msg: PCost): PCost.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PCost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PCost;
  static deserializeBinaryFromReader(message: PCost, reader: jspb.BinaryReader): PCost;
}

export namespace PCost {
  export type AsObject = {
    cost: number,
  }
}

export class ListParWithRandom extends jspb.Message {
  clearParsList(): void;
  getParsList(): Array<Par>;
  setParsList(value: Array<Par>): void;
  addPars(value?: Par, index?: number): Par;

  getRandomstate(): Uint8Array | string;
  getRandomstate_asU8(): Uint8Array;
  getRandomstate_asB64(): string;
  setRandomstate(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListParWithRandom.AsObject;
  static toObject(includeInstance: boolean, msg: ListParWithRandom): ListParWithRandom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListParWithRandom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListParWithRandom;
  static deserializeBinaryFromReader(message: ListParWithRandom, reader: jspb.BinaryReader): ListParWithRandom;
}

export namespace ListParWithRandom {
  export type AsObject = {
    parsList: Array<Par.AsObject>,
    randomstate: Uint8Array | string,
  }
}

export class Var extends jspb.Message {
  hasBoundVar(): boolean;
  clearBoundVar(): void;
  getBoundVar(): number;
  setBoundVar(value: number): void;

  hasFreeVar(): boolean;
  clearFreeVar(): void;
  getFreeVar(): number;
  setFreeVar(value: number): void;

  hasWildcard(): boolean;
  clearWildcard(): void;
  getWildcard(): Var.WildcardMsg | undefined;
  setWildcard(value?: Var.WildcardMsg): void;

  getVarInstanceCase(): Var.VarInstanceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Var.AsObject;
  static toObject(includeInstance: boolean, msg: Var): Var.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Var, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Var;
  static deserializeBinaryFromReader(message: Var, reader: jspb.BinaryReader): Var;
}

export namespace Var {
  export type AsObject = {
    boundVar: number,
    freeVar: number,
    wildcard?: Var.WildcardMsg.AsObject,
  }

  export class WildcardMsg extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WildcardMsg.AsObject;
    static toObject(includeInstance: boolean, msg: WildcardMsg): WildcardMsg.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WildcardMsg, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WildcardMsg;
    static deserializeBinaryFromReader(message: WildcardMsg, reader: jspb.BinaryReader): WildcardMsg;
  }

  export namespace WildcardMsg {
    export type AsObject = {
    }
  }

  export enum VarInstanceCase {
    VAR_INSTANCE_NOT_SET = 0,
    BOUND_VAR = 1,
    FREE_VAR = 2,
    WILDCARD = 3,
  }
}

export class Bundle extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): Par | undefined;
  setBody(value?: Par): void;

  getWriteflag(): boolean;
  setWriteflag(value: boolean): void;

  getReadflag(): boolean;
  setReadflag(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bundle.AsObject;
  static toObject(includeInstance: boolean, msg: Bundle): Bundle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bundle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bundle;
  static deserializeBinaryFromReader(message: Bundle, reader: jspb.BinaryReader): Bundle;
}

export namespace Bundle {
  export type AsObject = {
    body?: Par.AsObject,
    writeflag: boolean,
    readflag: boolean,
  }
}

export class Send extends jspb.Message {
  hasChan(): boolean;
  clearChan(): void;
  getChan(): Par | undefined;
  setChan(value?: Par): void;

  clearDataList(): void;
  getDataList(): Array<Par>;
  setDataList(value: Array<Par>): void;
  addData(value?: Par, index?: number): Par;

  getPersistent(): boolean;
  setPersistent(value: boolean): void;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Send.AsObject;
  static toObject(includeInstance: boolean, msg: Send): Send.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Send, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Send;
  static deserializeBinaryFromReader(message: Send, reader: jspb.BinaryReader): Send;
}

export namespace Send {
  export type AsObject = {
    chan?: Par.AsObject,
    dataList: Array<Par.AsObject>,
    persistent: boolean,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
  }
}

export class ReceiveBind extends jspb.Message {
  clearPatternsList(): void;
  getPatternsList(): Array<Par>;
  setPatternsList(value: Array<Par>): void;
  addPatterns(value?: Par, index?: number): Par;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): Par | undefined;
  setSource(value?: Par): void;

  hasRemainder(): boolean;
  clearRemainder(): void;
  getRemainder(): Var | undefined;
  setRemainder(value?: Var): void;

  getFreecount(): number;
  setFreecount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveBind.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveBind): ReceiveBind.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiveBind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveBind;
  static deserializeBinaryFromReader(message: ReceiveBind, reader: jspb.BinaryReader): ReceiveBind;
}

export namespace ReceiveBind {
  export type AsObject = {
    patternsList: Array<Par.AsObject>,
    source?: Par.AsObject,
    remainder?: Var.AsObject,
    freecount: number,
  }
}

export class BindPattern extends jspb.Message {
  clearPatternsList(): void;
  getPatternsList(): Array<Par>;
  setPatternsList(value: Array<Par>): void;
  addPatterns(value?: Par, index?: number): Par;

  hasRemainder(): boolean;
  clearRemainder(): void;
  getRemainder(): Var | undefined;
  setRemainder(value?: Var): void;

  getFreecount(): number;
  setFreecount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindPattern.AsObject;
  static toObject(includeInstance: boolean, msg: BindPattern): BindPattern.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BindPattern, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindPattern;
  static deserializeBinaryFromReader(message: BindPattern, reader: jspb.BinaryReader): BindPattern;
}

export namespace BindPattern {
  export type AsObject = {
    patternsList: Array<Par.AsObject>,
    remainder?: Var.AsObject,
    freecount: number,
  }
}

export class ListBindPatterns extends jspb.Message {
  clearPatternsList(): void;
  getPatternsList(): Array<BindPattern>;
  setPatternsList(value: Array<BindPattern>): void;
  addPatterns(value?: BindPattern, index?: number): BindPattern;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBindPatterns.AsObject;
  static toObject(includeInstance: boolean, msg: ListBindPatterns): ListBindPatterns.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBindPatterns, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBindPatterns;
  static deserializeBinaryFromReader(message: ListBindPatterns, reader: jspb.BinaryReader): ListBindPatterns;
}

export namespace ListBindPatterns {
  export type AsObject = {
    patternsList: Array<BindPattern.AsObject>,
  }
}

export class Receive extends jspb.Message {
  clearBindsList(): void;
  getBindsList(): Array<ReceiveBind>;
  setBindsList(value: Array<ReceiveBind>): void;
  addBinds(value?: ReceiveBind, index?: number): ReceiveBind;

  hasBody(): boolean;
  clearBody(): void;
  getBody(): Par | undefined;
  setBody(value?: Par): void;

  getPersistent(): boolean;
  setPersistent(value: boolean): void;

  getPeek(): boolean;
  setPeek(value: boolean): void;

  getBindcount(): number;
  setBindcount(value: number): void;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receive.AsObject;
  static toObject(includeInstance: boolean, msg: Receive): Receive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Receive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receive;
  static deserializeBinaryFromReader(message: Receive, reader: jspb.BinaryReader): Receive;
}

export namespace Receive {
  export type AsObject = {
    bindsList: Array<ReceiveBind.AsObject>,
    body?: Par.AsObject,
    persistent: boolean,
    peek: boolean,
    bindcount: number,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
  }
}

export class New extends jspb.Message {
  getBindcount(): number;
  setBindcount(value: number): void;

  hasP(): boolean;
  clearP(): void;
  getP(): Par | undefined;
  setP(value?: Par): void;

  clearUriList(): void;
  getUriList(): Array<string>;
  setUriList(value: Array<string>): void;
  addUri(value: string, index?: number): string;

  hasDeployid(): boolean;
  clearDeployid(): void;
  getDeployid(): DeployId | undefined;
  setDeployid(value?: DeployId): void;

  hasDeployerid(): boolean;
  clearDeployerid(): void;
  getDeployerid(): DeployerId | undefined;
  setDeployerid(value?: DeployerId): void;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): New.AsObject;
  static toObject(includeInstance: boolean, msg: New): New.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: New, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): New;
  static deserializeBinaryFromReader(message: New, reader: jspb.BinaryReader): New;
}

export namespace New {
  export type AsObject = {
    bindcount: number,
    p?: Par.AsObject,
    uriList: Array<string>,
    deployid?: DeployId.AsObject,
    deployerid?: DeployerId.AsObject,
    locallyfree: Uint8Array | string,
  }
}

export class MatchCase extends jspb.Message {
  hasPattern(): boolean;
  clearPattern(): void;
  getPattern(): Par | undefined;
  setPattern(value?: Par): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): Par | undefined;
  setSource(value?: Par): void;

  getFreecount(): number;
  setFreecount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchCase.AsObject;
  static toObject(includeInstance: boolean, msg: MatchCase): MatchCase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchCase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchCase;
  static deserializeBinaryFromReader(message: MatchCase, reader: jspb.BinaryReader): MatchCase;
}

export namespace MatchCase {
  export type AsObject = {
    pattern?: Par.AsObject,
    source?: Par.AsObject,
    freecount: number,
  }
}

export class Match extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): Par | undefined;
  setTarget(value?: Par): void;

  clearCasesList(): void;
  getCasesList(): Array<MatchCase>;
  setCasesList(value: Array<MatchCase>): void;
  addCases(value?: MatchCase, index?: number): MatchCase;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Match.AsObject;
  static toObject(includeInstance: boolean, msg: Match): Match.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Match, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Match;
  static deserializeBinaryFromReader(message: Match, reader: jspb.BinaryReader): Match;
}

export namespace Match {
  export type AsObject = {
    target?: Par.AsObject,
    casesList: Array<MatchCase.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
  }
}

export class Expr extends jspb.Message {
  hasGBool(): boolean;
  clearGBool(): void;
  getGBool(): boolean;
  setGBool(value: boolean): void;

  hasGInt(): boolean;
  clearGInt(): void;
  getGInt(): number;
  setGInt(value: number): void;

  hasGString(): boolean;
  clearGString(): void;
  getGString(): string;
  setGString(value: string): void;

  hasGUri(): boolean;
  clearGUri(): void;
  getGUri(): string;
  setGUri(value: string): void;

  hasGByteArray(): boolean;
  clearGByteArray(): void;
  getGByteArray(): Uint8Array | string;
  getGByteArray_asU8(): Uint8Array;
  getGByteArray_asB64(): string;
  setGByteArray(value: Uint8Array | string): void;

  hasENotBody(): boolean;
  clearENotBody(): void;
  getENotBody(): ENot | undefined;
  setENotBody(value?: ENot): void;

  hasENegBody(): boolean;
  clearENegBody(): void;
  getENegBody(): ENeg | undefined;
  setENegBody(value?: ENeg): void;

  hasEMultBody(): boolean;
  clearEMultBody(): void;
  getEMultBody(): EMult | undefined;
  setEMultBody(value?: EMult): void;

  hasEDivBody(): boolean;
  clearEDivBody(): void;
  getEDivBody(): EDiv | undefined;
  setEDivBody(value?: EDiv): void;

  hasEPlusBody(): boolean;
  clearEPlusBody(): void;
  getEPlusBody(): EPlus | undefined;
  setEPlusBody(value?: EPlus): void;

  hasEMinusBody(): boolean;
  clearEMinusBody(): void;
  getEMinusBody(): EMinus | undefined;
  setEMinusBody(value?: EMinus): void;

  hasELtBody(): boolean;
  clearELtBody(): void;
  getELtBody(): ELt | undefined;
  setELtBody(value?: ELt): void;

  hasELteBody(): boolean;
  clearELteBody(): void;
  getELteBody(): ELte | undefined;
  setELteBody(value?: ELte): void;

  hasEGtBody(): boolean;
  clearEGtBody(): void;
  getEGtBody(): EGt | undefined;
  setEGtBody(value?: EGt): void;

  hasEGteBody(): boolean;
  clearEGteBody(): void;
  getEGteBody(): EGte | undefined;
  setEGteBody(value?: EGte): void;

  hasEEqBody(): boolean;
  clearEEqBody(): void;
  getEEqBody(): EEq | undefined;
  setEEqBody(value?: EEq): void;

  hasENeqBody(): boolean;
  clearENeqBody(): void;
  getENeqBody(): ENeq | undefined;
  setENeqBody(value?: ENeq): void;

  hasEAndBody(): boolean;
  clearEAndBody(): void;
  getEAndBody(): EAnd | undefined;
  setEAndBody(value?: EAnd): void;

  hasEOrBody(): boolean;
  clearEOrBody(): void;
  getEOrBody(): EOr | undefined;
  setEOrBody(value?: EOr): void;

  hasEVarBody(): boolean;
  clearEVarBody(): void;
  getEVarBody(): EVar | undefined;
  setEVarBody(value?: EVar): void;

  hasEListBody(): boolean;
  clearEListBody(): void;
  getEListBody(): EList | undefined;
  setEListBody(value?: EList): void;

  hasETupleBody(): boolean;
  clearETupleBody(): void;
  getETupleBody(): ETuple | undefined;
  setETupleBody(value?: ETuple): void;

  hasESetBody(): boolean;
  clearESetBody(): void;
  getESetBody(): ESet | undefined;
  setESetBody(value?: ESet): void;

  hasEMapBody(): boolean;
  clearEMapBody(): void;
  getEMapBody(): EMap | undefined;
  setEMapBody(value?: EMap): void;

  hasEMethodBody(): boolean;
  clearEMethodBody(): void;
  getEMethodBody(): EMethod | undefined;
  setEMethodBody(value?: EMethod): void;

  hasEMatchesBody(): boolean;
  clearEMatchesBody(): void;
  getEMatchesBody(): EMatches | undefined;
  setEMatchesBody(value?: EMatches): void;

  hasEPercentPercentBody(): boolean;
  clearEPercentPercentBody(): void;
  getEPercentPercentBody(): EPercentPercent | undefined;
  setEPercentPercentBody(value?: EPercentPercent): void;

  hasEPlusPlusBody(): boolean;
  clearEPlusPlusBody(): void;
  getEPlusPlusBody(): EPlusPlus | undefined;
  setEPlusPlusBody(value?: EPlusPlus): void;

  hasEMinusMinusBody(): boolean;
  clearEMinusMinusBody(): void;
  getEMinusMinusBody(): EMinusMinus | undefined;
  setEMinusMinusBody(value?: EMinusMinus): void;

  hasEModBody(): boolean;
  clearEModBody(): void;
  getEModBody(): EMod | undefined;
  setEModBody(value?: EMod): void;

  getExprInstanceCase(): Expr.ExprInstanceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Expr.AsObject;
  static toObject(includeInstance: boolean, msg: Expr): Expr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Expr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Expr;
  static deserializeBinaryFromReader(message: Expr, reader: jspb.BinaryReader): Expr;
}

export namespace Expr {
  export type AsObject = {
    gBool: boolean,
    gInt: number,
    gString: string,
    gUri: string,
    gByteArray: Uint8Array | string,
    eNotBody?: ENot.AsObject,
    eNegBody?: ENeg.AsObject,
    eMultBody?: EMult.AsObject,
    eDivBody?: EDiv.AsObject,
    ePlusBody?: EPlus.AsObject,
    eMinusBody?: EMinus.AsObject,
    eLtBody?: ELt.AsObject,
    eLteBody?: ELte.AsObject,
    eGtBody?: EGt.AsObject,
    eGteBody?: EGte.AsObject,
    eEqBody?: EEq.AsObject,
    eNeqBody?: ENeq.AsObject,
    eAndBody?: EAnd.AsObject,
    eOrBody?: EOr.AsObject,
    eVarBody?: EVar.AsObject,
    eListBody?: EList.AsObject,
    eTupleBody?: ETuple.AsObject,
    eSetBody?: ESet.AsObject,
    eMapBody?: EMap.AsObject,
    eMethodBody?: EMethod.AsObject,
    eMatchesBody?: EMatches.AsObject,
    ePercentPercentBody?: EPercentPercent.AsObject,
    ePlusPlusBody?: EPlusPlus.AsObject,
    eMinusMinusBody?: EMinusMinus.AsObject,
    eModBody?: EMod.AsObject,
  }

  export enum ExprInstanceCase {
    EXPR_INSTANCE_NOT_SET = 0,
    G_BOOL = 1,
    G_INT = 2,
    G_STRING = 3,
    G_URI = 4,
    G_BYTE_ARRAY = 25,
    E_NOT_BODY = 5,
    E_NEG_BODY = 6,
    E_MULT_BODY = 7,
    E_DIV_BODY = 8,
    E_PLUS_BODY = 9,
    E_MINUS_BODY = 10,
    E_LT_BODY = 11,
    E_LTE_BODY = 12,
    E_GT_BODY = 13,
    E_GTE_BODY = 14,
    E_EQ_BODY = 15,
    E_NEQ_BODY = 16,
    E_AND_BODY = 17,
    E_OR_BODY = 18,
    E_VAR_BODY = 19,
    E_LIST_BODY = 20,
    E_TUPLE_BODY = 21,
    E_SET_BODY = 22,
    E_MAP_BODY = 23,
    E_METHOD_BODY = 24,
    E_MATCHES_BODY = 27,
    E_PERCENT_PERCENT_BODY = 28,
    E_PLUS_PLUS_BODY = 29,
    E_MINUS_MINUS_BODY = 30,
    E_MOD_BODY = 31,
  }
}

export class EList extends jspb.Message {
  clearPsList(): void;
  getPsList(): Array<Par>;
  setPsList(value: Array<Par>): void;
  addPs(value?: Par, index?: number): Par;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  hasRemainder(): boolean;
  clearRemainder(): void;
  getRemainder(): Var | undefined;
  setRemainder(value?: Var): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EList.AsObject;
  static toObject(includeInstance: boolean, msg: EList): EList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EList;
  static deserializeBinaryFromReader(message: EList, reader: jspb.BinaryReader): EList;
}

export namespace EList {
  export type AsObject = {
    psList: Array<Par.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
    remainder?: Var.AsObject,
  }
}

export class ETuple extends jspb.Message {
  clearPsList(): void;
  getPsList(): Array<Par>;
  setPsList(value: Array<Par>): void;
  addPs(value?: Par, index?: number): Par;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ETuple.AsObject;
  static toObject(includeInstance: boolean, msg: ETuple): ETuple.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ETuple, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ETuple;
  static deserializeBinaryFromReader(message: ETuple, reader: jspb.BinaryReader): ETuple;
}

export namespace ETuple {
  export type AsObject = {
    psList: Array<Par.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
  }
}

export class ESet extends jspb.Message {
  clearPsList(): void;
  getPsList(): Array<Par>;
  setPsList(value: Array<Par>): void;
  addPs(value?: Par, index?: number): Par;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  hasRemainder(): boolean;
  clearRemainder(): void;
  getRemainder(): Var | undefined;
  setRemainder(value?: Var): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ESet.AsObject;
  static toObject(includeInstance: boolean, msg: ESet): ESet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ESet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ESet;
  static deserializeBinaryFromReader(message: ESet, reader: jspb.BinaryReader): ESet;
}

export namespace ESet {
  export type AsObject = {
    psList: Array<Par.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
    remainder?: Var.AsObject,
  }
}

export class EMap extends jspb.Message {
  clearKvsList(): void;
  getKvsList(): Array<KeyValuePair>;
  setKvsList(value: Array<KeyValuePair>): void;
  addKvs(value?: KeyValuePair, index?: number): KeyValuePair;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  hasRemainder(): boolean;
  clearRemainder(): void;
  getRemainder(): Var | undefined;
  setRemainder(value?: Var): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMap.AsObject;
  static toObject(includeInstance: boolean, msg: EMap): EMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMap;
  static deserializeBinaryFromReader(message: EMap, reader: jspb.BinaryReader): EMap;
}

export namespace EMap {
  export type AsObject = {
    kvsList: Array<KeyValuePair.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
    remainder?: Var.AsObject,
  }
}

export class EMethod extends jspb.Message {
  getMethodname(): string;
  setMethodname(value: string): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): Par | undefined;
  setTarget(value?: Par): void;

  clearArgumentsList(): void;
  getArgumentsList(): Array<Par>;
  setArgumentsList(value: Array<Par>): void;
  addArguments(value?: Par, index?: number): Par;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMethod.AsObject;
  static toObject(includeInstance: boolean, msg: EMethod): EMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMethod;
  static deserializeBinaryFromReader(message: EMethod, reader: jspb.BinaryReader): EMethod;
}

export namespace EMethod {
  export type AsObject = {
    methodname: string,
    target?: Par.AsObject,
    argumentsList: Array<Par.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
  }
}

export class KeyValuePair extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): Par | undefined;
  setKey(value?: Par): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Par | undefined;
  setValue(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValuePair.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValuePair): KeyValuePair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyValuePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValuePair;
  static deserializeBinaryFromReader(message: KeyValuePair, reader: jspb.BinaryReader): KeyValuePair;
}

export namespace KeyValuePair {
  export type AsObject = {
    key?: Par.AsObject,
    value?: Par.AsObject,
  }
}

export class EVar extends jspb.Message {
  hasV(): boolean;
  clearV(): void;
  getV(): Var | undefined;
  setV(value?: Var): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EVar.AsObject;
  static toObject(includeInstance: boolean, msg: EVar): EVar.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EVar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EVar;
  static deserializeBinaryFromReader(message: EVar, reader: jspb.BinaryReader): EVar;
}

export namespace EVar {
  export type AsObject = {
    v?: Var.AsObject,
  }
}

export class ENot extends jspb.Message {
  hasP(): boolean;
  clearP(): void;
  getP(): Par | undefined;
  setP(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ENot.AsObject;
  static toObject(includeInstance: boolean, msg: ENot): ENot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ENot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ENot;
  static deserializeBinaryFromReader(message: ENot, reader: jspb.BinaryReader): ENot;
}

export namespace ENot {
  export type AsObject = {
    p?: Par.AsObject,
  }
}

export class ENeg extends jspb.Message {
  hasP(): boolean;
  clearP(): void;
  getP(): Par | undefined;
  setP(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ENeg.AsObject;
  static toObject(includeInstance: boolean, msg: ENeg): ENeg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ENeg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ENeg;
  static deserializeBinaryFromReader(message: ENeg, reader: jspb.BinaryReader): ENeg;
}

export namespace ENeg {
  export type AsObject = {
    p?: Par.AsObject,
  }
}

export class EMult extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMult.AsObject;
  static toObject(includeInstance: boolean, msg: EMult): EMult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EMult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMult;
  static deserializeBinaryFromReader(message: EMult, reader: jspb.BinaryReader): EMult;
}

export namespace EMult {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EDiv extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EDiv.AsObject;
  static toObject(includeInstance: boolean, msg: EDiv): EDiv.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EDiv, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EDiv;
  static deserializeBinaryFromReader(message: EDiv, reader: jspb.BinaryReader): EDiv;
}

export namespace EDiv {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EMod extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMod.AsObject;
  static toObject(includeInstance: boolean, msg: EMod): EMod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EMod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMod;
  static deserializeBinaryFromReader(message: EMod, reader: jspb.BinaryReader): EMod;
}

export namespace EMod {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EPlus extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EPlus.AsObject;
  static toObject(includeInstance: boolean, msg: EPlus): EPlus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EPlus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EPlus;
  static deserializeBinaryFromReader(message: EPlus, reader: jspb.BinaryReader): EPlus;
}

export namespace EPlus {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EMinus extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMinus.AsObject;
  static toObject(includeInstance: boolean, msg: EMinus): EMinus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EMinus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMinus;
  static deserializeBinaryFromReader(message: EMinus, reader: jspb.BinaryReader): EMinus;
}

export namespace EMinus {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class ELt extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ELt.AsObject;
  static toObject(includeInstance: boolean, msg: ELt): ELt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ELt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ELt;
  static deserializeBinaryFromReader(message: ELt, reader: jspb.BinaryReader): ELt;
}

export namespace ELt {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class ELte extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ELte.AsObject;
  static toObject(includeInstance: boolean, msg: ELte): ELte.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ELte, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ELte;
  static deserializeBinaryFromReader(message: ELte, reader: jspb.BinaryReader): ELte;
}

export namespace ELte {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EGt extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EGt.AsObject;
  static toObject(includeInstance: boolean, msg: EGt): EGt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EGt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EGt;
  static deserializeBinaryFromReader(message: EGt, reader: jspb.BinaryReader): EGt;
}

export namespace EGt {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EGte extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EGte.AsObject;
  static toObject(includeInstance: boolean, msg: EGte): EGte.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EGte, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EGte;
  static deserializeBinaryFromReader(message: EGte, reader: jspb.BinaryReader): EGte;
}

export namespace EGte {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EEq extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EEq.AsObject;
  static toObject(includeInstance: boolean, msg: EEq): EEq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EEq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EEq;
  static deserializeBinaryFromReader(message: EEq, reader: jspb.BinaryReader): EEq;
}

export namespace EEq {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class ENeq extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ENeq.AsObject;
  static toObject(includeInstance: boolean, msg: ENeq): ENeq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ENeq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ENeq;
  static deserializeBinaryFromReader(message: ENeq, reader: jspb.BinaryReader): ENeq;
}

export namespace ENeq {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EAnd extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EAnd.AsObject;
  static toObject(includeInstance: boolean, msg: EAnd): EAnd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EAnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EAnd;
  static deserializeBinaryFromReader(message: EAnd, reader: jspb.BinaryReader): EAnd;
}

export namespace EAnd {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EOr extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EOr.AsObject;
  static toObject(includeInstance: boolean, msg: EOr): EOr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EOr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EOr;
  static deserializeBinaryFromReader(message: EOr, reader: jspb.BinaryReader): EOr;
}

export namespace EOr {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EMatches extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): Par | undefined;
  setTarget(value?: Par): void;

  hasPattern(): boolean;
  clearPattern(): void;
  getPattern(): Par | undefined;
  setPattern(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMatches.AsObject;
  static toObject(includeInstance: boolean, msg: EMatches): EMatches.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EMatches, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMatches;
  static deserializeBinaryFromReader(message: EMatches, reader: jspb.BinaryReader): EMatches;
}

export namespace EMatches {
  export type AsObject = {
    target?: Par.AsObject,
    pattern?: Par.AsObject,
  }
}

export class EPercentPercent extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EPercentPercent.AsObject;
  static toObject(includeInstance: boolean, msg: EPercentPercent): EPercentPercent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EPercentPercent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EPercentPercent;
  static deserializeBinaryFromReader(message: EPercentPercent, reader: jspb.BinaryReader): EPercentPercent;
}

export namespace EPercentPercent {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EPlusPlus extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EPlusPlus.AsObject;
  static toObject(includeInstance: boolean, msg: EPlusPlus): EPlusPlus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EPlusPlus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EPlusPlus;
  static deserializeBinaryFromReader(message: EPlusPlus, reader: jspb.BinaryReader): EPlusPlus;
}

export namespace EPlusPlus {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EMinusMinus extends jspb.Message {
  hasP1(): boolean;
  clearP1(): void;
  getP1(): Par | undefined;
  setP1(value?: Par): void;

  hasP2(): boolean;
  clearP2(): void;
  getP2(): Par | undefined;
  setP2(value?: Par): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMinusMinus.AsObject;
  static toObject(includeInstance: boolean, msg: EMinusMinus): EMinusMinus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EMinusMinus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMinusMinus;
  static deserializeBinaryFromReader(message: EMinusMinus, reader: jspb.BinaryReader): EMinusMinus;
}

export namespace EMinusMinus {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class Connective extends jspb.Message {
  hasConnAndBody(): boolean;
  clearConnAndBody(): void;
  getConnAndBody(): ConnectiveBody | undefined;
  setConnAndBody(value?: ConnectiveBody): void;

  hasConnOrBody(): boolean;
  clearConnOrBody(): void;
  getConnOrBody(): ConnectiveBody | undefined;
  setConnOrBody(value?: ConnectiveBody): void;

  hasConnNotBody(): boolean;
  clearConnNotBody(): void;
  getConnNotBody(): Par | undefined;
  setConnNotBody(value?: Par): void;

  hasVarRefBody(): boolean;
  clearVarRefBody(): void;
  getVarRefBody(): VarRef | undefined;
  setVarRefBody(value?: VarRef): void;

  hasConnBool(): boolean;
  clearConnBool(): void;
  getConnBool(): boolean;
  setConnBool(value: boolean): void;

  hasConnInt(): boolean;
  clearConnInt(): void;
  getConnInt(): boolean;
  setConnInt(value: boolean): void;

  hasConnString(): boolean;
  clearConnString(): void;
  getConnString(): boolean;
  setConnString(value: boolean): void;

  hasConnUri(): boolean;
  clearConnUri(): void;
  getConnUri(): boolean;
  setConnUri(value: boolean): void;

  hasConnByteArray(): boolean;
  clearConnByteArray(): void;
  getConnByteArray(): boolean;
  setConnByteArray(value: boolean): void;

  getConnectiveInstanceCase(): Connective.ConnectiveInstanceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connective.AsObject;
  static toObject(includeInstance: boolean, msg: Connective): Connective.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Connective, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connective;
  static deserializeBinaryFromReader(message: Connective, reader: jspb.BinaryReader): Connective;
}

export namespace Connective {
  export type AsObject = {
    connAndBody?: ConnectiveBody.AsObject,
    connOrBody?: ConnectiveBody.AsObject,
    connNotBody?: Par.AsObject,
    varRefBody?: VarRef.AsObject,
    connBool: boolean,
    connInt: boolean,
    connString: boolean,
    connUri: boolean,
    connByteArray: boolean,
  }

  export enum ConnectiveInstanceCase {
    CONNECTIVE_INSTANCE_NOT_SET = 0,
    CONN_AND_BODY = 1,
    CONN_OR_BODY = 2,
    CONN_NOT_BODY = 3,
    VAR_REF_BODY = 4,
    CONN_BOOL = 5,
    CONN_INT = 6,
    CONN_STRING = 7,
    CONN_URI = 8,
    CONN_BYTE_ARRAY = 9,
  }
}

export class VarRef extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getDepth(): number;
  setDepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VarRef.AsObject;
  static toObject(includeInstance: boolean, msg: VarRef): VarRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VarRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VarRef;
  static deserializeBinaryFromReader(message: VarRef, reader: jspb.BinaryReader): VarRef;
}

export namespace VarRef {
  export type AsObject = {
    index: number,
    depth: number,
  }
}

export class ConnectiveBody extends jspb.Message {
  clearPsList(): void;
  getPsList(): Array<Par>;
  setPsList(value: Array<Par>): void;
  addPs(value?: Par, index?: number): Par;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectiveBody.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectiveBody): ConnectiveBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectiveBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectiveBody;
  static deserializeBinaryFromReader(message: ConnectiveBody, reader: jspb.BinaryReader): ConnectiveBody;
}

export namespace ConnectiveBody {
  export type AsObject = {
    psList: Array<Par.AsObject>,
  }
}

export class DeployId extends jspb.Message {
  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployId.AsObject;
  static toObject(includeInstance: boolean, msg: DeployId): DeployId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployId;
  static deserializeBinaryFromReader(message: DeployId, reader: jspb.BinaryReader): DeployId;
}

export namespace DeployId {
  export type AsObject = {
    sig: Uint8Array | string,
  }
}

export class DeployerId extends jspb.Message {
  getPublickey(): Uint8Array | string;
  getPublickey_asU8(): Uint8Array;
  getPublickey_asB64(): string;
  setPublickey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployerId.AsObject;
  static toObject(includeInstance: boolean, msg: DeployerId): DeployerId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployerId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployerId;
  static deserializeBinaryFromReader(message: DeployerId, reader: jspb.BinaryReader): DeployerId;
}

export namespace DeployerId {
  export type AsObject = {
    publickey: Uint8Array | string,
  }
}

export class GUnforgeable extends jspb.Message {
  hasGPrivateBody(): boolean;
  clearGPrivateBody(): void;
  getGPrivateBody(): GPrivate | undefined;
  setGPrivateBody(value?: GPrivate): void;

  hasGDeployIdBody(): boolean;
  clearGDeployIdBody(): void;
  getGDeployIdBody(): GDeployId | undefined;
  setGDeployIdBody(value?: GDeployId): void;

  hasGDeployerIdBody(): boolean;
  clearGDeployerIdBody(): void;
  getGDeployerIdBody(): GDeployerId | undefined;
  setGDeployerIdBody(value?: GDeployerId): void;

  getUnfInstanceCase(): GUnforgeable.UnfInstanceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GUnforgeable.AsObject;
  static toObject(includeInstance: boolean, msg: GUnforgeable): GUnforgeable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GUnforgeable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GUnforgeable;
  static deserializeBinaryFromReader(message: GUnforgeable, reader: jspb.BinaryReader): GUnforgeable;
}

export namespace GUnforgeable {
  export type AsObject = {
    gPrivateBody?: GPrivate.AsObject,
    gDeployIdBody?: GDeployId.AsObject,
    gDeployerIdBody?: GDeployerId.AsObject,
  }

  export enum UnfInstanceCase {
    UNF_INSTANCE_NOT_SET = 0,
    G_PRIVATE_BODY = 1,
    G_DEPLOY_ID_BODY = 2,
    G_DEPLOYER_ID_BODY = 3,
  }
}

export class GPrivate extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GPrivate.AsObject;
  static toObject(includeInstance: boolean, msg: GPrivate): GPrivate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GPrivate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GPrivate;
  static deserializeBinaryFromReader(message: GPrivate, reader: jspb.BinaryReader): GPrivate;
}

export namespace GPrivate {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class GDeployId extends jspb.Message {
  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GDeployId.AsObject;
  static toObject(includeInstance: boolean, msg: GDeployId): GDeployId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GDeployId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GDeployId;
  static deserializeBinaryFromReader(message: GDeployId, reader: jspb.BinaryReader): GDeployId;
}

export namespace GDeployId {
  export type AsObject = {
    sig: Uint8Array | string,
  }
}

export class GDeployerId extends jspb.Message {
  getPublickey(): Uint8Array | string;
  getPublickey_asU8(): Uint8Array;
  getPublickey_asB64(): string;
  setPublickey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GDeployerId.AsObject;
  static toObject(includeInstance: boolean, msg: GDeployerId): GDeployerId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GDeployerId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GDeployerId;
  static deserializeBinaryFromReader(message: GDeployerId, reader: jspb.BinaryReader): GDeployerId;
}

export namespace GDeployerId {
  export type AsObject = {
    publickey: Uint8Array | string,
  }
}

