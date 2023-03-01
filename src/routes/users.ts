import GithubService from '@services/github';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/', async (req, res) => {
  const { since } = req.query as { since?: string };
  try {
    const users = await GithubService.listUsers(since);
    res.status(200).json({
      users,
      nextLink: `http://${req.hostname}${req.baseUrl}?since=${
        users[users.length - 1]?.id
      }`,
    });
  } catch (err) {
    res.status(500).json({
      message: 'An Error Occurred',
    });
  }
});

export default userRoutes;
