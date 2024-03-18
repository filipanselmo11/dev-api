import { IDeveloperRepository } from "../types";


export class ListDeveloperService {

    constructor(private developerService: IDeveloperRepository) {}

    public async execute() {
        const developers = this.developerService.listDevelopers();
        return developers;
    }
 }