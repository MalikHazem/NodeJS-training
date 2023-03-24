import { Sequelize } from "sequelize";
import config from "../config/config.js";
import Student from "./student.js";
import Cite from "./cite.js";


const db = {};
db.sequelize = new Sequelize(
    config.DB, config.USER, config.PASSWORD,
    {
        host: config.HOST,
        port: config.PORT,
        dialect: config.dialect,
        pool:
        {
            acquire: config.pool.acquire,
            idle: config.pool.idle,
            max: config.pool.max,
            min: config.pool.min 
        }
    }
); 

db.Student = Student(db.sequelize);
db.Cite = Cite(db.sequelize);
export default db;
