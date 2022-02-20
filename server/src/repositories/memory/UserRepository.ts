import { prisma } from "../../database/prisma";
import { IUser } from "../../models/entities/IUser";
import { IUsersRepository } from "../../models/repositories/IUsersRepository"
import { v4 as uuid } from 'uuid'

class UsersRepository implements IUsersRepository {
  private users: IUser[] = [];

  async create (name: string, email: string): Promise<IUser> {
    const user = {
      id: uuid(),
      name,
      email
    }

    this.users.push(user)


    return user
  }

  async findOneByEmail (email: string): Promise<IUser | null> {
    const user = this.users.find(user => user.email === email)

    return user || null
  }

  async findOneById (userId: string): Promise<IUser | null> {
    const user = this.users.find(user => user.id === userId)

    return user || null
  }

  async findMany (): Promise<IUser[]> {
    return this.users
  }

  async update (userId: string, name: string, email: string): Promise<IUser> {
    const userIndex = this.users.findIndex(user => user.id === userId)

    const user = Object.assign(this.users[userIndex], {
      name,
      email
    })

    return user
  }

  async delete (userId: string): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === userId)

    delete this.users[userIndex]
  }
}

export { UsersRepository }