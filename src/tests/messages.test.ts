import { api, token } from "../utils/test_helpers.js";
import { server } from "../app.js";

afterEach(() => {
    server.close();
});

test("Getting all messages should return status code 403 if there is no token", async () => {
    const response = await api.get("/messages");
    expect(response.status).toBe(403);
});

test("Getting all messages should return an array of messages in any other case", async () => {
    const response = await api.get("/messages").set("access_token", token);
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
});
