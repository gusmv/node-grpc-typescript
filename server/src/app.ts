import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import { HttpException } from './errors/HttpException';
import { routes } from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(express.json());
app.use(helmet());

app.use(routes);
app.use(errors());
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof HttpException) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    message: 'Internal Server Error'
  })
})

export { app }