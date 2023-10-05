// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var streaming_pb = require('./streaming_pb.js');

function serialize_streaming_NumberRequest(arg) {
  if (!(arg instanceof streaming_pb.NumberRequest)) {
    throw new Error('Expected argument of type streaming.NumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_NumberRequest(buffer_arg) {
  return streaming_pb.NumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_streaming_NumberResponse(arg) {
  if (!(arg instanceof streaming_pb.NumberResponse)) {
    throw new Error('Expected argument of type streaming.NumberResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_NumberResponse(buffer_arg) {
  return streaming_pb.NumberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NumberStreamerService = exports.NumberStreamerService = {
  streamNumbers: {
    path: '/streaming.NumberStreamer/StreamNumbers',
    requestStream: false,
    responseStream: true,
    requestType: streaming_pb.NumberRequest,
    responseType: streaming_pb.NumberResponse,
    requestSerialize: serialize_streaming_NumberRequest,
    requestDeserialize: deserialize_streaming_NumberRequest,
    responseSerialize: serialize_streaming_NumberResponse,
    responseDeserialize: deserialize_streaming_NumberResponse,
  },
};

exports.NumberStreamerClient = grpc.makeGenericClientConstructor(NumberStreamerService);
