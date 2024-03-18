import { Developer } from "@prisma/client";

export interface IDeveloperRepository {
    createDeveloper(name: string, email: string, technologies: string): Promise<Developer>;
    listDevelopers(): Promise<Developer[]>;
}