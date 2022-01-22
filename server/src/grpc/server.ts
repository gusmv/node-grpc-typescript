import path from 'path'
import { ServerCredentials } from '@grpc/grpc-js'
import { loadPackageDefinition, Server } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'

import UsersService from '../modules/users/services/UsersService'
import { ProtoGrpcType } from './types/user/user'

const server = new Server()

const protoConfig = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

const PROTO = path.resolve(__dirname, 'protos', 'user.proto')
const packageDefinition = loadSync(PROTO, protoConfig)
const proto = loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType

server.addService(proto.service.UsersService.service, UsersService)

server.bindAsync('50050', ServerCredentials.createInsecure(), (d) => console.log('gRPC server running on port 50050.'))
