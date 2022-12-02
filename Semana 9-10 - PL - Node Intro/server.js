import express, { Router } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import 'dotenv/config';

const app = express();
const clientURL = 'http://localhost:5500';
const corsOptions = {
  origin: clientURL,
};

app.use(cors(corsOptions));
app.use(morgan('short'));
app.use(express.json());

const router = Router();

const datajson = fs.readFileSync('data.json', 'utf-8'); // Read string-json from file
const todos = JSON.parse(datajson); // Parse to JSON

// GET all todos
router.get('/', (req, res) => {
  res.send(todos);
});

// GET total todos
router.get('/total', (req, res) => {
  const totalTodos = todos.length;
  res.json(totalTodos);
});

// GET total todos, done todos, not done todos (as object)
router.get('/all', (req, res) => {
  const totalTodos = todos.length;
  const doneTodos = todos.filter((todo) => todo.done).length;
  const notDoneTodos = todos.filter((todo) => !todo.done).length;
  res.json({ totalTodos, doneTodos, notDoneTodos });
});

// GET todo by id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos.find((todo) => todo.id == id);
  res.send(todo);
});

// POST todo (without done, that is always false at the begining)
router.post('/', (req, res) => {
  const description = req.body.description;
  const newTodo = {
    id: Math.floor(Math.random() * 1000),
    description,
    done: false,
  };
  todos.push(newTodo);
  saveTodos(todos);
  res.send(todos);
});

// PUT todo by id (desc or done)
router.put('/:id', (req, res) => {
  const description = req.body.description;
  const done = req.body.done;
  const id = req.params.id;
  const todo = todos.find((todo) => todo.id == id);

  const updatedTodo = {
    id: todo.id,
    description: description ? description : todo.description,
    done: done ?? todo.done,
  };

  const todoIdx = todos.findIndex((todo) => todo.id == id);
  todos[todoIdx] = updatedTodo;

  saveTodos(todos);
  res.send(updatedTodo);
});

// PUT todo by id, just toggle done
router.put('/:id/done', (req, res) => {
  const id = req.params.id;
  const todo = todos.find((todo) => todo.id == id);

  todo.done = !todo.done;

  saveTodos(todos);
  res.send(todo);
});

// DELETE todo by id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const todoIdx = todos.findIndex((todo) => todo.id == id);

  if (todoIdx > -1) {
    todos.splice(todoIdx, 1);
  }

  saveTodos(todos);
  res.send(todos);
});

app.use(router);

function saveTodos(newTodos) {
  fs.writeFileSync('data.json', JSON.stringify(newTodos));
}

app.listen(3000, 'localhost', () => {
  console.log('Server up and running at http://%s:%s', 'localhost', 3000);
});
