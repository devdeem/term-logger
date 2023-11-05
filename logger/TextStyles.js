// COLORS PACKAGE
const c = require('colors');

const bold = (data) => {
  return console.log(`${`${data}`.bold}`);
};

const italic = (data) => {
  return console.log(`${`${data}`.italic}`);
};

const underline = (data) => {
  return console.log(`${`${data}`.underline}`);
};

const inverse = (data) => {
  return console.log(`${`${data}`.inverse}`);
};

const strikethrough = (data) => {
  return console.log(`${`${data}`.strikethrough}`);
};

const rainbow = (data) => {
  return console.log(`${`${data}`.rainbow}`);
};

const america = (data) => {
  return console.log(`${`${data}`.america}`);
};

const trap = (data) => {
  return console.log(`${`${data}`.trap}`);
};

const random = (data) => {
  return console.log(`${`${data}`.random}`);
};

module.exports = {
  bold,
  italic,
  underline,
  inverse,
  strikethrough,
  rainbow,
  america,
  trap,
  random,
};
