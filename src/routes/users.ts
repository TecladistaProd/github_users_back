import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/', (_, res) =>
  res.status(200).json({
    name: 'Users',
  })
);

export default userRoutes;
