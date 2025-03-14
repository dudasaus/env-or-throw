# envOrThrow

[![JSR Score](https://jsr.io/badges/@dudasaus/env-or-throw/score)](https://jsr.io/@dudasaus/env-or-throw)

## Install

```bash
deno add jsr:@dudasaus/env-or-throw
```

## Usage

```ts
import { envOrThrow } from "@dudasaus/env-or-throw";

const homeDirectoryPath = envOrThrow("HOME");
console.log("Home: ", homeDirectoryPath);
```

## Why

Sometimes you just want the program to crash if you don't have a certain
environment variable set.
