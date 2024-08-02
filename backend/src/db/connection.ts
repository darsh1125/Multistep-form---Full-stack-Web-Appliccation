import { Sequelize } from 'sequelize';
import { DB_USER,DB_PASSWORD,HOST, DB_NAME } from '../config/configs';

let sequelizeConnection: Sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  port:3306, 
  omitNull:true
});

export default sequelizeConnection;
