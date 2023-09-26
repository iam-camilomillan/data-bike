import { NextFunction, Request, Response } from 'express';
import { createUserSchema, deleteUserSchema, readUserSchema } from '../validators/user.js';
import { UserModel } from '../models/user.js';
import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  /* Gets and validates the user inputs */
  const result = createUserSchema.parse(req.body);

  /* Find the user by the username and if found return the user, if not found return null */
  const isRepetead = await UserModel.exists({ personal_id: result.personal_id });

  /* If the user exists returns an error */
  if (isRepetead) {
    throw createHttpError(401, 'User already exist.');
  }

  /* Creates the username */
  const username = result.first_name + '.' + result.last_name + '@' + result.store + '.databike';

  /* Encrypts the password */
  const hashedPassword = await bcrypt.hash(result.password, 10);

  const newUser = new UserModel({ ...result, username: username.toLowerCase(), password: hashedPassword });

  /* Saves the user in the database */
  await newUser.save();

  /* Sends back the created user */
  res.status(200).json(newUser);
};

const readUser = async (req: Request, res: Response, next: NextFunction) => {
  /* Gets and validates the user inputs */
  const result = readUserSchema.parse(req.params);

  /* Find the user by the id and if found return the user, if not found return null */
  const findUser = await UserModel.findById(result.id);

  /* If there is no user returns an error */
  if (!findUser) {
    throw createHttpError(401, 'User do not found.');
  }

  /* Sends back the find user */
  res.status(200).json(findUser);
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send();
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  /* Gets and validates the user inputs */
  const result = deleteUserSchema.parse(req.params);

  /* Finds the user by id and deletes it, the return the deleted user, if not user is found returns null */
  const deletedUser = await UserModel.findByIdAndDelete(result.id);

  /* If the deleted user is null return an error */
  if (!deletedUser) {
    throw createHttpError(401, 'User do not found.');
  }

  /* Sends back the deleted user */
  res.status(200).json(deletedUser);
};

const readUsers = async (req: Request, res: Response, next: NextFunction) => {
  /* Finds all the users */
  const users = await UserModel.find();

  /* Sends back the find users */
  res.status(200).json(users);
};

export default { createUser, readUser, updateUser, deleteUser, readUsers };
