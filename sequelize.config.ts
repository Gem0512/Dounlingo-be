import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: "12345",
    database: 'mobile',
});
