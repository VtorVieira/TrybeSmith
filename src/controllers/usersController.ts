import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UsersService from '../services/usersServices';

const JWT_SECRET = 'validateToken';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = jwt.sign(user, JWT_SECRET, {
      expiresIn: '1d',
    });
    console.log(token);
    await this.usersService.create(user);
    res.status(201).json({ token });
  };
}