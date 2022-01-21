import { prisma } from "../../../database/prisma";
import { HttpException } from "../../../errors/HttpException";

class CreateUserUseCase {
  async execute(name: string, email: string) {
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if (userAlreadyExists) {
      throw new HttpException('User already exists.', 401);
    }

    const user = await prisma.user.create({
      data: {
        name,
        email
      },
    });

    return user;
  }
}

export { CreateUserUseCase }