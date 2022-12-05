import Sequelize from "sequelize";

// msql query to create user with all privileges
// CREATE USER 'myUsername'@'localhost' IDENTIFIED BY 'MySecretPassword';
// GRANT ALL PRIVILEGES ON * . * TO 'myUsername'@'localhost';

const dbInstance = new Sequelize({
  host: "localhost",
  port: 3306,
  username: "myUsername",
  password: "MySecretPassword",
  database: "appweb",
  dialect: "mysql",
});

export { dbInstance };
