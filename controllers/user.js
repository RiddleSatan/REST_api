import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const addUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(
    `user with name ${user.firstName} has been added to the moc database`
  );
  console.log(users);
};

export const getUser = (req, res) => {
  const findUser = users.find((user) => user.id == req.params.id);
  res.send(findUser);
};

export const removeUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);
  console.log(users);
  res.send(`The user with id ${id} has been removed`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const findUser = users.find((user) => user.id == id);

  if (firstName) findUser.firstName = firstName;
  if (lastName) findUser.lastName = lastName;
  if (age) findUser.age = age;

  res.send(`The user with the id:${id} has been updated`);
};
