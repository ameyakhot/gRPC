const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('streaming.proto');
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();

server.addService(grpcObject.streaming.NumberStreamer.service, {
  StreamNumbers: (call) => {
    const { start, end } = call.request;
    for (let number = start; number <= end; number++) {
      call.write({ number });
      // Simulate some processing time
      setTimeout(() => {}, 1000);
    }
    call.end();
  },
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
console.log('Server started on port 50051');
server.start();
