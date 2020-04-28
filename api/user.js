const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const existingUser = users.find((user) => {
    return user.room === room && user.name === name;
  });
  if (existingUser) {
    return { error: "Username already exixts" };
  }
  const user = { id, name, room };
  users.push(user);
  //   users = [users, ...user];
  return { user };
};
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.filter((user, ind) => index !== ind);
  }
};
const getUser = (id) => {
  return users.find((user) => user.id === id);
};
const getUserInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUserInRoom };
