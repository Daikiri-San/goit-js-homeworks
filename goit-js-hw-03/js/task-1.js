/* eslint-disable no-restricted-syntax */
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  ...{ mood: 'happy', hobby: 'javascript', premium: false },
};

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${[key]}: ${user[key]}`);
}
