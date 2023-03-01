import express from 'express';
import cors from 'cors';

import routes from '@routes/index';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.express.use(express.json());
    // this.express.use(express.static(resolve(__dirname, '..', 'public')));
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(cors());
  }

  private routes() {
    this.express.use('/api', routes);
  }
}

export default new App().express;
