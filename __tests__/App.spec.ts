import { describe, it, expect } from 'vitest';
import request from 'supertest';
import App from '../src/App';

describe('Run Server', () => {
  it('Should be statusCode 200 on Get /api', async () => {
    const data = await request(App).get('/api');
    expect(data.statusCode).toBe(200);
  });
  it('Should return "SP Github API" on Get /api', async () => {
    const data = await request(App).get('/api');
    expect(data.text).toBe('SP Github API');
  });
});
