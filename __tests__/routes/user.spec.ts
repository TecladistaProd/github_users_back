import { describe, it, expect } from 'vitest';
import request from 'supertest';
import App from '../../src/App';

describe('Run server and test GET /api/users', () => {
  it('Should get 30 users from /api/users', async () => {
    const data = await request(App).get('/api/users');
    const { users } = data.body as {
      users: Array<any>;
    };
    expect(data.statusCode).toBe(200);
    expect(users).toHaveLength(30);
  });
  it('Should get nextLink and id from last user match in link from /api/users', async () => {
    const data = await request(App).get('/api/users');
    const { users, nextLink } = data.body as {
      users: Array<any>;
      nextLink: string;
    };
    expect(data.statusCode).toBe(200);
    expect(nextLink.match(users[users.length - 1].id)).toBeTruthy();
  });
});

describe('Run server and test GET /api/users/:username/details', () => {
  it('Should get valid id from /api/users/tecladistaprod/details', async () => {
    const data = await request(App).get('/api/users/tecladistaprod/details');
    const { id } = data.body as {
      id: number;
    };
    expect(data.statusCode).toBe(200);
    expect(id).toBeTypeOf('number');
    expect(id).toBeTruthy();
  });
});
