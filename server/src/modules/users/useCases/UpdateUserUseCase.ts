import { prisma } from "../../../database/prisma";
import { HttpException } from "../../../errors/HttpException";

class UpdateUserUseCase {
  async execute (userId: string, email: string, name: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      throw new HttpException('User not found.', 404)
    }

    if (email !== user.email) {
      const emailAlreadyExists = await prisma.user.findFirst({
        where: {
          email
        }
      })

      if (emailAlreadyExists) {
        throw new HttpException('Email already in use.', 401)
      }
    }

    const userUpdated = await prisma.user.update({
      where: { id: userId },
      data: { email, name }
    })

    return userUpdated
  }
}

export { UpdateUserUseCase }