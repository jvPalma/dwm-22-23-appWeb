import { UserModel } from "../models/users.js";
import { createToken } from "../utils/jwt.js";

export const getAllUsers = async (req, res) => {
  console.log(req.user);
  const users = await UserModel.findAll();

  return res.send({ users });
};

export const getById = async (req, res) => {
  const user = await UserModel.findByPk(req.user.id);
  delete user.password;

  return res.send(res, { user });
};

export const create = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.create({ username, password });

  return res.send(user);
};

export const update = async (req, res) => {
  const { id, name, username } = req.body;

  const user = await UserModel.findByPk(id);

  user.name = name;
  user.username = username;

  await user.save();

  return res.send(user);
};

export const deleteRequest = async (req, res) => {
  const id = req.body.id;

  await UserModel.destroy({
    where: {
      id: id,
    },
  });
  return res.send({ mesage: "User with ID " + id + " deleted" });
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({
    where: {
      username: username,
      password: password,
    },
  });

  if (!user) {
    return res.status(500).json({
      message: "CREDENCIAIS ERRADAS",
    });
  }

  const token = createToken({
    id: user.id,
    username: user.username,
    batatas: 2,
  });
  return res.send({
    message: "LOGIN FEITO",
    token,
  });
};
