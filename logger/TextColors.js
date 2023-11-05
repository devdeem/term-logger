// COLORS PACKAGE
const c = require('colors');

const red = (data) => {
  return console.log(`${`${data}`.red}`);
};

const green = (data) => {
  return console.log(`${`${data}`.green}`);
};

const yellow = (data) => {
  return console.log(`${`${data}`.yellow}`);
};

const blue = (data) => {
  return console.log(`${`${data}`.blue}`);
};

const purple = (data) => {
  return console.log(`${`${data}`.magenta}`);
};

const cyan = (data) => {
  return console.log(`${`${data}`.cyan}`);
};

const white = (data) => {
  return console.log(`${`${data}`.white}`);
};

const gray = (data) => {
  return console.log(`${`${data}`.gray}`);
};

const grey = (data) => {
  return console.log(`${`${data}`.grey}`);
};

module.exports = {
  red,
  green,
  yellow,
  blue,
  purple,
  cyan,
  white,
  gray,
  grey,
};
