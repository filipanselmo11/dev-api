import express from 'express';
import DeveloperController from '../controllers/DeveloperController';

export const routes = express();

routes.post('/developers', DeveloperController.createDeveloper);
routes.get('/developers', DeveloperController.listDeveloper);