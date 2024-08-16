import { AppDataSource } from "../data-source.js";
import { Message } from "../entities/Message.js";
const messageExpectedRelations = {
    userFrom: true,
    userTo: true,
};
export default class MessageModel {
    static async getAll(email) {
        const messages = await AppDataSource.getRepository(Message).find({
            where: {
                userFrom: {
                    email: email,
                },
            },
            relations: messageExpectedRelations,
        });
        return messages;
    }
}
//# sourceMappingURL=message.js.map