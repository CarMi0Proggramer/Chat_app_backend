export function extractUserData(user) {
    return {
        name: user.name,
        email: user.email,
        configurations: user.configurations,
        description: user.description,
        contacts: user.contacts,
        contactOf: user.contactOf,
        sentMessages: user.sentMessages,
    };
}
//# sourceMappingURL=user_helpers.js.map