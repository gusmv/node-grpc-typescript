import { IUser } from "../entities/IUser";

interface IUsersRepository {
  create (name: string, email: string): Promise<IUser>;
  findOneByEmail (email: string): Promise<IUser | null>;
  findOneById (userId: string): Promise<IUser | null>;
  findMany (): Promise<IUser[]>;
  update (userId: string, name: string, email: string): Promise<IUser>;
  delete (userId: string): Promise<void>;
}

export { IUsersRepository }