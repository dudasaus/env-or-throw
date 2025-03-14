import { envOrThrow } from "@dudasaus/env-or-throw";
import { expect } from "jsr:@std/expect";

Deno.test("Returns an environment variable", () => {
  expect(envOrThrow("PWD")).toBeDefined();
});

Deno.test("Throws an error", () => {
  expect(() => {
    envOrThrow("DEFINITELY_NOT_SET");
  }).toThrow();
});
