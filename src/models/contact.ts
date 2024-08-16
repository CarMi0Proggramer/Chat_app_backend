import { AppDataSource } from "../data-source.js";
import { Contact } from "../entities/Contact.js";
import type { User } from "../entities/User.js";

export default class ContactModel {
    static async create(userFrom: User, userTo: User) {
        const contact = await AppDataSource.getRepository(Contact).save({
            userFrom: userFrom,
            userTo: userTo,
        });
        return contact;
    }
}
