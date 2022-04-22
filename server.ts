require('dotenv').config({ path: './.env' })
import express from 'express';
const app:express.Application = express();
import bodyParser from 'body-parser';

const port:string | undefined = process.env.PORT;

//config databse
import connect from './config/db';
connect();

//config body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//config routing
import router from './routes/user-routes';
app.use('/api', router);

app.listen(Number(port), () => {
    console.log(`server running on port number ${port}`);
});

