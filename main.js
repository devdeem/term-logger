const packageVersion = require("./package.json").version;
const { EventEmitter } = require("events");
const { Events } = require("discord.js");
const colors = require("colors");

const {
  error,
  warn,
  debug,
  info,
  ready,
  command,
  event,
  heartbeat,
  database,
  shard,
  cluster,
  lang,
  critical,
} = require("./logger/logs");

class TermLogger extends EventEmitter {
  TermLogger_Emit = this;

  constructor(client, options) {
    super();

    this.client = client;
    this.options = options;

    client.on(Events.ClientReady, async () => {
      if (options?.systemMessages === true) {
        console.log(
          `  ${`TERM-LOGGER`.grey} ${`|`.grey} ${
            `Package loading is in progress...`.grey
          }`
        );
      }

      if (!client) {
        throw new ReferenceError(`Discord Client is invalid!`);
      }

      if (options.enableAntiCrash === false) {
        if (options?.systemMessages === true) {
          console.log(
            `  ${`TERM-LOGGER`.grey} ${`|`.grey} ${
              `Option enableAntiCrash is ${
                options.enableAntiCrash ? "enabled" : "disabled"
              }! Package will not prevent bot termination`.grey
            }`
          );

          console.log(`  ${`------------------------------------`.rainbow}`);
          console.log(
            `  ${`TERM-LOGGER SETTINGS`.red} ${`:`.white}\n  ${`Option`.grey} ${
              `enableAntiCrash`.white
            } ${
              `is ${options.enableAntiCrash ? "enabled" : "disabled"}`.grey
            }\n  ${`Option`.grey} ${`systemMessages`.white} ${
              `is enabled`.grey
            }\n\n  ${`Package version:`.grey} ${`${packageVersion}`.white}\n  ${
              `Developer:`.grey
            } ${`@deemdev`.white} ${`on Discord`.grey}`
          );
          console.log(`  ${`------------------------------------`.rainbow}`);
        }
      } else if (options.enableAntiCrash === true) {
        this.CacheErrors();
      } else {
        return console.log(
          `  ${`TERM-LOGGER ERROR:`.red} ${
            `Option enableAntiCrash is not valid! You can use only false/true (Boolean)`
              .white
          }`
        );
      }
    });

    this.emit("TermLogger_READY");
  }

  CacheErrors() {
    if (this.options?.systemMessages === true) {
      console.log(
        `  ${`TERM-LOGGER`.grey} ${`|`.grey} ${
          `Package is now ready to prevent bot termination!`.grey
        }`
      );

      if (this.options?.systemMessages === true) {
        console.log(`  ${`------------------------------------`.rainbow}`);
        console.log(
          `  ${`TERM-LOGGER SETTINGS`.red} ${`:`.white}\n  ${`Option`.grey} ${
            `enableAntiCrash`.white
          } ${
            `is ${this.options.enableAntiCrash ? "enabled" : "disabled"}`.grey
          }\n  ${`Option`.grey} ${`systemMessages`.white} ${
            `is enabled`.grey
          }\n\n  ${`Package version:`.grey} ${`${packageVersion}`.white}\n  ${
            `Developer:`.grey
          } ${`@deemdev`.white} ${`on Discord`.grey}`
        );
        console.log(`  ${`------------------------------------`.rainbow}`);
      }
    }

    process.on("unhandledRejection", (r, p) => {
      console.log(
        `  ${`TERM-LOGGER`.grey} ${`|`.grey} ${`ERROR:`.red} ${
          `UNHANDLED REJECTION`.white
        }`
      );
      console.log(r);
      console.log(p);
    });

    process.on("uncaughtException", (e, o) => {
      console.log(
        `  ${`TERM-LOGGER`.grey} ${`|`.grey} ${`ERROR:`.red} ${
          `UNCAUGHT EXCEPTION`.white
        }`
      );
      console.log(e);
      console.log(o);
    });

    process.on("uncaughtExceptionMonitor", (e, o) => {
      console.log(
        `  ${`TERM-LOGGER`.grey} ${`|`.grey} ${`ERROR:`.red} ${
          `UNCAUGHT EXCEPTION MONITOR`.white
        }`
      );
      console.log(e);
      console.log(o);
    });

    process.on("multipleResolves", (type, p, r) => {
      console.log(
        `  ${`TERM-LOGGER`.grey} ${`|`.grey} ${`ERROR:`.red} ${
          `MULTIPLE RESOLVES`.white
        }`
      );
      console.log(type);
      console.log(p);
      console.log(r);
    });
  }
}

module.exports = {
  TermLogger,
  Logger: {
    error,
    warn,
    debug,
    info,
    ready,
    command,
    event,
    heartbeat,
    database,
    shard,
    cluster,
    lang,
    critical,
  },
};
