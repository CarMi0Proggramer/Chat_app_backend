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
    static async getAll(userFrom: User) {
        const contacts = await AppDataSource.getRepository(Contact).find({
            where: {
                userFrom: userFrom,
            },
            relations: contactExpectedRelations,
        });
    }

    static async create(userFrom: User, userTo: User) {
        const contact = await AppDataSource.getRepository(Contact).save({
            userFrom: userFrom,
            userTo: userTo,
        });
        return contact;
    }
}
