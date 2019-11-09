import { Router } from 'express';
import RandomFactService from '../services/RandomFactService';

const router: Router = Router();

router.get('/', (req, res) => {
  new RandomFactService();
  res.send('test');
});

export default router;
