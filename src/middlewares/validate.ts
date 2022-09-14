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
  validateNameProducts: (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    
    if (!name) {
      throw new HttpException(400, '"name" is required');
    }
    if (typeof name !== 'string') {
      throw new HttpException(422, '"name" must be a string');
    }
    if (name.length < 3) {
      throw new HttpException(422, '"name" length must be at least 3 characters long');
    }
    next();
  },
  validateAmountProducts: (req: Request, res: Response, next: NextFunction) => {
    const { amount } = req.body;
    
    if (!amount) {
      throw new HttpException(400, '"amount" is required');
    }
    if (typeof amount !== 'string') {
      throw new HttpException(422, '"amount" must be a string');
    }
    if (amount.length < 3) {
      throw new HttpException(422, '"amount" length must be at least 3 characters long');
    }
    next();
  },
};

export default validate;