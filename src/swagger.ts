import swaggerJSDoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Dev API Express',
            version: '1.0.0',
            description: 'Api que faz o crud de informações relacionadas a desenvolvedores',
        },
    },
    apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app:Express): void => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;