import { Request, Response, NextFunction } from 'express';
import HttpException from '../errors/CustomError';

const validate = {
  validateLogin: (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    
    if (!username) {
      throw new HttpException(400, '"username" is required');
    }
    if (!password) {
      throw new HttpException(400, '"password" is required');
    }
    next();
  },
};

export default validate;