// COLORS PACKAGE
const c = require('colors');

const brightRed = (data) => {
  return console.log(`${`${data}`.brightRed}`);
};

const brightGreen = (data) => {
  return console.log(`${`${data}`.brightGreen}`);
};

const brightYellow = (data) => {
  return console.log(`${`${data}`.brightYellow}`);
};

const brightBlue = (data) => {
  return console.log(`${`${data}`.brightBlue}`);
};

const brightPurple = (data) => {
  return console.log(`${`${data}`.brightMagenta}`);
};

const brightCyan = (data) => {
  return console.log(`${`${data}`.brightCyan}`);
};

const brightWhite = (data) => {
  return console.log(`${`${data}`.brightWhite}`);
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
