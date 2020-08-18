import { Router } from 'express';
import controller from './controller';

const router = new Router();

router
  .get('/api/admin/students', controller.read)
  .post('/api/admin/students', controller.create)
  .put('/api/admin/students/:id', controller.update)
  .delete('/api/admin/students/:id', controller.delete);

export default router;
