import { TodoModel } from '../models/todos.js';

export const getAllTodos = async (req, res) => {
  const todos = await TodoModel.findAll();

  res.send({ todos });
};

export const getTodoById = async (req, res) => {
  const id = req.params.id;
  const todo = await TodoModel.findOne({ where: { id: id } });
  if (!todo) return res.sendStatus(404);

  res.send({ todo });
};

export const createTodo = async (req, res) => {
  const { content } = req.body;

  try {
    const todo = await TodoModel.create({ content });
    res.send({ todo });
  } catch (e) {
    res.status(400).send(e);
  }
};

export const updateTodo = async (req, res) => {
  const id = req.params.id;
  const { content, done } = req.body;

  try {
    await TodoModel.update(
      { content, done },
      {
        where: {
          id,
        },
      }
    );

    res.send('updated');
  } catch (err) {
    res.send(err);
  }
};

export const deleteTodo = async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await TodoModel.destroy({
      where: {
        id,
      },
    });

    if (todo === 0) {
      return res.send('No records were deleted');
    }

    res.send(`${todo} number of records were deleted`);
  } catch (err) {
    res.send(err);
  }
};
