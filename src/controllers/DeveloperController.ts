import { Request, Response } from "express";
import { CreateDeveloperService } from "../services/CreateDeveloperService";
import { DeveloperRepository } from "../repositories/DeveloperRepository";
import { ListDeveloperService } from "../services/ListDeveloperService";


export default {
    createDeveloper: async (request: Request, response: Response) => {
        try {
            const { name, email, technologies } = request.body;
            const createDeveloper = new CreateDeveloperService(new DeveloperRepository());
            const developer = await createDeveloper.execute(name, email, technologies);
            return response.json({
                error: false,
                message: 'Dev criado com sucesso',
                developer
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    },

    listDeveloper: async (request: Request, response: Response) => {
        try {
            const listDevelopers = new ListDeveloperService(new DeveloperRepository());
            const developers = await listDevelopers.execute();
            return response.json({
                developers
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    }
}