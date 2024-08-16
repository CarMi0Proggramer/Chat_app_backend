import z from "zod";

const contactSchema = z.object({
    email: z.string().email({ message: "Invalid contact email" }),
});

export function validateContact(data: any) {
    const result = contactSchema.safeParse(data);
    if (!result.success) {
        return { success: false, data: JSON.parse(result.error.message) };
    }

    return { success: true, data: result.data };
}
