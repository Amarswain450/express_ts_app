import express from 'express';

const router:express.Router = express.Router();

router.get('/users', (req: express.Request, res: express.Response) => {
    res.status(200).json({name: "amar"});
});

export default router;