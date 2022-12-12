import Sequelize from 'sequelize';
import { dbInstance } from '../config/db.js';

const TodoModel = dbInstance.define('todos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  done: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});
export { TodoModel };
