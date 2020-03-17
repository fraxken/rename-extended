# rename-extended
> !! ⚠️ WIP !!
Rename (or Recursively moves) files and directories (replacement for npm package move-concurrently).

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i rename-extended
# or
$ yarn add rename-extended
```

## Usage example
```js
const rename = require('rename-extended');

async function main() {
    await rename('/path/to/thing', '/new/path/thing');
    // thing is now rename (moved)!
}
main().catch(console.error);
```

## API

### rename(from: string, to: string) → Promise

Rename (or Recursively moves) 'from' to 'to' and resolves its promise when finished. If to already exists then the promise will be rejected with an EEXIST error.

Starts by trying to rename 'from' to 'to'.

## License
MIT
