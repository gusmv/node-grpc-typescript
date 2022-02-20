import { prisma } from "../../database/prisma";
import { IUser } from "../../models/entities/IUser";
import { IUsersRepository } from "../../models/repositories/IUsersRepository"

class UsersRepository implements IUsersRepository {
  async create (name: string, email: string): Promise<IUser> {
    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    })

    return user
  }

  async findOneByEmail (email: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    return user
  }

  async findOneById (userId: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    return user
  }

  async findMany (): Promise<IUser[]> {
    const users = await prisma.user.findMany()

    return users
  }

  async update (userId: string, name: string, email: string): Promise<IUser> {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        email
      }
    })

    return user
  }

  async delete (userId: string): Promise<void> {
    await prisma.user.delete({
      where: { id: userId }
    })
  }
}

export { UsersRepository }