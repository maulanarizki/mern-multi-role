import { Sequelize } from "sequelize";

const db = new Sequelize('nodereactmultirole', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;