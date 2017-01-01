import {Router, Request, Response, NextFunction} from 'express';

export class UserRouter{
    router: Router

    //initialize the UserRouter
    constructor() {
        this.router = Router();
        this.init();
    }

    public getALL (req: Request, res: Response, next: NextFunction) {
        res.send(JSON.stringify('get All'));
    }

    //configure all APIs calls
    init() {
        this.router.get('/', this.getALL);
    }
}

export default new UserRouter().router;