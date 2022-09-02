import { Sequelize } from "sequelize";

const db = new sequelize('nodereactmultirole', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});