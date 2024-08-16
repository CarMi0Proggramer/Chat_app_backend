import { AppDataSource } from "../data-source.js";
import { Contact } from "../entities/Contact.js";
const contactExpectedRelations = {
    userFrom: true,
    userTo: true,
    receivedMessages: true,
};
export default class ContactModel {
    static async getAll(email) {
        const contacts = await AppDataSource.getRepository(Contact).find({
            where: {
                userFrom: {
                    email: email,
                },
            },
            relations: contactExpectedRelations,
        });
        return contacts;
    }
    static async create(userFrom, userTo) {
        const contact = await AppDataSource.getRepository(Contact).save({
            userFrom: userFrom,
            userTo: userTo,
        });
        return contact;
    }
}
//# sourceMappingURL=contact.js.map