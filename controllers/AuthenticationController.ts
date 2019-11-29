import { Request, Response, Router } from 'express';
import AuthenticationService from '../services/AuthenticationService';

const router: Router = Router();
const { getUserDetails } = new AuthenticationService();

router.get('/user-details', (req: Request, res: Response) => getUserDetails(req, res));

export default router;
