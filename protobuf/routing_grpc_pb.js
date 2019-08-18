// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var routing_pb = require('./routing_pb.js');
var scalapb_scalapb_pb = require('./scalapb/scalapb_pb.js');
var CasperMessage_pb = require('./CasperMessage_pb.js');

function serialize_coop_rchain_comm_protocol_routing_Chunk(arg) {
  if (!(arg instanceof routing_pb.Chunk)) {
    throw new Error('Expected argument of type coop.rchain.comm.protocol.routing.Chunk');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_comm_protocol_routing_Chunk(buffer_arg) {
  return routing_pb.Chunk.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_comm_protocol_routing_TLRequest(arg) {
  if (!(arg instanceof routing_pb.TLRequest)) {
    throw new Error('Expected argument of type coop.rchain.comm.protocol.routing.TLRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_comm_protocol_routing_TLRequest(buffer_arg) {
  return routing_pb.TLRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_comm_protocol_routing_TLResponse(arg) {
  if (!(arg instanceof routing_pb.TLResponse)) {
    throw new Error('Expected argument of type coop.rchain.comm.protocol.routing.TLResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_comm_protocol_routing_TLResponse(buffer_arg) {
  return routing_pb.TLResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransportLayerService = exports.TransportLayerService = {
  send: {
    path: '/coop.rchain.comm.protocol.routing.TransportLayer/Send',
    requestStream: false,
    responseStream: false,
    requestType: routing_pb.TLRequest,
    responseType: routing_pb.TLResponse,
    requestSerialize: serialize_coop_rchain_comm_protocol_routing_TLRequest,
    requestDeserialize: deserialize_coop_rchain_comm_protocol_routing_TLRequest,
    responseSerialize: serialize_coop_rchain_comm_protocol_routing_TLResponse,
    responseDeserialize: deserialize_coop_rchain_comm_protocol_routing_TLResponse,
  },
  stream: {
    path: '/coop.rchain.comm.protocol.routing.TransportLayer/Stream',
    requestStream: true,
    responseStream: false,
    requestType: routing_pb.Chunk,
    responseType: routing_pb.TLResponse,
    requestSerialize: serialize_coop_rchain_comm_protocol_routing_Chunk,
    requestDeserialize: deserialize_coop_rchain_comm_protocol_routing_Chunk,
    responseSerialize: serialize_coop_rchain_comm_protocol_routing_TLResponse,
    responseDeserialize: deserialize_coop_rchain_comm_protocol_routing_TLResponse,
  },
};

exports.TransportLayerClient = grpc.makeGenericClientConstructor(TransportLayerService);
