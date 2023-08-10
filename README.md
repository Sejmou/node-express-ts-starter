# Node Express TypeScript Starter
A (hopefully beginner-friendly) starter template for a Node.js Express server written in TypeScript, with as little unnecessary boilerplate and fancy additional tooling as possible.

## What's in there?
- [x] Express (probably the most used Node.js server framework)
- [x] TypeScript (to make JavaScript less of a pain by adding types to it - includes TypeScript compiler for 'building' the server, i.e. converting TypeScript to JavaScript so that it can be run by Node.js)
- [x] `ts-node` for running the server directly from a TypeScript file (i.e. without having to compile it to JavaScript first)
- [x] `nodemon` for hot-reloading the server during the development process (i.e. automatically restarting the server when you change the code)

## What you need to already have installed
- [Node.js](https://nodejs.org/en/) (comes with [npm](https://docs.npmjs.com/cli/v9/commands/npm)  by default)
- (Optional) an alternative package manager, e.g. [yarn](https://yarnpkg.com/getting-started/install) or [pnpm](https://pnpm.js.org/en/installation)

## How to use (for local development)
You can use any well-established package manager (e.g. `npm`, `yarn`, `pnpm`) to install dependencies and run the server.

### npm
```bash
npm install
npm run build
npm start
```

### yarn
```bash
yarn
yarn build
yarn start
```

### pnpm
```bash
pnpm install
pnpm run build
pnpm start
```

Note: After running any of the install commands, a lock file will be created (e.g. `package-lock.json` for npm). This file contains information about the exact versions of the dependencies that were installed. This is useful for ensuring that the same versions of the dependencies are installed on different machines, and for ensuring that the same versions of the dependencies are installed when the project is built on a CI server. Lock files should be commited to the repository (see [this discussion](https://stackoverflow.com/questions/44206782/do-i-commit-the-package-lock-json-file-created-by-npm-5) here).

## Explanation of the files
### `src/index.ts`
This is the entry point of the server. It sets up the routes and other required stuff (could be e.g. database connections) and starts the server.

### `package.json`
This file is essential to make any Node project work. It defines the dependencies of the project, i.e. the packages (usually from the [npm registry](https://docs.npmjs.com/about-the-public-npm-registry)) that the project depends on. The dependencies are split into two categories: `dependencies` and `devDependencies`. The `dependencies` are the packages that are required for the project to work _after_ it has been _built_ (i.e. converted to plain JavaScript), while the `devDependencies` are packages that are only required for development, e.g. `TypeScript` for typechecking the code as you write it, or `nodemon` for hot-reloading the server during development. Furthermore, one can define scripts. Usually you would define scripts that are used for development and scripts that are used for building the project. Finally, the `package.json` file contains metadata about the project, such as the name, version, author, license, etc.

### Regular dependencies
The only regular (runtime) dependency is [`express`](https://expressjs.com/), a popular, minimalistic framework for building Node.js web servers.

### Dev dependencies
The project has the following dev dependencies:

- [`@types/express`](https://www.npmjs.com/package/@types/express): This package contains TypeScript type definitions for `express`.
- [`@types/node`](https://www.npmjs.com/package/@types/node): This package contains type definitions for Node.js.
- [`nodemon`](https://www.npmjs.com/package/nodemon): This package is used for hot-reloading the server during development.
- [`ts-node`](https://www.npmjs.com/package/ts-node): This package is used for running the server directly from a TypeScript file (i.e. without having to compile it to JavaScript first).
- [`tsconfig-paths`](https://www.npmjs.com/package/tsconfig-paths): This package is used for setting up path aliases in TypeScript and required to make the path aliases in `tsconfig.json` work when running the server with `ts-node`.

### Scripts
`package.json` allows you to specify scripts that can be run with your package manager of choice, each serving a different purpose. The following scripts are included:
- `dev`: Runs the server in development mode, i.e. with hot-reloading (i.e. automatically restarting the server when you change the code)
- `build`: Compiles the TypeScript code to JavaScript
- `start`: Runs the server (after it has been built)

### `tsconfig.json`
This file contains the configuration for the TypeScript compiler. It defines how strict TypeScript should be when type-checking and other stuff for the TypeScript compiler, such as the target version of the output JavaScript, the directory where the compiled JavaScript code should be put, and the directory where the TypeScript code is located.

A `~` path alias has also been set up for the `src` directory, so that you can import files from the `src` directory without having to specify the relative path. This means that you can import files from the `src` directory like this:
```typescript
import { someFunction } from '~/some-file';
```

### `.gitignore`
This file contains the files and directories that should be ignored by git. This is useful for files that are generated by the build process, such as the compiled JavaScript code, or files that contain sensitive information, such as API keys. If you plan to use any API keys etc. in your project, read up on environment variables, `.env`` files and how to use them in Node.js projects.

## How to move to production
TODO: make some suggestions