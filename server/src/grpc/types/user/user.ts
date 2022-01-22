import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UsersServiceClient as _service_UsersServiceClient, UsersServiceDefinition as _service_UsersServiceDefinition } from './service/UsersService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  service: {
    GetUserByIdRequest: MessageTypeDefinition
    GetUsers: MessageTypeDefinition
    User: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
    UsersResponse: MessageTypeDefinition
    UsersService: SubtypeConstructor<typeof grpc.Client, _service_UsersServiceClient> & { service: _service_UsersServiceDefinition }
  }
}

