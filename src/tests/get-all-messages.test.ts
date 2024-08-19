import supertest from "supertest";
import { app, server } from "../app.js";

const api = supertest(app);

test("Getting all messages should return status code 403 if there is no token", async () => {
    const response = await api.get("/messages");
    expect(response.status).toBe(403);
});

test("Getting all messages should return an array of messages in any other case", async () => {
    const response = await api
        .get("/messages")
        .set("access_token", process.env.TEST_TOKEN);
    expect(response.status).toBe(200);
});

afterAll(() => {
    server.close();
});
