import type { User } from "../entities/User.js";

export function extractUserData(user: User) {
    return {
        name: user.name,
        email: user.email,
        configurations: user.configurations,
        description: user.description,
        sentMessages: user.sentMessages,
        receivedMessages: user.receivedMessages,
    };
}
