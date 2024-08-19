import { server } from "../app.js";
import { api, token } from "../utils/test_helpers.js";

afterEach(() => server.close());

test("It should return 403 if there is no token", async () => {
    const res = await api.get("/contacts");
    expect(res.status).toBe(403);
});

test("It should return data as json", async () => {
    const res = await api.get("/contacts").set("access_token", token);
    expect(res.status).toBe(200);
    expect(res.header).toContain(/application\/json/);
});
