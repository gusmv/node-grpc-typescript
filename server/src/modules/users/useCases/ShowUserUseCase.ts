import { prisma } from "../../../database/prisma"
import { HttpException } from "../../../errors/HttpException"

class ShowUserUseCase {
  async execute(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      throw new HttpException('User not found.', 404)
    }

    return user
  }
}

export { ShowUserUseCase }