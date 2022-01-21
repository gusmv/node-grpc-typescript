import { Request, Response } from 'express'

import { CreateUserUseCase } from '../useCases/CreateUserUseCase'
import { DestroyUserUseCase } from '../useCases/DestroyUserUseCase';
import { ShowUsersUseCase } from '../useCases/ShowUsersUseCase';
import { ShowUserUseCase } from '../useCases/ShowUserUseCase';
import { UpdateUserUseCase } from '../useCases/UpdateUserUseCase';

class UsersController {
  async create (request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body

    const createUser = new CreateUserUseCase();
    const user = await createUser.execute(name, email)

    return response.status(201).json(user);
  }

  async update (request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.params;
    const { name, email } = request.body;

    const updateUser = new UpdateUserUseCase();
    const user = await updateUser.execute(userId, name, email)

    return response.json(user);
  }

  async show (request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.params;

    const showUser = new ShowUserUseCase();
    const user = await showUser.execute(userId)

    return response.json(user)
  }

  async index (request: Request, response: Response): Promise<Response> {
    const showUsers = new ShowUsersUseCase();
    const users = await showUsers.execute()

    return response.json(users)
  }

  async destroy (request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.params;

    const destroyUser = new DestroyUserUseCase();
    await destroyUser.execute(userId)

    return response.status(204).send('')
  }
}

export { UsersController }