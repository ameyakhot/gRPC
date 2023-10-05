const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('streaming.proto');
const grpcObject = grpc.loadPackageDefinition(packageDefinition);

const client = new grpcObject.streaming.NumberStreamer(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

const request = { start: 1, end: 5 };
const call = client.StreamNumbers(request);

call.on('data', (response) => {
  console.log(`Received: ${response.number}`);
});

call.on('end', () => {
  console.log('Streaming ended');
});

call.on('error', (error) => {
  console.error(`Error: ${error}`);
});

call.on('status', (status) => {
  console.log(`Status: ${status}`);
});
