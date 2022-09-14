import { Router } from 'express';

import UsersController from '../controllers/usersController';

const usersRouter = Router();

const user = new UsersController();

usersRouter.post('/', user.create);

export default usersRouter;