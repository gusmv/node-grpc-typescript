// Original file: C:/Users/gusta/Desktop/node-grpc-typescript-realworld-example/server/src/grpc/protos/user.proto

import type { User as _service_User, User__Output as _service_User__Output } from '../service/User';

export interface UsersResponse {
  'users'?: (_service_User)[];
  'error'?: (string);
}

export interface UsersResponse__Output {
  'users': (_service_User__Output)[];
  'error': (string);
}
