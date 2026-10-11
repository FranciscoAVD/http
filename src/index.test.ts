import { describe, expect, test } from "bun:test";
import HTTP, { HTTP as named } from "./index";

describe("HTTP", () => {
  test("named export is the same object as the default export", () => {
    expect(named).toBe(HTTP);
  });

  test("OK is 200", () => {
    expect(HTTP.OK).toBe(200);
  });

  test("TooManyRequests is 429", () => {
    expect(HTTP.TooManyRequests).toBe(429);
  });
});
