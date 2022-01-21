import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { UsersController } from '../controllers/UsersController';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/', 
  celebrate({
    [Segments.BODY]: Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().required()
    })
  }),
  usersController.create
)

usersRoutes.put('/:id', 
  celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().required()
    })
  }),
  usersController.update
)

usersRoutes.delete('/:id', 
  celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().uuid().required(),
    })
  }),
  usersController.destroy
)

usersRoutes.get('/:id', 
  celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().uuid().required(),
    })
  }),
  usersController.show
)

usersRoutes.get('/', 
  usersController.index
)

export { usersRoutes }