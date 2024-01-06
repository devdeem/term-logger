// COLORS PACKAGE
const chalk = require('chalk');

const bgRed = (data) => {
  return console.log(chalk.bgRed(data));
};

const bgGreen = (data) => {
  return console.log(chalk.bgGreen(data));
};

const bgYellow = (data) => {
  return console.log(chalk.bgYellow(data));
};

const bgBlue = (data) => {
  return console.log(chalk.bgBlue(data));
};

const bgPurple = (data) => {
  return console.log(chalk.bgMagenta(data));
};

const bgCyan = (data) => {
  return console.log(chalk.bgCyan(data));
};

const bgWhite = (data) => {
  return console.log(chalk.bgWhite(data));
};

const bgGrey = (data) => {
  return console.log(chalk.bgGrey(data));
};

module.exports = {
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgPurple,
  bgCyan,
  bgWhite,
  bgGrey,
};
