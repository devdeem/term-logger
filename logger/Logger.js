// COLORS PACKAGE
const chalk = require('chalk');

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const error = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.red(`ERROR`)}    ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const critical = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.red(`CRITICAL`)} ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const success = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.green(`SUCCESS`)}  ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const warn = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.yellow(`WARNING`)}  ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const waiting = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.cyan(`WAITING`)}  ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const complete = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.green(`COMPLETE`)} ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const debug = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.magenta(`DEBUG`)}    ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const fatal = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.red(`FATAL`)}    ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const info = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.white(`INFO`)}     ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const note = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.grey(`NOTE`)}     ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const pending = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.magenta(`PENDING`)}  ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const start = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.green(`START`)}    ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const watch = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.yellow(`WATCHING`)} ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const ready = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.blue(`READY`)}    ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const command = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.cyan(`COMMAND`)}  ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const event = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.yellow(`EVENT`)}    ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const database = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.grey(`DATABASE`)} ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const shard = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.green(`SHARD`)}    ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const cluster = (data) => {
  return console.log(
    `${chalk.grey(`>`)}  ${chalk.underline.blue(`CLUSTER`)}  ${chalk.grey(
      `[${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? 'O' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }]`
    )}   ${chalk.white(`${data}`)}`
  );
};

const log = (data) => {
  return console.log(`${data}`);
};

module.exports = {
  error,
  critical,
  success,
  warn,
  waiting,
  complete,
  debug,
  fatal,
  info,
  note,
  pending,
  start,
  watch,
  log,
  ready,
  command,
  event,
  database,
  shard,
  cluster,
};
