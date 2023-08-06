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

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const error = (msg) => {
  return console.log(
    `\x1b[1;91m| ERROR    | \x1b[90m${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "O" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;91m ${msg}\x1b[0m`
  );
};

const warn = (msg) => {
  return console.log(
    `\x1b[1;33m| WARN     | \x1b[90m${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "O" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;33m ${msg}\x1b[0m`
  );
};

const debug = (msg) => {
  return console.log(
    `\x1b[1;35m| DEBUG    | \x1b[90m${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "O" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;35m ${msg}\x1b[0m`
  );
};

const info = (msg) => {
  return console.log(
    `\x1b[1;37m| INFO     | \x1b[90m${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "O" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;37m ${msg}\x1b[0m`
  );
};

const ready = (msg) => {
  return console.log(
    `\x1b[1;34m| READY    | \x1b[90m${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "O" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;34m ${msg}\x1b[0m`
  );
};

const command = (msg) => {
  return console.log(
    `\x1b[1;36m| COMMAND  | \x1b[90m${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "O" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;36m ${msg}\x1b[0m`
  );
};

const event = (msg) => {
  return console.log(
    `\x1b[1;93m| EVENT    | \x1b[90m${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "O" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;93m ${msg}\x1b[0m`
  );
};

const database = (msg) => {
  return console.log(
    `\x1b[1;36m| DATABASE |\x1b[90m ${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "O" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;36m ${msg}\x1b[0m`
  );
};

const shard = (msg) => {
  return console.log(
    `\x1b[1;32m| SHARD    |\x1b[90m ${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "O" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;32m ${msg}\x1b[0m`
  );
};

const cluster = (msg) => {
  return console.log(
    `\x1b[1;33m| CLUSTER  |\x1b[90m ${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "O" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;33m ${msg}\x1b[0m`
  );
};

const lang = (msg) => {
  return console.log(
    `\x1b[1;95m| LANGUAGE |\x1b[90m ${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "O" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;95m ${msg}\x1b[0m`
  );
};

const critical = (msg) => {
  return console.log(
    `\x1b[1;31m| CRITICAL |\x1b[90m ${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "O" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }\x1b[1;31m ${msg}\x1b[0m`
  );
};

module.exports = {
  error,
  warn,
  debug,
  info,
  ready,
  command,
  event,
  database,
  shard,
  cluster,
  lang,
  critical,
};
