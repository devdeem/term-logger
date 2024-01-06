// COLORS PACKAGE
const chalk = require('chalk');

const bold = (data) => {
  return console.log(chalk.bold(data));
};

const dim = (data) => {
  return console.log(chalk.dim(data));
};

const italic = (data) => {
  return console.log(chalk.italic(data));
};

const underline = (data) => {
  return console.log(chalk.underline(data));
};

const inverse = (data) => {
  return console.log(chalk.inverse(data));
};

const hidden = (data) => {
  return console.log(chalk.hidden(data));
};

const strikethrough = (data) => {
  return console.log(chalk.strikethrough(data));
};

const visible = (data) => {
  return console.log(chalk.visible(data));
};

module.exports = {
  bold,
  dim,
  italic,
  underline,
  inverse,
  hidden,
  strikethrough,
  visible,
};
