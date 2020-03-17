'use strict'

// Require Node.js Dependencies
const { rename } = require('fs').promises
const { promisify } = require('util')

// Require Third-party Dependencies
const rimraf = require('rimraf')
const copy = require('copy-concurrently')

// vars
const rimrafAsync = promisify(rimraf)

async function renameExtended (from, to) {
  try {
    await rename(from, to)
  }
  catch (err) {
    if (err.code !== 'EXDEV') {
      throw err;
    }

    await rimrafAsync(from, { glob: false })
    await copy.item(from, to)
  }
}

async function move (from, to) {
  if (typeof from !== 'string') {
    throw new TypeError('Argument #1: Expected string')
  }
  if (typeof to !== 'string') {
    throw new TypeError('Argument #2: Expected string')
  }

  try {
    await renameExtended(from, to)
    await rimrafAsync(from, { glob: false })
  } catch (err) {
    if (err.code === 'EEXIST' || err.code === 'EPERM') {
      throw err
    }

    await rimrafAsync(to, { glob: false })
  }
}

module.exports = move
