import z from "zod";
const configurationOptions = z.object({
    theme: z.string().optional(),
    notifications: z.boolean().optional(),
});
const userSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" }),
    description: z.string().optional(),
    configurations: configurationOptions.optional(),
});
export function validateUser(data) {
    const result = userSchema.safeParse(data);
    if (!result.success) {
        return { success: false, data: JSON.parse(result.error.message) };
    }
    return { success: true, data: result.data };
}
export function validatePartialUser(data) {
    const result = userSchema.partial().safeParse(data);
    if (!result.success) {
        return { success: false, data: JSON.parse(result.error.message) };
    }
    return { success: true, data: result.data };
}
//# sourceMappingURL=user.schema.js.map