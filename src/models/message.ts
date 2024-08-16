import type { FindOptionsRelations } from "typeorm";
import { AppDataSource } from "../data-source.js";
import { Message } from "../entities/Message.js";

const messageExpectedRelations: FindOptionsRelations<Message> = {
    userFrom: true,
    userTo: true,
};
export default class MessageModel {
    static async getAllMessagesFromOneUser(email: string) {
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
