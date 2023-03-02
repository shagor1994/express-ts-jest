import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import AppDataSource from './config/ormConfig';
import {client} from "./config/redisConfig"

const app: Express = express();
app.use(express.json());
const port = process.env.PORT||3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
console.log("hello")



AppDataSource.initialize()
    .then(async () => {
        console.log("Data Source has been initialized!")
        try{
            await client.connect();
        }catch(err){
            console.log("Error during redis connection",err)
        }

        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
        });
    })
    .catch((err:any) => {
        console.error("Error during Data Source initialization", err)
    })