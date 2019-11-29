import { Router } from 'express';
import path from 'path';

const router: Router = Router();
const spaUrls: Array<string> = [
  '/',
  '/dashboard',
  '/dashboard/fact',
  '/dashboard/settings',
  '/dashboard/manage-friends',
  '/dashboard/activity',
  '/dashboard/report-bug',
  '/dashboard/settings',
  '/dashboard/edit-profile'
];

router.get(spaUrls, (req, res) =>
  res.sendFile(path.join(__dirname, '..', '/client/build/index.html'))
);

export default router;
