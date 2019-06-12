This repo is an attempt to maintain RChain API for dApp devs. It does not work yet and does not align with current API.

rchain-dapp-grpc.proto is compiled from https://github.com/rchain/rchain/tree/dev/models/src/main/protobuf, modified to imagine how API may look.

RESTful flavor (Swagger spec) rchain-dapp-grpc.swagger.json is compiled with
protoc -I/usr/local/include -I.   -I$GOPATH/src   -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis   --swagger_out=logtostderr=true:.   rchain-dapp-grpc.proto
