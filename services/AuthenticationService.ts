import passport from 'passport';
import * as passportLocal from 'passport-local';
import User from '../models/User';
import { Request, Response } from 'express';
import { INewUser, IAuthenticationService, IUserDetails } from '../types/server';

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
  //I need to fetch username, first name, last name, profile image.
  // I am making a report bug form so we need that to get handled. And then eventually, to be able to load the user's list of friends.

  public getUserDetails(req: Request, res: Response): void {
    // Dummy data for now
    const user: IUserDetails = {
      firstName: 'Joe',
      lastName: 'Test',
      profileImage:
        'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/74841947_2605151892874435_9175000564684029952_o.jpg?_nc_cat=107&_nc_ohc=ya_77nUReLEAQmStsbUcV49JZ5tYzCgAKXs9lHL6zXA_FayHiJ9oDr3Ag&_nc_ht=scontent-dfw5-1.xx&oh=094a5647b712ef7538778a253ec61746&oe=5E7B1EB3',
      friends: ['Steven', 'Other Joe', 'Jim'],
    };

    res.send(user);
  }
}
