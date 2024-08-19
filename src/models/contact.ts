import { AppDataSource } from "../data-source.js";
import { Contact } from "../entities/Contact.js";
import type { User } from "../entities/User.js";
import type { FindOptionsRelations } from "typeorm";

const contactExpectedRelations: FindOptionsRelations<Contact> = {
    userFrom: true,
    userTo: true,
    receivedMessages: true,
};
export default class ContactModel {
    static async getAll(email: string) {
        const contacts = await AppDataSource.getRepository(Contact).find({
            where: {
                userFrom: { email },
            },
            relations: contactExpectedRelations,
        });
        return contacts;
    }

    static async getById(id: string) {
        const contact = await AppDataSource.getRepository(Contact).findOne({
            where: { id },
            relations: contactExpectedRelations,
        });
        return contact;
    }

    static async create(userFrom: User, userTo: User) {
        const repository = AppDataSource.getRepository(Contact);

        const contact = await repository.save({
            userFrom: userFrom,
            userTo: userTo,
        });
        await repository.save({
            userFrom: userTo,
            userTo: userFrom,
        });

        return contact;
    }
}
