import Router from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from '../controllers/todos.js';

const routes = Router();

// {host}/api/todos/...

routes.get('/', getAllTodos);

routes.get('/:id', getTodoById);

routes.post('/', createTodo);

routes.put('/:id', updateTodo);

routes.delete('/:id', deleteTodo);

export { routes };
