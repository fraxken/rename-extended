# move-concurrently2
> !! ⚠️ WIP !!
Move files and directories (replacement for npm package move-concurrently).

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i move-concurrently2
# or
$ yarn add move-concurrently2
```

## Usage example
```js
const move = require('move-concurrently2');

async function main() {
    await move('/path/to/thing', '/new/path/thing');
    // thing is now moved!
}
main().catch(console.error);
```

## API

### move(from: string, to: string) → Promise

Recursively moves from to to and resolves its promise when finished. If to already exists then the promise will be rejected with an EEXIST error.

Starts by trying to rename from to to.

## License
MIT
