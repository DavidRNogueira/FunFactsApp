import passport from 'passport';
import * as passportLocal from 'passport-local';
import User from '../models/User';
import { Request, Response } from 'express';
import { INewUser, IAuthenticationService } from '../types/server';

export default class AuthenticationService implements IAuthenticationService {
  public static setup() {
    const LocalStrategy = passportLocal.Strategy;
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
  }

  public newUser(user: INewUser, req: Request, res: Response) {
    if (user.password !== user.confirmPassword) {
      res.end('Passwords do not match.');
    }

    User.register(
      new User({
        username: user.username.trim().toLowerCase(),
        email: user.email.trim().toLowerCase(),
      }),
      user.password.trim(),
      err => {
        if (err) res.end({ data: err.message });

        passport.authenticate('local')(req, res, () => {
          if (!req.user) return;
          res.send({
            success: true,
            // @ts-ignore
            user: req.user.username.trim(),
          });
        });
      }
    );
  }

  public handleLogin(req: Request, res: Response) {
    if (!req.user) {
      res.send({
        success: false,
      });
    } else if (req.user) {
      res.send({
        success: true,
        // @ts-ignore
        user: req.user.username.trim(),
      });
    }
  }

  public logout(req: Request, res: Response) {
    req.logout();
    res.send({ data: 'You are logged out.' });
  }

  public checkLogin(req: Request, res: Response) {
    if (req.user) {
      // @ts-ignore
      res.json({ loggedIn: true, user: req.user.username.trim() });
    } else if (!req.user) {
      res.json({ loggedIn: false });
    }
  }
}
