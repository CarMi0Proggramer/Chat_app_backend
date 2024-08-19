import supertest from "supertest";
import { app } from "../app.js";

export const api = supertest(app);
export const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2FybG9zIiwiZW1haWwiOiJjYXJsb3NAZ21haWwuY29tIiwiY29uZmlndXJhdGlvbnMiOnsidGhlbWUiOiJkYXJrIn0sImRlc2NyaXB0aW9uIjpudWxsLCJjb250YWN0cyI6W10sImNvbnRhY3RPZiI6W10sInNlbnRNZXNzYWdlcyI6W10sImlhdCI6MTcyMzc3MjIxMiwiZXhwIjoxNzIzNzgzMDEyfQ.xKZ2JsYYrFDLsCzVNB7JSeWINswA_C31mRmB2IH9Pp4";
