import { Document } from 'mongoose';
import { Request, Response } from 'express';

// Services
export interface IRandomFactService {
  getRandomFact: () => IFact;
}

export interface IAuthenticationService {
  newUser: (user: INewUser, req: Request, res: Response) => void;
  handleLogin: (req: Request, res: Response) => void;
  logout: (req: Request, res: Response) => void;
  checkLogin: (req: Request, res: Response) => void;
}

// Models
export interface IUserModel extends Document {
  username: string;
  password: string;
  email: string;
}

// Objects
export interface INewUser {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export interface IFact {
  text: String;
}
