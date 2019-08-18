// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// The main API is `DeployService`.
'use strict';
var grpc = require('grpc');
var DeployService_pb = require('./DeployService_pb.js');
var CasperMessage_pb = require('./CasperMessage_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var scalapb_scalapb_pb = require('./scalapb/scalapb_pb.js');
var RhoTypes_pb = require('./RhoTypes_pb.js');
var Either_pb = require('./Either_pb.js');

function serialize_Either(arg) {
  if (!(arg instanceof Either_pb.Either)) {
    throw new Error('Expected argument of type Either');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Either(buffer_arg) {
  return Either_pb.Either.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_casper_protocol_BlockQuery(arg) {
  if (!(arg instanceof DeployService_pb.BlockQuery)) {
    throw new Error('Expected argument of type coop.rchain.casper.protocol.BlockQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_casper_protocol_BlockQuery(buffer_arg) {
  return DeployService_pb.BlockQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_casper_protocol_BlocksQuery(arg) {
  if (!(arg instanceof DeployService_pb.BlocksQuery)) {
    throw new Error('Expected argument of type coop.rchain.casper.protocol.BlocksQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_casper_protocol_BlocksQuery(buffer_arg) {
  return DeployService_pb.BlocksQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_casper_protocol_ContinuationAtNameQuery(arg) {
  if (!(arg instanceof DeployService_pb.ContinuationAtNameQuery)) {
    throw new Error('Expected argument of type coop.rchain.casper.protocol.ContinuationAtNameQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_casper_protocol_ContinuationAtNameQuery(buffer_arg) {
  return DeployService_pb.ContinuationAtNameQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_casper_protocol_DataAtNameQuery(arg) {
  if (!(arg instanceof DeployService_pb.DataAtNameQuery)) {
    throw new Error('Expected argument of type coop.rchain.casper.protocol.DataAtNameQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_casper_protocol_DataAtNameQuery(buffer_arg) {
  return DeployService_pb.DataAtNameQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_casper_protocol_DeployData(arg) {
  if (!(arg instanceof CasperMessage_pb.DeployData)) {
    throw new Error('Expected argument of type coop.rchain.casper.protocol.DeployData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_casper_protocol_DeployData(buffer_arg) {
  return CasperMessage_pb.DeployData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_casper_protocol_FindDeployInBlockQuery(arg) {
  if (!(arg instanceof DeployService_pb.FindDeployInBlockQuery)) {
    throw new Error('Expected argument of type coop.rchain.casper.protocol.FindDeployInBlockQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_casper_protocol_FindDeployInBlockQuery(buffer_arg) {
  return DeployService_pb.FindDeployInBlockQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_casper_protocol_FindDeployQuery(arg) {
  if (!(arg instanceof DeployService_pb.FindDeployQuery)) {
    throw new Error('Expected argument of type coop.rchain.casper.protocol.FindDeployQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_casper_protocol_FindDeployQuery(buffer_arg) {
  return DeployService_pb.FindDeployQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_casper_protocol_LastFinalizedBlockQuery(arg) {
  if (!(arg instanceof DeployService_pb.LastFinalizedBlockQuery)) {
    throw new Error('Expected argument of type coop.rchain.casper.protocol.LastFinalizedBlockQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_casper_protocol_LastFinalizedBlockQuery(buffer_arg) {
  return DeployService_pb.LastFinalizedBlockQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_casper_protocol_MachineVerifyQuery(arg) {
  if (!(arg instanceof DeployService_pb.MachineVerifyQuery)) {
    throw new Error('Expected argument of type coop.rchain.casper.protocol.MachineVerifyQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_casper_protocol_MachineVerifyQuery(buffer_arg) {
  return DeployService_pb.MachineVerifyQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_casper_protocol_PrivateNamePreviewQuery(arg) {
  if (!(arg instanceof DeployService_pb.PrivateNamePreviewQuery)) {
    throw new Error('Expected argument of type coop.rchain.casper.protocol.PrivateNamePreviewQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_casper_protocol_PrivateNamePreviewQuery(buffer_arg) {
  return DeployService_pb.PrivateNamePreviewQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coop_rchain_casper_protocol_VisualizeDagQuery(arg) {
  if (!(arg instanceof DeployService_pb.VisualizeDagQuery)) {
    throw new Error('Expected argument of type coop.rchain.casper.protocol.VisualizeDagQuery');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coop_rchain_casper_protocol_VisualizeDagQuery(buffer_arg) {
  return DeployService_pb.VisualizeDagQuery.deserializeBinary(new Uint8Array(buffer_arg));
}


// Use `DoDeploy` to queue deployments of Rholang code and then
// `createBlock` to make a new block with the results of running them
// all.
//
// To get results back, use `listenForDataAtName`.
var DeployServiceService = exports.DeployServiceService = {
  // Queue deployment of Rholang code (or fail to parse).
  // Returns on success DeployServiceResponse
  doDeploy: {
    path: '/coop.rchain.casper.protocol.DeployService/DoDeploy',
    requestStream: false,
    responseStream: false,
    requestType: CasperMessage_pb.DeployData,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_DeployData,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_DeployData,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
  // Get details about a particular block.
  // Returns on success BlockQueryResponse
  getBlock: {
    path: '/coop.rchain.casper.protocol.DeployService/getBlock',
    requestStream: false,
    responseStream: false,
    requestType: DeployService_pb.BlockQuery,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_BlockQuery,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_BlockQuery,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
  // Get dag
  // Returns on success VisualizeBlocksResponse
  visualizeDag: {
    path: '/coop.rchain.casper.protocol.DeployService/visualizeDag',
    requestStream: false,
    responseStream: true,
    requestType: DeployService_pb.VisualizeDagQuery,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_VisualizeDagQuery,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_VisualizeDagQuery,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
  machineVerifiableDag: {
    path: '/coop.rchain.casper.protocol.DeployService/machineVerifiableDag',
    requestStream: false,
    responseStream: false,
    requestType: DeployService_pb.MachineVerifyQuery,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_MachineVerifyQuery,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_MachineVerifyQuery,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
  // Returns on success LightBlockInfo
  showMainChain: {
    path: '/coop.rchain.casper.protocol.DeployService/showMainChain',
    requestStream: false,
    responseStream: true,
    requestType: DeployService_pb.BlocksQuery,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_BlocksQuery,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_BlocksQuery,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
  // Get a summary of blocks on the blockchain.
  // Returns on success LightBlockInfo
  getBlocks: {
    path: '/coop.rchain.casper.protocol.DeployService/getBlocks',
    requestStream: false,
    responseStream: true,
    requestType: DeployService_pb.BlocksQuery,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_BlocksQuery,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_BlocksQuery,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
  // Find data sent to a name.
  // Returns on success ListeningNameDataResponse
  listenForDataAtName: {
    path: '/coop.rchain.casper.protocol.DeployService/listenForDataAtName',
    requestStream: false,
    responseStream: false,
    requestType: DeployService_pb.DataAtNameQuery,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_DataAtNameQuery,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_DataAtNameQuery,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
  // Find processes receiving on a name.
  // Returns on success ListeningNameContinuationResponse
  listenForContinuationAtName: {
    path: '/coop.rchain.casper.protocol.DeployService/listenForContinuationAtName',
    requestStream: false,
    responseStream: false,
    requestType: DeployService_pb.ContinuationAtNameQuery,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_ContinuationAtNameQuery,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_ContinuationAtNameQuery,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
  // Find block from a deploy.
  // Returns on success BlockQueryResponse
  findBlockWithDeploy: {
    path: '/coop.rchain.casper.protocol.DeployService/findBlockWithDeploy',
    requestStream: false,
    responseStream: false,
    requestType: DeployService_pb.FindDeployInBlockQuery,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_FindDeployInBlockQuery,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_FindDeployInBlockQuery,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
  // Find block containing a deploy.
  // Returns on success LightBlockQueryResponse
  findDeploy: {
    path: '/coop.rchain.casper.protocol.DeployService/findDeploy',
    requestStream: false,
    responseStream: false,
    requestType: DeployService_pb.FindDeployQuery,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_FindDeployQuery,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_FindDeployQuery,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
  // Preview new top-level unforgeable names (for example, to compute signatures over them).
  // Returns on success PrivateNamePreviewResponse
  previewPrivateNames: {
    path: '/coop.rchain.casper.protocol.DeployService/previewPrivateNames',
    requestStream: false,
    responseStream: false,
    requestType: DeployService_pb.PrivateNamePreviewQuery,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_PrivateNamePreviewQuery,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_PrivateNamePreviewQuery,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
  // Get details about a particular block.
  // Returns on success BlockQueryResponse
  lastFinalizedBlock: {
    path: '/coop.rchain.casper.protocol.DeployService/lastFinalizedBlock',
    requestStream: false,
    responseStream: false,
    requestType: DeployService_pb.LastFinalizedBlockQuery,
    responseType: Either_pb.Either,
    requestSerialize: serialize_coop_rchain_casper_protocol_LastFinalizedBlockQuery,
    requestDeserialize: deserialize_coop_rchain_casper_protocol_LastFinalizedBlockQuery,
    responseSerialize: serialize_Either,
    responseDeserialize: deserialize_Either,
  },
};

exports.DeployServiceClient = grpc.makeGenericClientConstructor(DeployServiceService);
