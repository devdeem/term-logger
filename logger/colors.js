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

const grey = (msg) => {
  return console.log(`\x1b[0;30m${msg}\x1b[0m`);
};

const red = (msg) => {
  return console.log(`\x1b[0;31m${msg}\x1b[0m`);
};

const green = (msg) => {
  return console.log(`\x1b[0;32m${msg}\x1b[0m`);
};

const yellow = (msg) => {
  return console.log(`\x1b[0;93m${msg}\x1b[0m`);
};

const blue = (msg) => {
  return console.log(`\x1b[0;34m${msg}\x1b[0m`);
};

const purple = (msg) => {
  return console.log(`\x1b[0;35m${msg}\x1b[0m`);
};

const cyan = (msg) => {
  return console.log(`\x1b[0;36m${msg}\x1b[0m`);
};

const white = (msg) => {
  return console.log(`\x1b[0;37m${msg}\x1b[0m`);
};

module.exports = {
  grey,
  red,
  green,
  yellow,
  blue,
  purple,
  cyan,
  white,
};
