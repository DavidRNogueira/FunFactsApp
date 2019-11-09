import { Router } from 'express';
import path from 'path';

const router: Router = Router();
const spaUrls: Array<string> = ['/'];

router.get(spaUrls, (req, res) =>
  res.sendFile(path.join(__dirname, '..', '/client/build/index.html'))
);

export default router;
