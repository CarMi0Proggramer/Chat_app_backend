import { api, token } from "../utils/test_helpers.js";
import { server } from "../app.js";
afterEach(() => {
    server.close();
});
test("Getting all messages should return status code 403 if there is no token", async () => {
    const res = await api.get("/messages");
    expect(res.status).toBe(403);
});
test("Getting all messages should return an array of messages in any other case", async () => {
    const res = await api
        .get("/messages")
        .set("access_token", token);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});
//# sourceMappingURL=messages.test.js.map