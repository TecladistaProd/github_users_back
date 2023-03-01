import github from 'octonode';
import { IUser } from '@interfaces/user';

const client = github.client();

class GithubService {
  static listUsers(since: string | number = 0): Promise<Array<IUser>> {
    return new Promise((res, rej) => {
      client.get('/users', { since, per_page: 10 }, (err, _, body) => {
        if (err) return rej(err);
        return res(body);
      });
    });
  }

  static getUser(username: string): Promise<IUser> {
    return new Promise((res, rej) => {
      client.get(`/users/${username}`, {}, (err, _, body) => {
        if (err) return rej(err);
        return res(body);
      });
    });
  }
}

export default GithubService;
