import assert from 'node:assert/strict';
import { test } from 'node:test';
import { listTasks } from './tasks.mjs';

const tasks = [
  { id: 'one', ownerId: 'alice', title: 'Write documentation' },
  { id: 'two', ownerId: 'bob', title: 'Review sample changes' },
  { id: 'three', ownerId: 'alice', title: 'Add tests' },
];

test('returns only the authenticated owner’s tasks', () => {
  assert.deepEqual(listTasks(tasks, 'alice').map(task => task.id), ['one', 'three']);
});
test('paginates after filtering by owner', () => {
  assert.deepEqual(listTasks(tasks, 'alice', { offset: 1, limit: 1 }).map(task => task.id), ['three']);
});
test('rejects invalid identity and pagination', () => {
  assert.throws(() => listTasks(tasks, ''));
  assert.throws(() => listTasks(tasks, 'alice', { offset: -1 }));
  assert.throws(() => listTasks(tasks, 'alice', { limit: 0 }));
});
