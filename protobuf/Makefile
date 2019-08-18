# Automatically fetch .proto files

WGET=wget
PERL=perl

# npm install grpc-tools --save-dev && npm install ts-protoc-gen --save-dev 
GRPC_TOOLS=grpc_tools_node_protoc

# npm install flowgen --save-dev
FLOWGEN=../node_modules/.bin/flowgen

# Set version needed and run `make update`
REV=release-rnode-v0.9.12


## static codegen (WIP)
# static: messages.js messages.json

#messages.json:
#	$(PBJS) -t json --keep-case -o $@ $(PROTO_SRC)

#messages.js: $(PROTO_SRC)
#	$(PBJS) -t static-module -w commonjs --keep-case -o $@ $(PROTO_SRC)

RAW_GH=https://raw.githubusercontent.com
R_SRC=$(RAW_GH)/rchain/rchain/$(REV)

download:
	mkdir -p proto/google/protobuf
	mkdir -p proto/scalapb
	mkdir -p scalapb
	$(WGET) -P proto $(R_SRC)/models/src/main/protobuf/CasperMessage.proto
	$(WGET) -P proto $(R_SRC)/models/src/main/protobuf/RhoTypes.proto
	$(WGET) -P proto $(R_SRC)/models/src/main/protobuf/Either.proto
	$(WGET) -P proto $(R_SRC)/models/src/main/protobuf/DeployService.proto
	$(WGET) -P proto $(R_SRC)/models/src/main/protobuf/ProposeService.proto
	$(WGET) -P proto $(R_SRC)/models/src/main/protobuf/routing.proto

	$(WGET) -P proto/google/protobuf $(RAW_GH)/google/protobuf/v3.5.1/src/google/protobuf/empty.proto
	$(WGET) -P proto/google/protobuf $(RAW_GH)/google/protobuf/v3.5.1/src/google/protobuf/any.proto
	$(WGET) -P proto/scalapb/ https://raw.githubusercontent.com/scalapb/ScalaPB/master/protobuf/scalapb/scalapb.proto

static-codegen:
	../node_modules/.bin/grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:./ \
	--grpc_out=./ \
	-I./proto/ -I./proto/google/protobuf/ -I./proto/scalapb/ \
	--plugin=protoc-gen-grpc=../node_modules/.bin/grpc_tools_node_protoc_plugin \
	./proto/*.proto

	mkdir -p ./scalapb
	../node_modules/.bin/grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:./ \
	--grpc_out=./scalapb \
	-I./proto/ -I./proto/google/protobuf/ -I./proto/scalapb/ \
	--plugin=protoc-gen-grpc=../node_modules/.bin/grpc_tools_node_protoc_plugin \
	./proto/scalapb/*

typescript:
	../node_modules/.bin/grpc_tools_node_protoc \
	--ts_out=./ \
	--proto_path ./proto ./proto/google/protobuf ./proto/scalapb \
	--plugin=protoc-gen-ts=../node_modules/.bin/protoc-gen-ts \
	./proto/*.proto

flowtyped: 
	mkdir -p interfaces
	find *.d.ts -exec $(FLOWGEN) -o interfaces/{} {} \;

realclean:
	rm -rf proto/ messages.json interfaces/ *.js *.ts google/ scalapb/

update: realclean download static-codegen typescript flowtyped
