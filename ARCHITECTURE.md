# Sample task list

This repository contains synthetic demonstration code and no customer data.
Run checks with `node --test tasks.test.mjs` on Node.js 22 or later.

## Authentication and authorization

A future HTTP adapter must verify a session and derive ownerId from that session.
Never trust an ownerId supplied in a request body. The task-list function filters
by the authenticated owner before pagination, so another user's tasks cannot
appear in the response. Alice and Bob are fictional test identities.

## Error handling

Reject invalid pagination rather than silently accepting it. An HTTP adapter
should translate validation errors into a 400 response without exposing stack
traces or credentials. This example does not run a server or store credentials.

## Review exercise

A change to pagination must preserve owner isolation and return at most limit
items. Use the tests to verify both requirements before merging changes.
