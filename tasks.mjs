export function listTasks(tasks, ownerId, { offset = 0, limit = 20 } = {}) {
  if (typeof ownerId !== 'string' || ownerId.length === 0) throw new Error('ownerId is required');
  if (!Number.isInteger(offset) || offset < 0) throw new Error('offset must be a nonnegative integer');
  if (!Number.isInteger(limit) || limit < 1 || limit > 100) throw new Error('limit must be between 1 and 100');
  return tasks.filter(task => task.ownerId === ownerId).slice(offset, offset + limit);
}
