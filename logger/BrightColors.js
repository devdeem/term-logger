// COLORS PACKAGE
const chalk = require('chalk');

const brightRed = (data) => {
  return console.log(chalk.redBright(data));
};

const brightGreen = (data) => {
  return console.log(chalk.greenBright(data));
};

const brightYellow = (data) => {
  return console.log(chalk.yellowBright(data));
};

const brightBlue = (data) => {
  return console.log(chalk.blueBright(data));
};

const brightPurple = (data) => {
  return console.log(chalk.magentaBright(data));
};

const brightCyan = (data) => {
  return console.log(chalk.cyanBright(data));
};

const brightWhite = (data) => {
  return console.log(chalk.whiteBright(data));
};

module.exports = {
  brightRed,
  brightGreen,
  brightYellow,
  brightBlue,
  brightPurple,
  brightCyan,
  brightWhite,
};
