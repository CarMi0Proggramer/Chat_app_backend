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
                userFrom: { email },
            },
            relations: contactExpectedRelations,
        });
        return contacts;
    }
    static async getById(id) {
        const contact = await AppDataSource.getRepository(Contact).findOne({
            where: { id },
            relations: contactExpectedRelations,
        });
        return contact;
    }
    static async create(userFrom, userTo) {
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
//# sourceMappingURL=contact.js.map