/** Returns the environment variable or throws an error. */
export function envOrThrow(key: string): string {
  const value = Deno.env.get(key);
  if (!value) {
    throw new Error(`Environment variable '${key}' is required and not found`);
  }
  return value;
}
