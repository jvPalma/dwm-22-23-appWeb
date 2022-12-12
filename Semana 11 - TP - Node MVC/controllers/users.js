import { UserModel } from "../models/users.js";

export const getAllUsers = async (req, res) => {
  const users = await UserModel.findAll();

  return res.send({ users });
};
