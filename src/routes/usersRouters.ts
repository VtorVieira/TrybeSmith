import { Router } from 'express';

import UsersController from '../controllers/usersController';

import validate from '../middlewares/validate';

const usersRouter = Router();

const user = new UsersController();

usersRouter.post(
  '/', 
  validate.validateUsernameUsers,
  validate.validateClasseUsers,
  validate.validateLevelUsers,
  validate.validatePasswordUsers,
  user.create,
);

export default usersRouter;