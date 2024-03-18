import { IDeveloperRepository } from "../types";


export class CreateDeveloperService {

    constructor(private developerService: IDeveloperRepository) {}

    public async execute(name: string, email: string, technologies: string) {
        const developer = await this.developerService.createDeveloper(name, email, technologies);
        return developer;
    }
}