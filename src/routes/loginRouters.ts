import { Router } from 'express';

import LoginController from '../controllers/loginController';

import validate from '../middlewares/validate';

const loginRouter = Router();

const login = new LoginController();

loginRouter.post('/', validate.validateLogin, login.find);

export default loginRouter;