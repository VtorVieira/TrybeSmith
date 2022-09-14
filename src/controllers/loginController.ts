import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import LoginService from '../services/loginServices';

const JWT_SECRET = 'validateToken';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }

  public find = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const loginChecked = await this.loginService.find({ username, password });
    const token = jwt.sign({ loginChecked, username }, JWT_SECRET, {
      expiresIn: '1d',
    });
    res.status(200).json({ token });
  };
}