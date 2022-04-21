require('dotenv').config({ path: './.env' })
import express from 'express';
const app:express.Application = express();

const port:string | undefined = process.env.PORT;

//config routing
import router from './routes/user-routes';
app.use('/api', router);

app.listen(Number(port), () => {
    console.log(`server running on port number ${port}`);
});

