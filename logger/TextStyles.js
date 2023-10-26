/*
MIT License

Copyright (c) 2023 DEEM

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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
