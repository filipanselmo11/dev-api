import express from 'express';
import DeveloperController from '../controllers/DeveloperController';

export const routes = express();

/**
 * @swagger
 * /api/v1/developers:
 *   post:
 *     summary: Cria um novo desenvolvedor
 *     requestBody:
 *         required: true
 *     content:
 *        application/json:
 *           schema:
 *             type: object
 *           properties:
 *              name:
 *               type: string
 *               example: Fulano de tal
 *              email:
 *                type: string
 *                example: fulano@email.com
 *              technologies:
 *                type: string
 *                example: React, Go
 *     responses:
 *       201:
 *         description: Desenvolvedor criado com sucesso
 */
routes.post('/api/v1/developers', DeveloperController.createDeveloper);

/**
 * @swagger
 * /api/v1/developers:
 *   get:
 *     summary: Lista todos os desenvolvedores
 *     responses:
 *       200:
 *         description: Lista de desenvolvedores
 */

routes.get('/api/v1/developers', DeveloperController.listDeveloper);