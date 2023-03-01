import { describe, it, expect } from 'vitest';
import request from 'supertest';
import App from '../../src/App';

describe('Run server and test GET /users', () => {
  it('Should get 30 users from /users', async () => {
    const data = await request(App).get('/api/users');
    const { users } = data.body as {
      users: Array<any>;
    };
    expect(data.statusCode).toBe(200);
    expect(users).toHaveLength(30);
  });
  it('Should get nextLink and id from last user match in link from /users', async () => {
    const data = await request(App).get('/api/users');
    const { users, nextLink } = data.body as {
      users: Array<any>;
      nextLink: string;
    };
    expect(data.statusCode).toBe(200);
    expect(nextLink.match(users[users.length - 1].id)).toBeTruthy();
  });
});
