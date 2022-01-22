// Original file: C:/Users/gusta/Desktop/node-grpc-typescript-realworld-example/server/src/grpc/protos/user.proto

import type { User as _service_User, User__Output as _service_User__Output } from '../service/User';

export interface UserResponse {
  'user'?: (_service_User | null);
  'error'?: (string);
}

export interface UserResponse__Output {
  'user': (_service_User__Output | null);
  'error': (string);
}
