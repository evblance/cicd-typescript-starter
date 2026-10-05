import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

const nullHeaders: IncomingHttpHeaders = {};

describe("getAPIKey", () => {
  test("returns null if authorization not in headers", () => {
    expect(getAPIKey(nullHeaders)).toBeNull();
  });
});
