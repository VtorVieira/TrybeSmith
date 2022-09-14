import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

import HttpException from '../errors/CustomError';

const JWT_SECRET = 'validateToken';

const validate = {
  validateToken: (req: Request, _res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new HttpException(401, 'Token not found');
    }
    try {
      jwt.verify(authorization, JWT_SECRET);
      next();
    } catch (err) {
      throw new HttpException(401, 'Invalid token');
    }
  },

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

  validateUsernameUsers: (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;
    
    if (!username) {
      throw new HttpException(400, '"username" is required');
    }
    if (typeof username !== 'string') {
      throw new HttpException(422, '"username" must be a string');
    }
    if (username.length < 3) {
      throw new HttpException(422, '"username" length must be at least 3 characters long');
    }
    next();
  },

  validateClasseUsers: (req: Request, res: Response, next: NextFunction) => {
    const { classe } = req.body;
    
    if (!classe) {
      throw new HttpException(400, '"classe" is required');
    }
    if (typeof classe !== 'string') {
      throw new HttpException(422, '"classe" must be a string');
    }
    if (classe.length < 3) {
      throw new HttpException(422, '"classe" length must be at least 3 characters long');
    }
    next();
  },

  validateLevelUsers: (req: Request, res: Response, next: NextFunction) => {
    const { level } = req.body;
    console.log(level);
    if (!level && level !== 0) {
      throw new HttpException(400, '"level" is required');
    }
    if (typeof level !== 'number') {
      throw new HttpException(422, '"level" must be a number');
    }
    if (level < 1) {
      throw new HttpException(422, '"level" must be greater than or equal to 1');
    }
    next();
  },

  validatePasswordUsers: (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;
    
    if (!password) {
      throw new HttpException(400, '"password" is required');
    }
    if (typeof password !== 'string') {
      throw new HttpException(422, '"password" must be a string');
    }
    if (password.length < 8) {
      throw new HttpException(422, '"password" length must be at least 8 characters long');
    }
    next();
  },

  validateProductsIdsOrders: (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;
    
    if (!productsIds) {
      throw new HttpException(400, '"productsIds" is required');
    }
    if (typeof productsIds !== 'object') {
      throw new HttpException(422, '"productsIds" must be an array');
    }
    if (productsIds.length === 0) {
      throw new HttpException(422, '"productsIds" must include only numbers');
    }
    next();
  },
};

export default validate;