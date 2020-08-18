import '@babel/polyfill';
import { Router } from 'express';
import students from './students';
import badRequest from './helpers/badRequest';
import headers from './helpers/headers';

const router = new Router();

router
  .use(headers)
  .use(students)
  .use(badRequest);

export default router;
