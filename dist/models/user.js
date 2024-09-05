import { AppDataSource } from "../data-source.js";
import { User } from "../entities/User.js";
const userExpectedRelations = {
    sentMessages: true,
    contacts: true,
    contactOf: true,
};
export default class UserModel {
    static async getByEmail(email) {
        const user = await AppDataSource.getRepository(User).findOne({
            where: {
                email: email,
            },
            relations: userExpectedRelations,
        });
        return user;
    }
    static async create(data) {
        const user = await this.getByEmail(data.email);
        if (user) {
            return false;
        }
        const newUser = await AppDataSource.getRepository(User).save(data);
        return newUser;
    }
    static async update(email, data) {
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
//# sourceMappingURL=user.js.map