//  External
import dotenv from 'dotenv';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import mongoose from 'mongoose';
const app = express();

dotenv.config();

// Internal
import { SpaController, RandomFactController, AuthenticationController } from './controllers';

app.use(express.static('client/build'));

app.use(
  session({
    secret: process.env.KEY as string | string[],
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
      secure: false,
      httpOnly: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', SpaController);
app.use('/random-fact', RandomFactController);
app.use('/authenticate', AuthenticationController);

mongoose.set('useCreateIndex', true);
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });
} else {
  throw Error('process.env.MONGO_URI is undefined!');
}

mongoose.connection
  .once('open', () => {
    console.log('Connected to Mongo via Mongoose');
  })
  .on('error', err => {
    console.log('Connection Error: ', err);
  });

app.listen(8080, () => console.log('Server is on'));
