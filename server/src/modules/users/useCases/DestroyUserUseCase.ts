import { prisma } from "../../../database/prisma"
import { HttpException } from "../../../errors/HttpException"

class DestroyUserUseCase {
  async execute(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      throw new HttpException('User not found.', 404)
    }

    await prisma.user.delete({
      where: { id: userId }
    })
  }
}

export { DestroyUserUseCase }