import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import productsRouters from './routes/productsRouters';
import usersRouter from './routes/usersRouters';
import ordersRouter from './routes/ordersRouters';
import loginRouter from './routes/loginRouters';
import HttpException from './errors/CustomError';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/products', productsRouters);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as HttpException;
  res.status(status).json({ message });
});

export default app;

// Iniciando