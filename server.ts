//  External
import express from 'express';
const app = express();

// Internal
import { SpaController, RandomFactController, AuthenticationController } from './controllers';

app.use(express.static('client/build'));

app.use('/', SpaController);
app.use('/random-fact', RandomFactController);
app.use('/authenticate', AuthenticationController);

app.listen(8080, () => console.log('Server is on'));
