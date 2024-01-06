// COLORS PACKAGE
const chalk = require('chalk');

const red = (data) => {
  return console.log(chalk.red(data));
};

const green = (data) => {
  return console.log(chalk.green(data));
};

const yellow = (data) => {
  return console.log(chalk.yellow(data));
};

const blue = (data) => {
  return console.log(chalk.blue(data));
};

const purple = (data) => {
  return console.log(chalk.magenta(data));
};

const cyan = (data) => {
  return console.log(chalk.cyan(data));
};

const white = (data) => {
  return console.log(chalk.white(data));
};

const gray = (data) => {
  return console.log(chalk.gray(data));
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
};
