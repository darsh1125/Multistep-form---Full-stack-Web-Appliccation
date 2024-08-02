// src/database/sequelize.config.js
require('ts-node/register');
const configs = require('../config/configs');
module.exports = {
  username: "root",
  password: "password",
  database: "jobApplicationDb",
  host: "localhost",
  dialect: 'mysql',
  port:3306
};