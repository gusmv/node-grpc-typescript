// Original file: C:/Users/gusta/Desktop/node-grpc-typescript-realworld-example/server/src/grpc/protos/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetUserByIdRequest as _service_GetUserByIdRequest, GetUserByIdRequest__Output as _service_GetUserByIdRequest__Output } from '../service/GetUserByIdRequest';
import type { GetUsers as _service_GetUsers, GetUsers__Output as _service_GetUsers__Output } from '../service/GetUsers';
import type { UserResponse as _service_UserResponse, UserResponse__Output as _service_UserResponse__Output } from '../service/UserResponse';
import type { UsersResponse as _service_UsersResponse, UsersResponse__Output as _service_UsersResponse__Output } from '../service/UsersResponse';

export interface UsersServiceClient extends grpc.Client {
  getUserById(argument: _service_GetUserByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_service_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _service_GetUserByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_service_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _service_GetUserByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_service_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _service_GetUserByIdRequest, callback: grpc.requestCallback<_service_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _service_GetUserByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_service_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _service_GetUserByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_service_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _service_GetUserByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_service_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _service_GetUserByIdRequest, callback: grpc.requestCallback<_service_UserResponse__Output>): grpc.ClientUnaryCall;
  
  getUsers(argument: _service_GetUsers, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_service_UsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _service_GetUsers, metadata: grpc.Metadata, callback: grpc.requestCallback<_service_UsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _service_GetUsers, options: grpc.CallOptions, callback: grpc.requestCallback<_service_UsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _service_GetUsers, callback: grpc.requestCallback<_service_UsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _service_GetUsers, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_service_UsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _service_GetUsers, metadata: grpc.Metadata, callback: grpc.requestCallback<_service_UsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _service_GetUsers, options: grpc.CallOptions, callback: grpc.requestCallback<_service_UsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _service_GetUsers, callback: grpc.requestCallback<_service_UsersResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UsersServiceHandlers extends grpc.UntypedServiceImplementation {
  getUserById: grpc.handleUnaryCall<_service_GetUserByIdRequest__Output, _service_UserResponse>;
  
  getUsers: grpc.handleUnaryCall<_service_GetUsers__Output, _service_UsersResponse>;
  
}

export interface UsersServiceDefinition extends grpc.ServiceDefinition {
  getUserById: MethodDefinition<_service_GetUserByIdRequest, _service_UserResponse, _service_GetUserByIdRequest__Output, _service_UserResponse__Output>
  getUsers: MethodDefinition<_service_GetUsers, _service_UsersResponse, _service_GetUsers__Output, _service_UsersResponse__Output>
}
