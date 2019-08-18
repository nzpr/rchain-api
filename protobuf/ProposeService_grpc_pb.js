// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ProposeService_pb = require('./ProposeService_pb.js');
var CasperMessage_pb = require('./CasperMessage_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var Either_pb = require('./Either_pb.js');
var scalapb_scalapb_pb = require('./scalapb/scalapb_pb.js');

function serialize_Either(arg) {
  if (!(arg instanceof Either_pb.Either)) {
    throw new Error('Expected argument of type Either');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Either(buffer_arg) {
  return Either_pb.Either.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_casper_protocol_PrintUnmatchedSendsQuery(arg) {
  if (!(arg instanceof ProposeService_pb.PrintUnmatchedSendsQuery)) {
    throw new Error('Expected argument of type coop.rchain.casper.protocol.PrintUnmatchedSendsQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_casper_protocol_PrintUnmatchedSendsQuery(buffer_arg) {
  return ProposeService_pb.PrintUnmatchedSendsQuery.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProposeServiceService = exports.ProposeServiceService = {
  propose: {
    path: '/coop.rchain.casper.protocol.ProposeService/propose',
    requestStream: false,
    responseStream: false,
    requestType: ProposeService_pb.PrintUnmatchedSendsQuery,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_PrintUnmatchedSendsQuery,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_PrintUnmatchedSendsQuery,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
};

exports.ProposeServiceClient = grpc.makeGenericClientConstructor(ProposeServiceService);
