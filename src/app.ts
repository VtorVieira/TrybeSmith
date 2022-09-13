import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import productsRouters from './routes/productsRouters';

const app = express();

app.use(express.json());

app.use('/products', productsRouters);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as any;
  res.status(status).json({ message });
});

export default app;

// Iniciando