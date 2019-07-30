/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.coop = (function() {

    /**
     * Namespace coop.
     * @exports coop
     * @namespace
     */
    var coop = {};

    coop.rchain = (function() {

        /**
         * Namespace rchain.
         * @memberof coop
         * @namespace
         */
        var rchain = {};

        rchain.casper = (function() {

            /**
             * Namespace casper.
             * @memberof coop.rchain
             * @namespace
             */
            var casper = {};

            casper.protocol = (function() {

                /**
                 * Namespace protocol.
                 * @memberof coop.rchain.casper
                 * @namespace
                 */
                var protocol = {};

                protocol.HasBlockRequest = (function() {

                    /**
                     * Properties of a HasBlockRequest.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IHasBlockRequest
                     * @property {Uint8Array|null} [hash] HasBlockRequest hash
                     */

                    /**
                     * Constructs a new HasBlockRequest.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a HasBlockRequest.
                     * @implements IHasBlockRequest
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IHasBlockRequest=} [properties] Properties to set
                     */
                    function HasBlockRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * HasBlockRequest hash.
                     * @member {Uint8Array} hash
                     * @memberof coop.rchain.casper.protocol.HasBlockRequest
                     * @instance
                     */
                    HasBlockRequest.prototype.hash = $util.newBuffer([]);

                    /**
                     * Creates a new HasBlockRequest instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.HasBlockRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.IHasBlockRequest=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.HasBlockRequest} HasBlockRequest instance
                     */
                    HasBlockRequest.create = function create(properties) {
                        return new HasBlockRequest(properties);
                    };

                    /**
                     * Encodes the specified HasBlockRequest message. Does not implicitly {@link coop.rchain.casper.protocol.HasBlockRequest.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.HasBlockRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.IHasBlockRequest} message HasBlockRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HasBlockRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
                        return writer;
                    };

                    /**
                     * Encodes the specified HasBlockRequest message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.HasBlockRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.HasBlockRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.IHasBlockRequest} message HasBlockRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HasBlockRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a HasBlockRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.HasBlockRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.HasBlockRequest} HasBlockRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HasBlockRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.HasBlockRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.hash = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a HasBlockRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.HasBlockRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.HasBlockRequest} HasBlockRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HasBlockRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a HasBlockRequest message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.HasBlockRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    HasBlockRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                                return "hash: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a HasBlockRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.HasBlockRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.HasBlockRequest} HasBlockRequest
                     */
                    HasBlockRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.HasBlockRequest)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.HasBlockRequest();
                        if (object.hash != null)
                            if (typeof object.hash === "string")
                                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                            else if (object.hash.length)
                                message.hash = object.hash;
                        return message;
                    };

                    /**
                     * Creates a plain object from a HasBlockRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.HasBlockRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.HasBlockRequest} message HasBlockRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    HasBlockRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.hash = "";
                            else {
                                object.hash = [];
                                if (options.bytes !== Array)
                                    object.hash = $util.newBuffer(object.hash);
                            }
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                        return object;
                    };

                    /**
                     * Converts this HasBlockRequest to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.HasBlockRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    HasBlockRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return HasBlockRequest;
                })();

                protocol.HasBlock = (function() {

                    /**
                     * Properties of a HasBlock.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IHasBlock
                     * @property {Uint8Array|null} [hash] HasBlock hash
                     */

                    /**
                     * Constructs a new HasBlock.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a HasBlock.
                     * @implements IHasBlock
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IHasBlock=} [properties] Properties to set
                     */
                    function HasBlock(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * HasBlock hash.
                     * @member {Uint8Array} hash
                     * @memberof coop.rchain.casper.protocol.HasBlock
                     * @instance
                     */
                    HasBlock.prototype.hash = $util.newBuffer([]);

                    /**
                     * Creates a new HasBlock instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.HasBlock
                     * @static
                     * @param {coop.rchain.casper.protocol.IHasBlock=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.HasBlock} HasBlock instance
                     */
                    HasBlock.create = function create(properties) {
                        return new HasBlock(properties);
                    };

                    /**
                     * Encodes the specified HasBlock message. Does not implicitly {@link coop.rchain.casper.protocol.HasBlock.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.HasBlock
                     * @static
                     * @param {coop.rchain.casper.protocol.IHasBlock} message HasBlock message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HasBlock.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
                        return writer;
                    };

                    /**
                     * Encodes the specified HasBlock message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.HasBlock.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.HasBlock
                     * @static
                     * @param {coop.rchain.casper.protocol.IHasBlock} message HasBlock message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HasBlock.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a HasBlock message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.HasBlock
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.HasBlock} HasBlock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HasBlock.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.HasBlock();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.hash = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a HasBlock message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.HasBlock
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.HasBlock} HasBlock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HasBlock.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a HasBlock message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.HasBlock
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    HasBlock.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                                return "hash: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a HasBlock message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.HasBlock
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.HasBlock} HasBlock
                     */
                    HasBlock.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.HasBlock)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.HasBlock();
                        if (object.hash != null)
                            if (typeof object.hash === "string")
                                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                            else if (object.hash.length)
                                message.hash = object.hash;
                        return message;
                    };

                    /**
                     * Creates a plain object from a HasBlock message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.HasBlock
                     * @static
                     * @param {coop.rchain.casper.protocol.HasBlock} message HasBlock
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    HasBlock.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.hash = "";
                            else {
                                object.hash = [];
                                if (options.bytes !== Array)
                                    object.hash = $util.newBuffer(object.hash);
                            }
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                        return object;
                    };

                    /**
                     * Converts this HasBlock to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.HasBlock
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    HasBlock.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return HasBlock;
                })();

                protocol.BlockRequest = (function() {

                    /**
                     * Properties of a BlockRequest.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IBlockRequest
                     * @property {Uint8Array|null} [hash] BlockRequest hash
                     */

                    /**
                     * Constructs a new BlockRequest.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a BlockRequest.
                     * @implements IBlockRequest
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IBlockRequest=} [properties] Properties to set
                     */
                    function BlockRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BlockRequest hash.
                     * @member {Uint8Array} hash
                     * @memberof coop.rchain.casper.protocol.BlockRequest
                     * @instance
                     */
                    BlockRequest.prototype.hash = $util.newBuffer([]);

                    /**
                     * Creates a new BlockRequest instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.BlockRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.IBlockRequest=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.BlockRequest} BlockRequest instance
                     */
                    BlockRequest.create = function create(properties) {
                        return new BlockRequest(properties);
                    };

                    /**
                     * Encodes the specified BlockRequest message. Does not implicitly {@link coop.rchain.casper.protocol.BlockRequest.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.BlockRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.IBlockRequest} message BlockRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BlockRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
                        return writer;
                    };

                    /**
                     * Encodes the specified BlockRequest message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.BlockRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.BlockRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.IBlockRequest} message BlockRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BlockRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BlockRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.BlockRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.BlockRequest} BlockRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BlockRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.BlockRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.hash = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BlockRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.BlockRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.BlockRequest} BlockRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BlockRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BlockRequest message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.BlockRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BlockRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                                return "hash: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a BlockRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.BlockRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.BlockRequest} BlockRequest
                     */
                    BlockRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.BlockRequest)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.BlockRequest();
                        if (object.hash != null)
                            if (typeof object.hash === "string")
                                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                            else if (object.hash.length)
                                message.hash = object.hash;
                        return message;
                    };

                    /**
                     * Creates a plain object from a BlockRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.BlockRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.BlockRequest} message BlockRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BlockRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.hash = "";
                            else {
                                object.hash = [];
                                if (options.bytes !== Array)
                                    object.hash = $util.newBuffer(object.hash);
                            }
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                        return object;
                    };

                    /**
                     * Converts this BlockRequest to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.BlockRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BlockRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlockRequest;
                })();

                protocol.ForkChoiceTipRequest = (function() {

                    /**
                     * Properties of a ForkChoiceTipRequest.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IForkChoiceTipRequest
                     */

                    /**
                     * Constructs a new ForkChoiceTipRequest.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a ForkChoiceTipRequest.
                     * @implements IForkChoiceTipRequest
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IForkChoiceTipRequest=} [properties] Properties to set
                     */
                    function ForkChoiceTipRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new ForkChoiceTipRequest instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.ForkChoiceTipRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.IForkChoiceTipRequest=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.ForkChoiceTipRequest} ForkChoiceTipRequest instance
                     */
                    ForkChoiceTipRequest.create = function create(properties) {
                        return new ForkChoiceTipRequest(properties);
                    };

                    /**
                     * Encodes the specified ForkChoiceTipRequest message. Does not implicitly {@link coop.rchain.casper.protocol.ForkChoiceTipRequest.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.ForkChoiceTipRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.IForkChoiceTipRequest} message ForkChoiceTipRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ForkChoiceTipRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified ForkChoiceTipRequest message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.ForkChoiceTipRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.ForkChoiceTipRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.IForkChoiceTipRequest} message ForkChoiceTipRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ForkChoiceTipRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ForkChoiceTipRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.ForkChoiceTipRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.ForkChoiceTipRequest} ForkChoiceTipRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ForkChoiceTipRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ForkChoiceTipRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ForkChoiceTipRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.ForkChoiceTipRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.ForkChoiceTipRequest} ForkChoiceTipRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ForkChoiceTipRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ForkChoiceTipRequest message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.ForkChoiceTipRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ForkChoiceTipRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a ForkChoiceTipRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.ForkChoiceTipRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.ForkChoiceTipRequest} ForkChoiceTipRequest
                     */
                    ForkChoiceTipRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ForkChoiceTipRequest)
                            return object;
                        return new $root.coop.rchain.casper.protocol.ForkChoiceTipRequest();
                    };

                    /**
                     * Creates a plain object from a ForkChoiceTipRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.ForkChoiceTipRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.ForkChoiceTipRequest} message ForkChoiceTipRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ForkChoiceTipRequest.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this ForkChoiceTipRequest to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.ForkChoiceTipRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ForkChoiceTipRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ForkChoiceTipRequest;
                })();

                protocol.ApprovedBlockCandidate = (function() {

                    /**
                     * Properties of an ApprovedBlockCandidate.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IApprovedBlockCandidate
                     * @property {coop.rchain.casper.protocol.IBlockMessage|null} [block] ApprovedBlockCandidate block
                     * @property {number|null} [requiredSigs] ApprovedBlockCandidate requiredSigs
                     */

                    /**
                     * Constructs a new ApprovedBlockCandidate.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents an ApprovedBlockCandidate.
                     * @implements IApprovedBlockCandidate
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IApprovedBlockCandidate=} [properties] Properties to set
                     */
                    function ApprovedBlockCandidate(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ApprovedBlockCandidate block.
                     * @member {coop.rchain.casper.protocol.IBlockMessage|null|undefined} block
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockCandidate
                     * @instance
                     */
                    ApprovedBlockCandidate.prototype.block = null;

                    /**
                     * ApprovedBlockCandidate requiredSigs.
                     * @member {number} requiredSigs
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockCandidate
                     * @instance
                     */
                    ApprovedBlockCandidate.prototype.requiredSigs = 0;

                    /**
                     * Creates a new ApprovedBlockCandidate instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockCandidate
                     * @static
                     * @param {coop.rchain.casper.protocol.IApprovedBlockCandidate=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.ApprovedBlockCandidate} ApprovedBlockCandidate instance
                     */
                    ApprovedBlockCandidate.create = function create(properties) {
                        return new ApprovedBlockCandidate(properties);
                    };

                    /**
                     * Encodes the specified ApprovedBlockCandidate message. Does not implicitly {@link coop.rchain.casper.protocol.ApprovedBlockCandidate.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockCandidate
                     * @static
                     * @param {coop.rchain.casper.protocol.IApprovedBlockCandidate} message ApprovedBlockCandidate message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ApprovedBlockCandidate.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.block != null && message.hasOwnProperty("block"))
                            $root.coop.rchain.casper.protocol.BlockMessage.encode(message.block, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.requiredSigs != null && message.hasOwnProperty("requiredSigs"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.requiredSigs);
                        return writer;
                    };

                    /**
                     * Encodes the specified ApprovedBlockCandidate message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.ApprovedBlockCandidate.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockCandidate
                     * @static
                     * @param {coop.rchain.casper.protocol.IApprovedBlockCandidate} message ApprovedBlockCandidate message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ApprovedBlockCandidate.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ApprovedBlockCandidate message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockCandidate
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.ApprovedBlockCandidate} ApprovedBlockCandidate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ApprovedBlockCandidate.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ApprovedBlockCandidate();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.block = $root.coop.rchain.casper.protocol.BlockMessage.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.requiredSigs = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an ApprovedBlockCandidate message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockCandidate
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.ApprovedBlockCandidate} ApprovedBlockCandidate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ApprovedBlockCandidate.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ApprovedBlockCandidate message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockCandidate
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ApprovedBlockCandidate.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.block != null && message.hasOwnProperty("block")) {
                            var error = $root.coop.rchain.casper.protocol.BlockMessage.verify(message.block);
                            if (error)
                                return "block." + error;
                        }
                        if (message.requiredSigs != null && message.hasOwnProperty("requiredSigs"))
                            if (!$util.isInteger(message.requiredSigs))
                                return "requiredSigs: integer expected";
                        return null;
                    };

                    /**
                     * Creates an ApprovedBlockCandidate message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockCandidate
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.ApprovedBlockCandidate} ApprovedBlockCandidate
                     */
                    ApprovedBlockCandidate.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ApprovedBlockCandidate)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ApprovedBlockCandidate();
                        if (object.block != null) {
                            if (typeof object.block !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.ApprovedBlockCandidate.block: object expected");
                            message.block = $root.coop.rchain.casper.protocol.BlockMessage.fromObject(object.block);
                        }
                        if (object.requiredSigs != null)
                            message.requiredSigs = object.requiredSigs | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from an ApprovedBlockCandidate message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockCandidate
                     * @static
                     * @param {coop.rchain.casper.protocol.ApprovedBlockCandidate} message ApprovedBlockCandidate
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ApprovedBlockCandidate.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.block = null;
                            object.requiredSigs = 0;
                        }
                        if (message.block != null && message.hasOwnProperty("block"))
                            object.block = $root.coop.rchain.casper.protocol.BlockMessage.toObject(message.block, options);
                        if (message.requiredSigs != null && message.hasOwnProperty("requiredSigs"))
                            object.requiredSigs = message.requiredSigs;
                        return object;
                    };

                    /**
                     * Converts this ApprovedBlockCandidate to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockCandidate
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ApprovedBlockCandidate.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ApprovedBlockCandidate;
                })();

                protocol.UnapprovedBlock = (function() {

                    /**
                     * Properties of an UnapprovedBlock.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IUnapprovedBlock
                     * @property {coop.rchain.casper.protocol.IApprovedBlockCandidate|null} [candidate] UnapprovedBlock candidate
                     * @property {number|Long|null} [timestamp] UnapprovedBlock timestamp
                     * @property {number|Long|null} [duration] UnapprovedBlock duration
                     */

                    /**
                     * Constructs a new UnapprovedBlock.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents an UnapprovedBlock.
                     * @implements IUnapprovedBlock
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IUnapprovedBlock=} [properties] Properties to set
                     */
                    function UnapprovedBlock(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UnapprovedBlock candidate.
                     * @member {coop.rchain.casper.protocol.IApprovedBlockCandidate|null|undefined} candidate
                     * @memberof coop.rchain.casper.protocol.UnapprovedBlock
                     * @instance
                     */
                    UnapprovedBlock.prototype.candidate = null;

                    /**
                     * UnapprovedBlock timestamp.
                     * @member {number|Long} timestamp
                     * @memberof coop.rchain.casper.protocol.UnapprovedBlock
                     * @instance
                     */
                    UnapprovedBlock.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * UnapprovedBlock duration.
                     * @member {number|Long} duration
                     * @memberof coop.rchain.casper.protocol.UnapprovedBlock
                     * @instance
                     */
                    UnapprovedBlock.prototype.duration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new UnapprovedBlock instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.UnapprovedBlock
                     * @static
                     * @param {coop.rchain.casper.protocol.IUnapprovedBlock=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.UnapprovedBlock} UnapprovedBlock instance
                     */
                    UnapprovedBlock.create = function create(properties) {
                        return new UnapprovedBlock(properties);
                    };

                    /**
                     * Encodes the specified UnapprovedBlock message. Does not implicitly {@link coop.rchain.casper.protocol.UnapprovedBlock.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.UnapprovedBlock
                     * @static
                     * @param {coop.rchain.casper.protocol.IUnapprovedBlock} message UnapprovedBlock message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UnapprovedBlock.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.candidate != null && message.hasOwnProperty("candidate"))
                            $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.encode(message.candidate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
                        if (message.duration != null && message.hasOwnProperty("duration"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.duration);
                        return writer;
                    };

                    /**
                     * Encodes the specified UnapprovedBlock message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.UnapprovedBlock.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.UnapprovedBlock
                     * @static
                     * @param {coop.rchain.casper.protocol.IUnapprovedBlock} message UnapprovedBlock message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UnapprovedBlock.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UnapprovedBlock message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.UnapprovedBlock
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.UnapprovedBlock} UnapprovedBlock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UnapprovedBlock.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.UnapprovedBlock();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.timestamp = reader.int64();
                                break;
                            case 3:
                                message.duration = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UnapprovedBlock message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.UnapprovedBlock
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.UnapprovedBlock} UnapprovedBlock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UnapprovedBlock.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UnapprovedBlock message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.UnapprovedBlock
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UnapprovedBlock.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.candidate != null && message.hasOwnProperty("candidate")) {
                            var error = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.verify(message.candidate);
                            if (error)
                                return "candidate." + error;
                        }
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.duration != null && message.hasOwnProperty("duration"))
                            if (!$util.isInteger(message.duration) && !(message.duration && $util.isInteger(message.duration.low) && $util.isInteger(message.duration.high)))
                                return "duration: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates an UnapprovedBlock message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.UnapprovedBlock
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.UnapprovedBlock} UnapprovedBlock
                     */
                    UnapprovedBlock.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.UnapprovedBlock)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.UnapprovedBlock();
                        if (object.candidate != null) {
                            if (typeof object.candidate !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.UnapprovedBlock.candidate: object expected");
                            message.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.fromObject(object.candidate);
                        }
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        if (object.duration != null)
                            if ($util.Long)
                                (message.duration = $util.Long.fromValue(object.duration)).unsigned = false;
                            else if (typeof object.duration === "string")
                                message.duration = parseInt(object.duration, 10);
                            else if (typeof object.duration === "number")
                                message.duration = object.duration;
                            else if (typeof object.duration === "object")
                                message.duration = new $util.LongBits(object.duration.low >>> 0, object.duration.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from an UnapprovedBlock message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.UnapprovedBlock
                     * @static
                     * @param {coop.rchain.casper.protocol.UnapprovedBlock} message UnapprovedBlock
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UnapprovedBlock.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.candidate = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.duration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.duration = options.longs === String ? "0" : 0;
                        }
                        if (message.candidate != null && message.hasOwnProperty("candidate"))
                            object.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.toObject(message.candidate, options);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        if (message.duration != null && message.hasOwnProperty("duration"))
                            if (typeof message.duration === "number")
                                object.duration = options.longs === String ? String(message.duration) : message.duration;
                            else
                                object.duration = options.longs === String ? $util.Long.prototype.toString.call(message.duration) : options.longs === Number ? new $util.LongBits(message.duration.low >>> 0, message.duration.high >>> 0).toNumber() : message.duration;
                        return object;
                    };

                    /**
                     * Converts this UnapprovedBlock to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.UnapprovedBlock
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UnapprovedBlock.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UnapprovedBlock;
                })();

                protocol.Signature = (function() {

                    /**
                     * Properties of a Signature.
                     * @memberof coop.rchain.casper.protocol
                     * @interface ISignature
                     * @property {Uint8Array|null} [publicKey] Signature publicKey
                     * @property {string|null} [algorithm] Signature algorithm
                     * @property {Uint8Array|null} [sig] Signature sig
                     */

                    /**
                     * Constructs a new Signature.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a Signature.
                     * @implements ISignature
                     * @constructor
                     * @param {coop.rchain.casper.protocol.ISignature=} [properties] Properties to set
                     */
                    function Signature(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Signature publicKey.
                     * @member {Uint8Array} publicKey
                     * @memberof coop.rchain.casper.protocol.Signature
                     * @instance
                     */
                    Signature.prototype.publicKey = $util.newBuffer([]);

                    /**
                     * Signature algorithm.
                     * @member {string} algorithm
                     * @memberof coop.rchain.casper.protocol.Signature
                     * @instance
                     */
                    Signature.prototype.algorithm = "";

                    /**
                     * Signature sig.
                     * @member {Uint8Array} sig
                     * @memberof coop.rchain.casper.protocol.Signature
                     * @instance
                     */
                    Signature.prototype.sig = $util.newBuffer([]);

                    /**
                     * Creates a new Signature instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.Signature
                     * @static
                     * @param {coop.rchain.casper.protocol.ISignature=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.Signature} Signature instance
                     */
                    Signature.create = function create(properties) {
                        return new Signature(properties);
                    };

                    /**
                     * Encodes the specified Signature message. Does not implicitly {@link coop.rchain.casper.protocol.Signature.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.Signature
                     * @static
                     * @param {coop.rchain.casper.protocol.ISignature} message Signature message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Signature.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
                        if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.algorithm);
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.sig);
                        return writer;
                    };

                    /**
                     * Encodes the specified Signature message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.Signature.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.Signature
                     * @static
                     * @param {coop.rchain.casper.protocol.ISignature} message Signature message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Signature.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Signature message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.Signature
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.Signature} Signature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Signature.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.Signature();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.publicKey = reader.bytes();
                                break;
                            case 2:
                                message.algorithm = reader.string();
                                break;
                            case 3:
                                message.sig = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Signature message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.Signature
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.Signature} Signature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Signature.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Signature message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.Signature
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Signature.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                            if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                                return "publicKey: buffer expected";
                        if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                            if (!$util.isString(message.algorithm))
                                return "algorithm: string expected";
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                                return "sig: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a Signature message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.Signature
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.Signature} Signature
                     */
                    Signature.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.Signature)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.Signature();
                        if (object.publicKey != null)
                            if (typeof object.publicKey === "string")
                                $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                            else if (object.publicKey.length)
                                message.publicKey = object.publicKey;
                        if (object.algorithm != null)
                            message.algorithm = String(object.algorithm);
                        if (object.sig != null)
                            if (typeof object.sig === "string")
                                $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
                            else if (object.sig.length)
                                message.sig = object.sig;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Signature message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.Signature
                     * @static
                     * @param {coop.rchain.casper.protocol.Signature} message Signature
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Signature.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.publicKey = "";
                            else {
                                object.publicKey = [];
                                if (options.bytes !== Array)
                                    object.publicKey = $util.newBuffer(object.publicKey);
                            }
                            object.algorithm = "";
                            if (options.bytes === String)
                                object.sig = "";
                            else {
                                object.sig = [];
                                if (options.bytes !== Array)
                                    object.sig = $util.newBuffer(object.sig);
                            }
                        }
                        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                            object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
                        if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                            object.algorithm = message.algorithm;
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
                        return object;
                    };

                    /**
                     * Converts this Signature to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.Signature
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Signature.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Signature;
                })();

                protocol.BlockApproval = (function() {

                    /**
                     * Properties of a BlockApproval.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IBlockApproval
                     * @property {coop.rchain.casper.protocol.IApprovedBlockCandidate|null} [candidate] BlockApproval candidate
                     * @property {coop.rchain.casper.protocol.ISignature|null} [sig] BlockApproval sig
                     */

                    /**
                     * Constructs a new BlockApproval.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a BlockApproval.
                     * @implements IBlockApproval
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IBlockApproval=} [properties] Properties to set
                     */
                    function BlockApproval(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BlockApproval candidate.
                     * @member {coop.rchain.casper.protocol.IApprovedBlockCandidate|null|undefined} candidate
                     * @memberof coop.rchain.casper.protocol.BlockApproval
                     * @instance
                     */
                    BlockApproval.prototype.candidate = null;

                    /**
                     * BlockApproval sig.
                     * @member {coop.rchain.casper.protocol.ISignature|null|undefined} sig
                     * @memberof coop.rchain.casper.protocol.BlockApproval
                     * @instance
                     */
                    BlockApproval.prototype.sig = null;

                    /**
                     * Creates a new BlockApproval instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.BlockApproval
                     * @static
                     * @param {coop.rchain.casper.protocol.IBlockApproval=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.BlockApproval} BlockApproval instance
                     */
                    BlockApproval.create = function create(properties) {
                        return new BlockApproval(properties);
                    };

                    /**
                     * Encodes the specified BlockApproval message. Does not implicitly {@link coop.rchain.casper.protocol.BlockApproval.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.BlockApproval
                     * @static
                     * @param {coop.rchain.casper.protocol.IBlockApproval} message BlockApproval message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BlockApproval.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.candidate != null && message.hasOwnProperty("candidate"))
                            $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.encode(message.candidate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            $root.coop.rchain.casper.protocol.Signature.encode(message.sig, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified BlockApproval message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.BlockApproval.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.BlockApproval
                     * @static
                     * @param {coop.rchain.casper.protocol.IBlockApproval} message BlockApproval message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BlockApproval.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BlockApproval message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.BlockApproval
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.BlockApproval} BlockApproval
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BlockApproval.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.BlockApproval();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.sig = $root.coop.rchain.casper.protocol.Signature.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BlockApproval message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.BlockApproval
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.BlockApproval} BlockApproval
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BlockApproval.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BlockApproval message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.BlockApproval
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BlockApproval.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.candidate != null && message.hasOwnProperty("candidate")) {
                            var error = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.verify(message.candidate);
                            if (error)
                                return "candidate." + error;
                        }
                        if (message.sig != null && message.hasOwnProperty("sig")) {
                            var error = $root.coop.rchain.casper.protocol.Signature.verify(message.sig);
                            if (error)
                                return "sig." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a BlockApproval message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.BlockApproval
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.BlockApproval} BlockApproval
                     */
                    BlockApproval.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.BlockApproval)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.BlockApproval();
                        if (object.candidate != null) {
                            if (typeof object.candidate !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.BlockApproval.candidate: object expected");
                            message.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.fromObject(object.candidate);
                        }
                        if (object.sig != null) {
                            if (typeof object.sig !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.BlockApproval.sig: object expected");
                            message.sig = $root.coop.rchain.casper.protocol.Signature.fromObject(object.sig);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a BlockApproval message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.BlockApproval
                     * @static
                     * @param {coop.rchain.casper.protocol.BlockApproval} message BlockApproval
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BlockApproval.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.candidate = null;
                            object.sig = null;
                        }
                        if (message.candidate != null && message.hasOwnProperty("candidate"))
                            object.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.toObject(message.candidate, options);
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            object.sig = $root.coop.rchain.casper.protocol.Signature.toObject(message.sig, options);
                        return object;
                    };

                    /**
                     * Converts this BlockApproval to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.BlockApproval
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BlockApproval.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlockApproval;
                })();

                protocol.ApprovedBlock = (function() {

                    /**
                     * Properties of an ApprovedBlock.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IApprovedBlock
                     * @property {coop.rchain.casper.protocol.IApprovedBlockCandidate|null} [candidate] ApprovedBlock candidate
                     * @property {Array.<coop.rchain.casper.protocol.ISignature>|null} [sigs] ApprovedBlock sigs
                     */

                    /**
                     * Constructs a new ApprovedBlock.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents an ApprovedBlock.
                     * @implements IApprovedBlock
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IApprovedBlock=} [properties] Properties to set
                     */
                    function ApprovedBlock(properties) {
                        this.sigs = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ApprovedBlock candidate.
                     * @member {coop.rchain.casper.protocol.IApprovedBlockCandidate|null|undefined} candidate
                     * @memberof coop.rchain.casper.protocol.ApprovedBlock
                     * @instance
                     */
                    ApprovedBlock.prototype.candidate = null;

                    /**
                     * ApprovedBlock sigs.
                     * @member {Array.<coop.rchain.casper.protocol.ISignature>} sigs
                     * @memberof coop.rchain.casper.protocol.ApprovedBlock
                     * @instance
                     */
                    ApprovedBlock.prototype.sigs = $util.emptyArray;

                    /**
                     * Creates a new ApprovedBlock instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.ApprovedBlock
                     * @static
                     * @param {coop.rchain.casper.protocol.IApprovedBlock=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.ApprovedBlock} ApprovedBlock instance
                     */
                    ApprovedBlock.create = function create(properties) {
                        return new ApprovedBlock(properties);
                    };

                    /**
                     * Encodes the specified ApprovedBlock message. Does not implicitly {@link coop.rchain.casper.protocol.ApprovedBlock.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.ApprovedBlock
                     * @static
                     * @param {coop.rchain.casper.protocol.IApprovedBlock} message ApprovedBlock message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ApprovedBlock.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.candidate != null && message.hasOwnProperty("candidate"))
                            $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.encode(message.candidate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.sigs != null && message.sigs.length)
                            for (var i = 0; i < message.sigs.length; ++i)
                                $root.coop.rchain.casper.protocol.Signature.encode(message.sigs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ApprovedBlock message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.ApprovedBlock.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.ApprovedBlock
                     * @static
                     * @param {coop.rchain.casper.protocol.IApprovedBlock} message ApprovedBlock message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ApprovedBlock.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ApprovedBlock message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.ApprovedBlock
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.ApprovedBlock} ApprovedBlock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ApprovedBlock.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ApprovedBlock();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.decode(reader, reader.uint32());
                                break;
                            case 2:
                                if (!(message.sigs && message.sigs.length))
                                    message.sigs = [];
                                message.sigs.push($root.coop.rchain.casper.protocol.Signature.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an ApprovedBlock message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.ApprovedBlock
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.ApprovedBlock} ApprovedBlock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ApprovedBlock.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ApprovedBlock message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.ApprovedBlock
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ApprovedBlock.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.candidate != null && message.hasOwnProperty("candidate")) {
                            var error = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.verify(message.candidate);
                            if (error)
                                return "candidate." + error;
                        }
                        if (message.sigs != null && message.hasOwnProperty("sigs")) {
                            if (!Array.isArray(message.sigs))
                                return "sigs: array expected";
                            for (var i = 0; i < message.sigs.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Signature.verify(message.sigs[i]);
                                if (error)
                                    return "sigs." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an ApprovedBlock message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.ApprovedBlock
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.ApprovedBlock} ApprovedBlock
                     */
                    ApprovedBlock.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ApprovedBlock)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ApprovedBlock();
                        if (object.candidate != null) {
                            if (typeof object.candidate !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.ApprovedBlock.candidate: object expected");
                            message.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.fromObject(object.candidate);
                        }
                        if (object.sigs) {
                            if (!Array.isArray(object.sigs))
                                throw TypeError(".coop.rchain.casper.protocol.ApprovedBlock.sigs: array expected");
                            message.sigs = [];
                            for (var i = 0; i < object.sigs.length; ++i) {
                                if (typeof object.sigs[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.ApprovedBlock.sigs: object expected");
                                message.sigs[i] = $root.coop.rchain.casper.protocol.Signature.fromObject(object.sigs[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an ApprovedBlock message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.ApprovedBlock
                     * @static
                     * @param {coop.rchain.casper.protocol.ApprovedBlock} message ApprovedBlock
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ApprovedBlock.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.sigs = [];
                        if (options.defaults)
                            object.candidate = null;
                        if (message.candidate != null && message.hasOwnProperty("candidate"))
                            object.candidate = $root.coop.rchain.casper.protocol.ApprovedBlockCandidate.toObject(message.candidate, options);
                        if (message.sigs && message.sigs.length) {
                            object.sigs = [];
                            for (var j = 0; j < message.sigs.length; ++j)
                                object.sigs[j] = $root.coop.rchain.casper.protocol.Signature.toObject(message.sigs[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ApprovedBlock to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.ApprovedBlock
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ApprovedBlock.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ApprovedBlock;
                })();

                protocol.ApprovedBlockRequest = (function() {

                    /**
                     * Properties of an ApprovedBlockRequest.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IApprovedBlockRequest
                     * @property {string|null} [identifier] ApprovedBlockRequest identifier
                     */

                    /**
                     * Constructs a new ApprovedBlockRequest.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents an ApprovedBlockRequest.
                     * @implements IApprovedBlockRequest
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IApprovedBlockRequest=} [properties] Properties to set
                     */
                    function ApprovedBlockRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ApprovedBlockRequest identifier.
                     * @member {string} identifier
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockRequest
                     * @instance
                     */
                    ApprovedBlockRequest.prototype.identifier = "";

                    /**
                     * Creates a new ApprovedBlockRequest instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.IApprovedBlockRequest=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.ApprovedBlockRequest} ApprovedBlockRequest instance
                     */
                    ApprovedBlockRequest.create = function create(properties) {
                        return new ApprovedBlockRequest(properties);
                    };

                    /**
                     * Encodes the specified ApprovedBlockRequest message. Does not implicitly {@link coop.rchain.casper.protocol.ApprovedBlockRequest.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.IApprovedBlockRequest} message ApprovedBlockRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ApprovedBlockRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.identifier);
                        return writer;
                    };

                    /**
                     * Encodes the specified ApprovedBlockRequest message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.ApprovedBlockRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.IApprovedBlockRequest} message ApprovedBlockRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ApprovedBlockRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ApprovedBlockRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.ApprovedBlockRequest} ApprovedBlockRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ApprovedBlockRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ApprovedBlockRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.identifier = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an ApprovedBlockRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.ApprovedBlockRequest} ApprovedBlockRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ApprovedBlockRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ApprovedBlockRequest message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ApprovedBlockRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            if (!$util.isString(message.identifier))
                                return "identifier: string expected";
                        return null;
                    };

                    /**
                     * Creates an ApprovedBlockRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.ApprovedBlockRequest} ApprovedBlockRequest
                     */
                    ApprovedBlockRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ApprovedBlockRequest)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ApprovedBlockRequest();
                        if (object.identifier != null)
                            message.identifier = String(object.identifier);
                        return message;
                    };

                    /**
                     * Creates a plain object from an ApprovedBlockRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockRequest
                     * @static
                     * @param {coop.rchain.casper.protocol.ApprovedBlockRequest} message ApprovedBlockRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ApprovedBlockRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.identifier = "";
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            object.identifier = message.identifier;
                        return object;
                    };

                    /**
                     * Converts this ApprovedBlockRequest to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.ApprovedBlockRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ApprovedBlockRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ApprovedBlockRequest;
                })();

                protocol.NoApprovedBlockAvailable = (function() {

                    /**
                     * Properties of a NoApprovedBlockAvailable.
                     * @memberof coop.rchain.casper.protocol
                     * @interface INoApprovedBlockAvailable
                     * @property {string|null} [identifier] NoApprovedBlockAvailable identifier
                     * @property {string|null} [nodeIdentifer] NoApprovedBlockAvailable nodeIdentifer
                     */

                    /**
                     * Constructs a new NoApprovedBlockAvailable.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a NoApprovedBlockAvailable.
                     * @implements INoApprovedBlockAvailable
                     * @constructor
                     * @param {coop.rchain.casper.protocol.INoApprovedBlockAvailable=} [properties] Properties to set
                     */
                    function NoApprovedBlockAvailable(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * NoApprovedBlockAvailable identifier.
                     * @member {string} identifier
                     * @memberof coop.rchain.casper.protocol.NoApprovedBlockAvailable
                     * @instance
                     */
                    NoApprovedBlockAvailable.prototype.identifier = "";

                    /**
                     * NoApprovedBlockAvailable nodeIdentifer.
                     * @member {string} nodeIdentifer
                     * @memberof coop.rchain.casper.protocol.NoApprovedBlockAvailable
                     * @instance
                     */
                    NoApprovedBlockAvailable.prototype.nodeIdentifer = "";

                    /**
                     * Creates a new NoApprovedBlockAvailable instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.NoApprovedBlockAvailable
                     * @static
                     * @param {coop.rchain.casper.protocol.INoApprovedBlockAvailable=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.NoApprovedBlockAvailable} NoApprovedBlockAvailable instance
                     */
                    NoApprovedBlockAvailable.create = function create(properties) {
                        return new NoApprovedBlockAvailable(properties);
                    };

                    /**
                     * Encodes the specified NoApprovedBlockAvailable message. Does not implicitly {@link coop.rchain.casper.protocol.NoApprovedBlockAvailable.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.NoApprovedBlockAvailable
                     * @static
                     * @param {coop.rchain.casper.protocol.INoApprovedBlockAvailable} message NoApprovedBlockAvailable message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NoApprovedBlockAvailable.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.identifier);
                        if (message.nodeIdentifer != null && message.hasOwnProperty("nodeIdentifer"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nodeIdentifer);
                        return writer;
                    };

                    /**
                     * Encodes the specified NoApprovedBlockAvailable message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.NoApprovedBlockAvailable.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.NoApprovedBlockAvailable
                     * @static
                     * @param {coop.rchain.casper.protocol.INoApprovedBlockAvailable} message NoApprovedBlockAvailable message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NoApprovedBlockAvailable.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a NoApprovedBlockAvailable message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.NoApprovedBlockAvailable
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.NoApprovedBlockAvailable} NoApprovedBlockAvailable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NoApprovedBlockAvailable.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.NoApprovedBlockAvailable();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.identifier = reader.string();
                                break;
                            case 2:
                                message.nodeIdentifer = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a NoApprovedBlockAvailable message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.NoApprovedBlockAvailable
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.NoApprovedBlockAvailable} NoApprovedBlockAvailable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NoApprovedBlockAvailable.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a NoApprovedBlockAvailable message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.NoApprovedBlockAvailable
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NoApprovedBlockAvailable.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            if (!$util.isString(message.identifier))
                                return "identifier: string expected";
                        if (message.nodeIdentifer != null && message.hasOwnProperty("nodeIdentifer"))
                            if (!$util.isString(message.nodeIdentifer))
                                return "nodeIdentifer: string expected";
                        return null;
                    };

                    /**
                     * Creates a NoApprovedBlockAvailable message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.NoApprovedBlockAvailable
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.NoApprovedBlockAvailable} NoApprovedBlockAvailable
                     */
                    NoApprovedBlockAvailable.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.NoApprovedBlockAvailable)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.NoApprovedBlockAvailable();
                        if (object.identifier != null)
                            message.identifier = String(object.identifier);
                        if (object.nodeIdentifer != null)
                            message.nodeIdentifer = String(object.nodeIdentifer);
                        return message;
                    };

                    /**
                     * Creates a plain object from a NoApprovedBlockAvailable message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.NoApprovedBlockAvailable
                     * @static
                     * @param {coop.rchain.casper.protocol.NoApprovedBlockAvailable} message NoApprovedBlockAvailable
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NoApprovedBlockAvailable.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.identifier = "";
                            object.nodeIdentifer = "";
                        }
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            object.identifier = message.identifier;
                        if (message.nodeIdentifer != null && message.hasOwnProperty("nodeIdentifer"))
                            object.nodeIdentifer = message.nodeIdentifer;
                        return object;
                    };

                    /**
                     * Converts this NoApprovedBlockAvailable to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.NoApprovedBlockAvailable
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NoApprovedBlockAvailable.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return NoApprovedBlockAvailable;
                })();

                protocol.BlockMessage = (function() {

                    /**
                     * Properties of a BlockMessage.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IBlockMessage
                     * @property {Uint8Array|null} [blockHash] BlockMessage blockHash
                     * @property {coop.rchain.casper.protocol.IHeader|null} [header] BlockMessage header
                     * @property {coop.rchain.casper.protocol.IBody|null} [body] BlockMessage body
                     * @property {Array.<coop.rchain.casper.protocol.IJustification>|null} [justifications] BlockMessage justifications
                     * @property {Uint8Array|null} [sender] BlockMessage sender
                     * @property {number|null} [seqNum] BlockMessage seqNum
                     * @property {Uint8Array|null} [sig] BlockMessage sig
                     * @property {string|null} [sigAlgorithm] BlockMessage sigAlgorithm
                     * @property {string|null} [shardId] BlockMessage shardId
                     * @property {Uint8Array|null} [extraBytes] BlockMessage extraBytes
                     */

                    /**
                     * Constructs a new BlockMessage.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a BlockMessage.
                     * @implements IBlockMessage
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IBlockMessage=} [properties] Properties to set
                     */
                    function BlockMessage(properties) {
                        this.justifications = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BlockMessage blockHash.
                     * @member {Uint8Array} blockHash
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @instance
                     */
                    BlockMessage.prototype.blockHash = $util.newBuffer([]);

                    /**
                     * BlockMessage header.
                     * @member {coop.rchain.casper.protocol.IHeader|null|undefined} header
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @instance
                     */
                    BlockMessage.prototype.header = null;

                    /**
                     * BlockMessage body.
                     * @member {coop.rchain.casper.protocol.IBody|null|undefined} body
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @instance
                     */
                    BlockMessage.prototype.body = null;

                    /**
                     * BlockMessage justifications.
                     * @member {Array.<coop.rchain.casper.protocol.IJustification>} justifications
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @instance
                     */
                    BlockMessage.prototype.justifications = $util.emptyArray;

                    /**
                     * BlockMessage sender.
                     * @member {Uint8Array} sender
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @instance
                     */
                    BlockMessage.prototype.sender = $util.newBuffer([]);

                    /**
                     * BlockMessage seqNum.
                     * @member {number} seqNum
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @instance
                     */
                    BlockMessage.prototype.seqNum = 0;

                    /**
                     * BlockMessage sig.
                     * @member {Uint8Array} sig
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @instance
                     */
                    BlockMessage.prototype.sig = $util.newBuffer([]);

                    /**
                     * BlockMessage sigAlgorithm.
                     * @member {string} sigAlgorithm
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @instance
                     */
                    BlockMessage.prototype.sigAlgorithm = "";

                    /**
                     * BlockMessage shardId.
                     * @member {string} shardId
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @instance
                     */
                    BlockMessage.prototype.shardId = "";

                    /**
                     * BlockMessage extraBytes.
                     * @member {Uint8Array} extraBytes
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @instance
                     */
                    BlockMessage.prototype.extraBytes = $util.newBuffer([]);

                    /**
                     * Creates a new BlockMessage instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @static
                     * @param {coop.rchain.casper.protocol.IBlockMessage=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.BlockMessage} BlockMessage instance
                     */
                    BlockMessage.create = function create(properties) {
                        return new BlockMessage(properties);
                    };

                    /**
                     * Encodes the specified BlockMessage message. Does not implicitly {@link coop.rchain.casper.protocol.BlockMessage.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @static
                     * @param {coop.rchain.casper.protocol.IBlockMessage} message BlockMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BlockMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.blockHash);
                        if (message.header != null && message.hasOwnProperty("header"))
                            $root.coop.rchain.casper.protocol.Header.encode(message.header, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.body != null && message.hasOwnProperty("body"))
                            $root.coop.rchain.casper.protocol.Body.encode(message.body, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.justifications != null && message.justifications.length)
                            for (var i = 0; i < message.justifications.length; ++i)
                                $root.coop.rchain.casper.protocol.Justification.encode(message.justifications[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.sender);
                        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.seqNum);
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.sig);
                        if (message.sigAlgorithm != null && message.hasOwnProperty("sigAlgorithm"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.sigAlgorithm);
                        if (message.shardId != null && message.hasOwnProperty("shardId"))
                            writer.uint32(/* id 9, wireType 2 =*/74).string(message.shardId);
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.extraBytes);
                        return writer;
                    };

                    /**
                     * Encodes the specified BlockMessage message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.BlockMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @static
                     * @param {coop.rchain.casper.protocol.IBlockMessage} message BlockMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BlockMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BlockMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.BlockMessage} BlockMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BlockMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.BlockMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.blockHash = reader.bytes();
                                break;
                            case 2:
                                message.header = $root.coop.rchain.casper.protocol.Header.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.body = $root.coop.rchain.casper.protocol.Body.decode(reader, reader.uint32());
                                break;
                            case 4:
                                if (!(message.justifications && message.justifications.length))
                                    message.justifications = [];
                                message.justifications.push($root.coop.rchain.casper.protocol.Justification.decode(reader, reader.uint32()));
                                break;
                            case 5:
                                message.sender = reader.bytes();
                                break;
                            case 6:
                                message.seqNum = reader.int32();
                                break;
                            case 7:
                                message.sig = reader.bytes();
                                break;
                            case 8:
                                message.sigAlgorithm = reader.string();
                                break;
                            case 9:
                                message.shardId = reader.string();
                                break;
                            case 10:
                                message.extraBytes = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BlockMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.BlockMessage} BlockMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BlockMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BlockMessage message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BlockMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            if (!(message.blockHash && typeof message.blockHash.length === "number" || $util.isString(message.blockHash)))
                                return "blockHash: buffer expected";
                        if (message.header != null && message.hasOwnProperty("header")) {
                            var error = $root.coop.rchain.casper.protocol.Header.verify(message.header);
                            if (error)
                                return "header." + error;
                        }
                        if (message.body != null && message.hasOwnProperty("body")) {
                            var error = $root.coop.rchain.casper.protocol.Body.verify(message.body);
                            if (error)
                                return "body." + error;
                        }
                        if (message.justifications != null && message.hasOwnProperty("justifications")) {
                            if (!Array.isArray(message.justifications))
                                return "justifications: array expected";
                            for (var i = 0; i < message.justifications.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Justification.verify(message.justifications[i]);
                                if (error)
                                    return "justifications." + error;
                            }
                        }
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            if (!(message.sender && typeof message.sender.length === "number" || $util.isString(message.sender)))
                                return "sender: buffer expected";
                        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                            if (!$util.isInteger(message.seqNum))
                                return "seqNum: integer expected";
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                                return "sig: buffer expected";
                        if (message.sigAlgorithm != null && message.hasOwnProperty("sigAlgorithm"))
                            if (!$util.isString(message.sigAlgorithm))
                                return "sigAlgorithm: string expected";
                        if (message.shardId != null && message.hasOwnProperty("shardId"))
                            if (!$util.isString(message.shardId))
                                return "shardId: string expected";
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            if (!(message.extraBytes && typeof message.extraBytes.length === "number" || $util.isString(message.extraBytes)))
                                return "extraBytes: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a BlockMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.BlockMessage} BlockMessage
                     */
                    BlockMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.BlockMessage)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.BlockMessage();
                        if (object.blockHash != null)
                            if (typeof object.blockHash === "string")
                                $util.base64.decode(object.blockHash, message.blockHash = $util.newBuffer($util.base64.length(object.blockHash)), 0);
                            else if (object.blockHash.length)
                                message.blockHash = object.blockHash;
                        if (object.header != null) {
                            if (typeof object.header !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.BlockMessage.header: object expected");
                            message.header = $root.coop.rchain.casper.protocol.Header.fromObject(object.header);
                        }
                        if (object.body != null) {
                            if (typeof object.body !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.BlockMessage.body: object expected");
                            message.body = $root.coop.rchain.casper.protocol.Body.fromObject(object.body);
                        }
                        if (object.justifications) {
                            if (!Array.isArray(object.justifications))
                                throw TypeError(".coop.rchain.casper.protocol.BlockMessage.justifications: array expected");
                            message.justifications = [];
                            for (var i = 0; i < object.justifications.length; ++i) {
                                if (typeof object.justifications[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.BlockMessage.justifications: object expected");
                                message.justifications[i] = $root.coop.rchain.casper.protocol.Justification.fromObject(object.justifications[i]);
                            }
                        }
                        if (object.sender != null)
                            if (typeof object.sender === "string")
                                $util.base64.decode(object.sender, message.sender = $util.newBuffer($util.base64.length(object.sender)), 0);
                            else if (object.sender.length)
                                message.sender = object.sender;
                        if (object.seqNum != null)
                            message.seqNum = object.seqNum | 0;
                        if (object.sig != null)
                            if (typeof object.sig === "string")
                                $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
                            else if (object.sig.length)
                                message.sig = object.sig;
                        if (object.sigAlgorithm != null)
                            message.sigAlgorithm = String(object.sigAlgorithm);
                        if (object.shardId != null)
                            message.shardId = String(object.shardId);
                        if (object.extraBytes != null)
                            if (typeof object.extraBytes === "string")
                                $util.base64.decode(object.extraBytes, message.extraBytes = $util.newBuffer($util.base64.length(object.extraBytes)), 0);
                            else if (object.extraBytes.length)
                                message.extraBytes = object.extraBytes;
                        return message;
                    };

                    /**
                     * Creates a plain object from a BlockMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @static
                     * @param {coop.rchain.casper.protocol.BlockMessage} message BlockMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BlockMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.justifications = [];
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.blockHash = "";
                            else {
                                object.blockHash = [];
                                if (options.bytes !== Array)
                                    object.blockHash = $util.newBuffer(object.blockHash);
                            }
                            object.header = null;
                            object.body = null;
                            if (options.bytes === String)
                                object.sender = "";
                            else {
                                object.sender = [];
                                if (options.bytes !== Array)
                                    object.sender = $util.newBuffer(object.sender);
                            }
                            object.seqNum = 0;
                            if (options.bytes === String)
                                object.sig = "";
                            else {
                                object.sig = [];
                                if (options.bytes !== Array)
                                    object.sig = $util.newBuffer(object.sig);
                            }
                            object.sigAlgorithm = "";
                            object.shardId = "";
                            if (options.bytes === String)
                                object.extraBytes = "";
                            else {
                                object.extraBytes = [];
                                if (options.bytes !== Array)
                                    object.extraBytes = $util.newBuffer(object.extraBytes);
                            }
                        }
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            object.blockHash = options.bytes === String ? $util.base64.encode(message.blockHash, 0, message.blockHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.blockHash) : message.blockHash;
                        if (message.header != null && message.hasOwnProperty("header"))
                            object.header = $root.coop.rchain.casper.protocol.Header.toObject(message.header, options);
                        if (message.body != null && message.hasOwnProperty("body"))
                            object.body = $root.coop.rchain.casper.protocol.Body.toObject(message.body, options);
                        if (message.justifications && message.justifications.length) {
                            object.justifications = [];
                            for (var j = 0; j < message.justifications.length; ++j)
                                object.justifications[j] = $root.coop.rchain.casper.protocol.Justification.toObject(message.justifications[j], options);
                        }
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            object.sender = options.bytes === String ? $util.base64.encode(message.sender, 0, message.sender.length) : options.bytes === Array ? Array.prototype.slice.call(message.sender) : message.sender;
                        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                            object.seqNum = message.seqNum;
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
                        if (message.sigAlgorithm != null && message.hasOwnProperty("sigAlgorithm"))
                            object.sigAlgorithm = message.sigAlgorithm;
                        if (message.shardId != null && message.hasOwnProperty("shardId"))
                            object.shardId = message.shardId;
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            object.extraBytes = options.bytes === String ? $util.base64.encode(message.extraBytes, 0, message.extraBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.extraBytes) : message.extraBytes;
                        return object;
                    };

                    /**
                     * Converts this BlockMessage to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.BlockMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BlockMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlockMessage;
                })();

                protocol.BlockMetadataInternal = (function() {

                    /**
                     * Properties of a BlockMetadataInternal.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IBlockMetadataInternal
                     * @property {Uint8Array|null} [blockHash] BlockMetadataInternal blockHash
                     * @property {Array.<Uint8Array>|null} [parents] BlockMetadataInternal parents
                     * @property {Uint8Array|null} [sender] BlockMetadataInternal sender
                     * @property {Array.<coop.rchain.casper.protocol.IJustification>|null} [justifications] BlockMetadataInternal justifications
                     * @property {Array.<coop.rchain.casper.protocol.IBond>|null} [bonds] BlockMetadataInternal bonds
                     * @property {number|Long|null} [blockNum] BlockMetadataInternal blockNum
                     * @property {number|null} [seqNum] BlockMetadataInternal seqNum
                     * @property {boolean|null} [invalid] BlockMetadataInternal invalid
                     */

                    /**
                     * Constructs a new BlockMetadataInternal.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a BlockMetadataInternal.
                     * @implements IBlockMetadataInternal
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IBlockMetadataInternal=} [properties] Properties to set
                     */
                    function BlockMetadataInternal(properties) {
                        this.parents = [];
                        this.justifications = [];
                        this.bonds = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BlockMetadataInternal blockHash.
                     * @member {Uint8Array} blockHash
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @instance
                     */
                    BlockMetadataInternal.prototype.blockHash = $util.newBuffer([]);

                    /**
                     * BlockMetadataInternal parents.
                     * @member {Array.<Uint8Array>} parents
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @instance
                     */
                    BlockMetadataInternal.prototype.parents = $util.emptyArray;

                    /**
                     * BlockMetadataInternal sender.
                     * @member {Uint8Array} sender
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @instance
                     */
                    BlockMetadataInternal.prototype.sender = $util.newBuffer([]);

                    /**
                     * BlockMetadataInternal justifications.
                     * @member {Array.<coop.rchain.casper.protocol.IJustification>} justifications
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @instance
                     */
                    BlockMetadataInternal.prototype.justifications = $util.emptyArray;

                    /**
                     * BlockMetadataInternal bonds.
                     * @member {Array.<coop.rchain.casper.protocol.IBond>} bonds
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @instance
                     */
                    BlockMetadataInternal.prototype.bonds = $util.emptyArray;

                    /**
                     * BlockMetadataInternal blockNum.
                     * @member {number|Long} blockNum
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @instance
                     */
                    BlockMetadataInternal.prototype.blockNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * BlockMetadataInternal seqNum.
                     * @member {number} seqNum
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @instance
                     */
                    BlockMetadataInternal.prototype.seqNum = 0;

                    /**
                     * BlockMetadataInternal invalid.
                     * @member {boolean} invalid
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @instance
                     */
                    BlockMetadataInternal.prototype.invalid = false;

                    /**
                     * Creates a new BlockMetadataInternal instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @static
                     * @param {coop.rchain.casper.protocol.IBlockMetadataInternal=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.BlockMetadataInternal} BlockMetadataInternal instance
                     */
                    BlockMetadataInternal.create = function create(properties) {
                        return new BlockMetadataInternal(properties);
                    };

                    /**
                     * Encodes the specified BlockMetadataInternal message. Does not implicitly {@link coop.rchain.casper.protocol.BlockMetadataInternal.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @static
                     * @param {coop.rchain.casper.protocol.IBlockMetadataInternal} message BlockMetadataInternal message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BlockMetadataInternal.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.blockHash);
                        if (message.parents != null && message.parents.length)
                            for (var i = 0; i < message.parents.length; ++i)
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.parents[i]);
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.sender);
                        if (message.justifications != null && message.justifications.length)
                            for (var i = 0; i < message.justifications.length; ++i)
                                $root.coop.rchain.casper.protocol.Justification.encode(message.justifications[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.bonds != null && message.bonds.length)
                            for (var i = 0; i < message.bonds.length; ++i)
                                $root.coop.rchain.casper.protocol.Bond.encode(message.bonds[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.blockNum != null && message.hasOwnProperty("blockNum"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.blockNum);
                        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.seqNum);
                        if (message.invalid != null && message.hasOwnProperty("invalid"))
                            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.invalid);
                        return writer;
                    };

                    /**
                     * Encodes the specified BlockMetadataInternal message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.BlockMetadataInternal.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @static
                     * @param {coop.rchain.casper.protocol.IBlockMetadataInternal} message BlockMetadataInternal message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BlockMetadataInternal.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BlockMetadataInternal message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.BlockMetadataInternal} BlockMetadataInternal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BlockMetadataInternal.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.BlockMetadataInternal();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.blockHash = reader.bytes();
                                break;
                            case 2:
                                if (!(message.parents && message.parents.length))
                                    message.parents = [];
                                message.parents.push(reader.bytes());
                                break;
                            case 3:
                                message.sender = reader.bytes();
                                break;
                            case 4:
                                if (!(message.justifications && message.justifications.length))
                                    message.justifications = [];
                                message.justifications.push($root.coop.rchain.casper.protocol.Justification.decode(reader, reader.uint32()));
                                break;
                            case 5:
                                if (!(message.bonds && message.bonds.length))
                                    message.bonds = [];
                                message.bonds.push($root.coop.rchain.casper.protocol.Bond.decode(reader, reader.uint32()));
                                break;
                            case 6:
                                message.blockNum = reader.int64();
                                break;
                            case 7:
                                message.seqNum = reader.int32();
                                break;
                            case 8:
                                message.invalid = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BlockMetadataInternal message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.BlockMetadataInternal} BlockMetadataInternal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BlockMetadataInternal.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BlockMetadataInternal message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BlockMetadataInternal.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            if (!(message.blockHash && typeof message.blockHash.length === "number" || $util.isString(message.blockHash)))
                                return "blockHash: buffer expected";
                        if (message.parents != null && message.hasOwnProperty("parents")) {
                            if (!Array.isArray(message.parents))
                                return "parents: array expected";
                            for (var i = 0; i < message.parents.length; ++i)
                                if (!(message.parents[i] && typeof message.parents[i].length === "number" || $util.isString(message.parents[i])))
                                    return "parents: buffer[] expected";
                        }
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            if (!(message.sender && typeof message.sender.length === "number" || $util.isString(message.sender)))
                                return "sender: buffer expected";
                        if (message.justifications != null && message.hasOwnProperty("justifications")) {
                            if (!Array.isArray(message.justifications))
                                return "justifications: array expected";
                            for (var i = 0; i < message.justifications.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Justification.verify(message.justifications[i]);
                                if (error)
                                    return "justifications." + error;
                            }
                        }
                        if (message.bonds != null && message.hasOwnProperty("bonds")) {
                            if (!Array.isArray(message.bonds))
                                return "bonds: array expected";
                            for (var i = 0; i < message.bonds.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Bond.verify(message.bonds[i]);
                                if (error)
                                    return "bonds." + error;
                            }
                        }
                        if (message.blockNum != null && message.hasOwnProperty("blockNum"))
                            if (!$util.isInteger(message.blockNum) && !(message.blockNum && $util.isInteger(message.blockNum.low) && $util.isInteger(message.blockNum.high)))
                                return "blockNum: integer|Long expected";
                        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                            if (!$util.isInteger(message.seqNum))
                                return "seqNum: integer expected";
                        if (message.invalid != null && message.hasOwnProperty("invalid"))
                            if (typeof message.invalid !== "boolean")
                                return "invalid: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a BlockMetadataInternal message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.BlockMetadataInternal} BlockMetadataInternal
                     */
                    BlockMetadataInternal.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.BlockMetadataInternal)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.BlockMetadataInternal();
                        if (object.blockHash != null)
                            if (typeof object.blockHash === "string")
                                $util.base64.decode(object.blockHash, message.blockHash = $util.newBuffer($util.base64.length(object.blockHash)), 0);
                            else if (object.blockHash.length)
                                message.blockHash = object.blockHash;
                        if (object.parents) {
                            if (!Array.isArray(object.parents))
                                throw TypeError(".coop.rchain.casper.protocol.BlockMetadataInternal.parents: array expected");
                            message.parents = [];
                            for (var i = 0; i < object.parents.length; ++i)
                                if (typeof object.parents[i] === "string")
                                    $util.base64.decode(object.parents[i], message.parents[i] = $util.newBuffer($util.base64.length(object.parents[i])), 0);
                                else if (object.parents[i].length)
                                    message.parents[i] = object.parents[i];
                        }
                        if (object.sender != null)
                            if (typeof object.sender === "string")
                                $util.base64.decode(object.sender, message.sender = $util.newBuffer($util.base64.length(object.sender)), 0);
                            else if (object.sender.length)
                                message.sender = object.sender;
                        if (object.justifications) {
                            if (!Array.isArray(object.justifications))
                                throw TypeError(".coop.rchain.casper.protocol.BlockMetadataInternal.justifications: array expected");
                            message.justifications = [];
                            for (var i = 0; i < object.justifications.length; ++i) {
                                if (typeof object.justifications[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.BlockMetadataInternal.justifications: object expected");
                                message.justifications[i] = $root.coop.rchain.casper.protocol.Justification.fromObject(object.justifications[i]);
                            }
                        }
                        if (object.bonds) {
                            if (!Array.isArray(object.bonds))
                                throw TypeError(".coop.rchain.casper.protocol.BlockMetadataInternal.bonds: array expected");
                            message.bonds = [];
                            for (var i = 0; i < object.bonds.length; ++i) {
                                if (typeof object.bonds[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.BlockMetadataInternal.bonds: object expected");
                                message.bonds[i] = $root.coop.rchain.casper.protocol.Bond.fromObject(object.bonds[i]);
                            }
                        }
                        if (object.blockNum != null)
                            if ($util.Long)
                                (message.blockNum = $util.Long.fromValue(object.blockNum)).unsigned = false;
                            else if (typeof object.blockNum === "string")
                                message.blockNum = parseInt(object.blockNum, 10);
                            else if (typeof object.blockNum === "number")
                                message.blockNum = object.blockNum;
                            else if (typeof object.blockNum === "object")
                                message.blockNum = new $util.LongBits(object.blockNum.low >>> 0, object.blockNum.high >>> 0).toNumber();
                        if (object.seqNum != null)
                            message.seqNum = object.seqNum | 0;
                        if (object.invalid != null)
                            message.invalid = Boolean(object.invalid);
                        return message;
                    };

                    /**
                     * Creates a plain object from a BlockMetadataInternal message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @static
                     * @param {coop.rchain.casper.protocol.BlockMetadataInternal} message BlockMetadataInternal
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BlockMetadataInternal.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.parents = [];
                            object.justifications = [];
                            object.bonds = [];
                        }
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.blockHash = "";
                            else {
                                object.blockHash = [];
                                if (options.bytes !== Array)
                                    object.blockHash = $util.newBuffer(object.blockHash);
                            }
                            if (options.bytes === String)
                                object.sender = "";
                            else {
                                object.sender = [];
                                if (options.bytes !== Array)
                                    object.sender = $util.newBuffer(object.sender);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.blockNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.blockNum = options.longs === String ? "0" : 0;
                            object.seqNum = 0;
                            object.invalid = false;
                        }
                        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                            object.blockHash = options.bytes === String ? $util.base64.encode(message.blockHash, 0, message.blockHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.blockHash) : message.blockHash;
                        if (message.parents && message.parents.length) {
                            object.parents = [];
                            for (var j = 0; j < message.parents.length; ++j)
                                object.parents[j] = options.bytes === String ? $util.base64.encode(message.parents[j], 0, message.parents[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.parents[j]) : message.parents[j];
                        }
                        if (message.sender != null && message.hasOwnProperty("sender"))
                            object.sender = options.bytes === String ? $util.base64.encode(message.sender, 0, message.sender.length) : options.bytes === Array ? Array.prototype.slice.call(message.sender) : message.sender;
                        if (message.justifications && message.justifications.length) {
                            object.justifications = [];
                            for (var j = 0; j < message.justifications.length; ++j)
                                object.justifications[j] = $root.coop.rchain.casper.protocol.Justification.toObject(message.justifications[j], options);
                        }
                        if (message.bonds && message.bonds.length) {
                            object.bonds = [];
                            for (var j = 0; j < message.bonds.length; ++j)
                                object.bonds[j] = $root.coop.rchain.casper.protocol.Bond.toObject(message.bonds[j], options);
                        }
                        if (message.blockNum != null && message.hasOwnProperty("blockNum"))
                            if (typeof message.blockNum === "number")
                                object.blockNum = options.longs === String ? String(message.blockNum) : message.blockNum;
                            else
                                object.blockNum = options.longs === String ? $util.Long.prototype.toString.call(message.blockNum) : options.longs === Number ? new $util.LongBits(message.blockNum.low >>> 0, message.blockNum.high >>> 0).toNumber() : message.blockNum;
                        if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                            object.seqNum = message.seqNum;
                        if (message.invalid != null && message.hasOwnProperty("invalid"))
                            object.invalid = message.invalid;
                        return object;
                    };

                    /**
                     * Converts this BlockMetadataInternal to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.BlockMetadataInternal
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BlockMetadataInternal.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlockMetadataInternal;
                })();

                protocol.Header = (function() {

                    /**
                     * Properties of a Header.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IHeader
                     * @property {Array.<Uint8Array>|null} [parentsHashList] Header parentsHashList
                     * @property {Uint8Array|null} [postStateHash] Header postStateHash
                     * @property {Uint8Array|null} [deploysHash] Header deploysHash
                     * @property {number|Long|null} [timestamp] Header timestamp
                     * @property {number|Long|null} [version] Header version
                     * @property {number|null} [deployCount] Header deployCount
                     * @property {Uint8Array|null} [extraBytes] Header extraBytes
                     */

                    /**
                     * Constructs a new Header.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a Header.
                     * @implements IHeader
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IHeader=} [properties] Properties to set
                     */
                    function Header(properties) {
                        this.parentsHashList = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Header parentsHashList.
                     * @member {Array.<Uint8Array>} parentsHashList
                     * @memberof coop.rchain.casper.protocol.Header
                     * @instance
                     */
                    Header.prototype.parentsHashList = $util.emptyArray;

                    /**
                     * Header postStateHash.
                     * @member {Uint8Array} postStateHash
                     * @memberof coop.rchain.casper.protocol.Header
                     * @instance
                     */
                    Header.prototype.postStateHash = $util.newBuffer([]);

                    /**
                     * Header deploysHash.
                     * @member {Uint8Array} deploysHash
                     * @memberof coop.rchain.casper.protocol.Header
                     * @instance
                     */
                    Header.prototype.deploysHash = $util.newBuffer([]);

                    /**
                     * Header timestamp.
                     * @member {number|Long} timestamp
                     * @memberof coop.rchain.casper.protocol.Header
                     * @instance
                     */
                    Header.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Header version.
                     * @member {number|Long} version
                     * @memberof coop.rchain.casper.protocol.Header
                     * @instance
                     */
                    Header.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Header deployCount.
                     * @member {number} deployCount
                     * @memberof coop.rchain.casper.protocol.Header
                     * @instance
                     */
                    Header.prototype.deployCount = 0;

                    /**
                     * Header extraBytes.
                     * @member {Uint8Array} extraBytes
                     * @memberof coop.rchain.casper.protocol.Header
                     * @instance
                     */
                    Header.prototype.extraBytes = $util.newBuffer([]);

                    /**
                     * Creates a new Header instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.Header
                     * @static
                     * @param {coop.rchain.casper.protocol.IHeader=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.Header} Header instance
                     */
                    Header.create = function create(properties) {
                        return new Header(properties);
                    };

                    /**
                     * Encodes the specified Header message. Does not implicitly {@link coop.rchain.casper.protocol.Header.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.Header
                     * @static
                     * @param {coop.rchain.casper.protocol.IHeader} message Header message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Header.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.parentsHashList != null && message.parentsHashList.length)
                            for (var i = 0; i < message.parentsHashList.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.parentsHashList[i]);
                        if (message.postStateHash != null && message.hasOwnProperty("postStateHash"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.postStateHash);
                        if (message.deploysHash != null && message.hasOwnProperty("deploysHash"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.deploysHash);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
                        if (message.version != null && message.hasOwnProperty("version"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.version);
                        if (message.deployCount != null && message.hasOwnProperty("deployCount"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.deployCount);
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.extraBytes);
                        return writer;
                    };

                    /**
                     * Encodes the specified Header message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.Header.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.Header
                     * @static
                     * @param {coop.rchain.casper.protocol.IHeader} message Header message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Header.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Header message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.Header
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.Header} Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Header.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.Header();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.parentsHashList && message.parentsHashList.length))
                                    message.parentsHashList = [];
                                message.parentsHashList.push(reader.bytes());
                                break;
                            case 2:
                                message.postStateHash = reader.bytes();
                                break;
                            case 3:
                                message.deploysHash = reader.bytes();
                                break;
                            case 5:
                                message.timestamp = reader.int64();
                                break;
                            case 6:
                                message.version = reader.int64();
                                break;
                            case 7:
                                message.deployCount = reader.int32();
                                break;
                            case 8:
                                message.extraBytes = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Header message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.Header
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.Header} Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Header.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Header message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.Header
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Header.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.parentsHashList != null && message.hasOwnProperty("parentsHashList")) {
                            if (!Array.isArray(message.parentsHashList))
                                return "parentsHashList: array expected";
                            for (var i = 0; i < message.parentsHashList.length; ++i)
                                if (!(message.parentsHashList[i] && typeof message.parentsHashList[i].length === "number" || $util.isString(message.parentsHashList[i])))
                                    return "parentsHashList: buffer[] expected";
                        }
                        if (message.postStateHash != null && message.hasOwnProperty("postStateHash"))
                            if (!(message.postStateHash && typeof message.postStateHash.length === "number" || $util.isString(message.postStateHash)))
                                return "postStateHash: buffer expected";
                        if (message.deploysHash != null && message.hasOwnProperty("deploysHash"))
                            if (!(message.deploysHash && typeof message.deploysHash.length === "number" || $util.isString(message.deploysHash)))
                                return "deploysHash: buffer expected";
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                                return "version: integer|Long expected";
                        if (message.deployCount != null && message.hasOwnProperty("deployCount"))
                            if (!$util.isInteger(message.deployCount))
                                return "deployCount: integer expected";
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            if (!(message.extraBytes && typeof message.extraBytes.length === "number" || $util.isString(message.extraBytes)))
                                return "extraBytes: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a Header message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.Header
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.Header} Header
                     */
                    Header.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.Header)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.Header();
                        if (object.parentsHashList) {
                            if (!Array.isArray(object.parentsHashList))
                                throw TypeError(".coop.rchain.casper.protocol.Header.parentsHashList: array expected");
                            message.parentsHashList = [];
                            for (var i = 0; i < object.parentsHashList.length; ++i)
                                if (typeof object.parentsHashList[i] === "string")
                                    $util.base64.decode(object.parentsHashList[i], message.parentsHashList[i] = $util.newBuffer($util.base64.length(object.parentsHashList[i])), 0);
                                else if (object.parentsHashList[i].length)
                                    message.parentsHashList[i] = object.parentsHashList[i];
                        }
                        if (object.postStateHash != null)
                            if (typeof object.postStateHash === "string")
                                $util.base64.decode(object.postStateHash, message.postStateHash = $util.newBuffer($util.base64.length(object.postStateHash)), 0);
                            else if (object.postStateHash.length)
                                message.postStateHash = object.postStateHash;
                        if (object.deploysHash != null)
                            if (typeof object.deploysHash === "string")
                                $util.base64.decode(object.deploysHash, message.deploysHash = $util.newBuffer($util.base64.length(object.deploysHash)), 0);
                            else if (object.deploysHash.length)
                                message.deploysHash = object.deploysHash;
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        if (object.version != null)
                            if ($util.Long)
                                (message.version = $util.Long.fromValue(object.version)).unsigned = false;
                            else if (typeof object.version === "string")
                                message.version = parseInt(object.version, 10);
                            else if (typeof object.version === "number")
                                message.version = object.version;
                            else if (typeof object.version === "object")
                                message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
                        if (object.deployCount != null)
                            message.deployCount = object.deployCount | 0;
                        if (object.extraBytes != null)
                            if (typeof object.extraBytes === "string")
                                $util.base64.decode(object.extraBytes, message.extraBytes = $util.newBuffer($util.base64.length(object.extraBytes)), 0);
                            else if (object.extraBytes.length)
                                message.extraBytes = object.extraBytes;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Header message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.Header
                     * @static
                     * @param {coop.rchain.casper.protocol.Header} message Header
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Header.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.parentsHashList = [];
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.postStateHash = "";
                            else {
                                object.postStateHash = [];
                                if (options.bytes !== Array)
                                    object.postStateHash = $util.newBuffer(object.postStateHash);
                            }
                            if (options.bytes === String)
                                object.deploysHash = "";
                            else {
                                object.deploysHash = [];
                                if (options.bytes !== Array)
                                    object.deploysHash = $util.newBuffer(object.deploysHash);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.version = options.longs === String ? "0" : 0;
                            object.deployCount = 0;
                            if (options.bytes === String)
                                object.extraBytes = "";
                            else {
                                object.extraBytes = [];
                                if (options.bytes !== Array)
                                    object.extraBytes = $util.newBuffer(object.extraBytes);
                            }
                        }
                        if (message.parentsHashList && message.parentsHashList.length) {
                            object.parentsHashList = [];
                            for (var j = 0; j < message.parentsHashList.length; ++j)
                                object.parentsHashList[j] = options.bytes === String ? $util.base64.encode(message.parentsHashList[j], 0, message.parentsHashList[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.parentsHashList[j]) : message.parentsHashList[j];
                        }
                        if (message.postStateHash != null && message.hasOwnProperty("postStateHash"))
                            object.postStateHash = options.bytes === String ? $util.base64.encode(message.postStateHash, 0, message.postStateHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.postStateHash) : message.postStateHash;
                        if (message.deploysHash != null && message.hasOwnProperty("deploysHash"))
                            object.deploysHash = options.bytes === String ? $util.base64.encode(message.deploysHash, 0, message.deploysHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.deploysHash) : message.deploysHash;
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (typeof message.version === "number")
                                object.version = options.longs === String ? String(message.version) : message.version;
                            else
                                object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
                        if (message.deployCount != null && message.hasOwnProperty("deployCount"))
                            object.deployCount = message.deployCount;
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            object.extraBytes = options.bytes === String ? $util.base64.encode(message.extraBytes, 0, message.extraBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.extraBytes) : message.extraBytes;
                        return object;
                    };

                    /**
                     * Converts this Header to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.Header
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Header.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Header;
                })();

                protocol.DeployData = (function() {

                    /**
                     * Properties of a DeployData.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IDeployData
                     * @property {Uint8Array|null} [deployer] DeployData deployer
                     * @property {string|null} [term] DeployData term
                     * @property {number|Long|null} [timestamp] DeployData timestamp
                     * @property {Uint8Array|null} [sig] DeployData sig
                     * @property {string|null} [sigAlgorithm] DeployData sigAlgorithm
                     * @property {number|Long|null} [phloPrice] DeployData phloPrice
                     * @property {number|Long|null} [phloLimit] DeployData phloLimit
                     * @property {number|Long|null} [validAfterBlockNumber] DeployData validAfterBlockNumber
                     */

                    /**
                     * Constructs a new DeployData.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Note: deploys are uniquely keyed by `user`, `timestamp`.
                     * 
                     * **TODO**: details of signatures and payment. See RHOL-781
                     * @implements IDeployData
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IDeployData=} [properties] Properties to set
                     */
                    function DeployData(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeployData deployer.
                     * @member {Uint8Array} deployer
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @instance
                     */
                    DeployData.prototype.deployer = $util.newBuffer([]);

                    /**
                     * DeployData term.
                     * @member {string} term
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @instance
                     */
                    DeployData.prototype.term = "";

                    /**
                     * DeployData timestamp.
                     * @member {number|Long} timestamp
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @instance
                     */
                    DeployData.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * DeployData sig.
                     * @member {Uint8Array} sig
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @instance
                     */
                    DeployData.prototype.sig = $util.newBuffer([]);

                    /**
                     * DeployData sigAlgorithm.
                     * @member {string} sigAlgorithm
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @instance
                     */
                    DeployData.prototype.sigAlgorithm = "";

                    /**
                     * DeployData phloPrice.
                     * @member {number|Long} phloPrice
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @instance
                     */
                    DeployData.prototype.phloPrice = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * DeployData phloLimit.
                     * @member {number|Long} phloLimit
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @instance
                     */
                    DeployData.prototype.phloLimit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * DeployData validAfterBlockNumber.
                     * @member {number|Long} validAfterBlockNumber
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @instance
                     */
                    DeployData.prototype.validAfterBlockNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new DeployData instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @static
                     * @param {coop.rchain.casper.protocol.IDeployData=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.DeployData} DeployData instance
                     */
                    DeployData.create = function create(properties) {
                        return new DeployData(properties);
                    };

                    /**
                     * Encodes the specified DeployData message. Does not implicitly {@link coop.rchain.casper.protocol.DeployData.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @static
                     * @param {coop.rchain.casper.protocol.IDeployData} message DeployData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeployData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.deployer != null && message.hasOwnProperty("deployer"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.deployer);
                        if (message.term != null && message.hasOwnProperty("term"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.term);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.sig);
                        if (message.sigAlgorithm != null && message.hasOwnProperty("sigAlgorithm"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.sigAlgorithm);
                        if (message.phloPrice != null && message.hasOwnProperty("phloPrice"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.phloPrice);
                        if (message.phloLimit != null && message.hasOwnProperty("phloLimit"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.phloLimit);
                        if (message.validAfterBlockNumber != null && message.hasOwnProperty("validAfterBlockNumber"))
                            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.validAfterBlockNumber);
                        return writer;
                    };

                    /**
                     * Encodes the specified DeployData message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.DeployData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @static
                     * @param {coop.rchain.casper.protocol.IDeployData} message DeployData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeployData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeployData message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.DeployData} DeployData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeployData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.DeployData();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.deployer = reader.bytes();
                                break;
                            case 2:
                                message.term = reader.string();
                                break;
                            case 3:
                                message.timestamp = reader.int64();
                                break;
                            case 4:
                                message.sig = reader.bytes();
                                break;
                            case 5:
                                message.sigAlgorithm = reader.string();
                                break;
                            case 7:
                                message.phloPrice = reader.int64();
                                break;
                            case 8:
                                message.phloLimit = reader.int64();
                                break;
                            case 10:
                                message.validAfterBlockNumber = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeployData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.DeployData} DeployData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeployData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeployData message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeployData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.deployer != null && message.hasOwnProperty("deployer"))
                            if (!(message.deployer && typeof message.deployer.length === "number" || $util.isString(message.deployer)))
                                return "deployer: buffer expected";
                        if (message.term != null && message.hasOwnProperty("term"))
                            if (!$util.isString(message.term))
                                return "term: string expected";
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                                return "sig: buffer expected";
                        if (message.sigAlgorithm != null && message.hasOwnProperty("sigAlgorithm"))
                            if (!$util.isString(message.sigAlgorithm))
                                return "sigAlgorithm: string expected";
                        if (message.phloPrice != null && message.hasOwnProperty("phloPrice"))
                            if (!$util.isInteger(message.phloPrice) && !(message.phloPrice && $util.isInteger(message.phloPrice.low) && $util.isInteger(message.phloPrice.high)))
                                return "phloPrice: integer|Long expected";
                        if (message.phloLimit != null && message.hasOwnProperty("phloLimit"))
                            if (!$util.isInteger(message.phloLimit) && !(message.phloLimit && $util.isInteger(message.phloLimit.low) && $util.isInteger(message.phloLimit.high)))
                                return "phloLimit: integer|Long expected";
                        if (message.validAfterBlockNumber != null && message.hasOwnProperty("validAfterBlockNumber"))
                            if (!$util.isInteger(message.validAfterBlockNumber) && !(message.validAfterBlockNumber && $util.isInteger(message.validAfterBlockNumber.low) && $util.isInteger(message.validAfterBlockNumber.high)))
                                return "validAfterBlockNumber: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a DeployData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.DeployData} DeployData
                     */
                    DeployData.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.DeployData)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.DeployData();
                        if (object.deployer != null)
                            if (typeof object.deployer === "string")
                                $util.base64.decode(object.deployer, message.deployer = $util.newBuffer($util.base64.length(object.deployer)), 0);
                            else if (object.deployer.length)
                                message.deployer = object.deployer;
                        if (object.term != null)
                            message.term = String(object.term);
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                        if (object.sig != null)
                            if (typeof object.sig === "string")
                                $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
                            else if (object.sig.length)
                                message.sig = object.sig;
                        if (object.sigAlgorithm != null)
                            message.sigAlgorithm = String(object.sigAlgorithm);
                        if (object.phloPrice != null)
                            if ($util.Long)
                                (message.phloPrice = $util.Long.fromValue(object.phloPrice)).unsigned = false;
                            else if (typeof object.phloPrice === "string")
                                message.phloPrice = parseInt(object.phloPrice, 10);
                            else if (typeof object.phloPrice === "number")
                                message.phloPrice = object.phloPrice;
                            else if (typeof object.phloPrice === "object")
                                message.phloPrice = new $util.LongBits(object.phloPrice.low >>> 0, object.phloPrice.high >>> 0).toNumber();
                        if (object.phloLimit != null)
                            if ($util.Long)
                                (message.phloLimit = $util.Long.fromValue(object.phloLimit)).unsigned = false;
                            else if (typeof object.phloLimit === "string")
                                message.phloLimit = parseInt(object.phloLimit, 10);
                            else if (typeof object.phloLimit === "number")
                                message.phloLimit = object.phloLimit;
                            else if (typeof object.phloLimit === "object")
                                message.phloLimit = new $util.LongBits(object.phloLimit.low >>> 0, object.phloLimit.high >>> 0).toNumber();
                        if (object.validAfterBlockNumber != null)
                            if ($util.Long)
                                (message.validAfterBlockNumber = $util.Long.fromValue(object.validAfterBlockNumber)).unsigned = false;
                            else if (typeof object.validAfterBlockNumber === "string")
                                message.validAfterBlockNumber = parseInt(object.validAfterBlockNumber, 10);
                            else if (typeof object.validAfterBlockNumber === "number")
                                message.validAfterBlockNumber = object.validAfterBlockNumber;
                            else if (typeof object.validAfterBlockNumber === "object")
                                message.validAfterBlockNumber = new $util.LongBits(object.validAfterBlockNumber.low >>> 0, object.validAfterBlockNumber.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a DeployData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @static
                     * @param {coop.rchain.casper.protocol.DeployData} message DeployData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeployData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.deployer = "";
                            else {
                                object.deployer = [];
                                if (options.bytes !== Array)
                                    object.deployer = $util.newBuffer(object.deployer);
                            }
                            object.term = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.timestamp = options.longs === String ? "0" : 0;
                            if (options.bytes === String)
                                object.sig = "";
                            else {
                                object.sig = [];
                                if (options.bytes !== Array)
                                    object.sig = $util.newBuffer(object.sig);
                            }
                            object.sigAlgorithm = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.phloPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.phloPrice = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.phloLimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.phloLimit = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.validAfterBlockNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.validAfterBlockNumber = options.longs === String ? "0" : 0;
                        }
                        if (message.deployer != null && message.hasOwnProperty("deployer"))
                            object.deployer = options.bytes === String ? $util.base64.encode(message.deployer, 0, message.deployer.length) : options.bytes === Array ? Array.prototype.slice.call(message.deployer) : message.deployer;
                        if (message.term != null && message.hasOwnProperty("term"))
                            object.term = message.term;
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                        if (message.sig != null && message.hasOwnProperty("sig"))
                            object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
                        if (message.sigAlgorithm != null && message.hasOwnProperty("sigAlgorithm"))
                            object.sigAlgorithm = message.sigAlgorithm;
                        if (message.phloPrice != null && message.hasOwnProperty("phloPrice"))
                            if (typeof message.phloPrice === "number")
                                object.phloPrice = options.longs === String ? String(message.phloPrice) : message.phloPrice;
                            else
                                object.phloPrice = options.longs === String ? $util.Long.prototype.toString.call(message.phloPrice) : options.longs === Number ? new $util.LongBits(message.phloPrice.low >>> 0, message.phloPrice.high >>> 0).toNumber() : message.phloPrice;
                        if (message.phloLimit != null && message.hasOwnProperty("phloLimit"))
                            if (typeof message.phloLimit === "number")
                                object.phloLimit = options.longs === String ? String(message.phloLimit) : message.phloLimit;
                            else
                                object.phloLimit = options.longs === String ? $util.Long.prototype.toString.call(message.phloLimit) : options.longs === Number ? new $util.LongBits(message.phloLimit.low >>> 0, message.phloLimit.high >>> 0).toNumber() : message.phloLimit;
                        if (message.validAfterBlockNumber != null && message.hasOwnProperty("validAfterBlockNumber"))
                            if (typeof message.validAfterBlockNumber === "number")
                                object.validAfterBlockNumber = options.longs === String ? String(message.validAfterBlockNumber) : message.validAfterBlockNumber;
                            else
                                object.validAfterBlockNumber = options.longs === String ? $util.Long.prototype.toString.call(message.validAfterBlockNumber) : options.longs === Number ? new $util.LongBits(message.validAfterBlockNumber.low >>> 0, message.validAfterBlockNumber.high >>> 0).toNumber() : message.validAfterBlockNumber;
                        return object;
                    };

                    /**
                     * Converts this DeployData to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.DeployData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeployData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeployData;
                })();

                protocol.ProcessedDeploy = (function() {

                    /**
                     * Properties of a ProcessedDeploy.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IProcessedDeploy
                     * @property {coop.rchain.casper.protocol.IDeployData|null} [deploy] ProcessedDeploy deploy
                     * @property {IPCost|null} [cost] ProcessedDeploy cost
                     * @property {Array.<coop.rchain.casper.protocol.IEvent>|null} [deployLog] ProcessedDeploy deployLog
                     * @property {Array.<coop.rchain.casper.protocol.IEvent>|null} [paymentLog] ProcessedDeploy paymentLog
                     * @property {boolean|null} [errored] ProcessedDeploy errored
                     */

                    /**
                     * Constructs a new ProcessedDeploy.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a ProcessedDeploy.
                     * @implements IProcessedDeploy
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IProcessedDeploy=} [properties] Properties to set
                     */
                    function ProcessedDeploy(properties) {
                        this.deployLog = [];
                        this.paymentLog = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ProcessedDeploy deploy.
                     * @member {coop.rchain.casper.protocol.IDeployData|null|undefined} deploy
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @instance
                     */
                    ProcessedDeploy.prototype.deploy = null;

                    /**
                     * ProcessedDeploy cost.
                     * @member {IPCost|null|undefined} cost
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @instance
                     */
                    ProcessedDeploy.prototype.cost = null;

                    /**
                     * ProcessedDeploy deployLog.
                     * @member {Array.<coop.rchain.casper.protocol.IEvent>} deployLog
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @instance
                     */
                    ProcessedDeploy.prototype.deployLog = $util.emptyArray;

                    /**
                     * ProcessedDeploy paymentLog.
                     * @member {Array.<coop.rchain.casper.protocol.IEvent>} paymentLog
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @instance
                     */
                    ProcessedDeploy.prototype.paymentLog = $util.emptyArray;

                    /**
                     * ProcessedDeploy errored.
                     * @member {boolean} errored
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @instance
                     */
                    ProcessedDeploy.prototype.errored = false;

                    /**
                     * Creates a new ProcessedDeploy instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @static
                     * @param {coop.rchain.casper.protocol.IProcessedDeploy=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.ProcessedDeploy} ProcessedDeploy instance
                     */
                    ProcessedDeploy.create = function create(properties) {
                        return new ProcessedDeploy(properties);
                    };

                    /**
                     * Encodes the specified ProcessedDeploy message. Does not implicitly {@link coop.rchain.casper.protocol.ProcessedDeploy.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @static
                     * @param {coop.rchain.casper.protocol.IProcessedDeploy} message ProcessedDeploy message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ProcessedDeploy.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.deploy != null && message.hasOwnProperty("deploy"))
                            $root.coop.rchain.casper.protocol.DeployData.encode(message.deploy, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.cost != null && message.hasOwnProperty("cost"))
                            $root.PCost.encode(message.cost, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.deployLog != null && message.deployLog.length)
                            for (var i = 0; i < message.deployLog.length; ++i)
                                $root.coop.rchain.casper.protocol.Event.encode(message.deployLog[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.paymentLog != null && message.paymentLog.length)
                            for (var i = 0; i < message.paymentLog.length; ++i)
                                $root.coop.rchain.casper.protocol.Event.encode(message.paymentLog[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.errored != null && message.hasOwnProperty("errored"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.errored);
                        return writer;
                    };

                    /**
                     * Encodes the specified ProcessedDeploy message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.ProcessedDeploy.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @static
                     * @param {coop.rchain.casper.protocol.IProcessedDeploy} message ProcessedDeploy message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ProcessedDeploy.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ProcessedDeploy message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.ProcessedDeploy} ProcessedDeploy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ProcessedDeploy.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ProcessedDeploy();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.deploy = $root.coop.rchain.casper.protocol.DeployData.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.cost = $root.PCost.decode(reader, reader.uint32());
                                break;
                            case 3:
                                if (!(message.deployLog && message.deployLog.length))
                                    message.deployLog = [];
                                message.deployLog.push($root.coop.rchain.casper.protocol.Event.decode(reader, reader.uint32()));
                                break;
                            case 4:
                                if (!(message.paymentLog && message.paymentLog.length))
                                    message.paymentLog = [];
                                message.paymentLog.push($root.coop.rchain.casper.protocol.Event.decode(reader, reader.uint32()));
                                break;
                            case 5:
                                message.errored = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ProcessedDeploy message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.ProcessedDeploy} ProcessedDeploy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ProcessedDeploy.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ProcessedDeploy message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ProcessedDeploy.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.deploy != null && message.hasOwnProperty("deploy")) {
                            var error = $root.coop.rchain.casper.protocol.DeployData.verify(message.deploy);
                            if (error)
                                return "deploy." + error;
                        }
                        if (message.cost != null && message.hasOwnProperty("cost")) {
                            var error = $root.PCost.verify(message.cost);
                            if (error)
                                return "cost." + error;
                        }
                        if (message.deployLog != null && message.hasOwnProperty("deployLog")) {
                            if (!Array.isArray(message.deployLog))
                                return "deployLog: array expected";
                            for (var i = 0; i < message.deployLog.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Event.verify(message.deployLog[i]);
                                if (error)
                                    return "deployLog." + error;
                            }
                        }
                        if (message.paymentLog != null && message.hasOwnProperty("paymentLog")) {
                            if (!Array.isArray(message.paymentLog))
                                return "paymentLog: array expected";
                            for (var i = 0; i < message.paymentLog.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Event.verify(message.paymentLog[i]);
                                if (error)
                                    return "paymentLog." + error;
                            }
                        }
                        if (message.errored != null && message.hasOwnProperty("errored"))
                            if (typeof message.errored !== "boolean")
                                return "errored: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a ProcessedDeploy message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.ProcessedDeploy} ProcessedDeploy
                     */
                    ProcessedDeploy.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ProcessedDeploy)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ProcessedDeploy();
                        if (object.deploy != null) {
                            if (typeof object.deploy !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.ProcessedDeploy.deploy: object expected");
                            message.deploy = $root.coop.rchain.casper.protocol.DeployData.fromObject(object.deploy);
                        }
                        if (object.cost != null) {
                            if (typeof object.cost !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.ProcessedDeploy.cost: object expected");
                            message.cost = $root.PCost.fromObject(object.cost);
                        }
                        if (object.deployLog) {
                            if (!Array.isArray(object.deployLog))
                                throw TypeError(".coop.rchain.casper.protocol.ProcessedDeploy.deployLog: array expected");
                            message.deployLog = [];
                            for (var i = 0; i < object.deployLog.length; ++i) {
                                if (typeof object.deployLog[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.ProcessedDeploy.deployLog: object expected");
                                message.deployLog[i] = $root.coop.rchain.casper.protocol.Event.fromObject(object.deployLog[i]);
                            }
                        }
                        if (object.paymentLog) {
                            if (!Array.isArray(object.paymentLog))
                                throw TypeError(".coop.rchain.casper.protocol.ProcessedDeploy.paymentLog: array expected");
                            message.paymentLog = [];
                            for (var i = 0; i < object.paymentLog.length; ++i) {
                                if (typeof object.paymentLog[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.ProcessedDeploy.paymentLog: object expected");
                                message.paymentLog[i] = $root.coop.rchain.casper.protocol.Event.fromObject(object.paymentLog[i]);
                            }
                        }
                        if (object.errored != null)
                            message.errored = Boolean(object.errored);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ProcessedDeploy message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @static
                     * @param {coop.rchain.casper.protocol.ProcessedDeploy} message ProcessedDeploy
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ProcessedDeploy.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.deployLog = [];
                            object.paymentLog = [];
                        }
                        if (options.defaults) {
                            object.deploy = null;
                            object.cost = null;
                            object.errored = false;
                        }
                        if (message.deploy != null && message.hasOwnProperty("deploy"))
                            object.deploy = $root.coop.rchain.casper.protocol.DeployData.toObject(message.deploy, options);
                        if (message.cost != null && message.hasOwnProperty("cost"))
                            object.cost = $root.PCost.toObject(message.cost, options);
                        if (message.deployLog && message.deployLog.length) {
                            object.deployLog = [];
                            for (var j = 0; j < message.deployLog.length; ++j)
                                object.deployLog[j] = $root.coop.rchain.casper.protocol.Event.toObject(message.deployLog[j], options);
                        }
                        if (message.paymentLog && message.paymentLog.length) {
                            object.paymentLog = [];
                            for (var j = 0; j < message.paymentLog.length; ++j)
                                object.paymentLog[j] = $root.coop.rchain.casper.protocol.Event.toObject(message.paymentLog[j], options);
                        }
                        if (message.errored != null && message.hasOwnProperty("errored"))
                            object.errored = message.errored;
                        return object;
                    };

                    /**
                     * Converts this ProcessedDeploy to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.ProcessedDeploy
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ProcessedDeploy.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ProcessedDeploy;
                })();

                protocol.Body = (function() {

                    /**
                     * Properties of a Body.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IBody
                     * @property {coop.rchain.casper.protocol.IRChainState|null} [state] Body state
                     * @property {Array.<coop.rchain.casper.protocol.IProcessedDeploy>|null} [deploys] Body deploys
                     * @property {Uint8Array|null} [extraBytes] Body extraBytes
                     */

                    /**
                     * Constructs a new Body.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a Body.
                     * @implements IBody
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IBody=} [properties] Properties to set
                     */
                    function Body(properties) {
                        this.deploys = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Body state.
                     * @member {coop.rchain.casper.protocol.IRChainState|null|undefined} state
                     * @memberof coop.rchain.casper.protocol.Body
                     * @instance
                     */
                    Body.prototype.state = null;

                    /**
                     * Body deploys.
                     * @member {Array.<coop.rchain.casper.protocol.IProcessedDeploy>} deploys
                     * @memberof coop.rchain.casper.protocol.Body
                     * @instance
                     */
                    Body.prototype.deploys = $util.emptyArray;

                    /**
                     * Body extraBytes.
                     * @member {Uint8Array} extraBytes
                     * @memberof coop.rchain.casper.protocol.Body
                     * @instance
                     */
                    Body.prototype.extraBytes = $util.newBuffer([]);

                    /**
                     * Creates a new Body instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.Body
                     * @static
                     * @param {coop.rchain.casper.protocol.IBody=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.Body} Body instance
                     */
                    Body.create = function create(properties) {
                        return new Body(properties);
                    };

                    /**
                     * Encodes the specified Body message. Does not implicitly {@link coop.rchain.casper.protocol.Body.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.Body
                     * @static
                     * @param {coop.rchain.casper.protocol.IBody} message Body message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Body.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.state != null && message.hasOwnProperty("state"))
                            $root.coop.rchain.casper.protocol.RChainState.encode(message.state, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.deploys != null && message.deploys.length)
                            for (var i = 0; i < message.deploys.length; ++i)
                                $root.coop.rchain.casper.protocol.ProcessedDeploy.encode(message.deploys[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.extraBytes);
                        return writer;
                    };

                    /**
                     * Encodes the specified Body message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.Body.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.Body
                     * @static
                     * @param {coop.rchain.casper.protocol.IBody} message Body message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Body.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Body message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.Body
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.Body} Body
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Body.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.Body();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.state = $root.coop.rchain.casper.protocol.RChainState.decode(reader, reader.uint32());
                                break;
                            case 2:
                                if (!(message.deploys && message.deploys.length))
                                    message.deploys = [];
                                message.deploys.push($root.coop.rchain.casper.protocol.ProcessedDeploy.decode(reader, reader.uint32()));
                                break;
                            case 3:
                                message.extraBytes = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Body message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.Body
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.Body} Body
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Body.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Body message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.Body
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Body.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.state != null && message.hasOwnProperty("state")) {
                            var error = $root.coop.rchain.casper.protocol.RChainState.verify(message.state);
                            if (error)
                                return "state." + error;
                        }
                        if (message.deploys != null && message.hasOwnProperty("deploys")) {
                            if (!Array.isArray(message.deploys))
                                return "deploys: array expected";
                            for (var i = 0; i < message.deploys.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.ProcessedDeploy.verify(message.deploys[i]);
                                if (error)
                                    return "deploys." + error;
                            }
                        }
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            if (!(message.extraBytes && typeof message.extraBytes.length === "number" || $util.isString(message.extraBytes)))
                                return "extraBytes: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a Body message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.Body
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.Body} Body
                     */
                    Body.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.Body)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.Body();
                        if (object.state != null) {
                            if (typeof object.state !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.Body.state: object expected");
                            message.state = $root.coop.rchain.casper.protocol.RChainState.fromObject(object.state);
                        }
                        if (object.deploys) {
                            if (!Array.isArray(object.deploys))
                                throw TypeError(".coop.rchain.casper.protocol.Body.deploys: array expected");
                            message.deploys = [];
                            for (var i = 0; i < object.deploys.length; ++i) {
                                if (typeof object.deploys[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.Body.deploys: object expected");
                                message.deploys[i] = $root.coop.rchain.casper.protocol.ProcessedDeploy.fromObject(object.deploys[i]);
                            }
                        }
                        if (object.extraBytes != null)
                            if (typeof object.extraBytes === "string")
                                $util.base64.decode(object.extraBytes, message.extraBytes = $util.newBuffer($util.base64.length(object.extraBytes)), 0);
                            else if (object.extraBytes.length)
                                message.extraBytes = object.extraBytes;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Body message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.Body
                     * @static
                     * @param {coop.rchain.casper.protocol.Body} message Body
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Body.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.deploys = [];
                        if (options.defaults) {
                            object.state = null;
                            if (options.bytes === String)
                                object.extraBytes = "";
                            else {
                                object.extraBytes = [];
                                if (options.bytes !== Array)
                                    object.extraBytes = $util.newBuffer(object.extraBytes);
                            }
                        }
                        if (message.state != null && message.hasOwnProperty("state"))
                            object.state = $root.coop.rchain.casper.protocol.RChainState.toObject(message.state, options);
                        if (message.deploys && message.deploys.length) {
                            object.deploys = [];
                            for (var j = 0; j < message.deploys.length; ++j)
                                object.deploys[j] = $root.coop.rchain.casper.protocol.ProcessedDeploy.toObject(message.deploys[j], options);
                        }
                        if (message.extraBytes != null && message.hasOwnProperty("extraBytes"))
                            object.extraBytes = options.bytes === String ? $util.base64.encode(message.extraBytes, 0, message.extraBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.extraBytes) : message.extraBytes;
                        return object;
                    };

                    /**
                     * Converts this Body to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.Body
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Body.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Body;
                })();

                protocol.Justification = (function() {

                    /**
                     * Properties of a Justification.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IJustification
                     * @property {Uint8Array|null} [validator] Justification validator
                     * @property {Uint8Array|null} [latestBlockHash] Justification latestBlockHash
                     */

                    /**
                     * Constructs a new Justification.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a Justification.
                     * @implements IJustification
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IJustification=} [properties] Properties to set
                     */
                    function Justification(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Justification validator.
                     * @member {Uint8Array} validator
                     * @memberof coop.rchain.casper.protocol.Justification
                     * @instance
                     */
                    Justification.prototype.validator = $util.newBuffer([]);

                    /**
                     * Justification latestBlockHash.
                     * @member {Uint8Array} latestBlockHash
                     * @memberof coop.rchain.casper.protocol.Justification
                     * @instance
                     */
                    Justification.prototype.latestBlockHash = $util.newBuffer([]);

                    /**
                     * Creates a new Justification instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.Justification
                     * @static
                     * @param {coop.rchain.casper.protocol.IJustification=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.Justification} Justification instance
                     */
                    Justification.create = function create(properties) {
                        return new Justification(properties);
                    };

                    /**
                     * Encodes the specified Justification message. Does not implicitly {@link coop.rchain.casper.protocol.Justification.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.Justification
                     * @static
                     * @param {coop.rchain.casper.protocol.IJustification} message Justification message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Justification.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.validator != null && message.hasOwnProperty("validator"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.validator);
                        if (message.latestBlockHash != null && message.hasOwnProperty("latestBlockHash"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.latestBlockHash);
                        return writer;
                    };

                    /**
                     * Encodes the specified Justification message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.Justification.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.Justification
                     * @static
                     * @param {coop.rchain.casper.protocol.IJustification} message Justification message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Justification.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Justification message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.Justification
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.Justification} Justification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Justification.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.Justification();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.validator = reader.bytes();
                                break;
                            case 2:
                                message.latestBlockHash = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Justification message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.Justification
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.Justification} Justification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Justification.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Justification message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.Justification
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Justification.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.validator != null && message.hasOwnProperty("validator"))
                            if (!(message.validator && typeof message.validator.length === "number" || $util.isString(message.validator)))
                                return "validator: buffer expected";
                        if (message.latestBlockHash != null && message.hasOwnProperty("latestBlockHash"))
                            if (!(message.latestBlockHash && typeof message.latestBlockHash.length === "number" || $util.isString(message.latestBlockHash)))
                                return "latestBlockHash: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a Justification message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.Justification
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.Justification} Justification
                     */
                    Justification.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.Justification)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.Justification();
                        if (object.validator != null)
                            if (typeof object.validator === "string")
                                $util.base64.decode(object.validator, message.validator = $util.newBuffer($util.base64.length(object.validator)), 0);
                            else if (object.validator.length)
                                message.validator = object.validator;
                        if (object.latestBlockHash != null)
                            if (typeof object.latestBlockHash === "string")
                                $util.base64.decode(object.latestBlockHash, message.latestBlockHash = $util.newBuffer($util.base64.length(object.latestBlockHash)), 0);
                            else if (object.latestBlockHash.length)
                                message.latestBlockHash = object.latestBlockHash;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Justification message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.Justification
                     * @static
                     * @param {coop.rchain.casper.protocol.Justification} message Justification
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Justification.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.validator = "";
                            else {
                                object.validator = [];
                                if (options.bytes !== Array)
                                    object.validator = $util.newBuffer(object.validator);
                            }
                            if (options.bytes === String)
                                object.latestBlockHash = "";
                            else {
                                object.latestBlockHash = [];
                                if (options.bytes !== Array)
                                    object.latestBlockHash = $util.newBuffer(object.latestBlockHash);
                            }
                        }
                        if (message.validator != null && message.hasOwnProperty("validator"))
                            object.validator = options.bytes === String ? $util.base64.encode(message.validator, 0, message.validator.length) : options.bytes === Array ? Array.prototype.slice.call(message.validator) : message.validator;
                        if (message.latestBlockHash != null && message.hasOwnProperty("latestBlockHash"))
                            object.latestBlockHash = options.bytes === String ? $util.base64.encode(message.latestBlockHash, 0, message.latestBlockHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.latestBlockHash) : message.latestBlockHash;
                        return object;
                    };

                    /**
                     * Converts this Justification to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.Justification
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Justification.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Justification;
                })();

                protocol.RChainState = (function() {

                    /**
                     * Properties of a RChainState.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IRChainState
                     * @property {Uint8Array|null} [preStateHash] RChainState preStateHash
                     * @property {Uint8Array|null} [postStateHash] RChainState postStateHash
                     * @property {Array.<coop.rchain.casper.protocol.IBond>|null} [bonds] RChainState bonds
                     * @property {number|Long|null} [blockNumber] RChainState blockNumber
                     */

                    /**
                     * Constructs a new RChainState.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a RChainState.
                     * @implements IRChainState
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IRChainState=} [properties] Properties to set
                     */
                    function RChainState(properties) {
                        this.bonds = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RChainState preStateHash.
                     * @member {Uint8Array} preStateHash
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @instance
                     */
                    RChainState.prototype.preStateHash = $util.newBuffer([]);

                    /**
                     * RChainState postStateHash.
                     * @member {Uint8Array} postStateHash
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @instance
                     */
                    RChainState.prototype.postStateHash = $util.newBuffer([]);

                    /**
                     * RChainState bonds.
                     * @member {Array.<coop.rchain.casper.protocol.IBond>} bonds
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @instance
                     */
                    RChainState.prototype.bonds = $util.emptyArray;

                    /**
                     * RChainState blockNumber.
                     * @member {number|Long} blockNumber
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @instance
                     */
                    RChainState.prototype.blockNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new RChainState instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @static
                     * @param {coop.rchain.casper.protocol.IRChainState=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.RChainState} RChainState instance
                     */
                    RChainState.create = function create(properties) {
                        return new RChainState(properties);
                    };

                    /**
                     * Encodes the specified RChainState message. Does not implicitly {@link coop.rchain.casper.protocol.RChainState.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @static
                     * @param {coop.rchain.casper.protocol.IRChainState} message RChainState message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RChainState.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.preStateHash != null && message.hasOwnProperty("preStateHash"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.preStateHash);
                        if (message.postStateHash != null && message.hasOwnProperty("postStateHash"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.postStateHash);
                        if (message.bonds != null && message.bonds.length)
                            for (var i = 0; i < message.bonds.length; ++i)
                                $root.coop.rchain.casper.protocol.Bond.encode(message.bonds[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.blockNumber);
                        return writer;
                    };

                    /**
                     * Encodes the specified RChainState message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.RChainState.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @static
                     * @param {coop.rchain.casper.protocol.IRChainState} message RChainState message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RChainState.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RChainState message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.RChainState} RChainState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RChainState.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.RChainState();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.preStateHash = reader.bytes();
                                break;
                            case 2:
                                message.postStateHash = reader.bytes();
                                break;
                            case 3:
                                if (!(message.bonds && message.bonds.length))
                                    message.bonds = [];
                                message.bonds.push($root.coop.rchain.casper.protocol.Bond.decode(reader, reader.uint32()));
                                break;
                            case 4:
                                message.blockNumber = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RChainState message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.RChainState} RChainState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RChainState.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RChainState message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RChainState.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.preStateHash != null && message.hasOwnProperty("preStateHash"))
                            if (!(message.preStateHash && typeof message.preStateHash.length === "number" || $util.isString(message.preStateHash)))
                                return "preStateHash: buffer expected";
                        if (message.postStateHash != null && message.hasOwnProperty("postStateHash"))
                            if (!(message.postStateHash && typeof message.postStateHash.length === "number" || $util.isString(message.postStateHash)))
                                return "postStateHash: buffer expected";
                        if (message.bonds != null && message.hasOwnProperty("bonds")) {
                            if (!Array.isArray(message.bonds))
                                return "bonds: array expected";
                            for (var i = 0; i < message.bonds.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.Bond.verify(message.bonds[i]);
                                if (error)
                                    return "bonds." + error;
                            }
                        }
                        if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                            if (!$util.isInteger(message.blockNumber) && !(message.blockNumber && $util.isInteger(message.blockNumber.low) && $util.isInteger(message.blockNumber.high)))
                                return "blockNumber: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a RChainState message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.RChainState} RChainState
                     */
                    RChainState.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.RChainState)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.RChainState();
                        if (object.preStateHash != null)
                            if (typeof object.preStateHash === "string")
                                $util.base64.decode(object.preStateHash, message.preStateHash = $util.newBuffer($util.base64.length(object.preStateHash)), 0);
                            else if (object.preStateHash.length)
                                message.preStateHash = object.preStateHash;
                        if (object.postStateHash != null)
                            if (typeof object.postStateHash === "string")
                                $util.base64.decode(object.postStateHash, message.postStateHash = $util.newBuffer($util.base64.length(object.postStateHash)), 0);
                            else if (object.postStateHash.length)
                                message.postStateHash = object.postStateHash;
                        if (object.bonds) {
                            if (!Array.isArray(object.bonds))
                                throw TypeError(".coop.rchain.casper.protocol.RChainState.bonds: array expected");
                            message.bonds = [];
                            for (var i = 0; i < object.bonds.length; ++i) {
                                if (typeof object.bonds[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.RChainState.bonds: object expected");
                                message.bonds[i] = $root.coop.rchain.casper.protocol.Bond.fromObject(object.bonds[i]);
                            }
                        }
                        if (object.blockNumber != null)
                            if ($util.Long)
                                (message.blockNumber = $util.Long.fromValue(object.blockNumber)).unsigned = false;
                            else if (typeof object.blockNumber === "string")
                                message.blockNumber = parseInt(object.blockNumber, 10);
                            else if (typeof object.blockNumber === "number")
                                message.blockNumber = object.blockNumber;
                            else if (typeof object.blockNumber === "object")
                                message.blockNumber = new $util.LongBits(object.blockNumber.low >>> 0, object.blockNumber.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a RChainState message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @static
                     * @param {coop.rchain.casper.protocol.RChainState} message RChainState
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RChainState.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.bonds = [];
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.preStateHash = "";
                            else {
                                object.preStateHash = [];
                                if (options.bytes !== Array)
                                    object.preStateHash = $util.newBuffer(object.preStateHash);
                            }
                            if (options.bytes === String)
                                object.postStateHash = "";
                            else {
                                object.postStateHash = [];
                                if (options.bytes !== Array)
                                    object.postStateHash = $util.newBuffer(object.postStateHash);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.blockNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.blockNumber = options.longs === String ? "0" : 0;
                        }
                        if (message.preStateHash != null && message.hasOwnProperty("preStateHash"))
                            object.preStateHash = options.bytes === String ? $util.base64.encode(message.preStateHash, 0, message.preStateHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.preStateHash) : message.preStateHash;
                        if (message.postStateHash != null && message.hasOwnProperty("postStateHash"))
                            object.postStateHash = options.bytes === String ? $util.base64.encode(message.postStateHash, 0, message.postStateHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.postStateHash) : message.postStateHash;
                        if (message.bonds && message.bonds.length) {
                            object.bonds = [];
                            for (var j = 0; j < message.bonds.length; ++j)
                                object.bonds[j] = $root.coop.rchain.casper.protocol.Bond.toObject(message.bonds[j], options);
                        }
                        if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                            if (typeof message.blockNumber === "number")
                                object.blockNumber = options.longs === String ? String(message.blockNumber) : message.blockNumber;
                            else
                                object.blockNumber = options.longs === String ? $util.Long.prototype.toString.call(message.blockNumber) : options.longs === Number ? new $util.LongBits(message.blockNumber.low >>> 0, message.blockNumber.high >>> 0).toNumber() : message.blockNumber;
                        return object;
                    };

                    /**
                     * Converts this RChainState to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.RChainState
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RChainState.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RChainState;
                })();

                protocol.Event = (function() {

                    /**
                     * Properties of an Event.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IEvent
                     * @property {coop.rchain.casper.protocol.IProduceEvent|null} [produce] Event produce
                     * @property {coop.rchain.casper.protocol.IConsumeEvent|null} [consume] Event consume
                     * @property {coop.rchain.casper.protocol.ICommEvent|null} [comm] Event comm
                     */

                    /**
                     * Constructs a new Event.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents an Event.
                     * @implements IEvent
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IEvent=} [properties] Properties to set
                     */
                    function Event(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Event produce.
                     * @member {coop.rchain.casper.protocol.IProduceEvent|null|undefined} produce
                     * @memberof coop.rchain.casper.protocol.Event
                     * @instance
                     */
                    Event.prototype.produce = null;

                    /**
                     * Event consume.
                     * @member {coop.rchain.casper.protocol.IConsumeEvent|null|undefined} consume
                     * @memberof coop.rchain.casper.protocol.Event
                     * @instance
                     */
                    Event.prototype.consume = null;

                    /**
                     * Event comm.
                     * @member {coop.rchain.casper.protocol.ICommEvent|null|undefined} comm
                     * @memberof coop.rchain.casper.protocol.Event
                     * @instance
                     */
                    Event.prototype.comm = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Event event_instance.
                     * @member {"produce"|"consume"|"comm"|undefined} event_instance
                     * @memberof coop.rchain.casper.protocol.Event
                     * @instance
                     */
                    Object.defineProperty(Event.prototype, "event_instance", {
                        get: $util.oneOfGetter($oneOfFields = ["produce", "consume", "comm"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Event instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.Event
                     * @static
                     * @param {coop.rchain.casper.protocol.IEvent=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.Event} Event instance
                     */
                    Event.create = function create(properties) {
                        return new Event(properties);
                    };

                    /**
                     * Encodes the specified Event message. Does not implicitly {@link coop.rchain.casper.protocol.Event.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.Event
                     * @static
                     * @param {coop.rchain.casper.protocol.IEvent} message Event message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Event.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.produce != null && message.hasOwnProperty("produce"))
                            $root.coop.rchain.casper.protocol.ProduceEvent.encode(message.produce, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.consume != null && message.hasOwnProperty("consume"))
                            $root.coop.rchain.casper.protocol.ConsumeEvent.encode(message.consume, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.comm != null && message.hasOwnProperty("comm"))
                            $root.coop.rchain.casper.protocol.CommEvent.encode(message.comm, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Event message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.Event.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.Event
                     * @static
                     * @param {coop.rchain.casper.protocol.IEvent} message Event message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Event.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Event message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.Event
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.Event} Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Event.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.Event();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.produce = $root.coop.rchain.casper.protocol.ProduceEvent.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.consume = $root.coop.rchain.casper.protocol.ConsumeEvent.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.comm = $root.coop.rchain.casper.protocol.CommEvent.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Event message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.Event
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.Event} Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Event.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Event message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.Event
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Event.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.produce != null && message.hasOwnProperty("produce")) {
                            properties.event_instance = 1;
                            {
                                var error = $root.coop.rchain.casper.protocol.ProduceEvent.verify(message.produce);
                                if (error)
                                    return "produce." + error;
                            }
                        }
                        if (message.consume != null && message.hasOwnProperty("consume")) {
                            if (properties.event_instance === 1)
                                return "event_instance: multiple values";
                            properties.event_instance = 1;
                            {
                                var error = $root.coop.rchain.casper.protocol.ConsumeEvent.verify(message.consume);
                                if (error)
                                    return "consume." + error;
                            }
                        }
                        if (message.comm != null && message.hasOwnProperty("comm")) {
                            if (properties.event_instance === 1)
                                return "event_instance: multiple values";
                            properties.event_instance = 1;
                            {
                                var error = $root.coop.rchain.casper.protocol.CommEvent.verify(message.comm);
                                if (error)
                                    return "comm." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an Event message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.Event
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.Event} Event
                     */
                    Event.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.Event)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.Event();
                        if (object.produce != null) {
                            if (typeof object.produce !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.Event.produce: object expected");
                            message.produce = $root.coop.rchain.casper.protocol.ProduceEvent.fromObject(object.produce);
                        }
                        if (object.consume != null) {
                            if (typeof object.consume !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.Event.consume: object expected");
                            message.consume = $root.coop.rchain.casper.protocol.ConsumeEvent.fromObject(object.consume);
                        }
                        if (object.comm != null) {
                            if (typeof object.comm !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.Event.comm: object expected");
                            message.comm = $root.coop.rchain.casper.protocol.CommEvent.fromObject(object.comm);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Event message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.Event
                     * @static
                     * @param {coop.rchain.casper.protocol.Event} message Event
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Event.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.produce != null && message.hasOwnProperty("produce")) {
                            object.produce = $root.coop.rchain.casper.protocol.ProduceEvent.toObject(message.produce, options);
                            if (options.oneofs)
                                object.event_instance = "produce";
                        }
                        if (message.consume != null && message.hasOwnProperty("consume")) {
                            object.consume = $root.coop.rchain.casper.protocol.ConsumeEvent.toObject(message.consume, options);
                            if (options.oneofs)
                                object.event_instance = "consume";
                        }
                        if (message.comm != null && message.hasOwnProperty("comm")) {
                            object.comm = $root.coop.rchain.casper.protocol.CommEvent.toObject(message.comm, options);
                            if (options.oneofs)
                                object.event_instance = "comm";
                        }
                        return object;
                    };

                    /**
                     * Converts this Event to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.Event
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Event.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Event;
                })();

                protocol.ProduceEvent = (function() {

                    /**
                     * Properties of a ProduceEvent.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IProduceEvent
                     * @property {Uint8Array|null} [channelsHash] ProduceEvent channelsHash
                     * @property {Uint8Array|null} [hash] ProduceEvent hash
                     * @property {number|null} [sequenceNumber] ProduceEvent sequenceNumber
                     */

                    /**
                     * Constructs a new ProduceEvent.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a ProduceEvent.
                     * @implements IProduceEvent
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IProduceEvent=} [properties] Properties to set
                     */
                    function ProduceEvent(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ProduceEvent channelsHash.
                     * @member {Uint8Array} channelsHash
                     * @memberof coop.rchain.casper.protocol.ProduceEvent
                     * @instance
                     */
                    ProduceEvent.prototype.channelsHash = $util.newBuffer([]);

                    /**
                     * ProduceEvent hash.
                     * @member {Uint8Array} hash
                     * @memberof coop.rchain.casper.protocol.ProduceEvent
                     * @instance
                     */
                    ProduceEvent.prototype.hash = $util.newBuffer([]);

                    /**
                     * ProduceEvent sequenceNumber.
                     * @member {number} sequenceNumber
                     * @memberof coop.rchain.casper.protocol.ProduceEvent
                     * @instance
                     */
                    ProduceEvent.prototype.sequenceNumber = 0;

                    /**
                     * Creates a new ProduceEvent instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.ProduceEvent
                     * @static
                     * @param {coop.rchain.casper.protocol.IProduceEvent=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.ProduceEvent} ProduceEvent instance
                     */
                    ProduceEvent.create = function create(properties) {
                        return new ProduceEvent(properties);
                    };

                    /**
                     * Encodes the specified ProduceEvent message. Does not implicitly {@link coop.rchain.casper.protocol.ProduceEvent.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.ProduceEvent
                     * @static
                     * @param {coop.rchain.casper.protocol.IProduceEvent} message ProduceEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ProduceEvent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.channelsHash != null && message.hasOwnProperty("channelsHash"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.channelsHash);
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.hash);
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sequenceNumber);
                        return writer;
                    };

                    /**
                     * Encodes the specified ProduceEvent message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.ProduceEvent.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.ProduceEvent
                     * @static
                     * @param {coop.rchain.casper.protocol.IProduceEvent} message ProduceEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ProduceEvent.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ProduceEvent message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.ProduceEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.ProduceEvent} ProduceEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ProduceEvent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ProduceEvent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.channelsHash = reader.bytes();
                                break;
                            case 2:
                                message.hash = reader.bytes();
                                break;
                            case 3:
                                message.sequenceNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ProduceEvent message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.ProduceEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.ProduceEvent} ProduceEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ProduceEvent.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ProduceEvent message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.ProduceEvent
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ProduceEvent.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.channelsHash != null && message.hasOwnProperty("channelsHash"))
                            if (!(message.channelsHash && typeof message.channelsHash.length === "number" || $util.isString(message.channelsHash)))
                                return "channelsHash: buffer expected";
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                                return "hash: buffer expected";
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            if (!$util.isInteger(message.sequenceNumber))
                                return "sequenceNumber: integer expected";
                        return null;
                    };

                    /**
                     * Creates a ProduceEvent message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.ProduceEvent
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.ProduceEvent} ProduceEvent
                     */
                    ProduceEvent.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ProduceEvent)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ProduceEvent();
                        if (object.channelsHash != null)
                            if (typeof object.channelsHash === "string")
                                $util.base64.decode(object.channelsHash, message.channelsHash = $util.newBuffer($util.base64.length(object.channelsHash)), 0);
                            else if (object.channelsHash.length)
                                message.channelsHash = object.channelsHash;
                        if (object.hash != null)
                            if (typeof object.hash === "string")
                                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                            else if (object.hash.length)
                                message.hash = object.hash;
                        if (object.sequenceNumber != null)
                            message.sequenceNumber = object.sequenceNumber | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a ProduceEvent message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.ProduceEvent
                     * @static
                     * @param {coop.rchain.casper.protocol.ProduceEvent} message ProduceEvent
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ProduceEvent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.channelsHash = "";
                            else {
                                object.channelsHash = [];
                                if (options.bytes !== Array)
                                    object.channelsHash = $util.newBuffer(object.channelsHash);
                            }
                            if (options.bytes === String)
                                object.hash = "";
                            else {
                                object.hash = [];
                                if (options.bytes !== Array)
                                    object.hash = $util.newBuffer(object.hash);
                            }
                            object.sequenceNumber = 0;
                        }
                        if (message.channelsHash != null && message.hasOwnProperty("channelsHash"))
                            object.channelsHash = options.bytes === String ? $util.base64.encode(message.channelsHash, 0, message.channelsHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.channelsHash) : message.channelsHash;
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            object.sequenceNumber = message.sequenceNumber;
                        return object;
                    };

                    /**
                     * Converts this ProduceEvent to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.ProduceEvent
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ProduceEvent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ProduceEvent;
                })();

                protocol.ConsumeEvent = (function() {

                    /**
                     * Properties of a ConsumeEvent.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IConsumeEvent
                     * @property {Array.<Uint8Array>|null} [channelsHashes] ConsumeEvent channelsHashes
                     * @property {Uint8Array|null} [hash] ConsumeEvent hash
                     * @property {number|null} [sequenceNumber] ConsumeEvent sequenceNumber
                     */

                    /**
                     * Constructs a new ConsumeEvent.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a ConsumeEvent.
                     * @implements IConsumeEvent
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IConsumeEvent=} [properties] Properties to set
                     */
                    function ConsumeEvent(properties) {
                        this.channelsHashes = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ConsumeEvent channelsHashes.
                     * @member {Array.<Uint8Array>} channelsHashes
                     * @memberof coop.rchain.casper.protocol.ConsumeEvent
                     * @instance
                     */
                    ConsumeEvent.prototype.channelsHashes = $util.emptyArray;

                    /**
                     * ConsumeEvent hash.
                     * @member {Uint8Array} hash
                     * @memberof coop.rchain.casper.protocol.ConsumeEvent
                     * @instance
                     */
                    ConsumeEvent.prototype.hash = $util.newBuffer([]);

                    /**
                     * ConsumeEvent sequenceNumber.
                     * @member {number} sequenceNumber
                     * @memberof coop.rchain.casper.protocol.ConsumeEvent
                     * @instance
                     */
                    ConsumeEvent.prototype.sequenceNumber = 0;

                    /**
                     * Creates a new ConsumeEvent instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.ConsumeEvent
                     * @static
                     * @param {coop.rchain.casper.protocol.IConsumeEvent=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.ConsumeEvent} ConsumeEvent instance
                     */
                    ConsumeEvent.create = function create(properties) {
                        return new ConsumeEvent(properties);
                    };

                    /**
                     * Encodes the specified ConsumeEvent message. Does not implicitly {@link coop.rchain.casper.protocol.ConsumeEvent.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.ConsumeEvent
                     * @static
                     * @param {coop.rchain.casper.protocol.IConsumeEvent} message ConsumeEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ConsumeEvent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.channelsHashes != null && message.channelsHashes.length)
                            for (var i = 0; i < message.channelsHashes.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.channelsHashes[i]);
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.hash);
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sequenceNumber);
                        return writer;
                    };

                    /**
                     * Encodes the specified ConsumeEvent message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.ConsumeEvent.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.ConsumeEvent
                     * @static
                     * @param {coop.rchain.casper.protocol.IConsumeEvent} message ConsumeEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ConsumeEvent.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ConsumeEvent message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.ConsumeEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.ConsumeEvent} ConsumeEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ConsumeEvent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.ConsumeEvent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.channelsHashes && message.channelsHashes.length))
                                    message.channelsHashes = [];
                                message.channelsHashes.push(reader.bytes());
                                break;
                            case 2:
                                message.hash = reader.bytes();
                                break;
                            case 3:
                                message.sequenceNumber = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ConsumeEvent message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.ConsumeEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.ConsumeEvent} ConsumeEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ConsumeEvent.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ConsumeEvent message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.ConsumeEvent
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ConsumeEvent.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.channelsHashes != null && message.hasOwnProperty("channelsHashes")) {
                            if (!Array.isArray(message.channelsHashes))
                                return "channelsHashes: array expected";
                            for (var i = 0; i < message.channelsHashes.length; ++i)
                                if (!(message.channelsHashes[i] && typeof message.channelsHashes[i].length === "number" || $util.isString(message.channelsHashes[i])))
                                    return "channelsHashes: buffer[] expected";
                        }
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                                return "hash: buffer expected";
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            if (!$util.isInteger(message.sequenceNumber))
                                return "sequenceNumber: integer expected";
                        return null;
                    };

                    /**
                     * Creates a ConsumeEvent message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.ConsumeEvent
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.ConsumeEvent} ConsumeEvent
                     */
                    ConsumeEvent.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.ConsumeEvent)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.ConsumeEvent();
                        if (object.channelsHashes) {
                            if (!Array.isArray(object.channelsHashes))
                                throw TypeError(".coop.rchain.casper.protocol.ConsumeEvent.channelsHashes: array expected");
                            message.channelsHashes = [];
                            for (var i = 0; i < object.channelsHashes.length; ++i)
                                if (typeof object.channelsHashes[i] === "string")
                                    $util.base64.decode(object.channelsHashes[i], message.channelsHashes[i] = $util.newBuffer($util.base64.length(object.channelsHashes[i])), 0);
                                else if (object.channelsHashes[i].length)
                                    message.channelsHashes[i] = object.channelsHashes[i];
                        }
                        if (object.hash != null)
                            if (typeof object.hash === "string")
                                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                            else if (object.hash.length)
                                message.hash = object.hash;
                        if (object.sequenceNumber != null)
                            message.sequenceNumber = object.sequenceNumber | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a ConsumeEvent message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.ConsumeEvent
                     * @static
                     * @param {coop.rchain.casper.protocol.ConsumeEvent} message ConsumeEvent
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ConsumeEvent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.channelsHashes = [];
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.hash = "";
                            else {
                                object.hash = [];
                                if (options.bytes !== Array)
                                    object.hash = $util.newBuffer(object.hash);
                            }
                            object.sequenceNumber = 0;
                        }
                        if (message.channelsHashes && message.channelsHashes.length) {
                            object.channelsHashes = [];
                            for (var j = 0; j < message.channelsHashes.length; ++j)
                                object.channelsHashes[j] = options.bytes === String ? $util.base64.encode(message.channelsHashes[j], 0, message.channelsHashes[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.channelsHashes[j]) : message.channelsHashes[j];
                        }
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            object.sequenceNumber = message.sequenceNumber;
                        return object;
                    };

                    /**
                     * Converts this ConsumeEvent to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.ConsumeEvent
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ConsumeEvent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ConsumeEvent;
                })();

                protocol.CommEvent = (function() {

                    /**
                     * Properties of a CommEvent.
                     * @memberof coop.rchain.casper.protocol
                     * @interface ICommEvent
                     * @property {coop.rchain.casper.protocol.IConsumeEvent|null} [consume] CommEvent consume
                     * @property {Array.<coop.rchain.casper.protocol.IProduceEvent>|null} [produces] CommEvent produces
                     */

                    /**
                     * Constructs a new CommEvent.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a CommEvent.
                     * @implements ICommEvent
                     * @constructor
                     * @param {coop.rchain.casper.protocol.ICommEvent=} [properties] Properties to set
                     */
                    function CommEvent(properties) {
                        this.produces = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommEvent consume.
                     * @member {coop.rchain.casper.protocol.IConsumeEvent|null|undefined} consume
                     * @memberof coop.rchain.casper.protocol.CommEvent
                     * @instance
                     */
                    CommEvent.prototype.consume = null;

                    /**
                     * CommEvent produces.
                     * @member {Array.<coop.rchain.casper.protocol.IProduceEvent>} produces
                     * @memberof coop.rchain.casper.protocol.CommEvent
                     * @instance
                     */
                    CommEvent.prototype.produces = $util.emptyArray;

                    /**
                     * Creates a new CommEvent instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.CommEvent
                     * @static
                     * @param {coop.rchain.casper.protocol.ICommEvent=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.CommEvent} CommEvent instance
                     */
                    CommEvent.create = function create(properties) {
                        return new CommEvent(properties);
                    };

                    /**
                     * Encodes the specified CommEvent message. Does not implicitly {@link coop.rchain.casper.protocol.CommEvent.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.CommEvent
                     * @static
                     * @param {coop.rchain.casper.protocol.ICommEvent} message CommEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommEvent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.consume != null && message.hasOwnProperty("consume"))
                            $root.coop.rchain.casper.protocol.ConsumeEvent.encode(message.consume, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.produces != null && message.produces.length)
                            for (var i = 0; i < message.produces.length; ++i)
                                $root.coop.rchain.casper.protocol.ProduceEvent.encode(message.produces[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified CommEvent message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.CommEvent.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.CommEvent
                     * @static
                     * @param {coop.rchain.casper.protocol.ICommEvent} message CommEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommEvent.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommEvent message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.CommEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.CommEvent} CommEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommEvent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.CommEvent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.consume = $root.coop.rchain.casper.protocol.ConsumeEvent.decode(reader, reader.uint32());
                                break;
                            case 2:
                                if (!(message.produces && message.produces.length))
                                    message.produces = [];
                                message.produces.push($root.coop.rchain.casper.protocol.ProduceEvent.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CommEvent message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.CommEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.CommEvent} CommEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommEvent.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommEvent message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.CommEvent
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommEvent.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.consume != null && message.hasOwnProperty("consume")) {
                            var error = $root.coop.rchain.casper.protocol.ConsumeEvent.verify(message.consume);
                            if (error)
                                return "consume." + error;
                        }
                        if (message.produces != null && message.hasOwnProperty("produces")) {
                            if (!Array.isArray(message.produces))
                                return "produces: array expected";
                            for (var i = 0; i < message.produces.length; ++i) {
                                var error = $root.coop.rchain.casper.protocol.ProduceEvent.verify(message.produces[i]);
                                if (error)
                                    return "produces." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a CommEvent message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.CommEvent
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.CommEvent} CommEvent
                     */
                    CommEvent.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.CommEvent)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.CommEvent();
                        if (object.consume != null) {
                            if (typeof object.consume !== "object")
                                throw TypeError(".coop.rchain.casper.protocol.CommEvent.consume: object expected");
                            message.consume = $root.coop.rchain.casper.protocol.ConsumeEvent.fromObject(object.consume);
                        }
                        if (object.produces) {
                            if (!Array.isArray(object.produces))
                                throw TypeError(".coop.rchain.casper.protocol.CommEvent.produces: array expected");
                            message.produces = [];
                            for (var i = 0; i < object.produces.length; ++i) {
                                if (typeof object.produces[i] !== "object")
                                    throw TypeError(".coop.rchain.casper.protocol.CommEvent.produces: object expected");
                                message.produces[i] = $root.coop.rchain.casper.protocol.ProduceEvent.fromObject(object.produces[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommEvent message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.CommEvent
                     * @static
                     * @param {coop.rchain.casper.protocol.CommEvent} message CommEvent
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommEvent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.produces = [];
                        if (options.defaults)
                            object.consume = null;
                        if (message.consume != null && message.hasOwnProperty("consume"))
                            object.consume = $root.coop.rchain.casper.protocol.ConsumeEvent.toObject(message.consume, options);
                        if (message.produces && message.produces.length) {
                            object.produces = [];
                            for (var j = 0; j < message.produces.length; ++j)
                                object.produces[j] = $root.coop.rchain.casper.protocol.ProduceEvent.toObject(message.produces[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this CommEvent to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.CommEvent
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommEvent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CommEvent;
                })();

                protocol.Bond = (function() {

                    /**
                     * Properties of a Bond.
                     * @memberof coop.rchain.casper.protocol
                     * @interface IBond
                     * @property {Uint8Array|null} [validator] Bond validator
                     * @property {number|Long|null} [stake] Bond stake
                     */

                    /**
                     * Constructs a new Bond.
                     * @memberof coop.rchain.casper.protocol
                     * @classdesc Represents a Bond.
                     * @implements IBond
                     * @constructor
                     * @param {coop.rchain.casper.protocol.IBond=} [properties] Properties to set
                     */
                    function Bond(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Bond validator.
                     * @member {Uint8Array} validator
                     * @memberof coop.rchain.casper.protocol.Bond
                     * @instance
                     */
                    Bond.prototype.validator = $util.newBuffer([]);

                    /**
                     * Bond stake.
                     * @member {number|Long} stake
                     * @memberof coop.rchain.casper.protocol.Bond
                     * @instance
                     */
                    Bond.prototype.stake = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new Bond instance using the specified properties.
                     * @function create
                     * @memberof coop.rchain.casper.protocol.Bond
                     * @static
                     * @param {coop.rchain.casper.protocol.IBond=} [properties] Properties to set
                     * @returns {coop.rchain.casper.protocol.Bond} Bond instance
                     */
                    Bond.create = function create(properties) {
                        return new Bond(properties);
                    };

                    /**
                     * Encodes the specified Bond message. Does not implicitly {@link coop.rchain.casper.protocol.Bond.verify|verify} messages.
                     * @function encode
                     * @memberof coop.rchain.casper.protocol.Bond
                     * @static
                     * @param {coop.rchain.casper.protocol.IBond} message Bond message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Bond.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.validator != null && message.hasOwnProperty("validator"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.validator);
                        if (message.stake != null && message.hasOwnProperty("stake"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.stake);
                        return writer;
                    };

                    /**
                     * Encodes the specified Bond message, length delimited. Does not implicitly {@link coop.rchain.casper.protocol.Bond.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof coop.rchain.casper.protocol.Bond
                     * @static
                     * @param {coop.rchain.casper.protocol.IBond} message Bond message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Bond.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Bond message from the specified reader or buffer.
                     * @function decode
                     * @memberof coop.rchain.casper.protocol.Bond
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {coop.rchain.casper.protocol.Bond} Bond
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Bond.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coop.rchain.casper.protocol.Bond();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.validator = reader.bytes();
                                break;
                            case 2:
                                message.stake = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Bond message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof coop.rchain.casper.protocol.Bond
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {coop.rchain.casper.protocol.Bond} Bond
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Bond.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Bond message.
                     * @function verify
                     * @memberof coop.rchain.casper.protocol.Bond
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Bond.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.validator != null && message.hasOwnProperty("validator"))
                            if (!(message.validator && typeof message.validator.length === "number" || $util.isString(message.validator)))
                                return "validator: buffer expected";
                        if (message.stake != null && message.hasOwnProperty("stake"))
                            if (!$util.isInteger(message.stake) && !(message.stake && $util.isInteger(message.stake.low) && $util.isInteger(message.stake.high)))
                                return "stake: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a Bond message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof coop.rchain.casper.protocol.Bond
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {coop.rchain.casper.protocol.Bond} Bond
                     */
                    Bond.fromObject = function fromObject(object) {
                        if (object instanceof $root.coop.rchain.casper.protocol.Bond)
                            return object;
                        var message = new $root.coop.rchain.casper.protocol.Bond();
                        if (object.validator != null)
                            if (typeof object.validator === "string")
                                $util.base64.decode(object.validator, message.validator = $util.newBuffer($util.base64.length(object.validator)), 0);
                            else if (object.validator.length)
                                message.validator = object.validator;
                        if (object.stake != null)
                            if ($util.Long)
                                (message.stake = $util.Long.fromValue(object.stake)).unsigned = false;
                            else if (typeof object.stake === "string")
                                message.stake = parseInt(object.stake, 10);
                            else if (typeof object.stake === "number")
                                message.stake = object.stake;
                            else if (typeof object.stake === "object")
                                message.stake = new $util.LongBits(object.stake.low >>> 0, object.stake.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a Bond message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof coop.rchain.casper.protocol.Bond
                     * @static
                     * @param {coop.rchain.casper.protocol.Bond} message Bond
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Bond.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.validator = "";
                            else {
                                object.validator = [];
                                if (options.bytes !== Array)
                                    object.validator = $util.newBuffer(object.validator);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.stake = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.stake = options.longs === String ? "0" : 0;
                        }
                        if (message.validator != null && message.hasOwnProperty("validator"))
                            object.validator = options.bytes === String ? $util.base64.encode(message.validator, 0, message.validator.length) : options.bytes === Array ? Array.prototype.slice.call(message.validator) : message.validator;
                        if (message.stake != null && message.hasOwnProperty("stake"))
                            if (typeof message.stake === "number")
                                object.stake = options.longs === String ? String(message.stake) : message.stake;
                            else
                                object.stake = options.longs === String ? $util.Long.prototype.toString.call(message.stake) : options.longs === Number ? new $util.LongBits(message.stake.low >>> 0, message.stake.high >>> 0).toNumber() : message.stake;
                        return object;
                    };

                    /**
                     * Converts this Bond to JSON.
                     * @function toJSON
                     * @memberof coop.rchain.casper.protocol.Bond
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Bond.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Bond;
                })();

                return protocol;
            })();

            return casper;
        })();

        return rchain;
    })();

    return coop;
})();

$root.Par = (function() {

    /**
     * Properties of a Par.
     * @exports IPar
     * @interface IPar
     * @property {Array.<ISend>|null} [sends] Par sends
     * @property {Array.<IReceive>|null} [receives] Par receives
     * @property {Array.<INew>|null} [news] Par news
     * @property {Array.<IExpr>|null} [exprs] Par exprs
     * @property {Array.<IMatch>|null} [matches] Par matches
     * @property {Array.<IGUnforgeable>|null} [unforgeables] Par unforgeables
     * @property {Array.<IBundle>|null} [bundles] Par bundles
     * @property {Array.<IConnective>|null} [connectives] Par connectives
     * @property {Uint8Array|null} [locallyFree] Par locallyFree
     * @property {boolean|null} [connective_used] Par connective_used
     */

    /**
     * Constructs a new Par.
     * @exports Par
     * @classdesc Rholang process
     * 
     * For example, `@0!(1) | @2!(3) | for(x <- @0) { Nil }` has two sends
     * and one receive.
     * 
     * The Nil process is a `Par` with no sends, receives, etc.
     * @implements IPar
     * @constructor
     * @param {IPar=} [properties] Properties to set
     */
    function Par(properties) {
        this.sends = [];
        this.receives = [];
        this.news = [];
        this.exprs = [];
        this.matches = [];
        this.unforgeables = [];
        this.bundles = [];
        this.connectives = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Par sends.
     * @member {Array.<ISend>} sends
     * @memberof Par
     * @instance
     */
    Par.prototype.sends = $util.emptyArray;

    /**
     * Par receives.
     * @member {Array.<IReceive>} receives
     * @memberof Par
     * @instance
     */
    Par.prototype.receives = $util.emptyArray;

    /**
     * Par news.
     * @member {Array.<INew>} news
     * @memberof Par
     * @instance
     */
    Par.prototype.news = $util.emptyArray;

    /**
     * Par exprs.
     * @member {Array.<IExpr>} exprs
     * @memberof Par
     * @instance
     */
    Par.prototype.exprs = $util.emptyArray;

    /**
     * Par matches.
     * @member {Array.<IMatch>} matches
     * @memberof Par
     * @instance
     */
    Par.prototype.matches = $util.emptyArray;

    /**
     * Par unforgeables.
     * @member {Array.<IGUnforgeable>} unforgeables
     * @memberof Par
     * @instance
     */
    Par.prototype.unforgeables = $util.emptyArray;

    /**
     * Par bundles.
     * @member {Array.<IBundle>} bundles
     * @memberof Par
     * @instance
     */
    Par.prototype.bundles = $util.emptyArray;

    /**
     * Par connectives.
     * @member {Array.<IConnective>} connectives
     * @memberof Par
     * @instance
     */
    Par.prototype.connectives = $util.emptyArray;

    /**
     * Par locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof Par
     * @instance
     */
    Par.prototype.locallyFree = $util.newBuffer([]);

    /**
     * Par connective_used.
     * @member {boolean} connective_used
     * @memberof Par
     * @instance
     */
    Par.prototype.connective_used = false;

    /**
     * Creates a new Par instance using the specified properties.
     * @function create
     * @memberof Par
     * @static
     * @param {IPar=} [properties] Properties to set
     * @returns {Par} Par instance
     */
    Par.create = function create(properties) {
        return new Par(properties);
    };

    /**
     * Encodes the specified Par message. Does not implicitly {@link Par.verify|verify} messages.
     * @function encode
     * @memberof Par
     * @static
     * @param {IPar} message Par message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Par.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sends != null && message.sends.length)
            for (var i = 0; i < message.sends.length; ++i)
                $root.Send.encode(message.sends[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.receives != null && message.receives.length)
            for (var i = 0; i < message.receives.length; ++i)
                $root.Receive.encode(message.receives[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.news != null && message.news.length)
            for (var i = 0; i < message.news.length; ++i)
                $root.New.encode(message.news[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.exprs != null && message.exprs.length)
            for (var i = 0; i < message.exprs.length; ++i)
                $root.Expr.encode(message.exprs[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.matches != null && message.matches.length)
            for (var i = 0; i < message.matches.length; ++i)
                $root.Match.encode(message.matches[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.unforgeables != null && message.unforgeables.length)
            for (var i = 0; i < message.unforgeables.length; ++i)
                $root.GUnforgeable.encode(message.unforgeables[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.connectives != null && message.connectives.length)
            for (var i = 0; i < message.connectives.length; ++i)
                $root.Connective.encode(message.connectives[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.connective_used);
        if (message.bundles != null && message.bundles.length)
            for (var i = 0; i < message.bundles.length; ++i)
                $root.Bundle.encode(message.bundles[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Par message, length delimited. Does not implicitly {@link Par.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Par
     * @static
     * @param {IPar} message Par message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Par.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Par message from the specified reader or buffer.
     * @function decode
     * @memberof Par
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Par} Par
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Par.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Par();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.sends && message.sends.length))
                    message.sends = [];
                message.sends.push($root.Send.decode(reader, reader.uint32()));
                break;
            case 2:
                if (!(message.receives && message.receives.length))
                    message.receives = [];
                message.receives.push($root.Receive.decode(reader, reader.uint32()));
                break;
            case 4:
                if (!(message.news && message.news.length))
                    message.news = [];
                message.news.push($root.New.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.exprs && message.exprs.length))
                    message.exprs = [];
                message.exprs.push($root.Expr.decode(reader, reader.uint32()));
                break;
            case 6:
                if (!(message.matches && message.matches.length))
                    message.matches = [];
                message.matches.push($root.Match.decode(reader, reader.uint32()));
                break;
            case 7:
                if (!(message.unforgeables && message.unforgeables.length))
                    message.unforgeables = [];
                message.unforgeables.push($root.GUnforgeable.decode(reader, reader.uint32()));
                break;
            case 11:
                if (!(message.bundles && message.bundles.length))
                    message.bundles = [];
                message.bundles.push($root.Bundle.decode(reader, reader.uint32()));
                break;
            case 8:
                if (!(message.connectives && message.connectives.length))
                    message.connectives = [];
                message.connectives.push($root.Connective.decode(reader, reader.uint32()));
                break;
            case 9:
                message.locallyFree = reader.bytes();
                break;
            case 10:
                message.connective_used = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Par message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Par
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Par} Par
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Par.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Par message.
     * @function verify
     * @memberof Par
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Par.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sends != null && message.hasOwnProperty("sends")) {
            if (!Array.isArray(message.sends))
                return "sends: array expected";
            for (var i = 0; i < message.sends.length; ++i) {
                var error = $root.Send.verify(message.sends[i]);
                if (error)
                    return "sends." + error;
            }
        }
        if (message.receives != null && message.hasOwnProperty("receives")) {
            if (!Array.isArray(message.receives))
                return "receives: array expected";
            for (var i = 0; i < message.receives.length; ++i) {
                var error = $root.Receive.verify(message.receives[i]);
                if (error)
                    return "receives." + error;
            }
        }
        if (message.news != null && message.hasOwnProperty("news")) {
            if (!Array.isArray(message.news))
                return "news: array expected";
            for (var i = 0; i < message.news.length; ++i) {
                var error = $root.New.verify(message.news[i]);
                if (error)
                    return "news." + error;
            }
        }
        if (message.exprs != null && message.hasOwnProperty("exprs")) {
            if (!Array.isArray(message.exprs))
                return "exprs: array expected";
            for (var i = 0; i < message.exprs.length; ++i) {
                var error = $root.Expr.verify(message.exprs[i]);
                if (error)
                    return "exprs." + error;
            }
        }
        if (message.matches != null && message.hasOwnProperty("matches")) {
            if (!Array.isArray(message.matches))
                return "matches: array expected";
            for (var i = 0; i < message.matches.length; ++i) {
                var error = $root.Match.verify(message.matches[i]);
                if (error)
                    return "matches." + error;
            }
        }
        if (message.unforgeables != null && message.hasOwnProperty("unforgeables")) {
            if (!Array.isArray(message.unforgeables))
                return "unforgeables: array expected";
            for (var i = 0; i < message.unforgeables.length; ++i) {
                var error = $root.GUnforgeable.verify(message.unforgeables[i]);
                if (error)
                    return "unforgeables." + error;
            }
        }
        if (message.bundles != null && message.hasOwnProperty("bundles")) {
            if (!Array.isArray(message.bundles))
                return "bundles: array expected";
            for (var i = 0; i < message.bundles.length; ++i) {
                var error = $root.Bundle.verify(message.bundles[i]);
                if (error)
                    return "bundles." + error;
            }
        }
        if (message.connectives != null && message.hasOwnProperty("connectives")) {
            if (!Array.isArray(message.connectives))
                return "connectives: array expected";
            for (var i = 0; i < message.connectives.length; ++i) {
                var error = $root.Connective.verify(message.connectives[i]);
                if (error)
                    return "connectives." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        return null;
    };

    /**
     * Creates a Par message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Par
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Par} Par
     */
    Par.fromObject = function fromObject(object) {
        if (object instanceof $root.Par)
            return object;
        var message = new $root.Par();
        if (object.sends) {
            if (!Array.isArray(object.sends))
                throw TypeError(".Par.sends: array expected");
            message.sends = [];
            for (var i = 0; i < object.sends.length; ++i) {
                if (typeof object.sends[i] !== "object")
                    throw TypeError(".Par.sends: object expected");
                message.sends[i] = $root.Send.fromObject(object.sends[i]);
            }
        }
        if (object.receives) {
            if (!Array.isArray(object.receives))
                throw TypeError(".Par.receives: array expected");
            message.receives = [];
            for (var i = 0; i < object.receives.length; ++i) {
                if (typeof object.receives[i] !== "object")
                    throw TypeError(".Par.receives: object expected");
                message.receives[i] = $root.Receive.fromObject(object.receives[i]);
            }
        }
        if (object.news) {
            if (!Array.isArray(object.news))
                throw TypeError(".Par.news: array expected");
            message.news = [];
            for (var i = 0; i < object.news.length; ++i) {
                if (typeof object.news[i] !== "object")
                    throw TypeError(".Par.news: object expected");
                message.news[i] = $root.New.fromObject(object.news[i]);
            }
        }
        if (object.exprs) {
            if (!Array.isArray(object.exprs))
                throw TypeError(".Par.exprs: array expected");
            message.exprs = [];
            for (var i = 0; i < object.exprs.length; ++i) {
                if (typeof object.exprs[i] !== "object")
                    throw TypeError(".Par.exprs: object expected");
                message.exprs[i] = $root.Expr.fromObject(object.exprs[i]);
            }
        }
        if (object.matches) {
            if (!Array.isArray(object.matches))
                throw TypeError(".Par.matches: array expected");
            message.matches = [];
            for (var i = 0; i < object.matches.length; ++i) {
                if (typeof object.matches[i] !== "object")
                    throw TypeError(".Par.matches: object expected");
                message.matches[i] = $root.Match.fromObject(object.matches[i]);
            }
        }
        if (object.unforgeables) {
            if (!Array.isArray(object.unforgeables))
                throw TypeError(".Par.unforgeables: array expected");
            message.unforgeables = [];
            for (var i = 0; i < object.unforgeables.length; ++i) {
                if (typeof object.unforgeables[i] !== "object")
                    throw TypeError(".Par.unforgeables: object expected");
                message.unforgeables[i] = $root.GUnforgeable.fromObject(object.unforgeables[i]);
            }
        }
        if (object.bundles) {
            if (!Array.isArray(object.bundles))
                throw TypeError(".Par.bundles: array expected");
            message.bundles = [];
            for (var i = 0; i < object.bundles.length; ++i) {
                if (typeof object.bundles[i] !== "object")
                    throw TypeError(".Par.bundles: object expected");
                message.bundles[i] = $root.Bundle.fromObject(object.bundles[i]);
            }
        }
        if (object.connectives) {
            if (!Array.isArray(object.connectives))
                throw TypeError(".Par.connectives: array expected");
            message.connectives = [];
            for (var i = 0; i < object.connectives.length; ++i) {
                if (typeof object.connectives[i] !== "object")
                    throw TypeError(".Par.connectives: object expected");
                message.connectives[i] = $root.Connective.fromObject(object.connectives[i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        return message;
    };

    /**
     * Creates a plain object from a Par message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Par
     * @static
     * @param {Par} message Par
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Par.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.sends = [];
            object.receives = [];
            object.news = [];
            object.exprs = [];
            object.matches = [];
            object.unforgeables = [];
            object.connectives = [];
            object.bundles = [];
        }
        if (options.defaults) {
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
        }
        if (message.sends && message.sends.length) {
            object.sends = [];
            for (var j = 0; j < message.sends.length; ++j)
                object.sends[j] = $root.Send.toObject(message.sends[j], options);
        }
        if (message.receives && message.receives.length) {
            object.receives = [];
            for (var j = 0; j < message.receives.length; ++j)
                object.receives[j] = $root.Receive.toObject(message.receives[j], options);
        }
        if (message.news && message.news.length) {
            object.news = [];
            for (var j = 0; j < message.news.length; ++j)
                object.news[j] = $root.New.toObject(message.news[j], options);
        }
        if (message.exprs && message.exprs.length) {
            object.exprs = [];
            for (var j = 0; j < message.exprs.length; ++j)
                object.exprs[j] = $root.Expr.toObject(message.exprs[j], options);
        }
        if (message.matches && message.matches.length) {
            object.matches = [];
            for (var j = 0; j < message.matches.length; ++j)
                object.matches[j] = $root.Match.toObject(message.matches[j], options);
        }
        if (message.unforgeables && message.unforgeables.length) {
            object.unforgeables = [];
            for (var j = 0; j < message.unforgeables.length; ++j)
                object.unforgeables[j] = $root.GUnforgeable.toObject(message.unforgeables[j], options);
        }
        if (message.connectives && message.connectives.length) {
            object.connectives = [];
            for (var j = 0; j < message.connectives.length; ++j)
                object.connectives[j] = $root.Connective.toObject(message.connectives[j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        if (message.bundles && message.bundles.length) {
            object.bundles = [];
            for (var j = 0; j < message.bundles.length; ++j)
                object.bundles[j] = $root.Bundle.toObject(message.bundles[j], options);
        }
        return object;
    };

    /**
     * Converts this Par to JSON.
     * @function toJSON
     * @memberof Par
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Par.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Par;
})();

$root.TaggedContinuation = (function() {

    /**
     * Properties of a TaggedContinuation.
     * @exports ITaggedContinuation
     * @interface ITaggedContinuation
     * @property {IParWithRandom|null} [par_body] TaggedContinuation par_body
     * @property {number|Long|null} [scala_body_ref] TaggedContinuation scala_body_ref
     */

    /**
     * Constructs a new TaggedContinuation.
     * @exports TaggedContinuation
     * @classdesc Either rholang code or code built in to the interpreter.
     * @implements ITaggedContinuation
     * @constructor
     * @param {ITaggedContinuation=} [properties] Properties to set
     */
    function TaggedContinuation(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TaggedContinuation par_body.
     * @member {IParWithRandom|null|undefined} par_body
     * @memberof TaggedContinuation
     * @instance
     */
    TaggedContinuation.prototype.par_body = null;

    /**
     * TaggedContinuation scala_body_ref.
     * @member {number|Long} scala_body_ref
     * @memberof TaggedContinuation
     * @instance
     */
    TaggedContinuation.prototype.scala_body_ref = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * TaggedContinuation tagged_cont.
     * @member {"par_body"|"scala_body_ref"|undefined} tagged_cont
     * @memberof TaggedContinuation
     * @instance
     */
    Object.defineProperty(TaggedContinuation.prototype, "tagged_cont", {
        get: $util.oneOfGetter($oneOfFields = ["par_body", "scala_body_ref"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new TaggedContinuation instance using the specified properties.
     * @function create
     * @memberof TaggedContinuation
     * @static
     * @param {ITaggedContinuation=} [properties] Properties to set
     * @returns {TaggedContinuation} TaggedContinuation instance
     */
    TaggedContinuation.create = function create(properties) {
        return new TaggedContinuation(properties);
    };

    /**
     * Encodes the specified TaggedContinuation message. Does not implicitly {@link TaggedContinuation.verify|verify} messages.
     * @function encode
     * @memberof TaggedContinuation
     * @static
     * @param {ITaggedContinuation} message TaggedContinuation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaggedContinuation.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.par_body != null && message.hasOwnProperty("par_body"))
            $root.ParWithRandom.encode(message.par_body, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.scala_body_ref != null && message.hasOwnProperty("scala_body_ref"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.scala_body_ref);
        return writer;
    };

    /**
     * Encodes the specified TaggedContinuation message, length delimited. Does not implicitly {@link TaggedContinuation.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TaggedContinuation
     * @static
     * @param {ITaggedContinuation} message TaggedContinuation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaggedContinuation.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TaggedContinuation message from the specified reader or buffer.
     * @function decode
     * @memberof TaggedContinuation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TaggedContinuation} TaggedContinuation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaggedContinuation.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TaggedContinuation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.par_body = $root.ParWithRandom.decode(reader, reader.uint32());
                break;
            case 2:
                message.scala_body_ref = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TaggedContinuation message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TaggedContinuation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TaggedContinuation} TaggedContinuation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaggedContinuation.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TaggedContinuation message.
     * @function verify
     * @memberof TaggedContinuation
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TaggedContinuation.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.par_body != null && message.hasOwnProperty("par_body")) {
            properties.tagged_cont = 1;
            {
                var error = $root.ParWithRandom.verify(message.par_body);
                if (error)
                    return "par_body." + error;
            }
        }
        if (message.scala_body_ref != null && message.hasOwnProperty("scala_body_ref")) {
            if (properties.tagged_cont === 1)
                return "tagged_cont: multiple values";
            properties.tagged_cont = 1;
            if (!$util.isInteger(message.scala_body_ref) && !(message.scala_body_ref && $util.isInteger(message.scala_body_ref.low) && $util.isInteger(message.scala_body_ref.high)))
                return "scala_body_ref: integer|Long expected";
        }
        return null;
    };

    /**
     * Creates a TaggedContinuation message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TaggedContinuation
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TaggedContinuation} TaggedContinuation
     */
    TaggedContinuation.fromObject = function fromObject(object) {
        if (object instanceof $root.TaggedContinuation)
            return object;
        var message = new $root.TaggedContinuation();
        if (object.par_body != null) {
            if (typeof object.par_body !== "object")
                throw TypeError(".TaggedContinuation.par_body: object expected");
            message.par_body = $root.ParWithRandom.fromObject(object.par_body);
        }
        if (object.scala_body_ref != null)
            if ($util.Long)
                (message.scala_body_ref = $util.Long.fromValue(object.scala_body_ref)).unsigned = false;
            else if (typeof object.scala_body_ref === "string")
                message.scala_body_ref = parseInt(object.scala_body_ref, 10);
            else if (typeof object.scala_body_ref === "number")
                message.scala_body_ref = object.scala_body_ref;
            else if (typeof object.scala_body_ref === "object")
                message.scala_body_ref = new $util.LongBits(object.scala_body_ref.low >>> 0, object.scala_body_ref.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a TaggedContinuation message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TaggedContinuation
     * @static
     * @param {TaggedContinuation} message TaggedContinuation
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TaggedContinuation.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.par_body != null && message.hasOwnProperty("par_body")) {
            object.par_body = $root.ParWithRandom.toObject(message.par_body, options);
            if (options.oneofs)
                object.tagged_cont = "par_body";
        }
        if (message.scala_body_ref != null && message.hasOwnProperty("scala_body_ref")) {
            if (typeof message.scala_body_ref === "number")
                object.scala_body_ref = options.longs === String ? String(message.scala_body_ref) : message.scala_body_ref;
            else
                object.scala_body_ref = options.longs === String ? $util.Long.prototype.toString.call(message.scala_body_ref) : options.longs === Number ? new $util.LongBits(message.scala_body_ref.low >>> 0, message.scala_body_ref.high >>> 0).toNumber() : message.scala_body_ref;
            if (options.oneofs)
                object.tagged_cont = "scala_body_ref";
        }
        return object;
    };

    /**
     * Converts this TaggedContinuation to JSON.
     * @function toJSON
     * @memberof TaggedContinuation
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TaggedContinuation.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TaggedContinuation;
})();

$root.ParWithRandom = (function() {

    /**
     * Properties of a ParWithRandom.
     * @exports IParWithRandom
     * @interface IParWithRandom
     * @property {IPar|null} [body] ParWithRandom body
     * @property {Uint8Array|null} [randomState] ParWithRandom randomState
     */

    /**
     * Constructs a new ParWithRandom.
     * @exports ParWithRandom
     * @classdesc Rholang code along with the state of a split random number
     * generator for generating new unforgeable names.
     * @implements IParWithRandom
     * @constructor
     * @param {IParWithRandom=} [properties] Properties to set
     */
    function ParWithRandom(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ParWithRandom body.
     * @member {IPar|null|undefined} body
     * @memberof ParWithRandom
     * @instance
     */
    ParWithRandom.prototype.body = null;

    /**
     * ParWithRandom randomState.
     * @member {Uint8Array} randomState
     * @memberof ParWithRandom
     * @instance
     */
    ParWithRandom.prototype.randomState = $util.newBuffer([]);

    /**
     * Creates a new ParWithRandom instance using the specified properties.
     * @function create
     * @memberof ParWithRandom
     * @static
     * @param {IParWithRandom=} [properties] Properties to set
     * @returns {ParWithRandom} ParWithRandom instance
     */
    ParWithRandom.create = function create(properties) {
        return new ParWithRandom(properties);
    };

    /**
     * Encodes the specified ParWithRandom message. Does not implicitly {@link ParWithRandom.verify|verify} messages.
     * @function encode
     * @memberof ParWithRandom
     * @static
     * @param {IParWithRandom} message ParWithRandom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ParWithRandom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.body != null && message.hasOwnProperty("body"))
            $root.Par.encode(message.body, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.randomState);
        return writer;
    };

    /**
     * Encodes the specified ParWithRandom message, length delimited. Does not implicitly {@link ParWithRandom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ParWithRandom
     * @static
     * @param {IParWithRandom} message ParWithRandom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ParWithRandom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ParWithRandom message from the specified reader or buffer.
     * @function decode
     * @memberof ParWithRandom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ParWithRandom} ParWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ParWithRandom.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ParWithRandom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.body = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.randomState = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ParWithRandom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ParWithRandom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ParWithRandom} ParWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ParWithRandom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ParWithRandom message.
     * @function verify
     * @memberof ParWithRandom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ParWithRandom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.body != null && message.hasOwnProperty("body")) {
            var error = $root.Par.verify(message.body);
            if (error)
                return "body." + error;
        }
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            if (!(message.randomState && typeof message.randomState.length === "number" || $util.isString(message.randomState)))
                return "randomState: buffer expected";
        return null;
    };

    /**
     * Creates a ParWithRandom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ParWithRandom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ParWithRandom} ParWithRandom
     */
    ParWithRandom.fromObject = function fromObject(object) {
        if (object instanceof $root.ParWithRandom)
            return object;
        var message = new $root.ParWithRandom();
        if (object.body != null) {
            if (typeof object.body !== "object")
                throw TypeError(".ParWithRandom.body: object expected");
            message.body = $root.Par.fromObject(object.body);
        }
        if (object.randomState != null)
            if (typeof object.randomState === "string")
                $util.base64.decode(object.randomState, message.randomState = $util.newBuffer($util.base64.length(object.randomState)), 0);
            else if (object.randomState.length)
                message.randomState = object.randomState;
        return message;
    };

    /**
     * Creates a plain object from a ParWithRandom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ParWithRandom
     * @static
     * @param {ParWithRandom} message ParWithRandom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ParWithRandom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.body = null;
            if (options.bytes === String)
                object.randomState = "";
            else {
                object.randomState = [];
                if (options.bytes !== Array)
                    object.randomState = $util.newBuffer(object.randomState);
            }
        }
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = $root.Par.toObject(message.body, options);
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            object.randomState = options.bytes === String ? $util.base64.encode(message.randomState, 0, message.randomState.length) : options.bytes === Array ? Array.prototype.slice.call(message.randomState) : message.randomState;
        return object;
    };

    /**
     * Converts this ParWithRandom to JSON.
     * @function toJSON
     * @memberof ParWithRandom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ParWithRandom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ParWithRandom;
})();

$root.PCost = (function() {

    /**
     * Properties of a PCost.
     * @exports IPCost
     * @interface IPCost
     * @property {number|Long|null} [cost] PCost cost
     */

    /**
     * Constructs a new PCost.
     * @exports PCost
     * @classdesc Cost of the performed operations.
     * @implements IPCost
     * @constructor
     * @param {IPCost=} [properties] Properties to set
     */
    function PCost(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PCost cost.
     * @member {number|Long} cost
     * @memberof PCost
     * @instance
     */
    PCost.prototype.cost = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new PCost instance using the specified properties.
     * @function create
     * @memberof PCost
     * @static
     * @param {IPCost=} [properties] Properties to set
     * @returns {PCost} PCost instance
     */
    PCost.create = function create(properties) {
        return new PCost(properties);
    };

    /**
     * Encodes the specified PCost message. Does not implicitly {@link PCost.verify|verify} messages.
     * @function encode
     * @memberof PCost
     * @static
     * @param {IPCost} message PCost message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PCost.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cost != null && message.hasOwnProperty("cost"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.cost);
        return writer;
    };

    /**
     * Encodes the specified PCost message, length delimited. Does not implicitly {@link PCost.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PCost
     * @static
     * @param {IPCost} message PCost message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PCost.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PCost message from the specified reader or buffer.
     * @function decode
     * @memberof PCost
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PCost} PCost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PCost.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PCost();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cost = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PCost message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PCost
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PCost} PCost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PCost.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PCost message.
     * @function verify
     * @memberof PCost
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PCost.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.cost != null && message.hasOwnProperty("cost"))
            if (!$util.isInteger(message.cost) && !(message.cost && $util.isInteger(message.cost.low) && $util.isInteger(message.cost.high)))
                return "cost: integer|Long expected";
        return null;
    };

    /**
     * Creates a PCost message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PCost
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PCost} PCost
     */
    PCost.fromObject = function fromObject(object) {
        if (object instanceof $root.PCost)
            return object;
        var message = new $root.PCost();
        if (object.cost != null)
            if ($util.Long)
                (message.cost = $util.Long.fromValue(object.cost)).unsigned = true;
            else if (typeof object.cost === "string")
                message.cost = parseInt(object.cost, 10);
            else if (typeof object.cost === "number")
                message.cost = object.cost;
            else if (typeof object.cost === "object")
                message.cost = new $util.LongBits(object.cost.low >>> 0, object.cost.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a PCost message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PCost
     * @static
     * @param {PCost} message PCost
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PCost.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.cost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.cost = options.longs === String ? "0" : 0;
        if (message.cost != null && message.hasOwnProperty("cost"))
            if (typeof message.cost === "number")
                object.cost = options.longs === String ? String(message.cost) : message.cost;
            else
                object.cost = options.longs === String ? $util.Long.prototype.toString.call(message.cost) : options.longs === Number ? new $util.LongBits(message.cost.low >>> 0, message.cost.high >>> 0).toNumber(true) : message.cost;
        return object;
    };

    /**
     * Converts this PCost to JSON.
     * @function toJSON
     * @memberof PCost
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PCost.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PCost;
})();

$root.ListParWithRandom = (function() {

    /**
     * Properties of a ListParWithRandom.
     * @exports IListParWithRandom
     * @interface IListParWithRandom
     * @property {Array.<IPar>|null} [pars] ListParWithRandom pars
     * @property {Uint8Array|null} [randomState] ListParWithRandom randomState
     */

    /**
     * Constructs a new ListParWithRandom.
     * @exports ListParWithRandom
     * @classdesc Represents a ListParWithRandom.
     * @implements IListParWithRandom
     * @constructor
     * @param {IListParWithRandom=} [properties] Properties to set
     */
    function ListParWithRandom(properties) {
        this.pars = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListParWithRandom pars.
     * @member {Array.<IPar>} pars
     * @memberof ListParWithRandom
     * @instance
     */
    ListParWithRandom.prototype.pars = $util.emptyArray;

    /**
     * ListParWithRandom randomState.
     * @member {Uint8Array} randomState
     * @memberof ListParWithRandom
     * @instance
     */
    ListParWithRandom.prototype.randomState = $util.newBuffer([]);

    /**
     * Creates a new ListParWithRandom instance using the specified properties.
     * @function create
     * @memberof ListParWithRandom
     * @static
     * @param {IListParWithRandom=} [properties] Properties to set
     * @returns {ListParWithRandom} ListParWithRandom instance
     */
    ListParWithRandom.create = function create(properties) {
        return new ListParWithRandom(properties);
    };

    /**
     * Encodes the specified ListParWithRandom message. Does not implicitly {@link ListParWithRandom.verify|verify} messages.
     * @function encode
     * @memberof ListParWithRandom
     * @static
     * @param {IListParWithRandom} message ListParWithRandom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListParWithRandom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pars != null && message.pars.length)
            for (var i = 0; i < message.pars.length; ++i)
                $root.Par.encode(message.pars[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.randomState);
        return writer;
    };

    /**
     * Encodes the specified ListParWithRandom message, length delimited. Does not implicitly {@link ListParWithRandom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListParWithRandom
     * @static
     * @param {IListParWithRandom} message ListParWithRandom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListParWithRandom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListParWithRandom message from the specified reader or buffer.
     * @function decode
     * @memberof ListParWithRandom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListParWithRandom} ListParWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListParWithRandom.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListParWithRandom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.pars && message.pars.length))
                    message.pars = [];
                message.pars.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 2:
                message.randomState = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ListParWithRandom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListParWithRandom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListParWithRandom} ListParWithRandom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListParWithRandom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListParWithRandom message.
     * @function verify
     * @memberof ListParWithRandom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListParWithRandom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pars != null && message.hasOwnProperty("pars")) {
            if (!Array.isArray(message.pars))
                return "pars: array expected";
            for (var i = 0; i < message.pars.length; ++i) {
                var error = $root.Par.verify(message.pars[i]);
                if (error)
                    return "pars." + error;
            }
        }
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            if (!(message.randomState && typeof message.randomState.length === "number" || $util.isString(message.randomState)))
                return "randomState: buffer expected";
        return null;
    };

    /**
     * Creates a ListParWithRandom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListParWithRandom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListParWithRandom} ListParWithRandom
     */
    ListParWithRandom.fromObject = function fromObject(object) {
        if (object instanceof $root.ListParWithRandom)
            return object;
        var message = new $root.ListParWithRandom();
        if (object.pars) {
            if (!Array.isArray(object.pars))
                throw TypeError(".ListParWithRandom.pars: array expected");
            message.pars = [];
            for (var i = 0; i < object.pars.length; ++i) {
                if (typeof object.pars[i] !== "object")
                    throw TypeError(".ListParWithRandom.pars: object expected");
                message.pars[i] = $root.Par.fromObject(object.pars[i]);
            }
        }
        if (object.randomState != null)
            if (typeof object.randomState === "string")
                $util.base64.decode(object.randomState, message.randomState = $util.newBuffer($util.base64.length(object.randomState)), 0);
            else if (object.randomState.length)
                message.randomState = object.randomState;
        return message;
    };

    /**
     * Creates a plain object from a ListParWithRandom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListParWithRandom
     * @static
     * @param {ListParWithRandom} message ListParWithRandom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListParWithRandom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.pars = [];
        if (options.defaults)
            if (options.bytes === String)
                object.randomState = "";
            else {
                object.randomState = [];
                if (options.bytes !== Array)
                    object.randomState = $util.newBuffer(object.randomState);
            }
        if (message.pars && message.pars.length) {
            object.pars = [];
            for (var j = 0; j < message.pars.length; ++j)
                object.pars[j] = $root.Par.toObject(message.pars[j], options);
        }
        if (message.randomState != null && message.hasOwnProperty("randomState"))
            object.randomState = options.bytes === String ? $util.base64.encode(message.randomState, 0, message.randomState.length) : options.bytes === Array ? Array.prototype.slice.call(message.randomState) : message.randomState;
        return object;
    };

    /**
     * Converts this ListParWithRandom to JSON.
     * @function toJSON
     * @memberof ListParWithRandom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListParWithRandom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListParWithRandom;
})();

$root.Var = (function() {

    /**
     * Properties of a Var.
     * @exports IVar
     * @interface IVar
     * @property {number|null} [bound_var] Var bound_var
     * @property {number|null} [free_var] Var free_var
     * @property {Var.IWildcardMsg|null} [wildcard] Var wildcard
     */

    /**
     * Constructs a new Var.
     * @exports Var
     * @classdesc Represents a Var.
     * @implements IVar
     * @constructor
     * @param {IVar=} [properties] Properties to set
     */
    function Var(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Var bound_var.
     * @member {number} bound_var
     * @memberof Var
     * @instance
     */
    Var.prototype.bound_var = 0;

    /**
     * Var free_var.
     * @member {number} free_var
     * @memberof Var
     * @instance
     */
    Var.prototype.free_var = 0;

    /**
     * Var wildcard.
     * @member {Var.IWildcardMsg|null|undefined} wildcard
     * @memberof Var
     * @instance
     */
    Var.prototype.wildcard = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Var var_instance.
     * @member {"bound_var"|"free_var"|"wildcard"|undefined} var_instance
     * @memberof Var
     * @instance
     */
    Object.defineProperty(Var.prototype, "var_instance", {
        get: $util.oneOfGetter($oneOfFields = ["bound_var", "free_var", "wildcard"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Var instance using the specified properties.
     * @function create
     * @memberof Var
     * @static
     * @param {IVar=} [properties] Properties to set
     * @returns {Var} Var instance
     */
    Var.create = function create(properties) {
        return new Var(properties);
    };

    /**
     * Encodes the specified Var message. Does not implicitly {@link Var.verify|verify} messages.
     * @function encode
     * @memberof Var
     * @static
     * @param {IVar} message Var message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Var.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.bound_var != null && message.hasOwnProperty("bound_var"))
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.bound_var);
        if (message.free_var != null && message.hasOwnProperty("free_var"))
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.free_var);
        if (message.wildcard != null && message.hasOwnProperty("wildcard"))
            $root.Var.WildcardMsg.encode(message.wildcard, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Var message, length delimited. Does not implicitly {@link Var.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Var
     * @static
     * @param {IVar} message Var message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Var.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Var message from the specified reader or buffer.
     * @function decode
     * @memberof Var
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Var} Var
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Var.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Var();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.bound_var = reader.sint32();
                break;
            case 2:
                message.free_var = reader.sint32();
                break;
            case 3:
                message.wildcard = $root.Var.WildcardMsg.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Var message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Var
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Var} Var
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Var.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Var message.
     * @function verify
     * @memberof Var
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Var.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.bound_var != null && message.hasOwnProperty("bound_var")) {
            properties.var_instance = 1;
            if (!$util.isInteger(message.bound_var))
                return "bound_var: integer expected";
        }
        if (message.free_var != null && message.hasOwnProperty("free_var")) {
            if (properties.var_instance === 1)
                return "var_instance: multiple values";
            properties.var_instance = 1;
            if (!$util.isInteger(message.free_var))
                return "free_var: integer expected";
        }
        if (message.wildcard != null && message.hasOwnProperty("wildcard")) {
            if (properties.var_instance === 1)
                return "var_instance: multiple values";
            properties.var_instance = 1;
            {
                var error = $root.Var.WildcardMsg.verify(message.wildcard);
                if (error)
                    return "wildcard." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Var message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Var
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Var} Var
     */
    Var.fromObject = function fromObject(object) {
        if (object instanceof $root.Var)
            return object;
        var message = new $root.Var();
        if (object.bound_var != null)
            message.bound_var = object.bound_var | 0;
        if (object.free_var != null)
            message.free_var = object.free_var | 0;
        if (object.wildcard != null) {
            if (typeof object.wildcard !== "object")
                throw TypeError(".Var.wildcard: object expected");
            message.wildcard = $root.Var.WildcardMsg.fromObject(object.wildcard);
        }
        return message;
    };

    /**
     * Creates a plain object from a Var message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Var
     * @static
     * @param {Var} message Var
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Var.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.bound_var != null && message.hasOwnProperty("bound_var")) {
            object.bound_var = message.bound_var;
            if (options.oneofs)
                object.var_instance = "bound_var";
        }
        if (message.free_var != null && message.hasOwnProperty("free_var")) {
            object.free_var = message.free_var;
            if (options.oneofs)
                object.var_instance = "free_var";
        }
        if (message.wildcard != null && message.hasOwnProperty("wildcard")) {
            object.wildcard = $root.Var.WildcardMsg.toObject(message.wildcard, options);
            if (options.oneofs)
                object.var_instance = "wildcard";
        }
        return object;
    };

    /**
     * Converts this Var to JSON.
     * @function toJSON
     * @memberof Var
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Var.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    Var.WildcardMsg = (function() {

        /**
         * Properties of a WildcardMsg.
         * @memberof Var
         * @interface IWildcardMsg
         */

        /**
         * Constructs a new WildcardMsg.
         * @memberof Var
         * @classdesc Represents a WildcardMsg.
         * @implements IWildcardMsg
         * @constructor
         * @param {Var.IWildcardMsg=} [properties] Properties to set
         */
        function WildcardMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new WildcardMsg instance using the specified properties.
         * @function create
         * @memberof Var.WildcardMsg
         * @static
         * @param {Var.IWildcardMsg=} [properties] Properties to set
         * @returns {Var.WildcardMsg} WildcardMsg instance
         */
        WildcardMsg.create = function create(properties) {
            return new WildcardMsg(properties);
        };

        /**
         * Encodes the specified WildcardMsg message. Does not implicitly {@link Var.WildcardMsg.verify|verify} messages.
         * @function encode
         * @memberof Var.WildcardMsg
         * @static
         * @param {Var.IWildcardMsg} message WildcardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WildcardMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified WildcardMsg message, length delimited. Does not implicitly {@link Var.WildcardMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Var.WildcardMsg
         * @static
         * @param {Var.IWildcardMsg} message WildcardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WildcardMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WildcardMsg message from the specified reader or buffer.
         * @function decode
         * @memberof Var.WildcardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Var.WildcardMsg} WildcardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WildcardMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Var.WildcardMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WildcardMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Var.WildcardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Var.WildcardMsg} WildcardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WildcardMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WildcardMsg message.
         * @function verify
         * @memberof Var.WildcardMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WildcardMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a WildcardMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Var.WildcardMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Var.WildcardMsg} WildcardMsg
         */
        WildcardMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.Var.WildcardMsg)
                return object;
            return new $root.Var.WildcardMsg();
        };

        /**
         * Creates a plain object from a WildcardMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Var.WildcardMsg
         * @static
         * @param {Var.WildcardMsg} message WildcardMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WildcardMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this WildcardMsg to JSON.
         * @function toJSON
         * @memberof Var.WildcardMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WildcardMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WildcardMsg;
    })();

    return Var;
})();

$root.Bundle = (function() {

    /**
     * Properties of a Bundle.
     * @exports IBundle
     * @interface IBundle
     * @property {IPar|null} [body] Bundle body
     * @property {boolean|null} [writeFlag] Bundle writeFlag
     * @property {boolean|null} [readFlag] Bundle readFlag
     */

    /**
     * Constructs a new Bundle.
     * @exports Bundle
     * @classdesc Nothing can be received from a (quoted) bundle with `readFlag = false`.
     * Likeise nothing can be sent to a (quoted) bundle with `writeFlag = false`.
     * 
     * If both flags are set to false, bundle allows only for equivalance check.
     * @implements IBundle
     * @constructor
     * @param {IBundle=} [properties] Properties to set
     */
    function Bundle(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bundle body.
     * @member {IPar|null|undefined} body
     * @memberof Bundle
     * @instance
     */
    Bundle.prototype.body = null;

    /**
     * Bundle writeFlag.
     * @member {boolean} writeFlag
     * @memberof Bundle
     * @instance
     */
    Bundle.prototype.writeFlag = false;

    /**
     * Bundle readFlag.
     * @member {boolean} readFlag
     * @memberof Bundle
     * @instance
     */
    Bundle.prototype.readFlag = false;

    /**
     * Creates a new Bundle instance using the specified properties.
     * @function create
     * @memberof Bundle
     * @static
     * @param {IBundle=} [properties] Properties to set
     * @returns {Bundle} Bundle instance
     */
    Bundle.create = function create(properties) {
        return new Bundle(properties);
    };

    /**
     * Encodes the specified Bundle message. Does not implicitly {@link Bundle.verify|verify} messages.
     * @function encode
     * @memberof Bundle
     * @static
     * @param {IBundle} message Bundle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bundle.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.body != null && message.hasOwnProperty("body"))
            $root.Par.encode(message.body, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.writeFlag != null && message.hasOwnProperty("writeFlag"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.writeFlag);
        if (message.readFlag != null && message.hasOwnProperty("readFlag"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.readFlag);
        return writer;
    };

    /**
     * Encodes the specified Bundle message, length delimited. Does not implicitly {@link Bundle.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Bundle
     * @static
     * @param {IBundle} message Bundle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bundle.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Bundle message from the specified reader or buffer.
     * @function decode
     * @memberof Bundle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bundle} Bundle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bundle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bundle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.body = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.writeFlag = reader.bool();
                break;
            case 3:
                message.readFlag = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Bundle message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Bundle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Bundle} Bundle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bundle.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Bundle message.
     * @function verify
     * @memberof Bundle
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Bundle.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.body != null && message.hasOwnProperty("body")) {
            var error = $root.Par.verify(message.body);
            if (error)
                return "body." + error;
        }
        if (message.writeFlag != null && message.hasOwnProperty("writeFlag"))
            if (typeof message.writeFlag !== "boolean")
                return "writeFlag: boolean expected";
        if (message.readFlag != null && message.hasOwnProperty("readFlag"))
            if (typeof message.readFlag !== "boolean")
                return "readFlag: boolean expected";
        return null;
    };

    /**
     * Creates a Bundle message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Bundle
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Bundle} Bundle
     */
    Bundle.fromObject = function fromObject(object) {
        if (object instanceof $root.Bundle)
            return object;
        var message = new $root.Bundle();
        if (object.body != null) {
            if (typeof object.body !== "object")
                throw TypeError(".Bundle.body: object expected");
            message.body = $root.Par.fromObject(object.body);
        }
        if (object.writeFlag != null)
            message.writeFlag = Boolean(object.writeFlag);
        if (object.readFlag != null)
            message.readFlag = Boolean(object.readFlag);
        return message;
    };

    /**
     * Creates a plain object from a Bundle message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Bundle
     * @static
     * @param {Bundle} message Bundle
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Bundle.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.body = null;
            object.writeFlag = false;
            object.readFlag = false;
        }
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = $root.Par.toObject(message.body, options);
        if (message.writeFlag != null && message.hasOwnProperty("writeFlag"))
            object.writeFlag = message.writeFlag;
        if (message.readFlag != null && message.hasOwnProperty("readFlag"))
            object.readFlag = message.readFlag;
        return object;
    };

    /**
     * Converts this Bundle to JSON.
     * @function toJSON
     * @memberof Bundle
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Bundle.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Bundle;
})();

$root.Send = (function() {

    /**
     * Properties of a Send.
     * @exports ISend
     * @interface ISend
     * @property {IPar|null} [chan] Send chan
     * @property {Array.<IPar>|null} [data] Send data
     * @property {boolean|null} [persistent] Send persistent
     * @property {Uint8Array|null} [locallyFree] Send locallyFree
     * @property {boolean|null} [connective_used] Send connective_used
     */

    /**
     * Constructs a new Send.
     * @exports Send
     * @classdesc A send is written `chan!(data)` or `chan!!(data)` for a persistent send.
     * 
     * Upon send, all free variables in data are substituted with their values.
     * @implements ISend
     * @constructor
     * @param {ISend=} [properties] Properties to set
     */
    function Send(properties) {
        this.data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Send chan.
     * @member {IPar|null|undefined} chan
     * @memberof Send
     * @instance
     */
    Send.prototype.chan = null;

    /**
     * Send data.
     * @member {Array.<IPar>} data
     * @memberof Send
     * @instance
     */
    Send.prototype.data = $util.emptyArray;

    /**
     * Send persistent.
     * @member {boolean} persistent
     * @memberof Send
     * @instance
     */
    Send.prototype.persistent = false;

    /**
     * Send locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof Send
     * @instance
     */
    Send.prototype.locallyFree = $util.newBuffer([]);

    /**
     * Send connective_used.
     * @member {boolean} connective_used
     * @memberof Send
     * @instance
     */
    Send.prototype.connective_used = false;

    /**
     * Creates a new Send instance using the specified properties.
     * @function create
     * @memberof Send
     * @static
     * @param {ISend=} [properties] Properties to set
     * @returns {Send} Send instance
     */
    Send.create = function create(properties) {
        return new Send(properties);
    };

    /**
     * Encodes the specified Send message. Does not implicitly {@link Send.verify|verify} messages.
     * @function encode
     * @memberof Send
     * @static
     * @param {ISend} message Send message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Send.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chan != null && message.hasOwnProperty("chan"))
            $root.Par.encode(message.chan, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.data != null && message.data.length)
            for (var i = 0; i < message.data.length; ++i)
                $root.Par.encode(message.data[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.persistent);
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.connective_used);
        return writer;
    };

    /**
     * Encodes the specified Send message, length delimited. Does not implicitly {@link Send.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Send
     * @static
     * @param {ISend} message Send message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Send.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Send message from the specified reader or buffer.
     * @function decode
     * @memberof Send
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Send} Send
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Send.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Send();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chan = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.data && message.data.length))
                    message.data = [];
                message.data.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 3:
                message.persistent = reader.bool();
                break;
            case 5:
                message.locallyFree = reader.bytes();
                break;
            case 6:
                message.connective_used = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Send message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Send
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Send} Send
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Send.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Send message.
     * @function verify
     * @memberof Send
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Send.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chan != null && message.hasOwnProperty("chan")) {
            var error = $root.Par.verify(message.chan);
            if (error)
                return "chan." + error;
        }
        if (message.data != null && message.hasOwnProperty("data")) {
            if (!Array.isArray(message.data))
                return "data: array expected";
            for (var i = 0; i < message.data.length; ++i) {
                var error = $root.Par.verify(message.data[i]);
                if (error)
                    return "data." + error;
            }
        }
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            if (typeof message.persistent !== "boolean")
                return "persistent: boolean expected";
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        return null;
    };

    /**
     * Creates a Send message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Send
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Send} Send
     */
    Send.fromObject = function fromObject(object) {
        if (object instanceof $root.Send)
            return object;
        var message = new $root.Send();
        if (object.chan != null) {
            if (typeof object.chan !== "object")
                throw TypeError(".Send.chan: object expected");
            message.chan = $root.Par.fromObject(object.chan);
        }
        if (object.data) {
            if (!Array.isArray(object.data))
                throw TypeError(".Send.data: array expected");
            message.data = [];
            for (var i = 0; i < object.data.length; ++i) {
                if (typeof object.data[i] !== "object")
                    throw TypeError(".Send.data: object expected");
                message.data[i] = $root.Par.fromObject(object.data[i]);
            }
        }
        if (object.persistent != null)
            message.persistent = Boolean(object.persistent);
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        return message;
    };

    /**
     * Creates a plain object from a Send message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Send
     * @static
     * @param {Send} message Send
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Send.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.data = [];
        if (options.defaults) {
            object.chan = null;
            object.persistent = false;
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
        }
        if (message.chan != null && message.hasOwnProperty("chan"))
            object.chan = $root.Par.toObject(message.chan, options);
        if (message.data && message.data.length) {
            object.data = [];
            for (var j = 0; j < message.data.length; ++j)
                object.data[j] = $root.Par.toObject(message.data[j], options);
        }
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            object.persistent = message.persistent;
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        return object;
    };

    /**
     * Converts this Send to JSON.
     * @function toJSON
     * @memberof Send
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Send.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Send;
})();

$root.ReceiveBind = (function() {

    /**
     * Properties of a ReceiveBind.
     * @exports IReceiveBind
     * @interface IReceiveBind
     * @property {Array.<IPar>|null} [patterns] ReceiveBind patterns
     * @property {IPar|null} [source] ReceiveBind source
     * @property {IVar|null} [remainder] ReceiveBind remainder
     * @property {number|null} [freeCount] ReceiveBind freeCount
     */

    /**
     * Constructs a new ReceiveBind.
     * @exports ReceiveBind
     * @classdesc Represents a ReceiveBind.
     * @implements IReceiveBind
     * @constructor
     * @param {IReceiveBind=} [properties] Properties to set
     */
    function ReceiveBind(properties) {
        this.patterns = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReceiveBind patterns.
     * @member {Array.<IPar>} patterns
     * @memberof ReceiveBind
     * @instance
     */
    ReceiveBind.prototype.patterns = $util.emptyArray;

    /**
     * ReceiveBind source.
     * @member {IPar|null|undefined} source
     * @memberof ReceiveBind
     * @instance
     */
    ReceiveBind.prototype.source = null;

    /**
     * ReceiveBind remainder.
     * @member {IVar|null|undefined} remainder
     * @memberof ReceiveBind
     * @instance
     */
    ReceiveBind.prototype.remainder = null;

    /**
     * ReceiveBind freeCount.
     * @member {number} freeCount
     * @memberof ReceiveBind
     * @instance
     */
    ReceiveBind.prototype.freeCount = 0;

    /**
     * Creates a new ReceiveBind instance using the specified properties.
     * @function create
     * @memberof ReceiveBind
     * @static
     * @param {IReceiveBind=} [properties] Properties to set
     * @returns {ReceiveBind} ReceiveBind instance
     */
    ReceiveBind.create = function create(properties) {
        return new ReceiveBind(properties);
    };

    /**
     * Encodes the specified ReceiveBind message. Does not implicitly {@link ReceiveBind.verify|verify} messages.
     * @function encode
     * @memberof ReceiveBind
     * @static
     * @param {IReceiveBind} message ReceiveBind message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveBind.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.patterns != null && message.patterns.length)
            for (var i = 0; i < message.patterns.length; ++i)
                $root.Par.encode(message.patterns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.source != null && message.hasOwnProperty("source"))
            $root.Par.encode(message.source, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.freeCount);
        return writer;
    };

    /**
     * Encodes the specified ReceiveBind message, length delimited. Does not implicitly {@link ReceiveBind.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReceiveBind
     * @static
     * @param {IReceiveBind} message ReceiveBind message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveBind.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReceiveBind message from the specified reader or buffer.
     * @function decode
     * @memberof ReceiveBind
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReceiveBind} ReceiveBind
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveBind.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReceiveBind();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.patterns && message.patterns.length))
                    message.patterns = [];
                message.patterns.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 2:
                message.source = $root.Par.decode(reader, reader.uint32());
                break;
            case 3:
                message.remainder = $root.Var.decode(reader, reader.uint32());
                break;
            case 4:
                message.freeCount = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReceiveBind message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReceiveBind
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReceiveBind} ReceiveBind
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveBind.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReceiveBind message.
     * @function verify
     * @memberof ReceiveBind
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReceiveBind.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.patterns != null && message.hasOwnProperty("patterns")) {
            if (!Array.isArray(message.patterns))
                return "patterns: array expected";
            for (var i = 0; i < message.patterns.length; ++i) {
                var error = $root.Par.verify(message.patterns[i]);
                if (error)
                    return "patterns." + error;
            }
        }
        if (message.source != null && message.hasOwnProperty("source")) {
            var error = $root.Par.verify(message.source);
            if (error)
                return "source." + error;
        }
        if (message.remainder != null && message.hasOwnProperty("remainder")) {
            var error = $root.Var.verify(message.remainder);
            if (error)
                return "remainder." + error;
        }
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            if (!$util.isInteger(message.freeCount))
                return "freeCount: integer expected";
        return null;
    };

    /**
     * Creates a ReceiveBind message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReceiveBind
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReceiveBind} ReceiveBind
     */
    ReceiveBind.fromObject = function fromObject(object) {
        if (object instanceof $root.ReceiveBind)
            return object;
        var message = new $root.ReceiveBind();
        if (object.patterns) {
            if (!Array.isArray(object.patterns))
                throw TypeError(".ReceiveBind.patterns: array expected");
            message.patterns = [];
            for (var i = 0; i < object.patterns.length; ++i) {
                if (typeof object.patterns[i] !== "object")
                    throw TypeError(".ReceiveBind.patterns: object expected");
                message.patterns[i] = $root.Par.fromObject(object.patterns[i]);
            }
        }
        if (object.source != null) {
            if (typeof object.source !== "object")
                throw TypeError(".ReceiveBind.source: object expected");
            message.source = $root.Par.fromObject(object.source);
        }
        if (object.remainder != null) {
            if (typeof object.remainder !== "object")
                throw TypeError(".ReceiveBind.remainder: object expected");
            message.remainder = $root.Var.fromObject(object.remainder);
        }
        if (object.freeCount != null)
            message.freeCount = object.freeCount | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReceiveBind message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReceiveBind
     * @static
     * @param {ReceiveBind} message ReceiveBind
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReceiveBind.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.patterns = [];
        if (options.defaults) {
            object.source = null;
            object.remainder = null;
            object.freeCount = 0;
        }
        if (message.patterns && message.patterns.length) {
            object.patterns = [];
            for (var j = 0; j < message.patterns.length; ++j)
                object.patterns[j] = $root.Par.toObject(message.patterns[j], options);
        }
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = $root.Par.toObject(message.source, options);
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            object.remainder = $root.Var.toObject(message.remainder, options);
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            object.freeCount = message.freeCount;
        return object;
    };

    /**
     * Converts this ReceiveBind to JSON.
     * @function toJSON
     * @memberof ReceiveBind
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReceiveBind.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReceiveBind;
})();

$root.BindPattern = (function() {

    /**
     * Properties of a BindPattern.
     * @exports IBindPattern
     * @interface IBindPattern
     * @property {Array.<IPar>|null} [patterns] BindPattern patterns
     * @property {IVar|null} [remainder] BindPattern remainder
     * @property {number|null} [freeCount] BindPattern freeCount
     */

    /**
     * Constructs a new BindPattern.
     * @exports BindPattern
     * @classdesc Represents a BindPattern.
     * @implements IBindPattern
     * @constructor
     * @param {IBindPattern=} [properties] Properties to set
     */
    function BindPattern(properties) {
        this.patterns = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BindPattern patterns.
     * @member {Array.<IPar>} patterns
     * @memberof BindPattern
     * @instance
     */
    BindPattern.prototype.patterns = $util.emptyArray;

    /**
     * BindPattern remainder.
     * @member {IVar|null|undefined} remainder
     * @memberof BindPattern
     * @instance
     */
    BindPattern.prototype.remainder = null;

    /**
     * BindPattern freeCount.
     * @member {number} freeCount
     * @memberof BindPattern
     * @instance
     */
    BindPattern.prototype.freeCount = 0;

    /**
     * Creates a new BindPattern instance using the specified properties.
     * @function create
     * @memberof BindPattern
     * @static
     * @param {IBindPattern=} [properties] Properties to set
     * @returns {BindPattern} BindPattern instance
     */
    BindPattern.create = function create(properties) {
        return new BindPattern(properties);
    };

    /**
     * Encodes the specified BindPattern message. Does not implicitly {@link BindPattern.verify|verify} messages.
     * @function encode
     * @memberof BindPattern
     * @static
     * @param {IBindPattern} message BindPattern message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BindPattern.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.patterns != null && message.patterns.length)
            for (var i = 0; i < message.patterns.length; ++i)
                $root.Par.encode(message.patterns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.freeCount);
        return writer;
    };

    /**
     * Encodes the specified BindPattern message, length delimited. Does not implicitly {@link BindPattern.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BindPattern
     * @static
     * @param {IBindPattern} message BindPattern message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BindPattern.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BindPattern message from the specified reader or buffer.
     * @function decode
     * @memberof BindPattern
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BindPattern} BindPattern
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BindPattern.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BindPattern();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.patterns && message.patterns.length))
                    message.patterns = [];
                message.patterns.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 2:
                message.remainder = $root.Var.decode(reader, reader.uint32());
                break;
            case 3:
                message.freeCount = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BindPattern message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BindPattern
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BindPattern} BindPattern
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BindPattern.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BindPattern message.
     * @function verify
     * @memberof BindPattern
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BindPattern.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.patterns != null && message.hasOwnProperty("patterns")) {
            if (!Array.isArray(message.patterns))
                return "patterns: array expected";
            for (var i = 0; i < message.patterns.length; ++i) {
                var error = $root.Par.verify(message.patterns[i]);
                if (error)
                    return "patterns." + error;
            }
        }
        if (message.remainder != null && message.hasOwnProperty("remainder")) {
            var error = $root.Var.verify(message.remainder);
            if (error)
                return "remainder." + error;
        }
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            if (!$util.isInteger(message.freeCount))
                return "freeCount: integer expected";
        return null;
    };

    /**
     * Creates a BindPattern message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BindPattern
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BindPattern} BindPattern
     */
    BindPattern.fromObject = function fromObject(object) {
        if (object instanceof $root.BindPattern)
            return object;
        var message = new $root.BindPattern();
        if (object.patterns) {
            if (!Array.isArray(object.patterns))
                throw TypeError(".BindPattern.patterns: array expected");
            message.patterns = [];
            for (var i = 0; i < object.patterns.length; ++i) {
                if (typeof object.patterns[i] !== "object")
                    throw TypeError(".BindPattern.patterns: object expected");
                message.patterns[i] = $root.Par.fromObject(object.patterns[i]);
            }
        }
        if (object.remainder != null) {
            if (typeof object.remainder !== "object")
                throw TypeError(".BindPattern.remainder: object expected");
            message.remainder = $root.Var.fromObject(object.remainder);
        }
        if (object.freeCount != null)
            message.freeCount = object.freeCount | 0;
        return message;
    };

    /**
     * Creates a plain object from a BindPattern message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BindPattern
     * @static
     * @param {BindPattern} message BindPattern
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BindPattern.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.patterns = [];
        if (options.defaults) {
            object.remainder = null;
            object.freeCount = 0;
        }
        if (message.patterns && message.patterns.length) {
            object.patterns = [];
            for (var j = 0; j < message.patterns.length; ++j)
                object.patterns[j] = $root.Par.toObject(message.patterns[j], options);
        }
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            object.remainder = $root.Var.toObject(message.remainder, options);
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            object.freeCount = message.freeCount;
        return object;
    };

    /**
     * Converts this BindPattern to JSON.
     * @function toJSON
     * @memberof BindPattern
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BindPattern.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BindPattern;
})();

$root.ListBindPatterns = (function() {

    /**
     * Properties of a ListBindPatterns.
     * @exports IListBindPatterns
     * @interface IListBindPatterns
     * @property {Array.<IBindPattern>|null} [patterns] ListBindPatterns patterns
     */

    /**
     * Constructs a new ListBindPatterns.
     * @exports ListBindPatterns
     * @classdesc Represents a ListBindPatterns.
     * @implements IListBindPatterns
     * @constructor
     * @param {IListBindPatterns=} [properties] Properties to set
     */
    function ListBindPatterns(properties) {
        this.patterns = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListBindPatterns patterns.
     * @member {Array.<IBindPattern>} patterns
     * @memberof ListBindPatterns
     * @instance
     */
    ListBindPatterns.prototype.patterns = $util.emptyArray;

    /**
     * Creates a new ListBindPatterns instance using the specified properties.
     * @function create
     * @memberof ListBindPatterns
     * @static
     * @param {IListBindPatterns=} [properties] Properties to set
     * @returns {ListBindPatterns} ListBindPatterns instance
     */
    ListBindPatterns.create = function create(properties) {
        return new ListBindPatterns(properties);
    };

    /**
     * Encodes the specified ListBindPatterns message. Does not implicitly {@link ListBindPatterns.verify|verify} messages.
     * @function encode
     * @memberof ListBindPatterns
     * @static
     * @param {IListBindPatterns} message ListBindPatterns message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListBindPatterns.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.patterns != null && message.patterns.length)
            for (var i = 0; i < message.patterns.length; ++i)
                $root.BindPattern.encode(message.patterns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ListBindPatterns message, length delimited. Does not implicitly {@link ListBindPatterns.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListBindPatterns
     * @static
     * @param {IListBindPatterns} message ListBindPatterns message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListBindPatterns.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListBindPatterns message from the specified reader or buffer.
     * @function decode
     * @memberof ListBindPatterns
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListBindPatterns} ListBindPatterns
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListBindPatterns.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListBindPatterns();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.patterns && message.patterns.length))
                    message.patterns = [];
                message.patterns.push($root.BindPattern.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ListBindPatterns message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListBindPatterns
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListBindPatterns} ListBindPatterns
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListBindPatterns.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListBindPatterns message.
     * @function verify
     * @memberof ListBindPatterns
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListBindPatterns.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.patterns != null && message.hasOwnProperty("patterns")) {
            if (!Array.isArray(message.patterns))
                return "patterns: array expected";
            for (var i = 0; i < message.patterns.length; ++i) {
                var error = $root.BindPattern.verify(message.patterns[i]);
                if (error)
                    return "patterns." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ListBindPatterns message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListBindPatterns
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListBindPatterns} ListBindPatterns
     */
    ListBindPatterns.fromObject = function fromObject(object) {
        if (object instanceof $root.ListBindPatterns)
            return object;
        var message = new $root.ListBindPatterns();
        if (object.patterns) {
            if (!Array.isArray(object.patterns))
                throw TypeError(".ListBindPatterns.patterns: array expected");
            message.patterns = [];
            for (var i = 0; i < object.patterns.length; ++i) {
                if (typeof object.patterns[i] !== "object")
                    throw TypeError(".ListBindPatterns.patterns: object expected");
                message.patterns[i] = $root.BindPattern.fromObject(object.patterns[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ListBindPatterns message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListBindPatterns
     * @static
     * @param {ListBindPatterns} message ListBindPatterns
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListBindPatterns.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.patterns = [];
        if (message.patterns && message.patterns.length) {
            object.patterns = [];
            for (var j = 0; j < message.patterns.length; ++j)
                object.patterns[j] = $root.BindPattern.toObject(message.patterns[j], options);
        }
        return object;
    };

    /**
     * Converts this ListBindPatterns to JSON.
     * @function toJSON
     * @memberof ListBindPatterns
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListBindPatterns.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListBindPatterns;
})();

$root.Receive = (function() {

    /**
     * Properties of a Receive.
     * @exports IReceive
     * @interface IReceive
     * @property {Array.<IReceiveBind>|null} [binds] Receive binds
     * @property {IPar|null} [body] Receive body
     * @property {boolean|null} [persistent] Receive persistent
     * @property {boolean|null} [peek] Receive peek
     * @property {number|null} [bindCount] Receive bindCount
     * @property {Uint8Array|null} [locallyFree] Receive locallyFree
     * @property {boolean|null} [connective_used] Receive connective_used
     */

    /**
     * Constructs a new Receive.
     * @exports Receive
     * @classdesc A receive is written `for(binds) { body }`
     * i.e. `for(patterns <- source) { body }`
     * or for a persistent recieve: `for(patterns <= source) { body }`.
     * 
     * It's an error for free Variable to occur more than once in a pattern.
     * @implements IReceive
     * @constructor
     * @param {IReceive=} [properties] Properties to set
     */
    function Receive(properties) {
        this.binds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Receive binds.
     * @member {Array.<IReceiveBind>} binds
     * @memberof Receive
     * @instance
     */
    Receive.prototype.binds = $util.emptyArray;

    /**
     * Receive body.
     * @member {IPar|null|undefined} body
     * @memberof Receive
     * @instance
     */
    Receive.prototype.body = null;

    /**
     * Receive persistent.
     * @member {boolean} persistent
     * @memberof Receive
     * @instance
     */
    Receive.prototype.persistent = false;

    /**
     * Receive peek.
     * @member {boolean} peek
     * @memberof Receive
     * @instance
     */
    Receive.prototype.peek = false;

    /**
     * Receive bindCount.
     * @member {number} bindCount
     * @memberof Receive
     * @instance
     */
    Receive.prototype.bindCount = 0;

    /**
     * Receive locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof Receive
     * @instance
     */
    Receive.prototype.locallyFree = $util.newBuffer([]);

    /**
     * Receive connective_used.
     * @member {boolean} connective_used
     * @memberof Receive
     * @instance
     */
    Receive.prototype.connective_used = false;

    /**
     * Creates a new Receive instance using the specified properties.
     * @function create
     * @memberof Receive
     * @static
     * @param {IReceive=} [properties] Properties to set
     * @returns {Receive} Receive instance
     */
    Receive.create = function create(properties) {
        return new Receive(properties);
    };

    /**
     * Encodes the specified Receive message. Does not implicitly {@link Receive.verify|verify} messages.
     * @function encode
     * @memberof Receive
     * @static
     * @param {IReceive} message Receive message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Receive.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.binds != null && message.binds.length)
            for (var i = 0; i < message.binds.length; ++i)
                $root.ReceiveBind.encode(message.binds[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.body != null && message.hasOwnProperty("body"))
            $root.Par.encode(message.body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.persistent);
        if (message.peek != null && message.hasOwnProperty("peek"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.peek);
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.bindCount);
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.connective_used);
        return writer;
    };

    /**
     * Encodes the specified Receive message, length delimited. Does not implicitly {@link Receive.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Receive
     * @static
     * @param {IReceive} message Receive message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Receive.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Receive message from the specified reader or buffer.
     * @function decode
     * @memberof Receive
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Receive} Receive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Receive.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Receive();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.binds && message.binds.length))
                    message.binds = [];
                message.binds.push($root.ReceiveBind.decode(reader, reader.uint32()));
                break;
            case 2:
                message.body = $root.Par.decode(reader, reader.uint32());
                break;
            case 3:
                message.persistent = reader.bool();
                break;
            case 4:
                message.peek = reader.bool();
                break;
            case 5:
                message.bindCount = reader.int32();
                break;
            case 6:
                message.locallyFree = reader.bytes();
                break;
            case 7:
                message.connective_used = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Receive message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Receive
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Receive} Receive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Receive.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Receive message.
     * @function verify
     * @memberof Receive
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Receive.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.binds != null && message.hasOwnProperty("binds")) {
            if (!Array.isArray(message.binds))
                return "binds: array expected";
            for (var i = 0; i < message.binds.length; ++i) {
                var error = $root.ReceiveBind.verify(message.binds[i]);
                if (error)
                    return "binds." + error;
            }
        }
        if (message.body != null && message.hasOwnProperty("body")) {
            var error = $root.Par.verify(message.body);
            if (error)
                return "body." + error;
        }
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            if (typeof message.persistent !== "boolean")
                return "persistent: boolean expected";
        if (message.peek != null && message.hasOwnProperty("peek"))
            if (typeof message.peek !== "boolean")
                return "peek: boolean expected";
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            if (!$util.isInteger(message.bindCount))
                return "bindCount: integer expected";
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        return null;
    };

    /**
     * Creates a Receive message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Receive
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Receive} Receive
     */
    Receive.fromObject = function fromObject(object) {
        if (object instanceof $root.Receive)
            return object;
        var message = new $root.Receive();
        if (object.binds) {
            if (!Array.isArray(object.binds))
                throw TypeError(".Receive.binds: array expected");
            message.binds = [];
            for (var i = 0; i < object.binds.length; ++i) {
                if (typeof object.binds[i] !== "object")
                    throw TypeError(".Receive.binds: object expected");
                message.binds[i] = $root.ReceiveBind.fromObject(object.binds[i]);
            }
        }
        if (object.body != null) {
            if (typeof object.body !== "object")
                throw TypeError(".Receive.body: object expected");
            message.body = $root.Par.fromObject(object.body);
        }
        if (object.persistent != null)
            message.persistent = Boolean(object.persistent);
        if (object.peek != null)
            message.peek = Boolean(object.peek);
        if (object.bindCount != null)
            message.bindCount = object.bindCount | 0;
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        return message;
    };

    /**
     * Creates a plain object from a Receive message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Receive
     * @static
     * @param {Receive} message Receive
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Receive.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.binds = [];
        if (options.defaults) {
            object.body = null;
            object.persistent = false;
            object.peek = false;
            object.bindCount = 0;
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
        }
        if (message.binds && message.binds.length) {
            object.binds = [];
            for (var j = 0; j < message.binds.length; ++j)
                object.binds[j] = $root.ReceiveBind.toObject(message.binds[j], options);
        }
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = $root.Par.toObject(message.body, options);
        if (message.persistent != null && message.hasOwnProperty("persistent"))
            object.persistent = message.persistent;
        if (message.peek != null && message.hasOwnProperty("peek"))
            object.peek = message.peek;
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            object.bindCount = message.bindCount;
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        return object;
    };

    /**
     * Converts this Receive to JSON.
     * @function toJSON
     * @memberof Receive
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Receive.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Receive;
})();

$root.New = (function() {

    /**
     * Properties of a New.
     * @exports INew
     * @interface INew
     * @property {number|null} [bindCount] New bindCount
     * @property {IPar|null} [p] New p
     * @property {Array.<string>|null} [uri] New uri
     * @property {IDeployId|null} [deployId] New deployId
     * @property {IDeployerId|null} [deployerId] New deployerId
     * @property {Uint8Array|null} [locallyFree] New locallyFree
     */

    /**
     * Constructs a new New.
     * @exports New
     * @classdesc Represents a New.
     * @implements INew
     * @constructor
     * @param {INew=} [properties] Properties to set
     */
    function New(properties) {
        this.uri = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * New bindCount.
     * @member {number} bindCount
     * @memberof New
     * @instance
     */
    New.prototype.bindCount = 0;

    /**
     * New p.
     * @member {IPar|null|undefined} p
     * @memberof New
     * @instance
     */
    New.prototype.p = null;

    /**
     * New uri.
     * @member {Array.<string>} uri
     * @memberof New
     * @instance
     */
    New.prototype.uri = $util.emptyArray;

    /**
     * New deployId.
     * @member {IDeployId|null|undefined} deployId
     * @memberof New
     * @instance
     */
    New.prototype.deployId = null;

    /**
     * New deployerId.
     * @member {IDeployerId|null|undefined} deployerId
     * @memberof New
     * @instance
     */
    New.prototype.deployerId = null;

    /**
     * New locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof New
     * @instance
     */
    New.prototype.locallyFree = $util.newBuffer([]);

    /**
     * Creates a new New instance using the specified properties.
     * @function create
     * @memberof New
     * @static
     * @param {INew=} [properties] Properties to set
     * @returns {New} New instance
     */
    New.create = function create(properties) {
        return new New(properties);
    };

    /**
     * Encodes the specified New message. Does not implicitly {@link New.verify|verify} messages.
     * @function encode
     * @memberof New
     * @static
     * @param {INew} message New message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    New.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.bindCount);
        if (message.p != null && message.hasOwnProperty("p"))
            $root.Par.encode(message.p, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.uri != null && message.uri.length)
            for (var i = 0; i < message.uri.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.uri[i]);
        if (message.deployId != null && message.hasOwnProperty("deployId"))
            $root.DeployId.encode(message.deployId, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.deployerId != null && message.hasOwnProperty("deployerId"))
            $root.DeployerId.encode(message.deployerId, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.locallyFree);
        return writer;
    };

    /**
     * Encodes the specified New message, length delimited. Does not implicitly {@link New.verify|verify} messages.
     * @function encodeDelimited
     * @memberof New
     * @static
     * @param {INew} message New message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    New.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a New message from the specified reader or buffer.
     * @function decode
     * @memberof New
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {New} New
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    New.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.New();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.bindCount = reader.sint32();
                break;
            case 2:
                message.p = $root.Par.decode(reader, reader.uint32());
                break;
            case 3:
                if (!(message.uri && message.uri.length))
                    message.uri = [];
                message.uri.push(reader.string());
                break;
            case 4:
                message.deployId = $root.DeployId.decode(reader, reader.uint32());
                break;
            case 5:
                message.deployerId = $root.DeployerId.decode(reader, reader.uint32());
                break;
            case 6:
                message.locallyFree = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a New message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof New
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {New} New
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    New.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a New message.
     * @function verify
     * @memberof New
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    New.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            if (!$util.isInteger(message.bindCount))
                return "bindCount: integer expected";
        if (message.p != null && message.hasOwnProperty("p")) {
            var error = $root.Par.verify(message.p);
            if (error)
                return "p." + error;
        }
        if (message.uri != null && message.hasOwnProperty("uri")) {
            if (!Array.isArray(message.uri))
                return "uri: array expected";
            for (var i = 0; i < message.uri.length; ++i)
                if (!$util.isString(message.uri[i]))
                    return "uri: string[] expected";
        }
        if (message.deployId != null && message.hasOwnProperty("deployId")) {
            var error = $root.DeployId.verify(message.deployId);
            if (error)
                return "deployId." + error;
        }
        if (message.deployerId != null && message.hasOwnProperty("deployerId")) {
            var error = $root.DeployerId.verify(message.deployerId);
            if (error)
                return "deployerId." + error;
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        return null;
    };

    /**
     * Creates a New message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof New
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {New} New
     */
    New.fromObject = function fromObject(object) {
        if (object instanceof $root.New)
            return object;
        var message = new $root.New();
        if (object.bindCount != null)
            message.bindCount = object.bindCount | 0;
        if (object.p != null) {
            if (typeof object.p !== "object")
                throw TypeError(".New.p: object expected");
            message.p = $root.Par.fromObject(object.p);
        }
        if (object.uri) {
            if (!Array.isArray(object.uri))
                throw TypeError(".New.uri: array expected");
            message.uri = [];
            for (var i = 0; i < object.uri.length; ++i)
                message.uri[i] = String(object.uri[i]);
        }
        if (object.deployId != null) {
            if (typeof object.deployId !== "object")
                throw TypeError(".New.deployId: object expected");
            message.deployId = $root.DeployId.fromObject(object.deployId);
        }
        if (object.deployerId != null) {
            if (typeof object.deployerId !== "object")
                throw TypeError(".New.deployerId: object expected");
            message.deployerId = $root.DeployerId.fromObject(object.deployerId);
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        return message;
    };

    /**
     * Creates a plain object from a New message. Also converts values to other types if specified.
     * @function toObject
     * @memberof New
     * @static
     * @param {New} message New
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    New.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.uri = [];
        if (options.defaults) {
            object.bindCount = 0;
            object.p = null;
            object.deployId = null;
            object.deployerId = null;
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
        }
        if (message.bindCount != null && message.hasOwnProperty("bindCount"))
            object.bindCount = message.bindCount;
        if (message.p != null && message.hasOwnProperty("p"))
            object.p = $root.Par.toObject(message.p, options);
        if (message.uri && message.uri.length) {
            object.uri = [];
            for (var j = 0; j < message.uri.length; ++j)
                object.uri[j] = message.uri[j];
        }
        if (message.deployId != null && message.hasOwnProperty("deployId"))
            object.deployId = $root.DeployId.toObject(message.deployId, options);
        if (message.deployerId != null && message.hasOwnProperty("deployerId"))
            object.deployerId = $root.DeployerId.toObject(message.deployerId, options);
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        return object;
    };

    /**
     * Converts this New to JSON.
     * @function toJSON
     * @memberof New
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    New.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return New;
})();

$root.MatchCase = (function() {

    /**
     * Properties of a MatchCase.
     * @exports IMatchCase
     * @interface IMatchCase
     * @property {IPar|null} [pattern] MatchCase pattern
     * @property {IPar|null} [source] MatchCase source
     * @property {number|null} [freeCount] MatchCase freeCount
     */

    /**
     * Constructs a new MatchCase.
     * @exports MatchCase
     * @classdesc Represents a MatchCase.
     * @implements IMatchCase
     * @constructor
     * @param {IMatchCase=} [properties] Properties to set
     */
    function MatchCase(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MatchCase pattern.
     * @member {IPar|null|undefined} pattern
     * @memberof MatchCase
     * @instance
     */
    MatchCase.prototype.pattern = null;

    /**
     * MatchCase source.
     * @member {IPar|null|undefined} source
     * @memberof MatchCase
     * @instance
     */
    MatchCase.prototype.source = null;

    /**
     * MatchCase freeCount.
     * @member {number} freeCount
     * @memberof MatchCase
     * @instance
     */
    MatchCase.prototype.freeCount = 0;

    /**
     * Creates a new MatchCase instance using the specified properties.
     * @function create
     * @memberof MatchCase
     * @static
     * @param {IMatchCase=} [properties] Properties to set
     * @returns {MatchCase} MatchCase instance
     */
    MatchCase.create = function create(properties) {
        return new MatchCase(properties);
    };

    /**
     * Encodes the specified MatchCase message. Does not implicitly {@link MatchCase.verify|verify} messages.
     * @function encode
     * @memberof MatchCase
     * @static
     * @param {IMatchCase} message MatchCase message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MatchCase.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pattern != null && message.hasOwnProperty("pattern"))
            $root.Par.encode(message.pattern, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.source != null && message.hasOwnProperty("source"))
            $root.Par.encode(message.source, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.freeCount);
        return writer;
    };

    /**
     * Encodes the specified MatchCase message, length delimited. Does not implicitly {@link MatchCase.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MatchCase
     * @static
     * @param {IMatchCase} message MatchCase message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MatchCase.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MatchCase message from the specified reader or buffer.
     * @function decode
     * @memberof MatchCase
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MatchCase} MatchCase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MatchCase.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MatchCase();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.pattern = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.source = $root.Par.decode(reader, reader.uint32());
                break;
            case 3:
                message.freeCount = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MatchCase message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MatchCase
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MatchCase} MatchCase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MatchCase.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MatchCase message.
     * @function verify
     * @memberof MatchCase
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MatchCase.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pattern != null && message.hasOwnProperty("pattern")) {
            var error = $root.Par.verify(message.pattern);
            if (error)
                return "pattern." + error;
        }
        if (message.source != null && message.hasOwnProperty("source")) {
            var error = $root.Par.verify(message.source);
            if (error)
                return "source." + error;
        }
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            if (!$util.isInteger(message.freeCount))
                return "freeCount: integer expected";
        return null;
    };

    /**
     * Creates a MatchCase message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MatchCase
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MatchCase} MatchCase
     */
    MatchCase.fromObject = function fromObject(object) {
        if (object instanceof $root.MatchCase)
            return object;
        var message = new $root.MatchCase();
        if (object.pattern != null) {
            if (typeof object.pattern !== "object")
                throw TypeError(".MatchCase.pattern: object expected");
            message.pattern = $root.Par.fromObject(object.pattern);
        }
        if (object.source != null) {
            if (typeof object.source !== "object")
                throw TypeError(".MatchCase.source: object expected");
            message.source = $root.Par.fromObject(object.source);
        }
        if (object.freeCount != null)
            message.freeCount = object.freeCount | 0;
        return message;
    };

    /**
     * Creates a plain object from a MatchCase message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MatchCase
     * @static
     * @param {MatchCase} message MatchCase
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MatchCase.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.pattern = null;
            object.source = null;
            object.freeCount = 0;
        }
        if (message.pattern != null && message.hasOwnProperty("pattern"))
            object.pattern = $root.Par.toObject(message.pattern, options);
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = $root.Par.toObject(message.source, options);
        if (message.freeCount != null && message.hasOwnProperty("freeCount"))
            object.freeCount = message.freeCount;
        return object;
    };

    /**
     * Converts this MatchCase to JSON.
     * @function toJSON
     * @memberof MatchCase
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MatchCase.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MatchCase;
})();

$root.Match = (function() {

    /**
     * Properties of a Match.
     * @exports IMatch
     * @interface IMatch
     * @property {IPar|null} [target] Match target
     * @property {Array.<IMatchCase>|null} [cases] Match cases
     * @property {Uint8Array|null} [locallyFree] Match locallyFree
     * @property {boolean|null} [connective_used] Match connective_used
     */

    /**
     * Constructs a new Match.
     * @exports Match
     * @classdesc Represents a Match.
     * @implements IMatch
     * @constructor
     * @param {IMatch=} [properties] Properties to set
     */
    function Match(properties) {
        this.cases = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Match target.
     * @member {IPar|null|undefined} target
     * @memberof Match
     * @instance
     */
    Match.prototype.target = null;

    /**
     * Match cases.
     * @member {Array.<IMatchCase>} cases
     * @memberof Match
     * @instance
     */
    Match.prototype.cases = $util.emptyArray;

    /**
     * Match locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof Match
     * @instance
     */
    Match.prototype.locallyFree = $util.newBuffer([]);

    /**
     * Match connective_used.
     * @member {boolean} connective_used
     * @memberof Match
     * @instance
     */
    Match.prototype.connective_used = false;

    /**
     * Creates a new Match instance using the specified properties.
     * @function create
     * @memberof Match
     * @static
     * @param {IMatch=} [properties] Properties to set
     * @returns {Match} Match instance
     */
    Match.create = function create(properties) {
        return new Match(properties);
    };

    /**
     * Encodes the specified Match message. Does not implicitly {@link Match.verify|verify} messages.
     * @function encode
     * @memberof Match
     * @static
     * @param {IMatch} message Match message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Match.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Par.encode(message.target, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.cases != null && message.cases.length)
            for (var i = 0; i < message.cases.length; ++i)
                $root.MatchCase.encode(message.cases[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.connective_used);
        return writer;
    };

    /**
     * Encodes the specified Match message, length delimited. Does not implicitly {@link Match.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Match
     * @static
     * @param {IMatch} message Match message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Match.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Match message from the specified reader or buffer.
     * @function decode
     * @memberof Match
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Match} Match
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Match.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Match();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.target = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.cases && message.cases.length))
                    message.cases = [];
                message.cases.push($root.MatchCase.decode(reader, reader.uint32()));
                break;
            case 4:
                message.locallyFree = reader.bytes();
                break;
            case 5:
                message.connective_used = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Match message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Match
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Match} Match
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Match.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Match message.
     * @function verify
     * @memberof Match
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Match.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Par.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (message.cases != null && message.hasOwnProperty("cases")) {
            if (!Array.isArray(message.cases))
                return "cases: array expected";
            for (var i = 0; i < message.cases.length; ++i) {
                var error = $root.MatchCase.verify(message.cases[i]);
                if (error)
                    return "cases." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        return null;
    };

    /**
     * Creates a Match message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Match
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Match} Match
     */
    Match.fromObject = function fromObject(object) {
        if (object instanceof $root.Match)
            return object;
        var message = new $root.Match();
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".Match.target: object expected");
            message.target = $root.Par.fromObject(object.target);
        }
        if (object.cases) {
            if (!Array.isArray(object.cases))
                throw TypeError(".Match.cases: array expected");
            message.cases = [];
            for (var i = 0; i < object.cases.length; ++i) {
                if (typeof object.cases[i] !== "object")
                    throw TypeError(".Match.cases: object expected");
                message.cases[i] = $root.MatchCase.fromObject(object.cases[i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        return message;
    };

    /**
     * Creates a plain object from a Match message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Match
     * @static
     * @param {Match} message Match
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Match.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.cases = [];
        if (options.defaults) {
            object.target = null;
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
        }
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Par.toObject(message.target, options);
        if (message.cases && message.cases.length) {
            object.cases = [];
            for (var j = 0; j < message.cases.length; ++j)
                object.cases[j] = $root.MatchCase.toObject(message.cases[j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        return object;
    };

    /**
     * Converts this Match to JSON.
     * @function toJSON
     * @memberof Match
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Match.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Match;
})();

$root.Expr = (function() {

    /**
     * Properties of an Expr.
     * @exports IExpr
     * @interface IExpr
     * @property {boolean|null} [g_bool] Expr g_bool
     * @property {number|Long|null} [g_int] Expr g_int
     * @property {string|null} [g_string] Expr g_string
     * @property {string|null} [g_uri] Expr g_uri
     * @property {Uint8Array|null} [g_byte_array] Expr g_byte_array
     * @property {IENot|null} [e_not_body] Expr e_not_body
     * @property {IENeg|null} [e_neg_body] Expr e_neg_body
     * @property {IEMult|null} [e_mult_body] Expr e_mult_body
     * @property {IEDiv|null} [e_div_body] Expr e_div_body
     * @property {IEPlus|null} [e_plus_body] Expr e_plus_body
     * @property {IEMinus|null} [e_minus_body] Expr e_minus_body
     * @property {IELt|null} [e_lt_body] Expr e_lt_body
     * @property {IELte|null} [e_lte_body] Expr e_lte_body
     * @property {IEGt|null} [e_gt_body] Expr e_gt_body
     * @property {IEGte|null} [e_gte_body] Expr e_gte_body
     * @property {IEEq|null} [e_eq_body] Expr e_eq_body
     * @property {IENeq|null} [e_neq_body] Expr e_neq_body
     * @property {IEAnd|null} [e_and_body] Expr e_and_body
     * @property {IEOr|null} [e_or_body] Expr e_or_body
     * @property {IEVar|null} [e_var_body] Expr e_var_body
     * @property {IEList|null} [e_list_body] Expr e_list_body
     * @property {IETuple|null} [e_tuple_body] Expr e_tuple_body
     * @property {IESet|null} [e_set_body] Expr e_set_body
     * @property {IEMap|null} [e_map_body] Expr e_map_body
     * @property {IEMethod|null} [e_method_body] Expr e_method_body
     * @property {IEMatches|null} [e_matches_body] Expr e_matches_body
     * @property {IEPercentPercent|null} [e_percent_percent_body] Expr e_percent_percent_body
     * @property {IEPlusPlus|null} [e_plus_plus_body] Expr e_plus_plus_body
     * @property {IEMinusMinus|null} [e_minus_minus_body] Expr e_minus_minus_body
     * @property {IEMod|null} [e_mod_body] Expr e_mod_body
     */

    /**
     * Constructs a new Expr.
     * @exports Expr
     * @classdesc Represents an Expr.
     * @implements IExpr
     * @constructor
     * @param {IExpr=} [properties] Properties to set
     */
    function Expr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Expr g_bool.
     * @member {boolean} g_bool
     * @memberof Expr
     * @instance
     */
    Expr.prototype.g_bool = false;

    /**
     * Expr g_int.
     * @member {number|Long} g_int
     * @memberof Expr
     * @instance
     */
    Expr.prototype.g_int = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Expr g_string.
     * @member {string} g_string
     * @memberof Expr
     * @instance
     */
    Expr.prototype.g_string = "";

    /**
     * Expr g_uri.
     * @member {string} g_uri
     * @memberof Expr
     * @instance
     */
    Expr.prototype.g_uri = "";

    /**
     * Expr g_byte_array.
     * @member {Uint8Array} g_byte_array
     * @memberof Expr
     * @instance
     */
    Expr.prototype.g_byte_array = $util.newBuffer([]);

    /**
     * Expr e_not_body.
     * @member {IENot|null|undefined} e_not_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_not_body = null;

    /**
     * Expr e_neg_body.
     * @member {IENeg|null|undefined} e_neg_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_neg_body = null;

    /**
     * Expr e_mult_body.
     * @member {IEMult|null|undefined} e_mult_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_mult_body = null;

    /**
     * Expr e_div_body.
     * @member {IEDiv|null|undefined} e_div_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_div_body = null;

    /**
     * Expr e_plus_body.
     * @member {IEPlus|null|undefined} e_plus_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_plus_body = null;

    /**
     * Expr e_minus_body.
     * @member {IEMinus|null|undefined} e_minus_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_minus_body = null;

    /**
     * Expr e_lt_body.
     * @member {IELt|null|undefined} e_lt_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_lt_body = null;

    /**
     * Expr e_lte_body.
     * @member {IELte|null|undefined} e_lte_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_lte_body = null;

    /**
     * Expr e_gt_body.
     * @member {IEGt|null|undefined} e_gt_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_gt_body = null;

    /**
     * Expr e_gte_body.
     * @member {IEGte|null|undefined} e_gte_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_gte_body = null;

    /**
     * Expr e_eq_body.
     * @member {IEEq|null|undefined} e_eq_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_eq_body = null;

    /**
     * Expr e_neq_body.
     * @member {IENeq|null|undefined} e_neq_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_neq_body = null;

    /**
     * Expr e_and_body.
     * @member {IEAnd|null|undefined} e_and_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_and_body = null;

    /**
     * Expr e_or_body.
     * @member {IEOr|null|undefined} e_or_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_or_body = null;

    /**
     * Expr e_var_body.
     * @member {IEVar|null|undefined} e_var_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_var_body = null;

    /**
     * Expr e_list_body.
     * @member {IEList|null|undefined} e_list_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_list_body = null;

    /**
     * Expr e_tuple_body.
     * @member {IETuple|null|undefined} e_tuple_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_tuple_body = null;

    /**
     * Expr e_set_body.
     * @member {IESet|null|undefined} e_set_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_set_body = null;

    /**
     * Expr e_map_body.
     * @member {IEMap|null|undefined} e_map_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_map_body = null;

    /**
     * Expr e_method_body.
     * @member {IEMethod|null|undefined} e_method_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_method_body = null;

    /**
     * Expr e_matches_body.
     * @member {IEMatches|null|undefined} e_matches_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_matches_body = null;

    /**
     * Expr e_percent_percent_body.
     * @member {IEPercentPercent|null|undefined} e_percent_percent_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_percent_percent_body = null;

    /**
     * Expr e_plus_plus_body.
     * @member {IEPlusPlus|null|undefined} e_plus_plus_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_plus_plus_body = null;

    /**
     * Expr e_minus_minus_body.
     * @member {IEMinusMinus|null|undefined} e_minus_minus_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_minus_minus_body = null;

    /**
     * Expr e_mod_body.
     * @member {IEMod|null|undefined} e_mod_body
     * @memberof Expr
     * @instance
     */
    Expr.prototype.e_mod_body = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Expr expr_instance.
     * @member {"g_bool"|"g_int"|"g_string"|"g_uri"|"g_byte_array"|"e_not_body"|"e_neg_body"|"e_mult_body"|"e_div_body"|"e_plus_body"|"e_minus_body"|"e_lt_body"|"e_lte_body"|"e_gt_body"|"e_gte_body"|"e_eq_body"|"e_neq_body"|"e_and_body"|"e_or_body"|"e_var_body"|"e_list_body"|"e_tuple_body"|"e_set_body"|"e_map_body"|"e_method_body"|"e_matches_body"|"e_percent_percent_body"|"e_plus_plus_body"|"e_minus_minus_body"|"e_mod_body"|undefined} expr_instance
     * @memberof Expr
     * @instance
     */
    Object.defineProperty(Expr.prototype, "expr_instance", {
        get: $util.oneOfGetter($oneOfFields = ["g_bool", "g_int", "g_string", "g_uri", "g_byte_array", "e_not_body", "e_neg_body", "e_mult_body", "e_div_body", "e_plus_body", "e_minus_body", "e_lt_body", "e_lte_body", "e_gt_body", "e_gte_body", "e_eq_body", "e_neq_body", "e_and_body", "e_or_body", "e_var_body", "e_list_body", "e_tuple_body", "e_set_body", "e_map_body", "e_method_body", "e_matches_body", "e_percent_percent_body", "e_plus_plus_body", "e_minus_minus_body", "e_mod_body"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Expr instance using the specified properties.
     * @function create
     * @memberof Expr
     * @static
     * @param {IExpr=} [properties] Properties to set
     * @returns {Expr} Expr instance
     */
    Expr.create = function create(properties) {
        return new Expr(properties);
    };

    /**
     * Encodes the specified Expr message. Does not implicitly {@link Expr.verify|verify} messages.
     * @function encode
     * @memberof Expr
     * @static
     * @param {IExpr} message Expr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Expr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.g_bool != null && message.hasOwnProperty("g_bool"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.g_bool);
        if (message.g_int != null && message.hasOwnProperty("g_int"))
            writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.g_int);
        if (message.g_string != null && message.hasOwnProperty("g_string"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.g_string);
        if (message.g_uri != null && message.hasOwnProperty("g_uri"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.g_uri);
        if (message.e_not_body != null && message.hasOwnProperty("e_not_body"))
            $root.ENot.encode(message.e_not_body, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.e_neg_body != null && message.hasOwnProperty("e_neg_body"))
            $root.ENeg.encode(message.e_neg_body, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.e_mult_body != null && message.hasOwnProperty("e_mult_body"))
            $root.EMult.encode(message.e_mult_body, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.e_div_body != null && message.hasOwnProperty("e_div_body"))
            $root.EDiv.encode(message.e_div_body, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.e_plus_body != null && message.hasOwnProperty("e_plus_body"))
            $root.EPlus.encode(message.e_plus_body, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.e_minus_body != null && message.hasOwnProperty("e_minus_body"))
            $root.EMinus.encode(message.e_minus_body, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.e_lt_body != null && message.hasOwnProperty("e_lt_body"))
            $root.ELt.encode(message.e_lt_body, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.e_lte_body != null && message.hasOwnProperty("e_lte_body"))
            $root.ELte.encode(message.e_lte_body, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.e_gt_body != null && message.hasOwnProperty("e_gt_body"))
            $root.EGt.encode(message.e_gt_body, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.e_gte_body != null && message.hasOwnProperty("e_gte_body"))
            $root.EGte.encode(message.e_gte_body, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.e_eq_body != null && message.hasOwnProperty("e_eq_body"))
            $root.EEq.encode(message.e_eq_body, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.e_neq_body != null && message.hasOwnProperty("e_neq_body"))
            $root.ENeq.encode(message.e_neq_body, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.e_and_body != null && message.hasOwnProperty("e_and_body"))
            $root.EAnd.encode(message.e_and_body, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.e_or_body != null && message.hasOwnProperty("e_or_body"))
            $root.EOr.encode(message.e_or_body, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.e_var_body != null && message.hasOwnProperty("e_var_body"))
            $root.EVar.encode(message.e_var_body, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.e_list_body != null && message.hasOwnProperty("e_list_body"))
            $root.EList.encode(message.e_list_body, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.e_tuple_body != null && message.hasOwnProperty("e_tuple_body"))
            $root.ETuple.encode(message.e_tuple_body, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.e_set_body != null && message.hasOwnProperty("e_set_body"))
            $root.ESet.encode(message.e_set_body, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.e_map_body != null && message.hasOwnProperty("e_map_body"))
            $root.EMap.encode(message.e_map_body, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.e_method_body != null && message.hasOwnProperty("e_method_body"))
            $root.EMethod.encode(message.e_method_body, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
        if (message.g_byte_array != null && message.hasOwnProperty("g_byte_array"))
            writer.uint32(/* id 25, wireType 2 =*/202).bytes(message.g_byte_array);
        if (message.e_matches_body != null && message.hasOwnProperty("e_matches_body"))
            $root.EMatches.encode(message.e_matches_body, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.e_percent_percent_body != null && message.hasOwnProperty("e_percent_percent_body"))
            $root.EPercentPercent.encode(message.e_percent_percent_body, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
        if (message.e_plus_plus_body != null && message.hasOwnProperty("e_plus_plus_body"))
            $root.EPlusPlus.encode(message.e_plus_plus_body, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
        if (message.e_minus_minus_body != null && message.hasOwnProperty("e_minus_minus_body"))
            $root.EMinusMinus.encode(message.e_minus_minus_body, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
        if (message.e_mod_body != null && message.hasOwnProperty("e_mod_body"))
            $root.EMod.encode(message.e_mod_body, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Expr message, length delimited. Does not implicitly {@link Expr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Expr
     * @static
     * @param {IExpr} message Expr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Expr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Expr message from the specified reader or buffer.
     * @function decode
     * @memberof Expr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Expr} Expr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Expr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Expr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.g_bool = reader.bool();
                break;
            case 2:
                message.g_int = reader.sint64();
                break;
            case 3:
                message.g_string = reader.string();
                break;
            case 4:
                message.g_uri = reader.string();
                break;
            case 25:
                message.g_byte_array = reader.bytes();
                break;
            case 5:
                message.e_not_body = $root.ENot.decode(reader, reader.uint32());
                break;
            case 6:
                message.e_neg_body = $root.ENeg.decode(reader, reader.uint32());
                break;
            case 7:
                message.e_mult_body = $root.EMult.decode(reader, reader.uint32());
                break;
            case 8:
                message.e_div_body = $root.EDiv.decode(reader, reader.uint32());
                break;
            case 9:
                message.e_plus_body = $root.EPlus.decode(reader, reader.uint32());
                break;
            case 10:
                message.e_minus_body = $root.EMinus.decode(reader, reader.uint32());
                break;
            case 11:
                message.e_lt_body = $root.ELt.decode(reader, reader.uint32());
                break;
            case 12:
                message.e_lte_body = $root.ELte.decode(reader, reader.uint32());
                break;
            case 13:
                message.e_gt_body = $root.EGt.decode(reader, reader.uint32());
                break;
            case 14:
                message.e_gte_body = $root.EGte.decode(reader, reader.uint32());
                break;
            case 15:
                message.e_eq_body = $root.EEq.decode(reader, reader.uint32());
                break;
            case 16:
                message.e_neq_body = $root.ENeq.decode(reader, reader.uint32());
                break;
            case 17:
                message.e_and_body = $root.EAnd.decode(reader, reader.uint32());
                break;
            case 18:
                message.e_or_body = $root.EOr.decode(reader, reader.uint32());
                break;
            case 19:
                message.e_var_body = $root.EVar.decode(reader, reader.uint32());
                break;
            case 20:
                message.e_list_body = $root.EList.decode(reader, reader.uint32());
                break;
            case 21:
                message.e_tuple_body = $root.ETuple.decode(reader, reader.uint32());
                break;
            case 22:
                message.e_set_body = $root.ESet.decode(reader, reader.uint32());
                break;
            case 23:
                message.e_map_body = $root.EMap.decode(reader, reader.uint32());
                break;
            case 24:
                message.e_method_body = $root.EMethod.decode(reader, reader.uint32());
                break;
            case 27:
                message.e_matches_body = $root.EMatches.decode(reader, reader.uint32());
                break;
            case 28:
                message.e_percent_percent_body = $root.EPercentPercent.decode(reader, reader.uint32());
                break;
            case 29:
                message.e_plus_plus_body = $root.EPlusPlus.decode(reader, reader.uint32());
                break;
            case 30:
                message.e_minus_minus_body = $root.EMinusMinus.decode(reader, reader.uint32());
                break;
            case 31:
                message.e_mod_body = $root.EMod.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Expr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Expr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Expr} Expr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Expr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Expr message.
     * @function verify
     * @memberof Expr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Expr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.g_bool != null && message.hasOwnProperty("g_bool")) {
            properties.expr_instance = 1;
            if (typeof message.g_bool !== "boolean")
                return "g_bool: boolean expected";
        }
        if (message.g_int != null && message.hasOwnProperty("g_int")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            if (!$util.isInteger(message.g_int) && !(message.g_int && $util.isInteger(message.g_int.low) && $util.isInteger(message.g_int.high)))
                return "g_int: integer|Long expected";
        }
        if (message.g_string != null && message.hasOwnProperty("g_string")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            if (!$util.isString(message.g_string))
                return "g_string: string expected";
        }
        if (message.g_uri != null && message.hasOwnProperty("g_uri")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            if (!$util.isString(message.g_uri))
                return "g_uri: string expected";
        }
        if (message.g_byte_array != null && message.hasOwnProperty("g_byte_array")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            if (!(message.g_byte_array && typeof message.g_byte_array.length === "number" || $util.isString(message.g_byte_array)))
                return "g_byte_array: buffer expected";
        }
        if (message.e_not_body != null && message.hasOwnProperty("e_not_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ENot.verify(message.e_not_body);
                if (error)
                    return "e_not_body." + error;
            }
        }
        if (message.e_neg_body != null && message.hasOwnProperty("e_neg_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ENeg.verify(message.e_neg_body);
                if (error)
                    return "e_neg_body." + error;
            }
        }
        if (message.e_mult_body != null && message.hasOwnProperty("e_mult_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMult.verify(message.e_mult_body);
                if (error)
                    return "e_mult_body." + error;
            }
        }
        if (message.e_div_body != null && message.hasOwnProperty("e_div_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EDiv.verify(message.e_div_body);
                if (error)
                    return "e_div_body." + error;
            }
        }
        if (message.e_plus_body != null && message.hasOwnProperty("e_plus_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EPlus.verify(message.e_plus_body);
                if (error)
                    return "e_plus_body." + error;
            }
        }
        if (message.e_minus_body != null && message.hasOwnProperty("e_minus_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMinus.verify(message.e_minus_body);
                if (error)
                    return "e_minus_body." + error;
            }
        }
        if (message.e_lt_body != null && message.hasOwnProperty("e_lt_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ELt.verify(message.e_lt_body);
                if (error)
                    return "e_lt_body." + error;
            }
        }
        if (message.e_lte_body != null && message.hasOwnProperty("e_lte_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ELte.verify(message.e_lte_body);
                if (error)
                    return "e_lte_body." + error;
            }
        }
        if (message.e_gt_body != null && message.hasOwnProperty("e_gt_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EGt.verify(message.e_gt_body);
                if (error)
                    return "e_gt_body." + error;
            }
        }
        if (message.e_gte_body != null && message.hasOwnProperty("e_gte_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EGte.verify(message.e_gte_body);
                if (error)
                    return "e_gte_body." + error;
            }
        }
        if (message.e_eq_body != null && message.hasOwnProperty("e_eq_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EEq.verify(message.e_eq_body);
                if (error)
                    return "e_eq_body." + error;
            }
        }
        if (message.e_neq_body != null && message.hasOwnProperty("e_neq_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ENeq.verify(message.e_neq_body);
                if (error)
                    return "e_neq_body." + error;
            }
        }
        if (message.e_and_body != null && message.hasOwnProperty("e_and_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EAnd.verify(message.e_and_body);
                if (error)
                    return "e_and_body." + error;
            }
        }
        if (message.e_or_body != null && message.hasOwnProperty("e_or_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EOr.verify(message.e_or_body);
                if (error)
                    return "e_or_body." + error;
            }
        }
        if (message.e_var_body != null && message.hasOwnProperty("e_var_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EVar.verify(message.e_var_body);
                if (error)
                    return "e_var_body." + error;
            }
        }
        if (message.e_list_body != null && message.hasOwnProperty("e_list_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EList.verify(message.e_list_body);
                if (error)
                    return "e_list_body." + error;
            }
        }
        if (message.e_tuple_body != null && message.hasOwnProperty("e_tuple_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ETuple.verify(message.e_tuple_body);
                if (error)
                    return "e_tuple_body." + error;
            }
        }
        if (message.e_set_body != null && message.hasOwnProperty("e_set_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.ESet.verify(message.e_set_body);
                if (error)
                    return "e_set_body." + error;
            }
        }
        if (message.e_map_body != null && message.hasOwnProperty("e_map_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMap.verify(message.e_map_body);
                if (error)
                    return "e_map_body." + error;
            }
        }
        if (message.e_method_body != null && message.hasOwnProperty("e_method_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMethod.verify(message.e_method_body);
                if (error)
                    return "e_method_body." + error;
            }
        }
        if (message.e_matches_body != null && message.hasOwnProperty("e_matches_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMatches.verify(message.e_matches_body);
                if (error)
                    return "e_matches_body." + error;
            }
        }
        if (message.e_percent_percent_body != null && message.hasOwnProperty("e_percent_percent_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EPercentPercent.verify(message.e_percent_percent_body);
                if (error)
                    return "e_percent_percent_body." + error;
            }
        }
        if (message.e_plus_plus_body != null && message.hasOwnProperty("e_plus_plus_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EPlusPlus.verify(message.e_plus_plus_body);
                if (error)
                    return "e_plus_plus_body." + error;
            }
        }
        if (message.e_minus_minus_body != null && message.hasOwnProperty("e_minus_minus_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMinusMinus.verify(message.e_minus_minus_body);
                if (error)
                    return "e_minus_minus_body." + error;
            }
        }
        if (message.e_mod_body != null && message.hasOwnProperty("e_mod_body")) {
            if (properties.expr_instance === 1)
                return "expr_instance: multiple values";
            properties.expr_instance = 1;
            {
                var error = $root.EMod.verify(message.e_mod_body);
                if (error)
                    return "e_mod_body." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Expr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Expr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Expr} Expr
     */
    Expr.fromObject = function fromObject(object) {
        if (object instanceof $root.Expr)
            return object;
        var message = new $root.Expr();
        if (object.g_bool != null)
            message.g_bool = Boolean(object.g_bool);
        if (object.g_int != null)
            if ($util.Long)
                (message.g_int = $util.Long.fromValue(object.g_int)).unsigned = false;
            else if (typeof object.g_int === "string")
                message.g_int = parseInt(object.g_int, 10);
            else if (typeof object.g_int === "number")
                message.g_int = object.g_int;
            else if (typeof object.g_int === "object")
                message.g_int = new $util.LongBits(object.g_int.low >>> 0, object.g_int.high >>> 0).toNumber();
        if (object.g_string != null)
            message.g_string = String(object.g_string);
        if (object.g_uri != null)
            message.g_uri = String(object.g_uri);
        if (object.g_byte_array != null)
            if (typeof object.g_byte_array === "string")
                $util.base64.decode(object.g_byte_array, message.g_byte_array = $util.newBuffer($util.base64.length(object.g_byte_array)), 0);
            else if (object.g_byte_array.length)
                message.g_byte_array = object.g_byte_array;
        if (object.e_not_body != null) {
            if (typeof object.e_not_body !== "object")
                throw TypeError(".Expr.e_not_body: object expected");
            message.e_not_body = $root.ENot.fromObject(object.e_not_body);
        }
        if (object.e_neg_body != null) {
            if (typeof object.e_neg_body !== "object")
                throw TypeError(".Expr.e_neg_body: object expected");
            message.e_neg_body = $root.ENeg.fromObject(object.e_neg_body);
        }
        if (object.e_mult_body != null) {
            if (typeof object.e_mult_body !== "object")
                throw TypeError(".Expr.e_mult_body: object expected");
            message.e_mult_body = $root.EMult.fromObject(object.e_mult_body);
        }
        if (object.e_div_body != null) {
            if (typeof object.e_div_body !== "object")
                throw TypeError(".Expr.e_div_body: object expected");
            message.e_div_body = $root.EDiv.fromObject(object.e_div_body);
        }
        if (object.e_plus_body != null) {
            if (typeof object.e_plus_body !== "object")
                throw TypeError(".Expr.e_plus_body: object expected");
            message.e_plus_body = $root.EPlus.fromObject(object.e_plus_body);
        }
        if (object.e_minus_body != null) {
            if (typeof object.e_minus_body !== "object")
                throw TypeError(".Expr.e_minus_body: object expected");
            message.e_minus_body = $root.EMinus.fromObject(object.e_minus_body);
        }
        if (object.e_lt_body != null) {
            if (typeof object.e_lt_body !== "object")
                throw TypeError(".Expr.e_lt_body: object expected");
            message.e_lt_body = $root.ELt.fromObject(object.e_lt_body);
        }
        if (object.e_lte_body != null) {
            if (typeof object.e_lte_body !== "object")
                throw TypeError(".Expr.e_lte_body: object expected");
            message.e_lte_body = $root.ELte.fromObject(object.e_lte_body);
        }
        if (object.e_gt_body != null) {
            if (typeof object.e_gt_body !== "object")
                throw TypeError(".Expr.e_gt_body: object expected");
            message.e_gt_body = $root.EGt.fromObject(object.e_gt_body);
        }
        if (object.e_gte_body != null) {
            if (typeof object.e_gte_body !== "object")
                throw TypeError(".Expr.e_gte_body: object expected");
            message.e_gte_body = $root.EGte.fromObject(object.e_gte_body);
        }
        if (object.e_eq_body != null) {
            if (typeof object.e_eq_body !== "object")
                throw TypeError(".Expr.e_eq_body: object expected");
            message.e_eq_body = $root.EEq.fromObject(object.e_eq_body);
        }
        if (object.e_neq_body != null) {
            if (typeof object.e_neq_body !== "object")
                throw TypeError(".Expr.e_neq_body: object expected");
            message.e_neq_body = $root.ENeq.fromObject(object.e_neq_body);
        }
        if (object.e_and_body != null) {
            if (typeof object.e_and_body !== "object")
                throw TypeError(".Expr.e_and_body: object expected");
            message.e_and_body = $root.EAnd.fromObject(object.e_and_body);
        }
        if (object.e_or_body != null) {
            if (typeof object.e_or_body !== "object")
                throw TypeError(".Expr.e_or_body: object expected");
            message.e_or_body = $root.EOr.fromObject(object.e_or_body);
        }
        if (object.e_var_body != null) {
            if (typeof object.e_var_body !== "object")
                throw TypeError(".Expr.e_var_body: object expected");
            message.e_var_body = $root.EVar.fromObject(object.e_var_body);
        }
        if (object.e_list_body != null) {
            if (typeof object.e_list_body !== "object")
                throw TypeError(".Expr.e_list_body: object expected");
            message.e_list_body = $root.EList.fromObject(object.e_list_body);
        }
        if (object.e_tuple_body != null) {
            if (typeof object.e_tuple_body !== "object")
                throw TypeError(".Expr.e_tuple_body: object expected");
            message.e_tuple_body = $root.ETuple.fromObject(object.e_tuple_body);
        }
        if (object.e_set_body != null) {
            if (typeof object.e_set_body !== "object")
                throw TypeError(".Expr.e_set_body: object expected");
            message.e_set_body = $root.ESet.fromObject(object.e_set_body);
        }
        if (object.e_map_body != null) {
            if (typeof object.e_map_body !== "object")
                throw TypeError(".Expr.e_map_body: object expected");
            message.e_map_body = $root.EMap.fromObject(object.e_map_body);
        }
        if (object.e_method_body != null) {
            if (typeof object.e_method_body !== "object")
                throw TypeError(".Expr.e_method_body: object expected");
            message.e_method_body = $root.EMethod.fromObject(object.e_method_body);
        }
        if (object.e_matches_body != null) {
            if (typeof object.e_matches_body !== "object")
                throw TypeError(".Expr.e_matches_body: object expected");
            message.e_matches_body = $root.EMatches.fromObject(object.e_matches_body);
        }
        if (object.e_percent_percent_body != null) {
            if (typeof object.e_percent_percent_body !== "object")
                throw TypeError(".Expr.e_percent_percent_body: object expected");
            message.e_percent_percent_body = $root.EPercentPercent.fromObject(object.e_percent_percent_body);
        }
        if (object.e_plus_plus_body != null) {
            if (typeof object.e_plus_plus_body !== "object")
                throw TypeError(".Expr.e_plus_plus_body: object expected");
            message.e_plus_plus_body = $root.EPlusPlus.fromObject(object.e_plus_plus_body);
        }
        if (object.e_minus_minus_body != null) {
            if (typeof object.e_minus_minus_body !== "object")
                throw TypeError(".Expr.e_minus_minus_body: object expected");
            message.e_minus_minus_body = $root.EMinusMinus.fromObject(object.e_minus_minus_body);
        }
        if (object.e_mod_body != null) {
            if (typeof object.e_mod_body !== "object")
                throw TypeError(".Expr.e_mod_body: object expected");
            message.e_mod_body = $root.EMod.fromObject(object.e_mod_body);
        }
        return message;
    };

    /**
     * Creates a plain object from an Expr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Expr
     * @static
     * @param {Expr} message Expr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Expr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.g_bool != null && message.hasOwnProperty("g_bool")) {
            object.g_bool = message.g_bool;
            if (options.oneofs)
                object.expr_instance = "g_bool";
        }
        if (message.g_int != null && message.hasOwnProperty("g_int")) {
            if (typeof message.g_int === "number")
                object.g_int = options.longs === String ? String(message.g_int) : message.g_int;
            else
                object.g_int = options.longs === String ? $util.Long.prototype.toString.call(message.g_int) : options.longs === Number ? new $util.LongBits(message.g_int.low >>> 0, message.g_int.high >>> 0).toNumber() : message.g_int;
            if (options.oneofs)
                object.expr_instance = "g_int";
        }
        if (message.g_string != null && message.hasOwnProperty("g_string")) {
            object.g_string = message.g_string;
            if (options.oneofs)
                object.expr_instance = "g_string";
        }
        if (message.g_uri != null && message.hasOwnProperty("g_uri")) {
            object.g_uri = message.g_uri;
            if (options.oneofs)
                object.expr_instance = "g_uri";
        }
        if (message.e_not_body != null && message.hasOwnProperty("e_not_body")) {
            object.e_not_body = $root.ENot.toObject(message.e_not_body, options);
            if (options.oneofs)
                object.expr_instance = "e_not_body";
        }
        if (message.e_neg_body != null && message.hasOwnProperty("e_neg_body")) {
            object.e_neg_body = $root.ENeg.toObject(message.e_neg_body, options);
            if (options.oneofs)
                object.expr_instance = "e_neg_body";
        }
        if (message.e_mult_body != null && message.hasOwnProperty("e_mult_body")) {
            object.e_mult_body = $root.EMult.toObject(message.e_mult_body, options);
            if (options.oneofs)
                object.expr_instance = "e_mult_body";
        }
        if (message.e_div_body != null && message.hasOwnProperty("e_div_body")) {
            object.e_div_body = $root.EDiv.toObject(message.e_div_body, options);
            if (options.oneofs)
                object.expr_instance = "e_div_body";
        }
        if (message.e_plus_body != null && message.hasOwnProperty("e_plus_body")) {
            object.e_plus_body = $root.EPlus.toObject(message.e_plus_body, options);
            if (options.oneofs)
                object.expr_instance = "e_plus_body";
        }
        if (message.e_minus_body != null && message.hasOwnProperty("e_minus_body")) {
            object.e_minus_body = $root.EMinus.toObject(message.e_minus_body, options);
            if (options.oneofs)
                object.expr_instance = "e_minus_body";
        }
        if (message.e_lt_body != null && message.hasOwnProperty("e_lt_body")) {
            object.e_lt_body = $root.ELt.toObject(message.e_lt_body, options);
            if (options.oneofs)
                object.expr_instance = "e_lt_body";
        }
        if (message.e_lte_body != null && message.hasOwnProperty("e_lte_body")) {
            object.e_lte_body = $root.ELte.toObject(message.e_lte_body, options);
            if (options.oneofs)
                object.expr_instance = "e_lte_body";
        }
        if (message.e_gt_body != null && message.hasOwnProperty("e_gt_body")) {
            object.e_gt_body = $root.EGt.toObject(message.e_gt_body, options);
            if (options.oneofs)
                object.expr_instance = "e_gt_body";
        }
        if (message.e_gte_body != null && message.hasOwnProperty("e_gte_body")) {
            object.e_gte_body = $root.EGte.toObject(message.e_gte_body, options);
            if (options.oneofs)
                object.expr_instance = "e_gte_body";
        }
        if (message.e_eq_body != null && message.hasOwnProperty("e_eq_body")) {
            object.e_eq_body = $root.EEq.toObject(message.e_eq_body, options);
            if (options.oneofs)
                object.expr_instance = "e_eq_body";
        }
        if (message.e_neq_body != null && message.hasOwnProperty("e_neq_body")) {
            object.e_neq_body = $root.ENeq.toObject(message.e_neq_body, options);
            if (options.oneofs)
                object.expr_instance = "e_neq_body";
        }
        if (message.e_and_body != null && message.hasOwnProperty("e_and_body")) {
            object.e_and_body = $root.EAnd.toObject(message.e_and_body, options);
            if (options.oneofs)
                object.expr_instance = "e_and_body";
        }
        if (message.e_or_body != null && message.hasOwnProperty("e_or_body")) {
            object.e_or_body = $root.EOr.toObject(message.e_or_body, options);
            if (options.oneofs)
                object.expr_instance = "e_or_body";
        }
        if (message.e_var_body != null && message.hasOwnProperty("e_var_body")) {
            object.e_var_body = $root.EVar.toObject(message.e_var_body, options);
            if (options.oneofs)
                object.expr_instance = "e_var_body";
        }
        if (message.e_list_body != null && message.hasOwnProperty("e_list_body")) {
            object.e_list_body = $root.EList.toObject(message.e_list_body, options);
            if (options.oneofs)
                object.expr_instance = "e_list_body";
        }
        if (message.e_tuple_body != null && message.hasOwnProperty("e_tuple_body")) {
            object.e_tuple_body = $root.ETuple.toObject(message.e_tuple_body, options);
            if (options.oneofs)
                object.expr_instance = "e_tuple_body";
        }
        if (message.e_set_body != null && message.hasOwnProperty("e_set_body")) {
            object.e_set_body = $root.ESet.toObject(message.e_set_body, options);
            if (options.oneofs)
                object.expr_instance = "e_set_body";
        }
        if (message.e_map_body != null && message.hasOwnProperty("e_map_body")) {
            object.e_map_body = $root.EMap.toObject(message.e_map_body, options);
            if (options.oneofs)
                object.expr_instance = "e_map_body";
        }
        if (message.e_method_body != null && message.hasOwnProperty("e_method_body")) {
            object.e_method_body = $root.EMethod.toObject(message.e_method_body, options);
            if (options.oneofs)
                object.expr_instance = "e_method_body";
        }
        if (message.g_byte_array != null && message.hasOwnProperty("g_byte_array")) {
            object.g_byte_array = options.bytes === String ? $util.base64.encode(message.g_byte_array, 0, message.g_byte_array.length) : options.bytes === Array ? Array.prototype.slice.call(message.g_byte_array) : message.g_byte_array;
            if (options.oneofs)
                object.expr_instance = "g_byte_array";
        }
        if (message.e_matches_body != null && message.hasOwnProperty("e_matches_body")) {
            object.e_matches_body = $root.EMatches.toObject(message.e_matches_body, options);
            if (options.oneofs)
                object.expr_instance = "e_matches_body";
        }
        if (message.e_percent_percent_body != null && message.hasOwnProperty("e_percent_percent_body")) {
            object.e_percent_percent_body = $root.EPercentPercent.toObject(message.e_percent_percent_body, options);
            if (options.oneofs)
                object.expr_instance = "e_percent_percent_body";
        }
        if (message.e_plus_plus_body != null && message.hasOwnProperty("e_plus_plus_body")) {
            object.e_plus_plus_body = $root.EPlusPlus.toObject(message.e_plus_plus_body, options);
            if (options.oneofs)
                object.expr_instance = "e_plus_plus_body";
        }
        if (message.e_minus_minus_body != null && message.hasOwnProperty("e_minus_minus_body")) {
            object.e_minus_minus_body = $root.EMinusMinus.toObject(message.e_minus_minus_body, options);
            if (options.oneofs)
                object.expr_instance = "e_minus_minus_body";
        }
        if (message.e_mod_body != null && message.hasOwnProperty("e_mod_body")) {
            object.e_mod_body = $root.EMod.toObject(message.e_mod_body, options);
            if (options.oneofs)
                object.expr_instance = "e_mod_body";
        }
        return object;
    };

    /**
     * Converts this Expr to JSON.
     * @function toJSON
     * @memberof Expr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Expr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Expr;
})();

$root.EList = (function() {

    /**
     * Properties of a EList.
     * @exports IEList
     * @interface IEList
     * @property {Array.<IPar>|null} [ps] EList ps
     * @property {Uint8Array|null} [locallyFree] EList locallyFree
     * @property {boolean|null} [connective_used] EList connective_used
     * @property {IVar|null} [remainder] EList remainder
     */

    /**
     * Constructs a new EList.
     * @exports EList
     * @classdesc Represents a EList.
     * @implements IEList
     * @constructor
     * @param {IEList=} [properties] Properties to set
     */
    function EList(properties) {
        this.ps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EList ps.
     * @member {Array.<IPar>} ps
     * @memberof EList
     * @instance
     */
    EList.prototype.ps = $util.emptyArray;

    /**
     * EList locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof EList
     * @instance
     */
    EList.prototype.locallyFree = $util.newBuffer([]);

    /**
     * EList connective_used.
     * @member {boolean} connective_used
     * @memberof EList
     * @instance
     */
    EList.prototype.connective_used = false;

    /**
     * EList remainder.
     * @member {IVar|null|undefined} remainder
     * @memberof EList
     * @instance
     */
    EList.prototype.remainder = null;

    /**
     * Creates a new EList instance using the specified properties.
     * @function create
     * @memberof EList
     * @static
     * @param {IEList=} [properties] Properties to set
     * @returns {EList} EList instance
     */
    EList.create = function create(properties) {
        return new EList(properties);
    };

    /**
     * Encodes the specified EList message. Does not implicitly {@link EList.verify|verify} messages.
     * @function encode
     * @memberof EList
     * @static
     * @param {IEList} message EList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ps != null && message.ps.length)
            for (var i = 0; i < message.ps.length; ++i)
                $root.Par.encode(message.ps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.connective_used);
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EList message, length delimited. Does not implicitly {@link EList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EList
     * @static
     * @param {IEList} message EList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EList message from the specified reader or buffer.
     * @function decode
     * @memberof EList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EList} EList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.ps && message.ps.length))
                    message.ps = [];
                message.ps.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 3:
                message.locallyFree = reader.bytes();
                break;
            case 4:
                message.connective_used = reader.bool();
                break;
            case 5:
                message.remainder = $root.Var.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EList} EList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EList message.
     * @function verify
     * @memberof EList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ps != null && message.hasOwnProperty("ps")) {
            if (!Array.isArray(message.ps))
                return "ps: array expected";
            for (var i = 0; i < message.ps.length; ++i) {
                var error = $root.Par.verify(message.ps[i]);
                if (error)
                    return "ps." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        if (message.remainder != null && message.hasOwnProperty("remainder")) {
            var error = $root.Var.verify(message.remainder);
            if (error)
                return "remainder." + error;
        }
        return null;
    };

    /**
     * Creates a EList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EList} EList
     */
    EList.fromObject = function fromObject(object) {
        if (object instanceof $root.EList)
            return object;
        var message = new $root.EList();
        if (object.ps) {
            if (!Array.isArray(object.ps))
                throw TypeError(".EList.ps: array expected");
            message.ps = [];
            for (var i = 0; i < object.ps.length; ++i) {
                if (typeof object.ps[i] !== "object")
                    throw TypeError(".EList.ps: object expected");
                message.ps[i] = $root.Par.fromObject(object.ps[i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        if (object.remainder != null) {
            if (typeof object.remainder !== "object")
                throw TypeError(".EList.remainder: object expected");
            message.remainder = $root.Var.fromObject(object.remainder);
        }
        return message;
    };

    /**
     * Creates a plain object from a EList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EList
     * @static
     * @param {EList} message EList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ps = [];
        if (options.defaults) {
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
            object.remainder = null;
        }
        if (message.ps && message.ps.length) {
            object.ps = [];
            for (var j = 0; j < message.ps.length; ++j)
                object.ps[j] = $root.Par.toObject(message.ps[j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            object.remainder = $root.Var.toObject(message.remainder, options);
        return object;
    };

    /**
     * Converts this EList to JSON.
     * @function toJSON
     * @memberof EList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EList;
})();

$root.ETuple = (function() {

    /**
     * Properties of a ETuple.
     * @exports IETuple
     * @interface IETuple
     * @property {Array.<IPar>|null} [ps] ETuple ps
     * @property {Uint8Array|null} [locallyFree] ETuple locallyFree
     * @property {boolean|null} [connective_used] ETuple connective_used
     */

    /**
     * Constructs a new ETuple.
     * @exports ETuple
     * @classdesc Represents a ETuple.
     * @implements IETuple
     * @constructor
     * @param {IETuple=} [properties] Properties to set
     */
    function ETuple(properties) {
        this.ps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ETuple ps.
     * @member {Array.<IPar>} ps
     * @memberof ETuple
     * @instance
     */
    ETuple.prototype.ps = $util.emptyArray;

    /**
     * ETuple locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof ETuple
     * @instance
     */
    ETuple.prototype.locallyFree = $util.newBuffer([]);

    /**
     * ETuple connective_used.
     * @member {boolean} connective_used
     * @memberof ETuple
     * @instance
     */
    ETuple.prototype.connective_used = false;

    /**
     * Creates a new ETuple instance using the specified properties.
     * @function create
     * @memberof ETuple
     * @static
     * @param {IETuple=} [properties] Properties to set
     * @returns {ETuple} ETuple instance
     */
    ETuple.create = function create(properties) {
        return new ETuple(properties);
    };

    /**
     * Encodes the specified ETuple message. Does not implicitly {@link ETuple.verify|verify} messages.
     * @function encode
     * @memberof ETuple
     * @static
     * @param {IETuple} message ETuple message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ETuple.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ps != null && message.ps.length)
            for (var i = 0; i < message.ps.length; ++i)
                $root.Par.encode(message.ps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.connective_used);
        return writer;
    };

    /**
     * Encodes the specified ETuple message, length delimited. Does not implicitly {@link ETuple.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ETuple
     * @static
     * @param {IETuple} message ETuple message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ETuple.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ETuple message from the specified reader or buffer.
     * @function decode
     * @memberof ETuple
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ETuple} ETuple
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ETuple.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ETuple();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.ps && message.ps.length))
                    message.ps = [];
                message.ps.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 3:
                message.locallyFree = reader.bytes();
                break;
            case 4:
                message.connective_used = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ETuple message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ETuple
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ETuple} ETuple
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ETuple.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ETuple message.
     * @function verify
     * @memberof ETuple
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ETuple.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ps != null && message.hasOwnProperty("ps")) {
            if (!Array.isArray(message.ps))
                return "ps: array expected";
            for (var i = 0; i < message.ps.length; ++i) {
                var error = $root.Par.verify(message.ps[i]);
                if (error)
                    return "ps." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        return null;
    };

    /**
     * Creates a ETuple message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ETuple
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ETuple} ETuple
     */
    ETuple.fromObject = function fromObject(object) {
        if (object instanceof $root.ETuple)
            return object;
        var message = new $root.ETuple();
        if (object.ps) {
            if (!Array.isArray(object.ps))
                throw TypeError(".ETuple.ps: array expected");
            message.ps = [];
            for (var i = 0; i < object.ps.length; ++i) {
                if (typeof object.ps[i] !== "object")
                    throw TypeError(".ETuple.ps: object expected");
                message.ps[i] = $root.Par.fromObject(object.ps[i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        return message;
    };

    /**
     * Creates a plain object from a ETuple message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ETuple
     * @static
     * @param {ETuple} message ETuple
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ETuple.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ps = [];
        if (options.defaults) {
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
        }
        if (message.ps && message.ps.length) {
            object.ps = [];
            for (var j = 0; j < message.ps.length; ++j)
                object.ps[j] = $root.Par.toObject(message.ps[j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        return object;
    };

    /**
     * Converts this ETuple to JSON.
     * @function toJSON
     * @memberof ETuple
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ETuple.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ETuple;
})();

$root.ESet = (function() {

    /**
     * Properties of a ESet.
     * @exports IESet
     * @interface IESet
     * @property {Array.<IPar>|null} [ps] ESet ps
     * @property {Uint8Array|null} [locallyFree] ESet locallyFree
     * @property {boolean|null} [connective_used] ESet connective_used
     * @property {IVar|null} [remainder] ESet remainder
     */

    /**
     * Constructs a new ESet.
     * @exports ESet
     * @classdesc Represents a ESet.
     * @implements IESet
     * @constructor
     * @param {IESet=} [properties] Properties to set
     */
    function ESet(properties) {
        this.ps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ESet ps.
     * @member {Array.<IPar>} ps
     * @memberof ESet
     * @instance
     */
    ESet.prototype.ps = $util.emptyArray;

    /**
     * ESet locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof ESet
     * @instance
     */
    ESet.prototype.locallyFree = $util.newBuffer([]);

    /**
     * ESet connective_used.
     * @member {boolean} connective_used
     * @memberof ESet
     * @instance
     */
    ESet.prototype.connective_used = false;

    /**
     * ESet remainder.
     * @member {IVar|null|undefined} remainder
     * @memberof ESet
     * @instance
     */
    ESet.prototype.remainder = null;

    /**
     * Creates a new ESet instance using the specified properties.
     * @function create
     * @memberof ESet
     * @static
     * @param {IESet=} [properties] Properties to set
     * @returns {ESet} ESet instance
     */
    ESet.create = function create(properties) {
        return new ESet(properties);
    };

    /**
     * Encodes the specified ESet message. Does not implicitly {@link ESet.verify|verify} messages.
     * @function encode
     * @memberof ESet
     * @static
     * @param {IESet} message ESet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ESet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ps != null && message.ps.length)
            for (var i = 0; i < message.ps.length; ++i)
                $root.Par.encode(message.ps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.connective_used);
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ESet message, length delimited. Does not implicitly {@link ESet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ESet
     * @static
     * @param {IESet} message ESet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ESet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ESet message from the specified reader or buffer.
     * @function decode
     * @memberof ESet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ESet} ESet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ESet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ESet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.ps && message.ps.length))
                    message.ps = [];
                message.ps.push($root.Par.decode(reader, reader.uint32()));
                break;
            case 3:
                message.locallyFree = reader.bytes();
                break;
            case 4:
                message.connective_used = reader.bool();
                break;
            case 5:
                message.remainder = $root.Var.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ESet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ESet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ESet} ESet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ESet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ESet message.
     * @function verify
     * @memberof ESet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ESet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ps != null && message.hasOwnProperty("ps")) {
            if (!Array.isArray(message.ps))
                return "ps: array expected";
            for (var i = 0; i < message.ps.length; ++i) {
                var error = $root.Par.verify(message.ps[i]);
                if (error)
                    return "ps." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        if (message.remainder != null && message.hasOwnProperty("remainder")) {
            var error = $root.Var.verify(message.remainder);
            if (error)
                return "remainder." + error;
        }
        return null;
    };

    /**
     * Creates a ESet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ESet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ESet} ESet
     */
    ESet.fromObject = function fromObject(object) {
        if (object instanceof $root.ESet)
            return object;
        var message = new $root.ESet();
        if (object.ps) {
            if (!Array.isArray(object.ps))
                throw TypeError(".ESet.ps: array expected");
            message.ps = [];
            for (var i = 0; i < object.ps.length; ++i) {
                if (typeof object.ps[i] !== "object")
                    throw TypeError(".ESet.ps: object expected");
                message.ps[i] = $root.Par.fromObject(object.ps[i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        if (object.remainder != null) {
            if (typeof object.remainder !== "object")
                throw TypeError(".ESet.remainder: object expected");
            message.remainder = $root.Var.fromObject(object.remainder);
        }
        return message;
    };

    /**
     * Creates a plain object from a ESet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ESet
     * @static
     * @param {ESet} message ESet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ESet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ps = [];
        if (options.defaults) {
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
            object.remainder = null;
        }
        if (message.ps && message.ps.length) {
            object.ps = [];
            for (var j = 0; j < message.ps.length; ++j)
                object.ps[j] = $root.Par.toObject(message.ps[j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            object.remainder = $root.Var.toObject(message.remainder, options);
        return object;
    };

    /**
     * Converts this ESet to JSON.
     * @function toJSON
     * @memberof ESet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ESet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ESet;
})();

$root.EMap = (function() {

    /**
     * Properties of a EMap.
     * @exports IEMap
     * @interface IEMap
     * @property {Array.<IKeyValuePair>|null} [kvs] EMap kvs
     * @property {Uint8Array|null} [locallyFree] EMap locallyFree
     * @property {boolean|null} [connective_used] EMap connective_used
     * @property {IVar|null} [remainder] EMap remainder
     */

    /**
     * Constructs a new EMap.
     * @exports EMap
     * @classdesc Represents a EMap.
     * @implements IEMap
     * @constructor
     * @param {IEMap=} [properties] Properties to set
     */
    function EMap(properties) {
        this.kvs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMap kvs.
     * @member {Array.<IKeyValuePair>} kvs
     * @memberof EMap
     * @instance
     */
    EMap.prototype.kvs = $util.emptyArray;

    /**
     * EMap locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof EMap
     * @instance
     */
    EMap.prototype.locallyFree = $util.newBuffer([]);

    /**
     * EMap connective_used.
     * @member {boolean} connective_used
     * @memberof EMap
     * @instance
     */
    EMap.prototype.connective_used = false;

    /**
     * EMap remainder.
     * @member {IVar|null|undefined} remainder
     * @memberof EMap
     * @instance
     */
    EMap.prototype.remainder = null;

    /**
     * Creates a new EMap instance using the specified properties.
     * @function create
     * @memberof EMap
     * @static
     * @param {IEMap=} [properties] Properties to set
     * @returns {EMap} EMap instance
     */
    EMap.create = function create(properties) {
        return new EMap(properties);
    };

    /**
     * Encodes the specified EMap message. Does not implicitly {@link EMap.verify|verify} messages.
     * @function encode
     * @memberof EMap
     * @static
     * @param {IEMap} message EMap message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMap.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.kvs != null && message.kvs.length)
            for (var i = 0; i < message.kvs.length; ++i)
                $root.KeyValuePair.encode(message.kvs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.connective_used);
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            $root.Var.encode(message.remainder, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EMap message, length delimited. Does not implicitly {@link EMap.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMap
     * @static
     * @param {IEMap} message EMap message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMap.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMap message from the specified reader or buffer.
     * @function decode
     * @memberof EMap
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMap} EMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMap.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMap();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.kvs && message.kvs.length))
                    message.kvs = [];
                message.kvs.push($root.KeyValuePair.decode(reader, reader.uint32()));
                break;
            case 3:
                message.locallyFree = reader.bytes();
                break;
            case 4:
                message.connective_used = reader.bool();
                break;
            case 5:
                message.remainder = $root.Var.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EMap message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMap
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMap} EMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMap.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMap message.
     * @function verify
     * @memberof EMap
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EMap.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.kvs != null && message.hasOwnProperty("kvs")) {
            if (!Array.isArray(message.kvs))
                return "kvs: array expected";
            for (var i = 0; i < message.kvs.length; ++i) {
                var error = $root.KeyValuePair.verify(message.kvs[i]);
                if (error)
                    return "kvs." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        if (message.remainder != null && message.hasOwnProperty("remainder")) {
            var error = $root.Var.verify(message.remainder);
            if (error)
                return "remainder." + error;
        }
        return null;
    };

    /**
     * Creates a EMap message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMap
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMap} EMap
     */
    EMap.fromObject = function fromObject(object) {
        if (object instanceof $root.EMap)
            return object;
        var message = new $root.EMap();
        if (object.kvs) {
            if (!Array.isArray(object.kvs))
                throw TypeError(".EMap.kvs: array expected");
            message.kvs = [];
            for (var i = 0; i < object.kvs.length; ++i) {
                if (typeof object.kvs[i] !== "object")
                    throw TypeError(".EMap.kvs: object expected");
                message.kvs[i] = $root.KeyValuePair.fromObject(object.kvs[i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        if (object.remainder != null) {
            if (typeof object.remainder !== "object")
                throw TypeError(".EMap.remainder: object expected");
            message.remainder = $root.Var.fromObject(object.remainder);
        }
        return message;
    };

    /**
     * Creates a plain object from a EMap message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMap
     * @static
     * @param {EMap} message EMap
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EMap.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.kvs = [];
        if (options.defaults) {
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
            object.remainder = null;
        }
        if (message.kvs && message.kvs.length) {
            object.kvs = [];
            for (var j = 0; j < message.kvs.length; ++j)
                object.kvs[j] = $root.KeyValuePair.toObject(message.kvs[j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        if (message.remainder != null && message.hasOwnProperty("remainder"))
            object.remainder = $root.Var.toObject(message.remainder, options);
        return object;
    };

    /**
     * Converts this EMap to JSON.
     * @function toJSON
     * @memberof EMap
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMap.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMap;
})();

$root.EMethod = (function() {

    /**
     * Properties of a EMethod.
     * @exports IEMethod
     * @interface IEMethod
     * @property {string|null} [methodName] EMethod methodName
     * @property {IPar|null} [target] EMethod target
     * @property {Array.<IPar>|null} ["arguments"] EMethod arguments
     * @property {Uint8Array|null} [locallyFree] EMethod locallyFree
     * @property {boolean|null} [connective_used] EMethod connective_used
     */

    /**
     * Constructs a new EMethod.
     * @exports EMethod
     * @classdesc `target.method(arguments)`
     * @implements IEMethod
     * @constructor
     * @param {IEMethod=} [properties] Properties to set
     */
    function EMethod(properties) {
        this["arguments"] = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMethod methodName.
     * @member {string} methodName
     * @memberof EMethod
     * @instance
     */
    EMethod.prototype.methodName = "";

    /**
     * EMethod target.
     * @member {IPar|null|undefined} target
     * @memberof EMethod
     * @instance
     */
    EMethod.prototype.target = null;

    /**
     * EMethod arguments.
     * @member {Array.<IPar>} arguments
     * @memberof EMethod
     * @instance
     */
    EMethod.prototype["arguments"] = $util.emptyArray;

    /**
     * EMethod locallyFree.
     * @member {Uint8Array} locallyFree
     * @memberof EMethod
     * @instance
     */
    EMethod.prototype.locallyFree = $util.newBuffer([]);

    /**
     * EMethod connective_used.
     * @member {boolean} connective_used
     * @memberof EMethod
     * @instance
     */
    EMethod.prototype.connective_used = false;

    /**
     * Creates a new EMethod instance using the specified properties.
     * @function create
     * @memberof EMethod
     * @static
     * @param {IEMethod=} [properties] Properties to set
     * @returns {EMethod} EMethod instance
     */
    EMethod.create = function create(properties) {
        return new EMethod(properties);
    };

    /**
     * Encodes the specified EMethod message. Does not implicitly {@link EMethod.verify|verify} messages.
     * @function encode
     * @memberof EMethod
     * @static
     * @param {IEMethod} message EMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.methodName != null && message.hasOwnProperty("methodName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.methodName);
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Par.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message["arguments"] != null && message["arguments"].length)
            for (var i = 0; i < message["arguments"].length; ++i)
                $root.Par.encode(message["arguments"][i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.locallyFree);
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.connective_used);
        return writer;
    };

    /**
     * Encodes the specified EMethod message, length delimited. Does not implicitly {@link EMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMethod
     * @static
     * @param {IEMethod} message EMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMethod message from the specified reader or buffer.
     * @function decode
     * @memberof EMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMethod} EMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.methodName = reader.string();
                break;
            case 2:
                message.target = $root.Par.decode(reader, reader.uint32());
                break;
            case 3:
                if (!(message["arguments"] && message["arguments"].length))
                    message["arguments"] = [];
                message["arguments"].push($root.Par.decode(reader, reader.uint32()));
                break;
            case 5:
                message.locallyFree = reader.bytes();
                break;
            case 6:
                message.connective_used = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMethod} EMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMethod message.
     * @function verify
     * @memberof EMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.methodName != null && message.hasOwnProperty("methodName"))
            if (!$util.isString(message.methodName))
                return "methodName: string expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Par.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (message["arguments"] != null && message.hasOwnProperty("arguments")) {
            if (!Array.isArray(message["arguments"]))
                return "arguments: array expected";
            for (var i = 0; i < message["arguments"].length; ++i) {
                var error = $root.Par.verify(message["arguments"][i]);
                if (error)
                    return "arguments." + error;
            }
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            if (!(message.locallyFree && typeof message.locallyFree.length === "number" || $util.isString(message.locallyFree)))
                return "locallyFree: buffer expected";
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            if (typeof message.connective_used !== "boolean")
                return "connective_used: boolean expected";
        return null;
    };

    /**
     * Creates a EMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMethod} EMethod
     */
    EMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.EMethod)
            return object;
        var message = new $root.EMethod();
        if (object.methodName != null)
            message.methodName = String(object.methodName);
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".EMethod.target: object expected");
            message.target = $root.Par.fromObject(object.target);
        }
        if (object["arguments"]) {
            if (!Array.isArray(object["arguments"]))
                throw TypeError(".EMethod.arguments: array expected");
            message["arguments"] = [];
            for (var i = 0; i < object["arguments"].length; ++i) {
                if (typeof object["arguments"][i] !== "object")
                    throw TypeError(".EMethod.arguments: object expected");
                message["arguments"][i] = $root.Par.fromObject(object["arguments"][i]);
            }
        }
        if (object.locallyFree != null)
            if (typeof object.locallyFree === "string")
                $util.base64.decode(object.locallyFree, message.locallyFree = $util.newBuffer($util.base64.length(object.locallyFree)), 0);
            else if (object.locallyFree.length)
                message.locallyFree = object.locallyFree;
        if (object.connective_used != null)
            message.connective_used = Boolean(object.connective_used);
        return message;
    };

    /**
     * Creates a plain object from a EMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMethod
     * @static
     * @param {EMethod} message EMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EMethod.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object["arguments"] = [];
        if (options.defaults) {
            object.methodName = "";
            object.target = null;
            if (options.bytes === String)
                object.locallyFree = "";
            else {
                object.locallyFree = [];
                if (options.bytes !== Array)
                    object.locallyFree = $util.newBuffer(object.locallyFree);
            }
            object.connective_used = false;
        }
        if (message.methodName != null && message.hasOwnProperty("methodName"))
            object.methodName = message.methodName;
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Par.toObject(message.target, options);
        if (message["arguments"] && message["arguments"].length) {
            object["arguments"] = [];
            for (var j = 0; j < message["arguments"].length; ++j)
                object["arguments"][j] = $root.Par.toObject(message["arguments"][j], options);
        }
        if (message.locallyFree != null && message.hasOwnProperty("locallyFree"))
            object.locallyFree = options.bytes === String ? $util.base64.encode(message.locallyFree, 0, message.locallyFree.length) : options.bytes === Array ? Array.prototype.slice.call(message.locallyFree) : message.locallyFree;
        if (message.connective_used != null && message.hasOwnProperty("connective_used"))
            object.connective_used = message.connective_used;
        return object;
    };

    /**
     * Converts this EMethod to JSON.
     * @function toJSON
     * @memberof EMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMethod;
})();

$root.KeyValuePair = (function() {

    /**
     * Properties of a KeyValuePair.
     * @exports IKeyValuePair
     * @interface IKeyValuePair
     * @property {IPar|null} [key] KeyValuePair key
     * @property {IPar|null} [value] KeyValuePair value
     */

    /**
     * Constructs a new KeyValuePair.
     * @exports KeyValuePair
     * @classdesc Represents a KeyValuePair.
     * @implements IKeyValuePair
     * @constructor
     * @param {IKeyValuePair=} [properties] Properties to set
     */
    function KeyValuePair(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * KeyValuePair key.
     * @member {IPar|null|undefined} key
     * @memberof KeyValuePair
     * @instance
     */
    KeyValuePair.prototype.key = null;

    /**
     * KeyValuePair value.
     * @member {IPar|null|undefined} value
     * @memberof KeyValuePair
     * @instance
     */
    KeyValuePair.prototype.value = null;

    /**
     * Creates a new KeyValuePair instance using the specified properties.
     * @function create
     * @memberof KeyValuePair
     * @static
     * @param {IKeyValuePair=} [properties] Properties to set
     * @returns {KeyValuePair} KeyValuePair instance
     */
    KeyValuePair.create = function create(properties) {
        return new KeyValuePair(properties);
    };

    /**
     * Encodes the specified KeyValuePair message. Does not implicitly {@link KeyValuePair.verify|verify} messages.
     * @function encode
     * @memberof KeyValuePair
     * @static
     * @param {IKeyValuePair} message KeyValuePair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    KeyValuePair.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && message.hasOwnProperty("key"))
            $root.Par.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.value != null && message.hasOwnProperty("value"))
            $root.Par.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified KeyValuePair message, length delimited. Does not implicitly {@link KeyValuePair.verify|verify} messages.
     * @function encodeDelimited
     * @memberof KeyValuePair
     * @static
     * @param {IKeyValuePair} message KeyValuePair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    KeyValuePair.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a KeyValuePair message from the specified reader or buffer.
     * @function decode
     * @memberof KeyValuePair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {KeyValuePair} KeyValuePair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    KeyValuePair.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.KeyValuePair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.key = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.value = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a KeyValuePair message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof KeyValuePair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {KeyValuePair} KeyValuePair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    KeyValuePair.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a KeyValuePair message.
     * @function verify
     * @memberof KeyValuePair
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    KeyValuePair.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key")) {
            var error = $root.Par.verify(message.key);
            if (error)
                return "key." + error;
        }
        if (message.value != null && message.hasOwnProperty("value")) {
            var error = $root.Par.verify(message.value);
            if (error)
                return "value." + error;
        }
        return null;
    };

    /**
     * Creates a KeyValuePair message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof KeyValuePair
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {KeyValuePair} KeyValuePair
     */
    KeyValuePair.fromObject = function fromObject(object) {
        if (object instanceof $root.KeyValuePair)
            return object;
        var message = new $root.KeyValuePair();
        if (object.key != null) {
            if (typeof object.key !== "object")
                throw TypeError(".KeyValuePair.key: object expected");
            message.key = $root.Par.fromObject(object.key);
        }
        if (object.value != null) {
            if (typeof object.value !== "object")
                throw TypeError(".KeyValuePair.value: object expected");
            message.value = $root.Par.fromObject(object.value);
        }
        return message;
    };

    /**
     * Creates a plain object from a KeyValuePair message. Also converts values to other types if specified.
     * @function toObject
     * @memberof KeyValuePair
     * @static
     * @param {KeyValuePair} message KeyValuePair
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    KeyValuePair.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.key = null;
            object.value = null;
        }
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = $root.Par.toObject(message.key, options);
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = $root.Par.toObject(message.value, options);
        return object;
    };

    /**
     * Converts this KeyValuePair to JSON.
     * @function toJSON
     * @memberof KeyValuePair
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    KeyValuePair.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return KeyValuePair;
})();

$root.EVar = (function() {

    /**
     * Properties of a EVar.
     * @exports IEVar
     * @interface IEVar
     * @property {IVar|null} [v] EVar v
     */

    /**
     * Constructs a new EVar.
     * @exports EVar
     * @classdesc Represents a EVar.
     * @implements IEVar
     * @constructor
     * @param {IEVar=} [properties] Properties to set
     */
    function EVar(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EVar v.
     * @member {IVar|null|undefined} v
     * @memberof EVar
     * @instance
     */
    EVar.prototype.v = null;

    /**
     * Creates a new EVar instance using the specified properties.
     * @function create
     * @memberof EVar
     * @static
     * @param {IEVar=} [properties] Properties to set
     * @returns {EVar} EVar instance
     */
    EVar.create = function create(properties) {
        return new EVar(properties);
    };

    /**
     * Encodes the specified EVar message. Does not implicitly {@link EVar.verify|verify} messages.
     * @function encode
     * @memberof EVar
     * @static
     * @param {IEVar} message EVar message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EVar.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.v != null && message.hasOwnProperty("v"))
            $root.Var.encode(message.v, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EVar message, length delimited. Does not implicitly {@link EVar.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EVar
     * @static
     * @param {IEVar} message EVar message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EVar.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EVar message from the specified reader or buffer.
     * @function decode
     * @memberof EVar
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EVar} EVar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EVar.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EVar();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.v = $root.Var.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EVar message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EVar
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EVar} EVar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EVar.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EVar message.
     * @function verify
     * @memberof EVar
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EVar.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.v != null && message.hasOwnProperty("v")) {
            var error = $root.Var.verify(message.v);
            if (error)
                return "v." + error;
        }
        return null;
    };

    /**
     * Creates a EVar message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EVar
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EVar} EVar
     */
    EVar.fromObject = function fromObject(object) {
        if (object instanceof $root.EVar)
            return object;
        var message = new $root.EVar();
        if (object.v != null) {
            if (typeof object.v !== "object")
                throw TypeError(".EVar.v: object expected");
            message.v = $root.Var.fromObject(object.v);
        }
        return message;
    };

    /**
     * Creates a plain object from a EVar message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EVar
     * @static
     * @param {EVar} message EVar
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EVar.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.v = null;
        if (message.v != null && message.hasOwnProperty("v"))
            object.v = $root.Var.toObject(message.v, options);
        return object;
    };

    /**
     * Converts this EVar to JSON.
     * @function toJSON
     * @memberof EVar
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EVar.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EVar;
})();

$root.ENot = (function() {

    /**
     * Properties of a ENot.
     * @exports IENot
     * @interface IENot
     * @property {IPar|null} [p] ENot p
     */

    /**
     * Constructs a new ENot.
     * @exports ENot
     * @classdesc Represents a ENot.
     * @implements IENot
     * @constructor
     * @param {IENot=} [properties] Properties to set
     */
    function ENot(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ENot p.
     * @member {IPar|null|undefined} p
     * @memberof ENot
     * @instance
     */
    ENot.prototype.p = null;

    /**
     * Creates a new ENot instance using the specified properties.
     * @function create
     * @memberof ENot
     * @static
     * @param {IENot=} [properties] Properties to set
     * @returns {ENot} ENot instance
     */
    ENot.create = function create(properties) {
        return new ENot(properties);
    };

    /**
     * Encodes the specified ENot message. Does not implicitly {@link ENot.verify|verify} messages.
     * @function encode
     * @memberof ENot
     * @static
     * @param {IENot} message ENot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ENot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p != null && message.hasOwnProperty("p"))
            $root.Par.encode(message.p, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ENot message, length delimited. Does not implicitly {@link ENot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ENot
     * @static
     * @param {IENot} message ENot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ENot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ENot message from the specified reader or buffer.
     * @function decode
     * @memberof ENot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ENot} ENot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ENot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ENot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ENot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ENot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ENot} ENot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ENot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ENot message.
     * @function verify
     * @memberof ENot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ENot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p != null && message.hasOwnProperty("p")) {
            var error = $root.Par.verify(message.p);
            if (error)
                return "p." + error;
        }
        return null;
    };

    /**
     * Creates a ENot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ENot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ENot} ENot
     */
    ENot.fromObject = function fromObject(object) {
        if (object instanceof $root.ENot)
            return object;
        var message = new $root.ENot();
        if (object.p != null) {
            if (typeof object.p !== "object")
                throw TypeError(".ENot.p: object expected");
            message.p = $root.Par.fromObject(object.p);
        }
        return message;
    };

    /**
     * Creates a plain object from a ENot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ENot
     * @static
     * @param {ENot} message ENot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ENot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.p = null;
        if (message.p != null && message.hasOwnProperty("p"))
            object.p = $root.Par.toObject(message.p, options);
        return object;
    };

    /**
     * Converts this ENot to JSON.
     * @function toJSON
     * @memberof ENot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ENot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ENot;
})();

$root.ENeg = (function() {

    /**
     * Properties of a ENeg.
     * @exports IENeg
     * @interface IENeg
     * @property {IPar|null} [p] ENeg p
     */

    /**
     * Constructs a new ENeg.
     * @exports ENeg
     * @classdesc Represents a ENeg.
     * @implements IENeg
     * @constructor
     * @param {IENeg=} [properties] Properties to set
     */
    function ENeg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ENeg p.
     * @member {IPar|null|undefined} p
     * @memberof ENeg
     * @instance
     */
    ENeg.prototype.p = null;

    /**
     * Creates a new ENeg instance using the specified properties.
     * @function create
     * @memberof ENeg
     * @static
     * @param {IENeg=} [properties] Properties to set
     * @returns {ENeg} ENeg instance
     */
    ENeg.create = function create(properties) {
        return new ENeg(properties);
    };

    /**
     * Encodes the specified ENeg message. Does not implicitly {@link ENeg.verify|verify} messages.
     * @function encode
     * @memberof ENeg
     * @static
     * @param {IENeg} message ENeg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ENeg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p != null && message.hasOwnProperty("p"))
            $root.Par.encode(message.p, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ENeg message, length delimited. Does not implicitly {@link ENeg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ENeg
     * @static
     * @param {IENeg} message ENeg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ENeg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ENeg message from the specified reader or buffer.
     * @function decode
     * @memberof ENeg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ENeg} ENeg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ENeg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ENeg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ENeg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ENeg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ENeg} ENeg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ENeg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ENeg message.
     * @function verify
     * @memberof ENeg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ENeg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p != null && message.hasOwnProperty("p")) {
            var error = $root.Par.verify(message.p);
            if (error)
                return "p." + error;
        }
        return null;
    };

    /**
     * Creates a ENeg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ENeg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ENeg} ENeg
     */
    ENeg.fromObject = function fromObject(object) {
        if (object instanceof $root.ENeg)
            return object;
        var message = new $root.ENeg();
        if (object.p != null) {
            if (typeof object.p !== "object")
                throw TypeError(".ENeg.p: object expected");
            message.p = $root.Par.fromObject(object.p);
        }
        return message;
    };

    /**
     * Creates a plain object from a ENeg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ENeg
     * @static
     * @param {ENeg} message ENeg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ENeg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.p = null;
        if (message.p != null && message.hasOwnProperty("p"))
            object.p = $root.Par.toObject(message.p, options);
        return object;
    };

    /**
     * Converts this ENeg to JSON.
     * @function toJSON
     * @memberof ENeg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ENeg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ENeg;
})();

$root.EMult = (function() {

    /**
     * Properties of a EMult.
     * @exports IEMult
     * @interface IEMult
     * @property {IPar|null} [p1] EMult p1
     * @property {IPar|null} [p2] EMult p2
     */

    /**
     * Constructs a new EMult.
     * @exports EMult
     * @classdesc Represents a EMult.
     * @implements IEMult
     * @constructor
     * @param {IEMult=} [properties] Properties to set
     */
    function EMult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMult p1.
     * @member {IPar|null|undefined} p1
     * @memberof EMult
     * @instance
     */
    EMult.prototype.p1 = null;

    /**
     * EMult p2.
     * @member {IPar|null|undefined} p2
     * @memberof EMult
     * @instance
     */
    EMult.prototype.p2 = null;

    /**
     * Creates a new EMult instance using the specified properties.
     * @function create
     * @memberof EMult
     * @static
     * @param {IEMult=} [properties] Properties to set
     * @returns {EMult} EMult instance
     */
    EMult.create = function create(properties) {
        return new EMult(properties);
    };

    /**
     * Encodes the specified EMult message. Does not implicitly {@link EMult.verify|verify} messages.
     * @function encode
     * @memberof EMult
     * @static
     * @param {IEMult} message EMult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EMult message, length delimited. Does not implicitly {@link EMult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMult
     * @static
     * @param {IEMult} message EMult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMult message from the specified reader or buffer.
     * @function decode
     * @memberof EMult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMult} EMult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EMult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMult} EMult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMult message.
     * @function verify
     * @memberof EMult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EMult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EMult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMult} EMult
     */
    EMult.fromObject = function fromObject(object) {
        if (object instanceof $root.EMult)
            return object;
        var message = new $root.EMult();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EMult.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EMult.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EMult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMult
     * @static
     * @param {EMult} message EMult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EMult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EMult to JSON.
     * @function toJSON
     * @memberof EMult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMult;
})();

$root.EDiv = (function() {

    /**
     * Properties of a EDiv.
     * @exports IEDiv
     * @interface IEDiv
     * @property {IPar|null} [p1] EDiv p1
     * @property {IPar|null} [p2] EDiv p2
     */

    /**
     * Constructs a new EDiv.
     * @exports EDiv
     * @classdesc Represents a EDiv.
     * @implements IEDiv
     * @constructor
     * @param {IEDiv=} [properties] Properties to set
     */
    function EDiv(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EDiv p1.
     * @member {IPar|null|undefined} p1
     * @memberof EDiv
     * @instance
     */
    EDiv.prototype.p1 = null;

    /**
     * EDiv p2.
     * @member {IPar|null|undefined} p2
     * @memberof EDiv
     * @instance
     */
    EDiv.prototype.p2 = null;

    /**
     * Creates a new EDiv instance using the specified properties.
     * @function create
     * @memberof EDiv
     * @static
     * @param {IEDiv=} [properties] Properties to set
     * @returns {EDiv} EDiv instance
     */
    EDiv.create = function create(properties) {
        return new EDiv(properties);
    };

    /**
     * Encodes the specified EDiv message. Does not implicitly {@link EDiv.verify|verify} messages.
     * @function encode
     * @memberof EDiv
     * @static
     * @param {IEDiv} message EDiv message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EDiv.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EDiv message, length delimited. Does not implicitly {@link EDiv.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EDiv
     * @static
     * @param {IEDiv} message EDiv message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EDiv.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EDiv message from the specified reader or buffer.
     * @function decode
     * @memberof EDiv
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EDiv} EDiv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EDiv.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EDiv();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EDiv message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EDiv
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EDiv} EDiv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EDiv.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EDiv message.
     * @function verify
     * @memberof EDiv
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EDiv.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EDiv message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EDiv
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EDiv} EDiv
     */
    EDiv.fromObject = function fromObject(object) {
        if (object instanceof $root.EDiv)
            return object;
        var message = new $root.EDiv();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EDiv.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EDiv.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EDiv message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EDiv
     * @static
     * @param {EDiv} message EDiv
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EDiv.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EDiv to JSON.
     * @function toJSON
     * @memberof EDiv
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EDiv.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EDiv;
})();

$root.EMod = (function() {

    /**
     * Properties of a EMod.
     * @exports IEMod
     * @interface IEMod
     * @property {IPar|null} [p1] EMod p1
     * @property {IPar|null} [p2] EMod p2
     */

    /**
     * Constructs a new EMod.
     * @exports EMod
     * @classdesc Represents a EMod.
     * @implements IEMod
     * @constructor
     * @param {IEMod=} [properties] Properties to set
     */
    function EMod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMod p1.
     * @member {IPar|null|undefined} p1
     * @memberof EMod
     * @instance
     */
    EMod.prototype.p1 = null;

    /**
     * EMod p2.
     * @member {IPar|null|undefined} p2
     * @memberof EMod
     * @instance
     */
    EMod.prototype.p2 = null;

    /**
     * Creates a new EMod instance using the specified properties.
     * @function create
     * @memberof EMod
     * @static
     * @param {IEMod=} [properties] Properties to set
     * @returns {EMod} EMod instance
     */
    EMod.create = function create(properties) {
        return new EMod(properties);
    };

    /**
     * Encodes the specified EMod message. Does not implicitly {@link EMod.verify|verify} messages.
     * @function encode
     * @memberof EMod
     * @static
     * @param {IEMod} message EMod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EMod message, length delimited. Does not implicitly {@link EMod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMod
     * @static
     * @param {IEMod} message EMod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMod message from the specified reader or buffer.
     * @function decode
     * @memberof EMod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMod} EMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EMod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMod} EMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMod message.
     * @function verify
     * @memberof EMod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EMod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EMod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMod} EMod
     */
    EMod.fromObject = function fromObject(object) {
        if (object instanceof $root.EMod)
            return object;
        var message = new $root.EMod();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EMod.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EMod.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EMod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMod
     * @static
     * @param {EMod} message EMod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EMod.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EMod to JSON.
     * @function toJSON
     * @memberof EMod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMod;
})();

$root.EPlus = (function() {

    /**
     * Properties of a EPlus.
     * @exports IEPlus
     * @interface IEPlus
     * @property {IPar|null} [p1] EPlus p1
     * @property {IPar|null} [p2] EPlus p2
     */

    /**
     * Constructs a new EPlus.
     * @exports EPlus
     * @classdesc Represents a EPlus.
     * @implements IEPlus
     * @constructor
     * @param {IEPlus=} [properties] Properties to set
     */
    function EPlus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EPlus p1.
     * @member {IPar|null|undefined} p1
     * @memberof EPlus
     * @instance
     */
    EPlus.prototype.p1 = null;

    /**
     * EPlus p2.
     * @member {IPar|null|undefined} p2
     * @memberof EPlus
     * @instance
     */
    EPlus.prototype.p2 = null;

    /**
     * Creates a new EPlus instance using the specified properties.
     * @function create
     * @memberof EPlus
     * @static
     * @param {IEPlus=} [properties] Properties to set
     * @returns {EPlus} EPlus instance
     */
    EPlus.create = function create(properties) {
        return new EPlus(properties);
    };

    /**
     * Encodes the specified EPlus message. Does not implicitly {@link EPlus.verify|verify} messages.
     * @function encode
     * @memberof EPlus
     * @static
     * @param {IEPlus} message EPlus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EPlus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EPlus message, length delimited. Does not implicitly {@link EPlus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EPlus
     * @static
     * @param {IEPlus} message EPlus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EPlus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EPlus message from the specified reader or buffer.
     * @function decode
     * @memberof EPlus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EPlus} EPlus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EPlus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EPlus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EPlus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EPlus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EPlus} EPlus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EPlus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EPlus message.
     * @function verify
     * @memberof EPlus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EPlus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EPlus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EPlus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EPlus} EPlus
     */
    EPlus.fromObject = function fromObject(object) {
        if (object instanceof $root.EPlus)
            return object;
        var message = new $root.EPlus();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EPlus.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EPlus.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EPlus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EPlus
     * @static
     * @param {EPlus} message EPlus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EPlus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EPlus to JSON.
     * @function toJSON
     * @memberof EPlus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EPlus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EPlus;
})();

$root.EMinus = (function() {

    /**
     * Properties of a EMinus.
     * @exports IEMinus
     * @interface IEMinus
     * @property {IPar|null} [p1] EMinus p1
     * @property {IPar|null} [p2] EMinus p2
     */

    /**
     * Constructs a new EMinus.
     * @exports EMinus
     * @classdesc Represents a EMinus.
     * @implements IEMinus
     * @constructor
     * @param {IEMinus=} [properties] Properties to set
     */
    function EMinus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMinus p1.
     * @member {IPar|null|undefined} p1
     * @memberof EMinus
     * @instance
     */
    EMinus.prototype.p1 = null;

    /**
     * EMinus p2.
     * @member {IPar|null|undefined} p2
     * @memberof EMinus
     * @instance
     */
    EMinus.prototype.p2 = null;

    /**
     * Creates a new EMinus instance using the specified properties.
     * @function create
     * @memberof EMinus
     * @static
     * @param {IEMinus=} [properties] Properties to set
     * @returns {EMinus} EMinus instance
     */
    EMinus.create = function create(properties) {
        return new EMinus(properties);
    };

    /**
     * Encodes the specified EMinus message. Does not implicitly {@link EMinus.verify|verify} messages.
     * @function encode
     * @memberof EMinus
     * @static
     * @param {IEMinus} message EMinus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMinus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EMinus message, length delimited. Does not implicitly {@link EMinus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMinus
     * @static
     * @param {IEMinus} message EMinus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMinus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMinus message from the specified reader or buffer.
     * @function decode
     * @memberof EMinus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMinus} EMinus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMinus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMinus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EMinus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMinus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMinus} EMinus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMinus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMinus message.
     * @function verify
     * @memberof EMinus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EMinus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EMinus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMinus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMinus} EMinus
     */
    EMinus.fromObject = function fromObject(object) {
        if (object instanceof $root.EMinus)
            return object;
        var message = new $root.EMinus();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EMinus.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EMinus.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EMinus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMinus
     * @static
     * @param {EMinus} message EMinus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EMinus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EMinus to JSON.
     * @function toJSON
     * @memberof EMinus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMinus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMinus;
})();

$root.ELt = (function() {

    /**
     * Properties of a ELt.
     * @exports IELt
     * @interface IELt
     * @property {IPar|null} [p1] ELt p1
     * @property {IPar|null} [p2] ELt p2
     */

    /**
     * Constructs a new ELt.
     * @exports ELt
     * @classdesc Represents a ELt.
     * @implements IELt
     * @constructor
     * @param {IELt=} [properties] Properties to set
     */
    function ELt(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ELt p1.
     * @member {IPar|null|undefined} p1
     * @memberof ELt
     * @instance
     */
    ELt.prototype.p1 = null;

    /**
     * ELt p2.
     * @member {IPar|null|undefined} p2
     * @memberof ELt
     * @instance
     */
    ELt.prototype.p2 = null;

    /**
     * Creates a new ELt instance using the specified properties.
     * @function create
     * @memberof ELt
     * @static
     * @param {IELt=} [properties] Properties to set
     * @returns {ELt} ELt instance
     */
    ELt.create = function create(properties) {
        return new ELt(properties);
    };

    /**
     * Encodes the specified ELt message. Does not implicitly {@link ELt.verify|verify} messages.
     * @function encode
     * @memberof ELt
     * @static
     * @param {IELt} message ELt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ELt.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ELt message, length delimited. Does not implicitly {@link ELt.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ELt
     * @static
     * @param {IELt} message ELt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ELt.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ELt message from the specified reader or buffer.
     * @function decode
     * @memberof ELt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ELt} ELt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ELt.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ELt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ELt message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ELt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ELt} ELt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ELt.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ELt message.
     * @function verify
     * @memberof ELt
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ELt.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a ELt message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ELt
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ELt} ELt
     */
    ELt.fromObject = function fromObject(object) {
        if (object instanceof $root.ELt)
            return object;
        var message = new $root.ELt();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".ELt.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".ELt.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a ELt message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ELt
     * @static
     * @param {ELt} message ELt
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ELt.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this ELt to JSON.
     * @function toJSON
     * @memberof ELt
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ELt.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ELt;
})();

$root.ELte = (function() {

    /**
     * Properties of a ELte.
     * @exports IELte
     * @interface IELte
     * @property {IPar|null} [p1] ELte p1
     * @property {IPar|null} [p2] ELte p2
     */

    /**
     * Constructs a new ELte.
     * @exports ELte
     * @classdesc Represents a ELte.
     * @implements IELte
     * @constructor
     * @param {IELte=} [properties] Properties to set
     */
    function ELte(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ELte p1.
     * @member {IPar|null|undefined} p1
     * @memberof ELte
     * @instance
     */
    ELte.prototype.p1 = null;

    /**
     * ELte p2.
     * @member {IPar|null|undefined} p2
     * @memberof ELte
     * @instance
     */
    ELte.prototype.p2 = null;

    /**
     * Creates a new ELte instance using the specified properties.
     * @function create
     * @memberof ELte
     * @static
     * @param {IELte=} [properties] Properties to set
     * @returns {ELte} ELte instance
     */
    ELte.create = function create(properties) {
        return new ELte(properties);
    };

    /**
     * Encodes the specified ELte message. Does not implicitly {@link ELte.verify|verify} messages.
     * @function encode
     * @memberof ELte
     * @static
     * @param {IELte} message ELte message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ELte.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ELte message, length delimited. Does not implicitly {@link ELte.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ELte
     * @static
     * @param {IELte} message ELte message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ELte.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ELte message from the specified reader or buffer.
     * @function decode
     * @memberof ELte
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ELte} ELte
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ELte.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ELte();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ELte message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ELte
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ELte} ELte
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ELte.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ELte message.
     * @function verify
     * @memberof ELte
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ELte.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a ELte message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ELte
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ELte} ELte
     */
    ELte.fromObject = function fromObject(object) {
        if (object instanceof $root.ELte)
            return object;
        var message = new $root.ELte();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".ELte.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".ELte.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a ELte message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ELte
     * @static
     * @param {ELte} message ELte
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ELte.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this ELte to JSON.
     * @function toJSON
     * @memberof ELte
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ELte.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ELte;
})();

$root.EGt = (function() {

    /**
     * Properties of a EGt.
     * @exports IEGt
     * @interface IEGt
     * @property {IPar|null} [p1] EGt p1
     * @property {IPar|null} [p2] EGt p2
     */

    /**
     * Constructs a new EGt.
     * @exports EGt
     * @classdesc Represents a EGt.
     * @implements IEGt
     * @constructor
     * @param {IEGt=} [properties] Properties to set
     */
    function EGt(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EGt p1.
     * @member {IPar|null|undefined} p1
     * @memberof EGt
     * @instance
     */
    EGt.prototype.p1 = null;

    /**
     * EGt p2.
     * @member {IPar|null|undefined} p2
     * @memberof EGt
     * @instance
     */
    EGt.prototype.p2 = null;

    /**
     * Creates a new EGt instance using the specified properties.
     * @function create
     * @memberof EGt
     * @static
     * @param {IEGt=} [properties] Properties to set
     * @returns {EGt} EGt instance
     */
    EGt.create = function create(properties) {
        return new EGt(properties);
    };

    /**
     * Encodes the specified EGt message. Does not implicitly {@link EGt.verify|verify} messages.
     * @function encode
     * @memberof EGt
     * @static
     * @param {IEGt} message EGt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EGt.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EGt message, length delimited. Does not implicitly {@link EGt.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EGt
     * @static
     * @param {IEGt} message EGt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EGt.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EGt message from the specified reader or buffer.
     * @function decode
     * @memberof EGt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EGt} EGt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EGt.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EGt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EGt message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EGt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EGt} EGt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EGt.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EGt message.
     * @function verify
     * @memberof EGt
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EGt.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EGt message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EGt
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EGt} EGt
     */
    EGt.fromObject = function fromObject(object) {
        if (object instanceof $root.EGt)
            return object;
        var message = new $root.EGt();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EGt.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EGt.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EGt message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EGt
     * @static
     * @param {EGt} message EGt
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EGt.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EGt to JSON.
     * @function toJSON
     * @memberof EGt
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EGt.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EGt;
})();

$root.EGte = (function() {

    /**
     * Properties of a EGte.
     * @exports IEGte
     * @interface IEGte
     * @property {IPar|null} [p1] EGte p1
     * @property {IPar|null} [p2] EGte p2
     */

    /**
     * Constructs a new EGte.
     * @exports EGte
     * @classdesc Represents a EGte.
     * @implements IEGte
     * @constructor
     * @param {IEGte=} [properties] Properties to set
     */
    function EGte(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EGte p1.
     * @member {IPar|null|undefined} p1
     * @memberof EGte
     * @instance
     */
    EGte.prototype.p1 = null;

    /**
     * EGte p2.
     * @member {IPar|null|undefined} p2
     * @memberof EGte
     * @instance
     */
    EGte.prototype.p2 = null;

    /**
     * Creates a new EGte instance using the specified properties.
     * @function create
     * @memberof EGte
     * @static
     * @param {IEGte=} [properties] Properties to set
     * @returns {EGte} EGte instance
     */
    EGte.create = function create(properties) {
        return new EGte(properties);
    };

    /**
     * Encodes the specified EGte message. Does not implicitly {@link EGte.verify|verify} messages.
     * @function encode
     * @memberof EGte
     * @static
     * @param {IEGte} message EGte message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EGte.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EGte message, length delimited. Does not implicitly {@link EGte.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EGte
     * @static
     * @param {IEGte} message EGte message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EGte.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EGte message from the specified reader or buffer.
     * @function decode
     * @memberof EGte
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EGte} EGte
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EGte.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EGte();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EGte message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EGte
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EGte} EGte
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EGte.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EGte message.
     * @function verify
     * @memberof EGte
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EGte.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EGte message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EGte
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EGte} EGte
     */
    EGte.fromObject = function fromObject(object) {
        if (object instanceof $root.EGte)
            return object;
        var message = new $root.EGte();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EGte.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EGte.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EGte message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EGte
     * @static
     * @param {EGte} message EGte
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EGte.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EGte to JSON.
     * @function toJSON
     * @memberof EGte
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EGte.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EGte;
})();

$root.EEq = (function() {

    /**
     * Properties of a EEq.
     * @exports IEEq
     * @interface IEEq
     * @property {IPar|null} [p1] EEq p1
     * @property {IPar|null} [p2] EEq p2
     */

    /**
     * Constructs a new EEq.
     * @exports EEq
     * @classdesc Represents a EEq.
     * @implements IEEq
     * @constructor
     * @param {IEEq=} [properties] Properties to set
     */
    function EEq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EEq p1.
     * @member {IPar|null|undefined} p1
     * @memberof EEq
     * @instance
     */
    EEq.prototype.p1 = null;

    /**
     * EEq p2.
     * @member {IPar|null|undefined} p2
     * @memberof EEq
     * @instance
     */
    EEq.prototype.p2 = null;

    /**
     * Creates a new EEq instance using the specified properties.
     * @function create
     * @memberof EEq
     * @static
     * @param {IEEq=} [properties] Properties to set
     * @returns {EEq} EEq instance
     */
    EEq.create = function create(properties) {
        return new EEq(properties);
    };

    /**
     * Encodes the specified EEq message. Does not implicitly {@link EEq.verify|verify} messages.
     * @function encode
     * @memberof EEq
     * @static
     * @param {IEEq} message EEq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EEq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EEq message, length delimited. Does not implicitly {@link EEq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EEq
     * @static
     * @param {IEEq} message EEq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EEq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EEq message from the specified reader or buffer.
     * @function decode
     * @memberof EEq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EEq} EEq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EEq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EEq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EEq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EEq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EEq} EEq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EEq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EEq message.
     * @function verify
     * @memberof EEq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EEq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EEq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EEq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EEq} EEq
     */
    EEq.fromObject = function fromObject(object) {
        if (object instanceof $root.EEq)
            return object;
        var message = new $root.EEq();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EEq.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EEq.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EEq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EEq
     * @static
     * @param {EEq} message EEq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EEq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EEq to JSON.
     * @function toJSON
     * @memberof EEq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EEq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EEq;
})();

$root.ENeq = (function() {

    /**
     * Properties of a ENeq.
     * @exports IENeq
     * @interface IENeq
     * @property {IPar|null} [p1] ENeq p1
     * @property {IPar|null} [p2] ENeq p2
     */

    /**
     * Constructs a new ENeq.
     * @exports ENeq
     * @classdesc Represents a ENeq.
     * @implements IENeq
     * @constructor
     * @param {IENeq=} [properties] Properties to set
     */
    function ENeq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ENeq p1.
     * @member {IPar|null|undefined} p1
     * @memberof ENeq
     * @instance
     */
    ENeq.prototype.p1 = null;

    /**
     * ENeq p2.
     * @member {IPar|null|undefined} p2
     * @memberof ENeq
     * @instance
     */
    ENeq.prototype.p2 = null;

    /**
     * Creates a new ENeq instance using the specified properties.
     * @function create
     * @memberof ENeq
     * @static
     * @param {IENeq=} [properties] Properties to set
     * @returns {ENeq} ENeq instance
     */
    ENeq.create = function create(properties) {
        return new ENeq(properties);
    };

    /**
     * Encodes the specified ENeq message. Does not implicitly {@link ENeq.verify|verify} messages.
     * @function encode
     * @memberof ENeq
     * @static
     * @param {IENeq} message ENeq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ENeq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ENeq message, length delimited. Does not implicitly {@link ENeq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ENeq
     * @static
     * @param {IENeq} message ENeq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ENeq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ENeq message from the specified reader or buffer.
     * @function decode
     * @memberof ENeq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ENeq} ENeq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ENeq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ENeq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ENeq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ENeq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ENeq} ENeq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ENeq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ENeq message.
     * @function verify
     * @memberof ENeq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ENeq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a ENeq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ENeq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ENeq} ENeq
     */
    ENeq.fromObject = function fromObject(object) {
        if (object instanceof $root.ENeq)
            return object;
        var message = new $root.ENeq();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".ENeq.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".ENeq.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a ENeq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ENeq
     * @static
     * @param {ENeq} message ENeq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ENeq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this ENeq to JSON.
     * @function toJSON
     * @memberof ENeq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ENeq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ENeq;
})();

$root.EAnd = (function() {

    /**
     * Properties of a EAnd.
     * @exports IEAnd
     * @interface IEAnd
     * @property {IPar|null} [p1] EAnd p1
     * @property {IPar|null} [p2] EAnd p2
     */

    /**
     * Constructs a new EAnd.
     * @exports EAnd
     * @classdesc Represents a EAnd.
     * @implements IEAnd
     * @constructor
     * @param {IEAnd=} [properties] Properties to set
     */
    function EAnd(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EAnd p1.
     * @member {IPar|null|undefined} p1
     * @memberof EAnd
     * @instance
     */
    EAnd.prototype.p1 = null;

    /**
     * EAnd p2.
     * @member {IPar|null|undefined} p2
     * @memberof EAnd
     * @instance
     */
    EAnd.prototype.p2 = null;

    /**
     * Creates a new EAnd instance using the specified properties.
     * @function create
     * @memberof EAnd
     * @static
     * @param {IEAnd=} [properties] Properties to set
     * @returns {EAnd} EAnd instance
     */
    EAnd.create = function create(properties) {
        return new EAnd(properties);
    };

    /**
     * Encodes the specified EAnd message. Does not implicitly {@link EAnd.verify|verify} messages.
     * @function encode
     * @memberof EAnd
     * @static
     * @param {IEAnd} message EAnd message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EAnd.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EAnd message, length delimited. Does not implicitly {@link EAnd.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EAnd
     * @static
     * @param {IEAnd} message EAnd message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EAnd.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EAnd message from the specified reader or buffer.
     * @function decode
     * @memberof EAnd
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EAnd} EAnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EAnd.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EAnd();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EAnd message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EAnd
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EAnd} EAnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EAnd.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EAnd message.
     * @function verify
     * @memberof EAnd
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EAnd.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EAnd message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EAnd
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EAnd} EAnd
     */
    EAnd.fromObject = function fromObject(object) {
        if (object instanceof $root.EAnd)
            return object;
        var message = new $root.EAnd();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EAnd.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EAnd.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EAnd message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EAnd
     * @static
     * @param {EAnd} message EAnd
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EAnd.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EAnd to JSON.
     * @function toJSON
     * @memberof EAnd
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EAnd.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EAnd;
})();

$root.EOr = (function() {

    /**
     * Properties of a EOr.
     * @exports IEOr
     * @interface IEOr
     * @property {IPar|null} [p1] EOr p1
     * @property {IPar|null} [p2] EOr p2
     */

    /**
     * Constructs a new EOr.
     * @exports EOr
     * @classdesc Represents a EOr.
     * @implements IEOr
     * @constructor
     * @param {IEOr=} [properties] Properties to set
     */
    function EOr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EOr p1.
     * @member {IPar|null|undefined} p1
     * @memberof EOr
     * @instance
     */
    EOr.prototype.p1 = null;

    /**
     * EOr p2.
     * @member {IPar|null|undefined} p2
     * @memberof EOr
     * @instance
     */
    EOr.prototype.p2 = null;

    /**
     * Creates a new EOr instance using the specified properties.
     * @function create
     * @memberof EOr
     * @static
     * @param {IEOr=} [properties] Properties to set
     * @returns {EOr} EOr instance
     */
    EOr.create = function create(properties) {
        return new EOr(properties);
    };

    /**
     * Encodes the specified EOr message. Does not implicitly {@link EOr.verify|verify} messages.
     * @function encode
     * @memberof EOr
     * @static
     * @param {IEOr} message EOr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EOr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EOr message, length delimited. Does not implicitly {@link EOr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EOr
     * @static
     * @param {IEOr} message EOr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EOr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EOr message from the specified reader or buffer.
     * @function decode
     * @memberof EOr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EOr} EOr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EOr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EOr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EOr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EOr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EOr} EOr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EOr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EOr message.
     * @function verify
     * @memberof EOr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EOr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EOr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EOr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EOr} EOr
     */
    EOr.fromObject = function fromObject(object) {
        if (object instanceof $root.EOr)
            return object;
        var message = new $root.EOr();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EOr.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EOr.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EOr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EOr
     * @static
     * @param {EOr} message EOr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EOr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EOr to JSON.
     * @function toJSON
     * @memberof EOr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EOr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EOr;
})();

$root.EMatches = (function() {

    /**
     * Properties of a EMatches.
     * @exports IEMatches
     * @interface IEMatches
     * @property {IPar|null} [target] EMatches target
     * @property {IPar|null} [pattern] EMatches pattern
     */

    /**
     * Constructs a new EMatches.
     * @exports EMatches
     * @classdesc Represents a EMatches.
     * @implements IEMatches
     * @constructor
     * @param {IEMatches=} [properties] Properties to set
     */
    function EMatches(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMatches target.
     * @member {IPar|null|undefined} target
     * @memberof EMatches
     * @instance
     */
    EMatches.prototype.target = null;

    /**
     * EMatches pattern.
     * @member {IPar|null|undefined} pattern
     * @memberof EMatches
     * @instance
     */
    EMatches.prototype.pattern = null;

    /**
     * Creates a new EMatches instance using the specified properties.
     * @function create
     * @memberof EMatches
     * @static
     * @param {IEMatches=} [properties] Properties to set
     * @returns {EMatches} EMatches instance
     */
    EMatches.create = function create(properties) {
        return new EMatches(properties);
    };

    /**
     * Encodes the specified EMatches message. Does not implicitly {@link EMatches.verify|verify} messages.
     * @function encode
     * @memberof EMatches
     * @static
     * @param {IEMatches} message EMatches message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMatches.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.target != null && message.hasOwnProperty("target"))
            $root.Par.encode(message.target, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.pattern != null && message.hasOwnProperty("pattern"))
            $root.Par.encode(message.pattern, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EMatches message, length delimited. Does not implicitly {@link EMatches.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMatches
     * @static
     * @param {IEMatches} message EMatches message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMatches.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMatches message from the specified reader or buffer.
     * @function decode
     * @memberof EMatches
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMatches} EMatches
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMatches.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMatches();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.target = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.pattern = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EMatches message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMatches
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMatches} EMatches
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMatches.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMatches message.
     * @function verify
     * @memberof EMatches
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EMatches.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            var error = $root.Par.verify(message.target);
            if (error)
                return "target." + error;
        }
        if (message.pattern != null && message.hasOwnProperty("pattern")) {
            var error = $root.Par.verify(message.pattern);
            if (error)
                return "pattern." + error;
        }
        return null;
    };

    /**
     * Creates a EMatches message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMatches
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMatches} EMatches
     */
    EMatches.fromObject = function fromObject(object) {
        if (object instanceof $root.EMatches)
            return object;
        var message = new $root.EMatches();
        if (object.target != null) {
            if (typeof object.target !== "object")
                throw TypeError(".EMatches.target: object expected");
            message.target = $root.Par.fromObject(object.target);
        }
        if (object.pattern != null) {
            if (typeof object.pattern !== "object")
                throw TypeError(".EMatches.pattern: object expected");
            message.pattern = $root.Par.fromObject(object.pattern);
        }
        return message;
    };

    /**
     * Creates a plain object from a EMatches message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMatches
     * @static
     * @param {EMatches} message EMatches
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EMatches.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.target = null;
            object.pattern = null;
        }
        if (message.target != null && message.hasOwnProperty("target"))
            object.target = $root.Par.toObject(message.target, options);
        if (message.pattern != null && message.hasOwnProperty("pattern"))
            object.pattern = $root.Par.toObject(message.pattern, options);
        return object;
    };

    /**
     * Converts this EMatches to JSON.
     * @function toJSON
     * @memberof EMatches
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMatches.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMatches;
})();

$root.EPercentPercent = (function() {

    /**
     * Properties of a EPercentPercent.
     * @exports IEPercentPercent
     * @interface IEPercentPercent
     * @property {IPar|null} [p1] EPercentPercent p1
     * @property {IPar|null} [p2] EPercentPercent p2
     */

    /**
     * Constructs a new EPercentPercent.
     * @exports EPercentPercent
     * @classdesc String interpolation
     * 
     * `"Hello, {name}" %% {"name": "Bob"}` denotes `"Hello, Bob"`
     * @implements IEPercentPercent
     * @constructor
     * @param {IEPercentPercent=} [properties] Properties to set
     */
    function EPercentPercent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EPercentPercent p1.
     * @member {IPar|null|undefined} p1
     * @memberof EPercentPercent
     * @instance
     */
    EPercentPercent.prototype.p1 = null;

    /**
     * EPercentPercent p2.
     * @member {IPar|null|undefined} p2
     * @memberof EPercentPercent
     * @instance
     */
    EPercentPercent.prototype.p2 = null;

    /**
     * Creates a new EPercentPercent instance using the specified properties.
     * @function create
     * @memberof EPercentPercent
     * @static
     * @param {IEPercentPercent=} [properties] Properties to set
     * @returns {EPercentPercent} EPercentPercent instance
     */
    EPercentPercent.create = function create(properties) {
        return new EPercentPercent(properties);
    };

    /**
     * Encodes the specified EPercentPercent message. Does not implicitly {@link EPercentPercent.verify|verify} messages.
     * @function encode
     * @memberof EPercentPercent
     * @static
     * @param {IEPercentPercent} message EPercentPercent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EPercentPercent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EPercentPercent message, length delimited. Does not implicitly {@link EPercentPercent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EPercentPercent
     * @static
     * @param {IEPercentPercent} message EPercentPercent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EPercentPercent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EPercentPercent message from the specified reader or buffer.
     * @function decode
     * @memberof EPercentPercent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EPercentPercent} EPercentPercent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EPercentPercent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EPercentPercent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EPercentPercent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EPercentPercent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EPercentPercent} EPercentPercent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EPercentPercent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EPercentPercent message.
     * @function verify
     * @memberof EPercentPercent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EPercentPercent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EPercentPercent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EPercentPercent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EPercentPercent} EPercentPercent
     */
    EPercentPercent.fromObject = function fromObject(object) {
        if (object instanceof $root.EPercentPercent)
            return object;
        var message = new $root.EPercentPercent();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EPercentPercent.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EPercentPercent.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EPercentPercent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EPercentPercent
     * @static
     * @param {EPercentPercent} message EPercentPercent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EPercentPercent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EPercentPercent to JSON.
     * @function toJSON
     * @memberof EPercentPercent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EPercentPercent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EPercentPercent;
})();

$root.EPlusPlus = (function() {

    /**
     * Properties of a EPlusPlus.
     * @exports IEPlusPlus
     * @interface IEPlusPlus
     * @property {IPar|null} [p1] EPlusPlus p1
     * @property {IPar|null} [p2] EPlusPlus p2
     */

    /**
     * Constructs a new EPlusPlus.
     * @exports EPlusPlus
     * @classdesc Represents a EPlusPlus.
     * @implements IEPlusPlus
     * @constructor
     * @param {IEPlusPlus=} [properties] Properties to set
     */
    function EPlusPlus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EPlusPlus p1.
     * @member {IPar|null|undefined} p1
     * @memberof EPlusPlus
     * @instance
     */
    EPlusPlus.prototype.p1 = null;

    /**
     * EPlusPlus p2.
     * @member {IPar|null|undefined} p2
     * @memberof EPlusPlus
     * @instance
     */
    EPlusPlus.prototype.p2 = null;

    /**
     * Creates a new EPlusPlus instance using the specified properties.
     * @function create
     * @memberof EPlusPlus
     * @static
     * @param {IEPlusPlus=} [properties] Properties to set
     * @returns {EPlusPlus} EPlusPlus instance
     */
    EPlusPlus.create = function create(properties) {
        return new EPlusPlus(properties);
    };

    /**
     * Encodes the specified EPlusPlus message. Does not implicitly {@link EPlusPlus.verify|verify} messages.
     * @function encode
     * @memberof EPlusPlus
     * @static
     * @param {IEPlusPlus} message EPlusPlus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EPlusPlus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EPlusPlus message, length delimited. Does not implicitly {@link EPlusPlus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EPlusPlus
     * @static
     * @param {IEPlusPlus} message EPlusPlus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EPlusPlus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EPlusPlus message from the specified reader or buffer.
     * @function decode
     * @memberof EPlusPlus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EPlusPlus} EPlusPlus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EPlusPlus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EPlusPlus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EPlusPlus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EPlusPlus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EPlusPlus} EPlusPlus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EPlusPlus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EPlusPlus message.
     * @function verify
     * @memberof EPlusPlus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EPlusPlus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EPlusPlus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EPlusPlus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EPlusPlus} EPlusPlus
     */
    EPlusPlus.fromObject = function fromObject(object) {
        if (object instanceof $root.EPlusPlus)
            return object;
        var message = new $root.EPlusPlus();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EPlusPlus.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EPlusPlus.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EPlusPlus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EPlusPlus
     * @static
     * @param {EPlusPlus} message EPlusPlus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EPlusPlus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EPlusPlus to JSON.
     * @function toJSON
     * @memberof EPlusPlus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EPlusPlus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EPlusPlus;
})();

$root.EMinusMinus = (function() {

    /**
     * Properties of a EMinusMinus.
     * @exports IEMinusMinus
     * @interface IEMinusMinus
     * @property {IPar|null} [p1] EMinusMinus p1
     * @property {IPar|null} [p2] EMinusMinus p2
     */

    /**
     * Constructs a new EMinusMinus.
     * @exports EMinusMinus
     * @classdesc Represents a EMinusMinus.
     * @implements IEMinusMinus
     * @constructor
     * @param {IEMinusMinus=} [properties] Properties to set
     */
    function EMinusMinus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EMinusMinus p1.
     * @member {IPar|null|undefined} p1
     * @memberof EMinusMinus
     * @instance
     */
    EMinusMinus.prototype.p1 = null;

    /**
     * EMinusMinus p2.
     * @member {IPar|null|undefined} p2
     * @memberof EMinusMinus
     * @instance
     */
    EMinusMinus.prototype.p2 = null;

    /**
     * Creates a new EMinusMinus instance using the specified properties.
     * @function create
     * @memberof EMinusMinus
     * @static
     * @param {IEMinusMinus=} [properties] Properties to set
     * @returns {EMinusMinus} EMinusMinus instance
     */
    EMinusMinus.create = function create(properties) {
        return new EMinusMinus(properties);
    };

    /**
     * Encodes the specified EMinusMinus message. Does not implicitly {@link EMinusMinus.verify|verify} messages.
     * @function encode
     * @memberof EMinusMinus
     * @static
     * @param {IEMinusMinus} message EMinusMinus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMinusMinus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.p1 != null && message.hasOwnProperty("p1"))
            $root.Par.encode(message.p1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.p2 != null && message.hasOwnProperty("p2"))
            $root.Par.encode(message.p2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EMinusMinus message, length delimited. Does not implicitly {@link EMinusMinus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EMinusMinus
     * @static
     * @param {IEMinusMinus} message EMinusMinus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EMinusMinus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a EMinusMinus message from the specified reader or buffer.
     * @function decode
     * @memberof EMinusMinus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EMinusMinus} EMinusMinus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMinusMinus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EMinusMinus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.p1 = $root.Par.decode(reader, reader.uint32());
                break;
            case 2:
                message.p2 = $root.Par.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a EMinusMinus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EMinusMinus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EMinusMinus} EMinusMinus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EMinusMinus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a EMinusMinus message.
     * @function verify
     * @memberof EMinusMinus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EMinusMinus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.p1 != null && message.hasOwnProperty("p1")) {
            var error = $root.Par.verify(message.p1);
            if (error)
                return "p1." + error;
        }
        if (message.p2 != null && message.hasOwnProperty("p2")) {
            var error = $root.Par.verify(message.p2);
            if (error)
                return "p2." + error;
        }
        return null;
    };

    /**
     * Creates a EMinusMinus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EMinusMinus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EMinusMinus} EMinusMinus
     */
    EMinusMinus.fromObject = function fromObject(object) {
        if (object instanceof $root.EMinusMinus)
            return object;
        var message = new $root.EMinusMinus();
        if (object.p1 != null) {
            if (typeof object.p1 !== "object")
                throw TypeError(".EMinusMinus.p1: object expected");
            message.p1 = $root.Par.fromObject(object.p1);
        }
        if (object.p2 != null) {
            if (typeof object.p2 !== "object")
                throw TypeError(".EMinusMinus.p2: object expected");
            message.p2 = $root.Par.fromObject(object.p2);
        }
        return message;
    };

    /**
     * Creates a plain object from a EMinusMinus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EMinusMinus
     * @static
     * @param {EMinusMinus} message EMinusMinus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EMinusMinus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.p1 = null;
            object.p2 = null;
        }
        if (message.p1 != null && message.hasOwnProperty("p1"))
            object.p1 = $root.Par.toObject(message.p1, options);
        if (message.p2 != null && message.hasOwnProperty("p2"))
            object.p2 = $root.Par.toObject(message.p2, options);
        return object;
    };

    /**
     * Converts this EMinusMinus to JSON.
     * @function toJSON
     * @memberof EMinusMinus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EMinusMinus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EMinusMinus;
})();

$root.Connective = (function() {

    /**
     * Properties of a Connective.
     * @exports IConnective
     * @interface IConnective
     * @property {IConnectiveBody|null} [conn_and_body] Connective conn_and_body
     * @property {IConnectiveBody|null} [conn_or_body] Connective conn_or_body
     * @property {IPar|null} [conn_not_body] Connective conn_not_body
     * @property {IVarRef|null} [var_ref_body] Connective var_ref_body
     * @property {boolean|null} [conn_bool] Connective conn_bool
     * @property {boolean|null} [conn_int] Connective conn_int
     * @property {boolean|null} [conn_string] Connective conn_string
     * @property {boolean|null} [conn_uri] Connective conn_uri
     * @property {boolean|null} [conn_byte_array] Connective conn_byte_array
     */

    /**
     * Constructs a new Connective.
     * @exports Connective
     * @classdesc Represents a Connective.
     * @implements IConnective
     * @constructor
     * @param {IConnective=} [properties] Properties to set
     */
    function Connective(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Connective conn_and_body.
     * @member {IConnectiveBody|null|undefined} conn_and_body
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_and_body = null;

    /**
     * Connective conn_or_body.
     * @member {IConnectiveBody|null|undefined} conn_or_body
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_or_body = null;

    /**
     * Connective conn_not_body.
     * @member {IPar|null|undefined} conn_not_body
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_not_body = null;

    /**
     * Connective var_ref_body.
     * @member {IVarRef|null|undefined} var_ref_body
     * @memberof Connective
     * @instance
     */
    Connective.prototype.var_ref_body = null;

    /**
     * Connective conn_bool.
     * @member {boolean} conn_bool
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_bool = false;

    /**
     * Connective conn_int.
     * @member {boolean} conn_int
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_int = false;

    /**
     * Connective conn_string.
     * @member {boolean} conn_string
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_string = false;

    /**
     * Connective conn_uri.
     * @member {boolean} conn_uri
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_uri = false;

    /**
     * Connective conn_byte_array.
     * @member {boolean} conn_byte_array
     * @memberof Connective
     * @instance
     */
    Connective.prototype.conn_byte_array = false;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Connective connective_instance.
     * @member {"conn_and_body"|"conn_or_body"|"conn_not_body"|"var_ref_body"|"conn_bool"|"conn_int"|"conn_string"|"conn_uri"|"conn_byte_array"|undefined} connective_instance
     * @memberof Connective
     * @instance
     */
    Object.defineProperty(Connective.prototype, "connective_instance", {
        get: $util.oneOfGetter($oneOfFields = ["conn_and_body", "conn_or_body", "conn_not_body", "var_ref_body", "conn_bool", "conn_int", "conn_string", "conn_uri", "conn_byte_array"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Connective instance using the specified properties.
     * @function create
     * @memberof Connective
     * @static
     * @param {IConnective=} [properties] Properties to set
     * @returns {Connective} Connective instance
     */
    Connective.create = function create(properties) {
        return new Connective(properties);
    };

    /**
     * Encodes the specified Connective message. Does not implicitly {@link Connective.verify|verify} messages.
     * @function encode
     * @memberof Connective
     * @static
     * @param {IConnective} message Connective message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Connective.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.conn_and_body != null && message.hasOwnProperty("conn_and_body"))
            $root.ConnectiveBody.encode(message.conn_and_body, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.conn_or_body != null && message.hasOwnProperty("conn_or_body"))
            $root.ConnectiveBody.encode(message.conn_or_body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.conn_not_body != null && message.hasOwnProperty("conn_not_body"))
            $root.Par.encode(message.conn_not_body, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.var_ref_body != null && message.hasOwnProperty("var_ref_body"))
            $root.VarRef.encode(message.var_ref_body, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.conn_bool != null && message.hasOwnProperty("conn_bool"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.conn_bool);
        if (message.conn_int != null && message.hasOwnProperty("conn_int"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.conn_int);
        if (message.conn_string != null && message.hasOwnProperty("conn_string"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.conn_string);
        if (message.conn_uri != null && message.hasOwnProperty("conn_uri"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.conn_uri);
        if (message.conn_byte_array != null && message.hasOwnProperty("conn_byte_array"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.conn_byte_array);
        return writer;
    };

    /**
     * Encodes the specified Connective message, length delimited. Does not implicitly {@link Connective.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Connective
     * @static
     * @param {IConnective} message Connective message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Connective.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Connective message from the specified reader or buffer.
     * @function decode
     * @memberof Connective
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Connective} Connective
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Connective.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Connective();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.conn_and_body = $root.ConnectiveBody.decode(reader, reader.uint32());
                break;
            case 2:
                message.conn_or_body = $root.ConnectiveBody.decode(reader, reader.uint32());
                break;
            case 3:
                message.conn_not_body = $root.Par.decode(reader, reader.uint32());
                break;
            case 4:
                message.var_ref_body = $root.VarRef.decode(reader, reader.uint32());
                break;
            case 5:
                message.conn_bool = reader.bool();
                break;
            case 6:
                message.conn_int = reader.bool();
                break;
            case 7:
                message.conn_string = reader.bool();
                break;
            case 8:
                message.conn_uri = reader.bool();
                break;
            case 9:
                message.conn_byte_array = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Connective message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Connective
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Connective} Connective
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Connective.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Connective message.
     * @function verify
     * @memberof Connective
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Connective.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.conn_and_body != null && message.hasOwnProperty("conn_and_body")) {
            properties.connective_instance = 1;
            {
                var error = $root.ConnectiveBody.verify(message.conn_and_body);
                if (error)
                    return "conn_and_body." + error;
            }
        }
        if (message.conn_or_body != null && message.hasOwnProperty("conn_or_body")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            {
                var error = $root.ConnectiveBody.verify(message.conn_or_body);
                if (error)
                    return "conn_or_body." + error;
            }
        }
        if (message.conn_not_body != null && message.hasOwnProperty("conn_not_body")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            {
                var error = $root.Par.verify(message.conn_not_body);
                if (error)
                    return "conn_not_body." + error;
            }
        }
        if (message.var_ref_body != null && message.hasOwnProperty("var_ref_body")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            {
                var error = $root.VarRef.verify(message.var_ref_body);
                if (error)
                    return "var_ref_body." + error;
            }
        }
        if (message.conn_bool != null && message.hasOwnProperty("conn_bool")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            if (typeof message.conn_bool !== "boolean")
                return "conn_bool: boolean expected";
        }
        if (message.conn_int != null && message.hasOwnProperty("conn_int")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            if (typeof message.conn_int !== "boolean")
                return "conn_int: boolean expected";
        }
        if (message.conn_string != null && message.hasOwnProperty("conn_string")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            if (typeof message.conn_string !== "boolean")
                return "conn_string: boolean expected";
        }
        if (message.conn_uri != null && message.hasOwnProperty("conn_uri")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            if (typeof message.conn_uri !== "boolean")
                return "conn_uri: boolean expected";
        }
        if (message.conn_byte_array != null && message.hasOwnProperty("conn_byte_array")) {
            if (properties.connective_instance === 1)
                return "connective_instance: multiple values";
            properties.connective_instance = 1;
            if (typeof message.conn_byte_array !== "boolean")
                return "conn_byte_array: boolean expected";
        }
        return null;
    };

    /**
     * Creates a Connective message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Connective
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Connective} Connective
     */
    Connective.fromObject = function fromObject(object) {
        if (object instanceof $root.Connective)
            return object;
        var message = new $root.Connective();
        if (object.conn_and_body != null) {
            if (typeof object.conn_and_body !== "object")
                throw TypeError(".Connective.conn_and_body: object expected");
            message.conn_and_body = $root.ConnectiveBody.fromObject(object.conn_and_body);
        }
        if (object.conn_or_body != null) {
            if (typeof object.conn_or_body !== "object")
                throw TypeError(".Connective.conn_or_body: object expected");
            message.conn_or_body = $root.ConnectiveBody.fromObject(object.conn_or_body);
        }
        if (object.conn_not_body != null) {
            if (typeof object.conn_not_body !== "object")
                throw TypeError(".Connective.conn_not_body: object expected");
            message.conn_not_body = $root.Par.fromObject(object.conn_not_body);
        }
        if (object.var_ref_body != null) {
            if (typeof object.var_ref_body !== "object")
                throw TypeError(".Connective.var_ref_body: object expected");
            message.var_ref_body = $root.VarRef.fromObject(object.var_ref_body);
        }
        if (object.conn_bool != null)
            message.conn_bool = Boolean(object.conn_bool);
        if (object.conn_int != null)
            message.conn_int = Boolean(object.conn_int);
        if (object.conn_string != null)
            message.conn_string = Boolean(object.conn_string);
        if (object.conn_uri != null)
            message.conn_uri = Boolean(object.conn_uri);
        if (object.conn_byte_array != null)
            message.conn_byte_array = Boolean(object.conn_byte_array);
        return message;
    };

    /**
     * Creates a plain object from a Connective message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Connective
     * @static
     * @param {Connective} message Connective
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Connective.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.conn_and_body != null && message.hasOwnProperty("conn_and_body")) {
            object.conn_and_body = $root.ConnectiveBody.toObject(message.conn_and_body, options);
            if (options.oneofs)
                object.connective_instance = "conn_and_body";
        }
        if (message.conn_or_body != null && message.hasOwnProperty("conn_or_body")) {
            object.conn_or_body = $root.ConnectiveBody.toObject(message.conn_or_body, options);
            if (options.oneofs)
                object.connective_instance = "conn_or_body";
        }
        if (message.conn_not_body != null && message.hasOwnProperty("conn_not_body")) {
            object.conn_not_body = $root.Par.toObject(message.conn_not_body, options);
            if (options.oneofs)
                object.connective_instance = "conn_not_body";
        }
        if (message.var_ref_body != null && message.hasOwnProperty("var_ref_body")) {
            object.var_ref_body = $root.VarRef.toObject(message.var_ref_body, options);
            if (options.oneofs)
                object.connective_instance = "var_ref_body";
        }
        if (message.conn_bool != null && message.hasOwnProperty("conn_bool")) {
            object.conn_bool = message.conn_bool;
            if (options.oneofs)
                object.connective_instance = "conn_bool";
        }
        if (message.conn_int != null && message.hasOwnProperty("conn_int")) {
            object.conn_int = message.conn_int;
            if (options.oneofs)
                object.connective_instance = "conn_int";
        }
        if (message.conn_string != null && message.hasOwnProperty("conn_string")) {
            object.conn_string = message.conn_string;
            if (options.oneofs)
                object.connective_instance = "conn_string";
        }
        if (message.conn_uri != null && message.hasOwnProperty("conn_uri")) {
            object.conn_uri = message.conn_uri;
            if (options.oneofs)
                object.connective_instance = "conn_uri";
        }
        if (message.conn_byte_array != null && message.hasOwnProperty("conn_byte_array")) {
            object.conn_byte_array = message.conn_byte_array;
            if (options.oneofs)
                object.connective_instance = "conn_byte_array";
        }
        return object;
    };

    /**
     * Converts this Connective to JSON.
     * @function toJSON
     * @memberof Connective
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Connective.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Connective;
})();

$root.VarRef = (function() {

    /**
     * Properties of a VarRef.
     * @exports IVarRef
     * @interface IVarRef
     * @property {number|null} [index] VarRef index
     * @property {number|null} [depth] VarRef depth
     */

    /**
     * Constructs a new VarRef.
     * @exports VarRef
     * @classdesc Represents a VarRef.
     * @implements IVarRef
     * @constructor
     * @param {IVarRef=} [properties] Properties to set
     */
    function VarRef(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VarRef index.
     * @member {number} index
     * @memberof VarRef
     * @instance
     */
    VarRef.prototype.index = 0;

    /**
     * VarRef depth.
     * @member {number} depth
     * @memberof VarRef
     * @instance
     */
    VarRef.prototype.depth = 0;

    /**
     * Creates a new VarRef instance using the specified properties.
     * @function create
     * @memberof VarRef
     * @static
     * @param {IVarRef=} [properties] Properties to set
     * @returns {VarRef} VarRef instance
     */
    VarRef.create = function create(properties) {
        return new VarRef(properties);
    };

    /**
     * Encodes the specified VarRef message. Does not implicitly {@link VarRef.verify|verify} messages.
     * @function encode
     * @memberof VarRef
     * @static
     * @param {IVarRef} message VarRef message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VarRef.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && message.hasOwnProperty("index"))
            writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.index);
        if (message.depth != null && message.hasOwnProperty("depth"))
            writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.depth);
        return writer;
    };

    /**
     * Encodes the specified VarRef message, length delimited. Does not implicitly {@link VarRef.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VarRef
     * @static
     * @param {IVarRef} message VarRef message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VarRef.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VarRef message from the specified reader or buffer.
     * @function decode
     * @memberof VarRef
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VarRef} VarRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VarRef.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VarRef();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.index = reader.sint32();
                break;
            case 2:
                message.depth = reader.sint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VarRef message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VarRef
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VarRef} VarRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VarRef.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VarRef message.
     * @function verify
     * @memberof VarRef
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VarRef.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.depth != null && message.hasOwnProperty("depth"))
            if (!$util.isInteger(message.depth))
                return "depth: integer expected";
        return null;
    };

    /**
     * Creates a VarRef message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VarRef
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VarRef} VarRef
     */
    VarRef.fromObject = function fromObject(object) {
        if (object instanceof $root.VarRef)
            return object;
        var message = new $root.VarRef();
        if (object.index != null)
            message.index = object.index | 0;
        if (object.depth != null)
            message.depth = object.depth | 0;
        return message;
    };

    /**
     * Creates a plain object from a VarRef message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VarRef
     * @static
     * @param {VarRef} message VarRef
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VarRef.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.index = 0;
            object.depth = 0;
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.depth != null && message.hasOwnProperty("depth"))
            object.depth = message.depth;
        return object;
    };

    /**
     * Converts this VarRef to JSON.
     * @function toJSON
     * @memberof VarRef
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VarRef.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return VarRef;
})();

$root.ConnectiveBody = (function() {

    /**
     * Properties of a ConnectiveBody.
     * @exports IConnectiveBody
     * @interface IConnectiveBody
     * @property {Array.<IPar>|null} [ps] ConnectiveBody ps
     */

    /**
     * Constructs a new ConnectiveBody.
     * @exports ConnectiveBody
     * @classdesc Represents a ConnectiveBody.
     * @implements IConnectiveBody
     * @constructor
     * @param {IConnectiveBody=} [properties] Properties to set
     */
    function ConnectiveBody(properties) {
        this.ps = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConnectiveBody ps.
     * @member {Array.<IPar>} ps
     * @memberof ConnectiveBody
     * @instance
     */
    ConnectiveBody.prototype.ps = $util.emptyArray;

    /**
     * Creates a new ConnectiveBody instance using the specified properties.
     * @function create
     * @memberof ConnectiveBody
     * @static
     * @param {IConnectiveBody=} [properties] Properties to set
     * @returns {ConnectiveBody} ConnectiveBody instance
     */
    ConnectiveBody.create = function create(properties) {
        return new ConnectiveBody(properties);
    };

    /**
     * Encodes the specified ConnectiveBody message. Does not implicitly {@link ConnectiveBody.verify|verify} messages.
     * @function encode
     * @memberof ConnectiveBody
     * @static
     * @param {IConnectiveBody} message ConnectiveBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectiveBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ps != null && message.ps.length)
            for (var i = 0; i < message.ps.length; ++i)
                $root.Par.encode(message.ps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ConnectiveBody message, length delimited. Does not implicitly {@link ConnectiveBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConnectiveBody
     * @static
     * @param {IConnectiveBody} message ConnectiveBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectiveBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConnectiveBody message from the specified reader or buffer.
     * @function decode
     * @memberof ConnectiveBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConnectiveBody} ConnectiveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectiveBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConnectiveBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.ps && message.ps.length))
                    message.ps = [];
                message.ps.push($root.Par.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConnectiveBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConnectiveBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConnectiveBody} ConnectiveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectiveBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConnectiveBody message.
     * @function verify
     * @memberof ConnectiveBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConnectiveBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ps != null && message.hasOwnProperty("ps")) {
            if (!Array.isArray(message.ps))
                return "ps: array expected";
            for (var i = 0; i < message.ps.length; ++i) {
                var error = $root.Par.verify(message.ps[i]);
                if (error)
                    return "ps." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ConnectiveBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConnectiveBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConnectiveBody} ConnectiveBody
     */
    ConnectiveBody.fromObject = function fromObject(object) {
        if (object instanceof $root.ConnectiveBody)
            return object;
        var message = new $root.ConnectiveBody();
        if (object.ps) {
            if (!Array.isArray(object.ps))
                throw TypeError(".ConnectiveBody.ps: array expected");
            message.ps = [];
            for (var i = 0; i < object.ps.length; ++i) {
                if (typeof object.ps[i] !== "object")
                    throw TypeError(".ConnectiveBody.ps: object expected");
                message.ps[i] = $root.Par.fromObject(object.ps[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ConnectiveBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConnectiveBody
     * @static
     * @param {ConnectiveBody} message ConnectiveBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConnectiveBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ps = [];
        if (message.ps && message.ps.length) {
            object.ps = [];
            for (var j = 0; j < message.ps.length; ++j)
                object.ps[j] = $root.Par.toObject(message.ps[j], options);
        }
        return object;
    };

    /**
     * Converts this ConnectiveBody to JSON.
     * @function toJSON
     * @memberof ConnectiveBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConnectiveBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConnectiveBody;
})();

$root.DeployId = (function() {

    /**
     * Properties of a DeployId.
     * @exports IDeployId
     * @interface IDeployId
     * @property {Uint8Array|null} [sig] DeployId sig
     */

    /**
     * Constructs a new DeployId.
     * @exports DeployId
     * @classdesc Represents a DeployId.
     * @implements IDeployId
     * @constructor
     * @param {IDeployId=} [properties] Properties to set
     */
    function DeployId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeployId sig.
     * @member {Uint8Array} sig
     * @memberof DeployId
     * @instance
     */
    DeployId.prototype.sig = $util.newBuffer([]);

    /**
     * Creates a new DeployId instance using the specified properties.
     * @function create
     * @memberof DeployId
     * @static
     * @param {IDeployId=} [properties] Properties to set
     * @returns {DeployId} DeployId instance
     */
    DeployId.create = function create(properties) {
        return new DeployId(properties);
    };

    /**
     * Encodes the specified DeployId message. Does not implicitly {@link DeployId.verify|verify} messages.
     * @function encode
     * @memberof DeployId
     * @static
     * @param {IDeployId} message DeployId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeployId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sig != null && message.hasOwnProperty("sig"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sig);
        return writer;
    };

    /**
     * Encodes the specified DeployId message, length delimited. Does not implicitly {@link DeployId.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeployId
     * @static
     * @param {IDeployId} message DeployId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeployId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeployId message from the specified reader or buffer.
     * @function decode
     * @memberof DeployId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeployId} DeployId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeployId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeployId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sig = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeployId message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeployId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeployId} DeployId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeployId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeployId message.
     * @function verify
     * @memberof DeployId
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeployId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sig != null && message.hasOwnProperty("sig"))
            if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                return "sig: buffer expected";
        return null;
    };

    /**
     * Creates a DeployId message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeployId
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeployId} DeployId
     */
    DeployId.fromObject = function fromObject(object) {
        if (object instanceof $root.DeployId)
            return object;
        var message = new $root.DeployId();
        if (object.sig != null)
            if (typeof object.sig === "string")
                $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
            else if (object.sig.length)
                message.sig = object.sig;
        return message;
    };

    /**
     * Creates a plain object from a DeployId message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeployId
     * @static
     * @param {DeployId} message DeployId
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeployId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.sig = "";
            else {
                object.sig = [];
                if (options.bytes !== Array)
                    object.sig = $util.newBuffer(object.sig);
            }
        if (message.sig != null && message.hasOwnProperty("sig"))
            object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
        return object;
    };

    /**
     * Converts this DeployId to JSON.
     * @function toJSON
     * @memberof DeployId
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeployId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeployId;
})();

$root.DeployerId = (function() {

    /**
     * Properties of a DeployerId.
     * @exports IDeployerId
     * @interface IDeployerId
     * @property {Uint8Array|null} [publicKey] DeployerId publicKey
     */

    /**
     * Constructs a new DeployerId.
     * @exports DeployerId
     * @classdesc Represents a DeployerId.
     * @implements IDeployerId
     * @constructor
     * @param {IDeployerId=} [properties] Properties to set
     */
    function DeployerId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeployerId publicKey.
     * @member {Uint8Array} publicKey
     * @memberof DeployerId
     * @instance
     */
    DeployerId.prototype.publicKey = $util.newBuffer([]);

    /**
     * Creates a new DeployerId instance using the specified properties.
     * @function create
     * @memberof DeployerId
     * @static
     * @param {IDeployerId=} [properties] Properties to set
     * @returns {DeployerId} DeployerId instance
     */
    DeployerId.create = function create(properties) {
        return new DeployerId(properties);
    };

    /**
     * Encodes the specified DeployerId message. Does not implicitly {@link DeployerId.verify|verify} messages.
     * @function encode
     * @memberof DeployerId
     * @static
     * @param {IDeployerId} message DeployerId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeployerId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
        return writer;
    };

    /**
     * Encodes the specified DeployerId message, length delimited. Does not implicitly {@link DeployerId.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeployerId
     * @static
     * @param {IDeployerId} message DeployerId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeployerId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeployerId message from the specified reader or buffer.
     * @function decode
     * @memberof DeployerId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeployerId} DeployerId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeployerId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeployerId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.publicKey = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeployerId message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeployerId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeployerId} DeployerId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeployerId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeployerId message.
     * @function verify
     * @memberof DeployerId
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeployerId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                return "publicKey: buffer expected";
        return null;
    };

    /**
     * Creates a DeployerId message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeployerId
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeployerId} DeployerId
     */
    DeployerId.fromObject = function fromObject(object) {
        if (object instanceof $root.DeployerId)
            return object;
        var message = new $root.DeployerId();
        if (object.publicKey != null)
            if (typeof object.publicKey === "string")
                $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
            else if (object.publicKey.length)
                message.publicKey = object.publicKey;
        return message;
    };

    /**
     * Creates a plain object from a DeployerId message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeployerId
     * @static
     * @param {DeployerId} message DeployerId
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeployerId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.publicKey = "";
            else {
                object.publicKey = [];
                if (options.bytes !== Array)
                    object.publicKey = $util.newBuffer(object.publicKey);
            }
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
        return object;
    };

    /**
     * Converts this DeployerId to JSON.
     * @function toJSON
     * @memberof DeployerId
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeployerId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeployerId;
})();

$root.GUnforgeable = (function() {

    /**
     * Properties of a GUnforgeable.
     * @exports IGUnforgeable
     * @interface IGUnforgeable
     * @property {IGPrivate|null} [g_private_body] GUnforgeable g_private_body
     * @property {IGDeployId|null} [g_deploy_id_body] GUnforgeable g_deploy_id_body
     * @property {IGDeployerId|null} [g_deployer_id_body] GUnforgeable g_deployer_id_body
     */

    /**
     * Constructs a new GUnforgeable.
     * @exports GUnforgeable
     * @classdesc Represents a GUnforgeable.
     * @implements IGUnforgeable
     * @constructor
     * @param {IGUnforgeable=} [properties] Properties to set
     */
    function GUnforgeable(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GUnforgeable g_private_body.
     * @member {IGPrivate|null|undefined} g_private_body
     * @memberof GUnforgeable
     * @instance
     */
    GUnforgeable.prototype.g_private_body = null;

    /**
     * GUnforgeable g_deploy_id_body.
     * @member {IGDeployId|null|undefined} g_deploy_id_body
     * @memberof GUnforgeable
     * @instance
     */
    GUnforgeable.prototype.g_deploy_id_body = null;

    /**
     * GUnforgeable g_deployer_id_body.
     * @member {IGDeployerId|null|undefined} g_deployer_id_body
     * @memberof GUnforgeable
     * @instance
     */
    GUnforgeable.prototype.g_deployer_id_body = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * GUnforgeable unf_instance.
     * @member {"g_private_body"|"g_deploy_id_body"|"g_deployer_id_body"|undefined} unf_instance
     * @memberof GUnforgeable
     * @instance
     */
    Object.defineProperty(GUnforgeable.prototype, "unf_instance", {
        get: $util.oneOfGetter($oneOfFields = ["g_private_body", "g_deploy_id_body", "g_deployer_id_body"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new GUnforgeable instance using the specified properties.
     * @function create
     * @memberof GUnforgeable
     * @static
     * @param {IGUnforgeable=} [properties] Properties to set
     * @returns {GUnforgeable} GUnforgeable instance
     */
    GUnforgeable.create = function create(properties) {
        return new GUnforgeable(properties);
    };

    /**
     * Encodes the specified GUnforgeable message. Does not implicitly {@link GUnforgeable.verify|verify} messages.
     * @function encode
     * @memberof GUnforgeable
     * @static
     * @param {IGUnforgeable} message GUnforgeable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GUnforgeable.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.g_private_body != null && message.hasOwnProperty("g_private_body"))
            $root.GPrivate.encode(message.g_private_body, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.g_deploy_id_body != null && message.hasOwnProperty("g_deploy_id_body"))
            $root.GDeployId.encode(message.g_deploy_id_body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.g_deployer_id_body != null && message.hasOwnProperty("g_deployer_id_body"))
            $root.GDeployerId.encode(message.g_deployer_id_body, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GUnforgeable message, length delimited. Does not implicitly {@link GUnforgeable.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GUnforgeable
     * @static
     * @param {IGUnforgeable} message GUnforgeable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GUnforgeable.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GUnforgeable message from the specified reader or buffer.
     * @function decode
     * @memberof GUnforgeable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GUnforgeable} GUnforgeable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GUnforgeable.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GUnforgeable();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.g_private_body = $root.GPrivate.decode(reader, reader.uint32());
                break;
            case 2:
                message.g_deploy_id_body = $root.GDeployId.decode(reader, reader.uint32());
                break;
            case 3:
                message.g_deployer_id_body = $root.GDeployerId.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GUnforgeable message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GUnforgeable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GUnforgeable} GUnforgeable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GUnforgeable.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GUnforgeable message.
     * @function verify
     * @memberof GUnforgeable
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GUnforgeable.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.g_private_body != null && message.hasOwnProperty("g_private_body")) {
            properties.unf_instance = 1;
            {
                var error = $root.GPrivate.verify(message.g_private_body);
                if (error)
                    return "g_private_body." + error;
            }
        }
        if (message.g_deploy_id_body != null && message.hasOwnProperty("g_deploy_id_body")) {
            if (properties.unf_instance === 1)
                return "unf_instance: multiple values";
            properties.unf_instance = 1;
            {
                var error = $root.GDeployId.verify(message.g_deploy_id_body);
                if (error)
                    return "g_deploy_id_body." + error;
            }
        }
        if (message.g_deployer_id_body != null && message.hasOwnProperty("g_deployer_id_body")) {
            if (properties.unf_instance === 1)
                return "unf_instance: multiple values";
            properties.unf_instance = 1;
            {
                var error = $root.GDeployerId.verify(message.g_deployer_id_body);
                if (error)
                    return "g_deployer_id_body." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GUnforgeable message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GUnforgeable
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GUnforgeable} GUnforgeable
     */
    GUnforgeable.fromObject = function fromObject(object) {
        if (object instanceof $root.GUnforgeable)
            return object;
        var message = new $root.GUnforgeable();
        if (object.g_private_body != null) {
            if (typeof object.g_private_body !== "object")
                throw TypeError(".GUnforgeable.g_private_body: object expected");
            message.g_private_body = $root.GPrivate.fromObject(object.g_private_body);
        }
        if (object.g_deploy_id_body != null) {
            if (typeof object.g_deploy_id_body !== "object")
                throw TypeError(".GUnforgeable.g_deploy_id_body: object expected");
            message.g_deploy_id_body = $root.GDeployId.fromObject(object.g_deploy_id_body);
        }
        if (object.g_deployer_id_body != null) {
            if (typeof object.g_deployer_id_body !== "object")
                throw TypeError(".GUnforgeable.g_deployer_id_body: object expected");
            message.g_deployer_id_body = $root.GDeployerId.fromObject(object.g_deployer_id_body);
        }
        return message;
    };

    /**
     * Creates a plain object from a GUnforgeable message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GUnforgeable
     * @static
     * @param {GUnforgeable} message GUnforgeable
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GUnforgeable.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.g_private_body != null && message.hasOwnProperty("g_private_body")) {
            object.g_private_body = $root.GPrivate.toObject(message.g_private_body, options);
            if (options.oneofs)
                object.unf_instance = "g_private_body";
        }
        if (message.g_deploy_id_body != null && message.hasOwnProperty("g_deploy_id_body")) {
            object.g_deploy_id_body = $root.GDeployId.toObject(message.g_deploy_id_body, options);
            if (options.oneofs)
                object.unf_instance = "g_deploy_id_body";
        }
        if (message.g_deployer_id_body != null && message.hasOwnProperty("g_deployer_id_body")) {
            object.g_deployer_id_body = $root.GDeployerId.toObject(message.g_deployer_id_body, options);
            if (options.oneofs)
                object.unf_instance = "g_deployer_id_body";
        }
        return object;
    };

    /**
     * Converts this GUnforgeable to JSON.
     * @function toJSON
     * @memberof GUnforgeable
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GUnforgeable.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GUnforgeable;
})();

$root.GPrivate = (function() {

    /**
     * Properties of a GPrivate.
     * @exports IGPrivate
     * @interface IGPrivate
     * @property {Uint8Array|null} [id] GPrivate id
     */

    /**
     * Constructs a new GPrivate.
     * @exports GPrivate
     * @classdesc Represents a GPrivate.
     * @implements IGPrivate
     * @constructor
     * @param {IGPrivate=} [properties] Properties to set
     */
    function GPrivate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GPrivate id.
     * @member {Uint8Array} id
     * @memberof GPrivate
     * @instance
     */
    GPrivate.prototype.id = $util.newBuffer([]);

    /**
     * Creates a new GPrivate instance using the specified properties.
     * @function create
     * @memberof GPrivate
     * @static
     * @param {IGPrivate=} [properties] Properties to set
     * @returns {GPrivate} GPrivate instance
     */
    GPrivate.create = function create(properties) {
        return new GPrivate(properties);
    };

    /**
     * Encodes the specified GPrivate message. Does not implicitly {@link GPrivate.verify|verify} messages.
     * @function encode
     * @memberof GPrivate
     * @static
     * @param {IGPrivate} message GPrivate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GPrivate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
        return writer;
    };

    /**
     * Encodes the specified GPrivate message, length delimited. Does not implicitly {@link GPrivate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GPrivate
     * @static
     * @param {IGPrivate} message GPrivate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GPrivate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GPrivate message from the specified reader or buffer.
     * @function decode
     * @memberof GPrivate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GPrivate} GPrivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GPrivate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GPrivate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GPrivate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GPrivate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GPrivate} GPrivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GPrivate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GPrivate message.
     * @function verify
     * @memberof GPrivate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GPrivate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                return "id: buffer expected";
        return null;
    };

    /**
     * Creates a GPrivate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GPrivate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GPrivate} GPrivate
     */
    GPrivate.fromObject = function fromObject(object) {
        if (object instanceof $root.GPrivate)
            return object;
        var message = new $root.GPrivate();
        if (object.id != null)
            if (typeof object.id === "string")
                $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
            else if (object.id.length)
                message.id = object.id;
        return message;
    };

    /**
     * Creates a plain object from a GPrivate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GPrivate
     * @static
     * @param {GPrivate} message GPrivate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GPrivate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.id = "";
            else {
                object.id = [];
                if (options.bytes !== Array)
                    object.id = $util.newBuffer(object.id);
            }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
        return object;
    };

    /**
     * Converts this GPrivate to JSON.
     * @function toJSON
     * @memberof GPrivate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GPrivate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GPrivate;
})();

$root.GDeployId = (function() {

    /**
     * Properties of a GDeployId.
     * @exports IGDeployId
     * @interface IGDeployId
     * @property {Uint8Array|null} [sig] GDeployId sig
     */

    /**
     * Constructs a new GDeployId.
     * @exports GDeployId
     * @classdesc Represents a GDeployId.
     * @implements IGDeployId
     * @constructor
     * @param {IGDeployId=} [properties] Properties to set
     */
    function GDeployId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GDeployId sig.
     * @member {Uint8Array} sig
     * @memberof GDeployId
     * @instance
     */
    GDeployId.prototype.sig = $util.newBuffer([]);

    /**
     * Creates a new GDeployId instance using the specified properties.
     * @function create
     * @memberof GDeployId
     * @static
     * @param {IGDeployId=} [properties] Properties to set
     * @returns {GDeployId} GDeployId instance
     */
    GDeployId.create = function create(properties) {
        return new GDeployId(properties);
    };

    /**
     * Encodes the specified GDeployId message. Does not implicitly {@link GDeployId.verify|verify} messages.
     * @function encode
     * @memberof GDeployId
     * @static
     * @param {IGDeployId} message GDeployId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GDeployId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sig != null && message.hasOwnProperty("sig"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sig);
        return writer;
    };

    /**
     * Encodes the specified GDeployId message, length delimited. Does not implicitly {@link GDeployId.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GDeployId
     * @static
     * @param {IGDeployId} message GDeployId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GDeployId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GDeployId message from the specified reader or buffer.
     * @function decode
     * @memberof GDeployId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GDeployId} GDeployId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GDeployId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GDeployId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sig = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GDeployId message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GDeployId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GDeployId} GDeployId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GDeployId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GDeployId message.
     * @function verify
     * @memberof GDeployId
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GDeployId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sig != null && message.hasOwnProperty("sig"))
            if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                return "sig: buffer expected";
        return null;
    };

    /**
     * Creates a GDeployId message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GDeployId
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GDeployId} GDeployId
     */
    GDeployId.fromObject = function fromObject(object) {
        if (object instanceof $root.GDeployId)
            return object;
        var message = new $root.GDeployId();
        if (object.sig != null)
            if (typeof object.sig === "string")
                $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
            else if (object.sig.length)
                message.sig = object.sig;
        return message;
    };

    /**
     * Creates a plain object from a GDeployId message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GDeployId
     * @static
     * @param {GDeployId} message GDeployId
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GDeployId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.sig = "";
            else {
                object.sig = [];
                if (options.bytes !== Array)
                    object.sig = $util.newBuffer(object.sig);
            }
        if (message.sig != null && message.hasOwnProperty("sig"))
            object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
        return object;
    };

    /**
     * Converts this GDeployId to JSON.
     * @function toJSON
     * @memberof GDeployId
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GDeployId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GDeployId;
})();

$root.GDeployerId = (function() {

    /**
     * Properties of a GDeployerId.
     * @exports IGDeployerId
     * @interface IGDeployerId
     * @property {Uint8Array|null} [publicKey] GDeployerId publicKey
     */

    /**
     * Constructs a new GDeployerId.
     * @exports GDeployerId
     * @classdesc Represents a GDeployerId.
     * @implements IGDeployerId
     * @constructor
     * @param {IGDeployerId=} [properties] Properties to set
     */
    function GDeployerId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GDeployerId publicKey.
     * @member {Uint8Array} publicKey
     * @memberof GDeployerId
     * @instance
     */
    GDeployerId.prototype.publicKey = $util.newBuffer([]);

    /**
     * Creates a new GDeployerId instance using the specified properties.
     * @function create
     * @memberof GDeployerId
     * @static
     * @param {IGDeployerId=} [properties] Properties to set
     * @returns {GDeployerId} GDeployerId instance
     */
    GDeployerId.create = function create(properties) {
        return new GDeployerId(properties);
    };

    /**
     * Encodes the specified GDeployerId message. Does not implicitly {@link GDeployerId.verify|verify} messages.
     * @function encode
     * @memberof GDeployerId
     * @static
     * @param {IGDeployerId} message GDeployerId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GDeployerId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
        return writer;
    };

    /**
     * Encodes the specified GDeployerId message, length delimited. Does not implicitly {@link GDeployerId.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GDeployerId
     * @static
     * @param {IGDeployerId} message GDeployerId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GDeployerId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GDeployerId message from the specified reader or buffer.
     * @function decode
     * @memberof GDeployerId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GDeployerId} GDeployerId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GDeployerId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GDeployerId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.publicKey = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GDeployerId message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GDeployerId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GDeployerId} GDeployerId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GDeployerId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GDeployerId message.
     * @function verify
     * @memberof GDeployerId
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GDeployerId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                return "publicKey: buffer expected";
        return null;
    };

    /**
     * Creates a GDeployerId message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GDeployerId
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GDeployerId} GDeployerId
     */
    GDeployerId.fromObject = function fromObject(object) {
        if (object instanceof $root.GDeployerId)
            return object;
        var message = new $root.GDeployerId();
        if (object.publicKey != null)
            if (typeof object.publicKey === "string")
                $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
            else if (object.publicKey.length)
                message.publicKey = object.publicKey;
        return message;
    };

    /**
     * Creates a plain object from a GDeployerId message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GDeployerId
     * @static
     * @param {GDeployerId} message GDeployerId
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GDeployerId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.publicKey = "";
            else {
                object.publicKey = [];
                if (options.bytes !== Array)
                    object.publicKey = $util.newBuffer(object.publicKey);
            }
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
        return object;
    };

    /**
     * Converts this GDeployerId to JSON.
     * @function toJSON
     * @memberof GDeployerId
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GDeployerId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GDeployerId;
})();

$root.EitherAny = (function() {

    /**
     * Properties of an EitherAny.
     * @exports IEitherAny
     * @interface IEitherAny
     * @property {string|null} [type_url] EitherAny type_url
     * @property {Uint8Array|null} [value] EitherAny value
     */

    /**
     * Constructs a new EitherAny.
     * @exports EitherAny
     * @classdesc Represents an EitherAny.
     * @implements IEitherAny
     * @constructor
     * @param {IEitherAny=} [properties] Properties to set
     */
    function EitherAny(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EitherAny type_url.
     * @member {string} type_url
     * @memberof EitherAny
     * @instance
     */
    EitherAny.prototype.type_url = "";

    /**
     * EitherAny value.
     * @member {Uint8Array} value
     * @memberof EitherAny
     * @instance
     */
    EitherAny.prototype.value = $util.newBuffer([]);

    /**
     * Creates a new EitherAny instance using the specified properties.
     * @function create
     * @memberof EitherAny
     * @static
     * @param {IEitherAny=} [properties] Properties to set
     * @returns {EitherAny} EitherAny instance
     */
    EitherAny.create = function create(properties) {
        return new EitherAny(properties);
    };

    /**
     * Encodes the specified EitherAny message. Does not implicitly {@link EitherAny.verify|verify} messages.
     * @function encode
     * @memberof EitherAny
     * @static
     * @param {IEitherAny} message EitherAny message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EitherAny.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type_url != null && message.hasOwnProperty("type_url"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
        return writer;
    };

    /**
     * Encodes the specified EitherAny message, length delimited. Does not implicitly {@link EitherAny.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EitherAny
     * @static
     * @param {IEitherAny} message EitherAny message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EitherAny.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EitherAny message from the specified reader or buffer.
     * @function decode
     * @memberof EitherAny
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EitherAny} EitherAny
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EitherAny.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EitherAny();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type_url = reader.string();
                break;
            case 2:
                message.value = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EitherAny message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EitherAny
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EitherAny} EitherAny
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EitherAny.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EitherAny message.
     * @function verify
     * @memberof EitherAny
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EitherAny.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type_url != null && message.hasOwnProperty("type_url"))
            if (!$util.isString(message.type_url))
                return "type_url: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                return "value: buffer expected";
        return null;
    };

    /**
     * Creates an EitherAny message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EitherAny
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EitherAny} EitherAny
     */
    EitherAny.fromObject = function fromObject(object) {
        if (object instanceof $root.EitherAny)
            return object;
        var message = new $root.EitherAny();
        if (object.type_url != null)
            message.type_url = String(object.type_url);
        if (object.value != null)
            if (typeof object.value === "string")
                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
            else if (object.value.length)
                message.value = object.value;
        return message;
    };

    /**
     * Creates a plain object from an EitherAny message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EitherAny
     * @static
     * @param {EitherAny} message EitherAny
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EitherAny.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type_url = "";
            if (options.bytes === String)
                object.value = "";
            else {
                object.value = [];
                if (options.bytes !== Array)
                    object.value = $util.newBuffer(object.value);
            }
        }
        if (message.type_url != null && message.hasOwnProperty("type_url"))
            object.type_url = message.type_url;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
        return object;
    };

    /**
     * Converts this EitherAny to JSON.
     * @function toJSON
     * @memberof EitherAny
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EitherAny.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EitherAny;
})();

$root.EitherError = (function() {

    /**
     * Properties of an EitherError.
     * @exports IEitherError
     * @interface IEitherError
     * @property {Array.<string>|null} [messages] EitherError messages
     */

    /**
     * Constructs a new EitherError.
     * @exports EitherError
     * @classdesc Represents an EitherError.
     * @implements IEitherError
     * @constructor
     * @param {IEitherError=} [properties] Properties to set
     */
    function EitherError(properties) {
        this.messages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EitherError messages.
     * @member {Array.<string>} messages
     * @memberof EitherError
     * @instance
     */
    EitherError.prototype.messages = $util.emptyArray;

    /**
     * Creates a new EitherError instance using the specified properties.
     * @function create
     * @memberof EitherError
     * @static
     * @param {IEitherError=} [properties] Properties to set
     * @returns {EitherError} EitherError instance
     */
    EitherError.create = function create(properties) {
        return new EitherError(properties);
    };

    /**
     * Encodes the specified EitherError message. Does not implicitly {@link EitherError.verify|verify} messages.
     * @function encode
     * @memberof EitherError
     * @static
     * @param {IEitherError} message EitherError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EitherError.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messages != null && message.messages.length)
            for (var i = 0; i < message.messages.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.messages[i]);
        return writer;
    };

    /**
     * Encodes the specified EitherError message, length delimited. Does not implicitly {@link EitherError.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EitherError
     * @static
     * @param {IEitherError} message EitherError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EitherError.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EitherError message from the specified reader or buffer.
     * @function decode
     * @memberof EitherError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EitherError} EitherError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EitherError.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EitherError();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.messages && message.messages.length))
                    message.messages = [];
                message.messages.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EitherError message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EitherError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EitherError} EitherError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EitherError.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EitherError message.
     * @function verify
     * @memberof EitherError
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EitherError.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messages != null && message.hasOwnProperty("messages")) {
            if (!Array.isArray(message.messages))
                return "messages: array expected";
            for (var i = 0; i < message.messages.length; ++i)
                if (!$util.isString(message.messages[i]))
                    return "messages: string[] expected";
        }
        return null;
    };

    /**
     * Creates an EitherError message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EitherError
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EitherError} EitherError
     */
    EitherError.fromObject = function fromObject(object) {
        if (object instanceof $root.EitherError)
            return object;
        var message = new $root.EitherError();
        if (object.messages) {
            if (!Array.isArray(object.messages))
                throw TypeError(".EitherError.messages: array expected");
            message.messages = [];
            for (var i = 0; i < object.messages.length; ++i)
                message.messages[i] = String(object.messages[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an EitherError message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EitherError
     * @static
     * @param {EitherError} message EitherError
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EitherError.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.messages = [];
        if (message.messages && message.messages.length) {
            object.messages = [];
            for (var j = 0; j < message.messages.length; ++j)
                object.messages[j] = message.messages[j];
        }
        return object;
    };

    /**
     * Converts this EitherError to JSON.
     * @function toJSON
     * @memberof EitherError
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EitherError.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EitherError;
})();

$root.EitherSuccess = (function() {

    /**
     * Properties of an EitherSuccess.
     * @exports IEitherSuccess
     * @interface IEitherSuccess
     * @property {IEitherAny|null} [response] EitherSuccess response
     */

    /**
     * Constructs a new EitherSuccess.
     * @exports EitherSuccess
     * @classdesc Represents an EitherSuccess.
     * @implements IEitherSuccess
     * @constructor
     * @param {IEitherSuccess=} [properties] Properties to set
     */
    function EitherSuccess(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EitherSuccess response.
     * @member {IEitherAny|null|undefined} response
     * @memberof EitherSuccess
     * @instance
     */
    EitherSuccess.prototype.response = null;

    /**
     * Creates a new EitherSuccess instance using the specified properties.
     * @function create
     * @memberof EitherSuccess
     * @static
     * @param {IEitherSuccess=} [properties] Properties to set
     * @returns {EitherSuccess} EitherSuccess instance
     */
    EitherSuccess.create = function create(properties) {
        return new EitherSuccess(properties);
    };

    /**
     * Encodes the specified EitherSuccess message. Does not implicitly {@link EitherSuccess.verify|verify} messages.
     * @function encode
     * @memberof EitherSuccess
     * @static
     * @param {IEitherSuccess} message EitherSuccess message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EitherSuccess.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.response != null && message.hasOwnProperty("response"))
            $root.EitherAny.encode(message.response, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EitherSuccess message, length delimited. Does not implicitly {@link EitherSuccess.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EitherSuccess
     * @static
     * @param {IEitherSuccess} message EitherSuccess message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EitherSuccess.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EitherSuccess message from the specified reader or buffer.
     * @function decode
     * @memberof EitherSuccess
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EitherSuccess} EitherSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EitherSuccess.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EitherSuccess();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.response = $root.EitherAny.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EitherSuccess message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EitherSuccess
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EitherSuccess} EitherSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EitherSuccess.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EitherSuccess message.
     * @function verify
     * @memberof EitherSuccess
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EitherSuccess.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.response != null && message.hasOwnProperty("response")) {
            var error = $root.EitherAny.verify(message.response);
            if (error)
                return "response." + error;
        }
        return null;
    };

    /**
     * Creates an EitherSuccess message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EitherSuccess
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EitherSuccess} EitherSuccess
     */
    EitherSuccess.fromObject = function fromObject(object) {
        if (object instanceof $root.EitherSuccess)
            return object;
        var message = new $root.EitherSuccess();
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".EitherSuccess.response: object expected");
            message.response = $root.EitherAny.fromObject(object.response);
        }
        return message;
    };

    /**
     * Creates a plain object from an EitherSuccess message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EitherSuccess
     * @static
     * @param {EitherSuccess} message EitherSuccess
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EitherSuccess.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.response = null;
        if (message.response != null && message.hasOwnProperty("response"))
            object.response = $root.EitherAny.toObject(message.response, options);
        return object;
    };

    /**
     * Converts this EitherSuccess to JSON.
     * @function toJSON
     * @memberof EitherSuccess
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EitherSuccess.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EitherSuccess;
})();

$root.Either = (function() {

    /**
     * Properties of an Either.
     * @exports IEither
     * @interface IEither
     * @property {IEitherError|null} [error] Either error
     * @property {IEitherSuccess|null} [success] Either success
     */

    /**
     * Constructs a new Either.
     * @exports Either
     * @classdesc Represents an Either.
     * @implements IEither
     * @constructor
     * @param {IEither=} [properties] Properties to set
     */
    function Either(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Either error.
     * @member {IEitherError|null|undefined} error
     * @memberof Either
     * @instance
     */
    Either.prototype.error = null;

    /**
     * Either success.
     * @member {IEitherSuccess|null|undefined} success
     * @memberof Either
     * @instance
     */
    Either.prototype.success = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Either content.
     * @member {"error"|"success"|undefined} content
     * @memberof Either
     * @instance
     */
    Object.defineProperty(Either.prototype, "content", {
        get: $util.oneOfGetter($oneOfFields = ["error", "success"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Either instance using the specified properties.
     * @function create
     * @memberof Either
     * @static
     * @param {IEither=} [properties] Properties to set
     * @returns {Either} Either instance
     */
    Either.create = function create(properties) {
        return new Either(properties);
    };

    /**
     * Encodes the specified Either message. Does not implicitly {@link Either.verify|verify} messages.
     * @function encode
     * @memberof Either
     * @static
     * @param {IEither} message Either message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Either.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.error != null && message.hasOwnProperty("error"))
            $root.EitherError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.success != null && message.hasOwnProperty("success"))
            $root.EitherSuccess.encode(message.success, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Either message, length delimited. Does not implicitly {@link Either.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Either
     * @static
     * @param {IEither} message Either message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Either.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Either message from the specified reader or buffer.
     * @function decode
     * @memberof Either
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Either} Either
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Either.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Either();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.error = $root.EitherError.decode(reader, reader.uint32());
                break;
            case 2:
                message.success = $root.EitherSuccess.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Either message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Either
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Either} Either
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Either.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Either message.
     * @function verify
     * @memberof Either
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Either.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.error != null && message.hasOwnProperty("error")) {
            properties.content = 1;
            {
                var error = $root.EitherError.verify(message.error);
                if (error)
                    return "error." + error;
            }
        }
        if (message.success != null && message.hasOwnProperty("success")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                var error = $root.EitherSuccess.verify(message.success);
                if (error)
                    return "success." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Either message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Either
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Either} Either
     */
    Either.fromObject = function fromObject(object) {
        if (object instanceof $root.Either)
            return object;
        var message = new $root.Either();
        if (object.error != null) {
            if (typeof object.error !== "object")
                throw TypeError(".Either.error: object expected");
            message.error = $root.EitherError.fromObject(object.error);
        }
        if (object.success != null) {
            if (typeof object.success !== "object")
                throw TypeError(".Either.success: object expected");
            message.success = $root.EitherSuccess.fromObject(object.success);
        }
        return message;
    };

    /**
     * Creates a plain object from an Either message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Either
     * @static
     * @param {Either} message Either
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Either.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.error != null && message.hasOwnProperty("error")) {
            object.error = $root.EitherError.toObject(message.error, options);
            if (options.oneofs)
                object.content = "error";
        }
        if (message.success != null && message.hasOwnProperty("success")) {
            object.success = $root.EitherSuccess.toObject(message.success, options);
            if (options.oneofs)
                object.content = "success";
        }
        return object;
    };

    /**
     * Converts this Either to JSON.
     * @function toJSON
     * @memberof Either
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Either.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Either;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
