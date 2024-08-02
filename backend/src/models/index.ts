import fs from 'fs';
import { Sequelize } from 'sequelize-typescript';
import { DB_NAME, DB_PASSWORD, DB_USER,PORT,HOST } from '../config/configs';
// import dotenv from 'dotenv';
import path from 'path';
import allModel from '../models/models';

let sequelize: Sequelize;
   sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host:HOST,
    dialect:'mysql',
    port:3306
  }); 

const db = {sequelize,Sequelize,...allModel};
sequelize.addModels(Object.values(allModel));

export default db;

export const dbConnection = ()=>{
    sequelize.authenticate()
    .then(()=> console.log("Successfully connected to database "))
    .catch((err)=>console.log(`Something went wrong ${err.message}`));
  }
