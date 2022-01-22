import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js"
import { GetUserByIdRequest__Output } from "../../../grpc/types/user/service/GetUserByIdRequest"
import { GetUsers } from "../../../grpc/types/user/service/GetUsers"
import { UserResponse } from "../../../grpc/types/user/service/UserResponse"
import { UsersResponse } from "../../../grpc/types/user/service/UsersResponse"
import { ShowUsersUseCase } from "../useCases/ShowUsersUseCase"
import { ShowUserUseCase } from "../useCases/ShowUserUseCase"

export default {
  async getUserById(call: ServerUnaryCall<GetUserByIdRequest__Output, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
    const showUser = new ShowUserUseCase()
    const user = await showUser.execute(call.request.userId)
      .then(user => user)
      .catch(user => null)

    if (!user) {
      return callback(null, {
        error: 'User not found'
      })
    }

    return callback(null, {
      user
    })
  },

  async getUsers(call: ServerUnaryCall<GetUsers, UsersResponse>, callback: sendUnaryData<UsersResponse>): Promise<void> {
    const showUser = new ShowUsersUseCase()
    const users = await showUser.execute()
      .then(users => users)
      .catch(users => null)

    if (!users) {
      return callback(null, {
        error: 'User not found'
      })
    }

    return callback(null, {
      users      
    })
  }
}