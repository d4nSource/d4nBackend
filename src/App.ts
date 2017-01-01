import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';

import UserRouter from './routes/UserRouter';

class App {

  // referece to Express intance
  public express: express.Application;

  //run configuration methods on the Express instance
  constructor() {
      this.express = express();
      this.middleware();
      this.routes();
  }

  //Configure Express Middleware
  private middleware(): void {
      this.express.use(logger('dev'));
      this.express.use(bodyParser.json());
      this.express.use(bodyParser.urlencoded({extended: false}));
  }

  //Configure API endpoints
  private routes(): void {
      let router = express.Router();
      router.get('/', (req, res, next) => {
        res.json({
            message: 'Hello World!'
        });
      });
      this.express.use('/', router);
      this.express.use('/api/v1/users', UserRouter);
  }
}

export default new App().express;


/*
server.use(function (req: any, res: any, next: any) {
  // allow origin for demo purposes
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});
*/