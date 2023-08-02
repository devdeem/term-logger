![banner](https://cdn.discordapp.com/attachments/1050740855805313064/1125727738410573894/Logo.png)

# Term Logger

Custom formatted **Console Logs** and **Anti-Crash** system for your Discord bot!

![version](https://img.shields.io/npm/v/term-logger)
![collaborators](https://img.shields.io/npm/collaborators/term-logger)
![downloads](https://img.shields.io/npm/dw/term-logger)
![licence](https://img.shields.io/npm/l/term-logger)

## Installation

To install this package simply run:

```bash
npm install term-logger@latest
or
yarn add term-logger@latest
or
pnpm add term-logger@latest
```

## Usage

Usage only for console logs

```javascript
const { Logger } = require("term-logger");

//Defaul Logs
Logger.error(`You have error here dumb ass`);
Logger.debug(`Yoooo, my balls itch`);
Logger.info(`The world's largest penis measures 48cm`);
Logger.warn(`You should take a break noob`);
Logger.critical(`AAAAAAAAAAAAAAAAAAAAAAAA`);

//Discord Logs
Logger.ready(`Logged in as EpicBalls#6969`);
Logger.command(`Successfully registered gay.js command`);
Logger.event(`Successfully registered ready.js event`);
Logger.heatbeat(`Epic Discord gateway logs`);
Logger.database(`Successfully connected to the database`);
Logger.shard(`Shard is ready | Shard ID: 1`);
Logger.cluster(`Launched Cluster 3`);
Logger.lang("Successfully loaded en-US.js language");
```

Usage only for Anti-Crash

```javascript
const { Client } = require("discord.js");
const { TermLogger } = require("term-logger");

const client = new Client({
  intents: [...],
});

// You can enable/disable system logs (Use only Boolean)
const noCrash = new TermLogger(client, {
  enableAntiCrash: true,
  systemMessages: true,
});

client.login("YOUR_BOT_TOKEN");
```

Usage for both

```javascript
const { Client } = require("discord.js");
const { TermLogger, Logger } = require("term-logger");

const client = new Client({
  intents: [...],
});

const noCrash = new TermLogger(client, {
  enableAntiCrash: true,
  systemMessages: true,
});

Logger.ready(`Logged in as ${client.user.username}`);

client.login("YOUR_BOT_TOKEN");
```

# Documentation

## Package Options

### Constructor

```javascript
new TermLogger(client);
```

<table>
 <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>enableAntiCrash</td>
            <td>Boolean</td>
            <td>Enable or disable AntiCrash system</td>
          </tr>
          <tr>
            <td>systemMessages</td>
            <td>Boolean</td>
            <td>Enable or disable system messages</td>
          </tr>
</table>

<h3>Logger Options</h3>
        <table>
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Logger.error("message")</td>
            <td>Logs an error message</td>
          </tr>
          <tr>
            <td>Logger.debug("message")</td>
            <td>Logs a debug message</td>
          </tr>
          <tr>
            <td>Logger.info("message")</td>
            <td>Logs an information message</td>
          </tr>
          <tr>
            <td>Logger.warn("message")</td>
            <td>Logs a warning message</td>
          </tr>
          <tr>
            <td>Logger.critical("message")</td>
            <td>Logs a critical message</td>
          </tr>
          <tr>
            <td>Logger.ready("message")</td>
            <td>Logs a message indicating that the app is ready</td>
          </tr>
          <tr>
            <td>Logger.command("message")</td>
            <td>Logs a message that the command was executed</td>
          </tr>
          <tr>
            <td>Logger.event("message")</td>
            <td>Logs a message that the event has been loaded</td>
          </tr>
          <tr>
            <td>Logger.heartbeat("message")</td>
            <td>Logs a heartbeat or activity message</td>
          </tr>
          <tr>
            <td>Logger.database("message")</td>
            <td>Logs a message related to database operations</td>
          </tr>
          <tr>
            <td>Logger.shard("message")</td>
            <td>Logs a message related to shards</td>
          </tr>
          <tr>
            <td>Logger.cluster("message")</td>
            <td>Logs a message related to clusters</td>
          </tr>
          <tr>
            <td>Logger.lang("message")</td>
            <td>Logs a message related to language</td>
          </tr>
        </table>
        <p><b>Message must always be either a STRING or DATA!</b></p>

# Do you have any issues?

If you have any issues don't hesitate to report it via [Github Issues](https://github.com/DEEM-0001/term-logger/issues).

# Support

If you need help or assistance please either ask in my [Discord Server](https://support.roblybot.xyz/) and if you have an idea what to add to term-logger let us know on support.

# Sponsor Us

Do you use **Term-Logger** and are you satisfied?
You can support us with a one-time donation to help us improve our work: [Donate here](https://github.com/sponsors/DEEM-0001).

> Developed by @deemdev with ❤️
