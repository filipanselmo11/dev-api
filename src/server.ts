import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);

const PORT = 3333;

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});