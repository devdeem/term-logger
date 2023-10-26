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
