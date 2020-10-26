import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/uploads';
import OrphanagesController from './controllers/OrphanagesController';
import UsersController from './controllers/UsersController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

routes.post('/users/new', UsersController.create);
routes.post('/users/authenticate', UsersController.index);

export default routes;
