import type { FindOptionsRelations } from "typeorm";
import { AppDataSource } from "../data-source.js";
import { User } from "../entities/User.js";

const userExpectedRelations: FindOptionsRelations<User> = {
    sentMessages: true,
    contacts: true,
    contactOf: true,
};

export default class UserModel {
    static async getByEmail(email: string) {
        const user = await AppDataSource.getRepository(User).findOne({
            where: {
                email: email,
            },
            relations: userExpectedRelations,
        });
        return user;
    }

    static async create(data: User) {
        const user = await this.getByEmail(data.email);
        if (user) {
            return false;
        }

        const newUser = await AppDataSource.getRepository(User).save(data);
        return newUser;
    }

    static async update(email: string, data: object) {
        const user = await this.getByEmail(email);
        if (!user) {
            return false;
        }

        await AppDataSource.getRepository(User).update({ email }, data);
        const updatedUser = AppDataSource.getRepository(User).findOne({
            where: { id: user.id },
            relations: userExpectedRelations,
        });
        return updatedUser;
    }
}
