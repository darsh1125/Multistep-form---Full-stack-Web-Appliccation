import express, { Application } from 'express'
import { config } from 'dotenv';
import { dbConnection } from './models';
import router from './routes/route';
import cors from "cors";

config();
const app:Application = express();
const port = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors(
   
))
dbConnection();
app.use(router);

app.listen(port,()=>{
   console.log(`Server is running on Port ${port}`);
});