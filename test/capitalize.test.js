import capitalize from '../src/index.js';
import { strict as assert } from 'assert';

assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('hello'), 'Hello');
