# typescript-biome-bun-zod-vitest

## Overview

This project is a boilerplate template designed for TypeScript development with a focus on modern tools and practices. It incorporates the following technologies:

- **Bun**: A fast all-in-one JavaScript runtime that helps with managing dependencies and running scripts.
- **Biome**: A code formatter and linter to ensure code quality and consistency.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Vitest**: A fast unit test framework for TypeScript.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone git@github.com:arucraft2022/typescript-biome-bun-zod-vitest.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd typescript-biome-bun-zod-vitest
   ```

3. **Install dependencies using Bun:**

   ```bash
   bun install
   ```

4. **Upgrade dependencies if needed:**

   ```bash
   bun upgrade
   ```

## Usage

To run the project:

```bash
bun run src/index.ts
```

## Available Commands

You can use `bun run [command]` to execute the following commands:

- **Test**: Run the tests.
  
  ```bash
  bun run test
  ```

- **Test-Run**: Run the tests with more detailed output.

  ```bash
  bun run test-run
  ```

- **Format**: Format the code using Biome.

  ```bash
  bun run format
  ```

- **Lint**: Lint the code without fixing issues.

  ```bash
  bun run lint
  ```

- **Lint:Fix**: Lint the code and automatically fix issues.

  ```bash
  bun run lint:fix
  ```

- **Check**: Organize imports, format, and lint the code.

  ```bash
  bun run check
  ```

## Biome

Biome is used for code formatting and linting. For more details, refer to the [Biome documentation](https://biomejs.dev/ja/).

## Zod

Zod is used for TypeScript-first schema validation. Define your schemas and validate your data with ease. For usage instructions, refer to the [Zod documentation](https://zod.dev/).

## Vitest

Vitest is used for running unit tests. For more details on writing and running tests, refer to the [Vitest documentation](https://vitest.dev/).

## License

This project is licensed under the MIT License.
