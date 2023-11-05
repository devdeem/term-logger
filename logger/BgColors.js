// COLORS PACKAGE
const c = require('colors');

const bgRed = (data) => {
  return console.log(`${`${data}`.bgRed}`);
};

const bgGreen = (data) => {
  return console.log(`${`${data}`.bgGreen}`);
};

const bgYellow = (data) => {
  return console.log(`${`${data}`.bgYellow}`);
};

const bgBlue = (data) => {
  return console.log(`${`${data}`.bgBlue}`);
};

const bgPurple = (data) => {
  return console.log(`${`${data}`.bgMagenta}`);
};

const bgCyan = (data) => {
  return console.log(`${`${data}`.bgCyan}`);
};

const bgWhite = (data) => {
  return console.log(`${`${data}`.bgWhite}`);
};

const bgGrey = (data) => {
  return console.log(`${`${data}`.bgGrey}`);
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
