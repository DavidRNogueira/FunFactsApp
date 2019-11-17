import { Router, Request, Response } from 'express';
import RandomFactService from '../services/RandomFactService';

const router: Router = Router();
const { getRandomFact } = new RandomFactService();

router.get('/', (req: Request, res: Response) => res.send(getRandomFact()));

export default router;
