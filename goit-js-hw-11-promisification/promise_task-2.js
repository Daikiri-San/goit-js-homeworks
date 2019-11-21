/* eslint-disable indent */
/* eslint-disable comma-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const showUsers = (allUsers, userName) => allUsers.map(user => (user.name === userName ? { ...user, active: !user.active } : user),);

const toggleUserState = (allUsers, userName) => new Promise((resolve) => {
    resolve(showUsers(allUsers, userName));
  });

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
