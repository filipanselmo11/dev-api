import { PrismaClient } from "@prisma/client";
import { IDeveloperRepository } from "../types";

const prisma = new PrismaClient();

export class DeveloperRepository implements IDeveloperRepository {
    public async createDeveloper(name: string, email: string, technologies: string): Promise<{ id: number; name: string; email: string; technologies: string; createdAt: Date; }> {
        const developer = await prisma.developer.create({
            data: {
                name,
                email,
                technologies
            }
        });
        return developer
    }

    public async listDevelopers(): Promise<{ id: number; name: string; email: string; technologies: string; createdAt: Date; }[]> {
        const developers = await prisma.developer.findMany();
        return developers;
    }
}