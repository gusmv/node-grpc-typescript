import { prisma } from "../../../database/prisma"
import { HttpException } from "../../../errors/HttpException"

class ShowUsersUseCase {
  async execute() {
    const users = await prisma.user.findMany({
      orderBy: [ { createdAt: 'desc' } ]
    })

    if (!users.length) {
      throw new HttpException('User not found.', 404)
    }

    return users
  }
}

export { ShowUsersUseCase }