let DATABASE = require('./env.database');
const Sequelize = require('sequelize');


if (process.env.CLEARDB_DATABASE_URL){
    DATABASE = {};
    DATABASE.LOCAL.DBNAME = process.env.DB;
    DATABASE.LOCAL.USERNAME = process.env.USER;
    DATABASE.LOCAL.PASSWORD = process.env.PASSWORD;

    const sequelize = new Sequelize(DATABASE.LOCAL.DBNAME, DATABASE.LOCAL.USERNAME, DATABASE.LOCAL.PASSWORD, { // nom de la BDD, username, password
        host: process.env.HOST||'localhost',
        dialect: 'mysql',
        logging: true,//passer a true pour voir les différentes requêtes effectuées par l'ORM
    });
    
    return module.exports = sequelize;
}
if (!process.env.CLEARDB_DATABASE_URL){
    const sequelize = new Sequelize(DATABASE.LOCAL.DBNAME, DATABASE.LOCAL.USERNAME, DATABASE.LOCAL.PASSWORD, { // nom de la BDD, username, password
    host: process.env.HOST||'localhost',
    dialect: 'mysql',
    logging: false,//passer a true pour voir les différentes requêtes effectuées par l'ORM
    });
    
    //on exporte pour utiliser notre connexion depuis les autre fichiers.
    var exports = module.exports = {};
    exports.sequelize = sequelize;
}