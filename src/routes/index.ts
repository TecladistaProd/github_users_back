import { Router } from 'express';
import usersRoutes from './users';

const routes = Router();

routes.get('/', (_, res) => res.status(200).send('SP Github API'));

routes.use('/users', usersRoutes);

export default routes;
