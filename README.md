![banner](https://cdn.discordapp.com/attachments/1050740855805313064/1125727738410573894/Logo.png)

# TERM LOGGER

Custom formatted **Console Logs** and **Anti-Crash** system for your Discord bot!

![version](https://img.shields.io/npm/v/term-logger)
![collaborators](https://img.shields.io/npm/collaborators/term-logger)
![downloads](https://img.shields.io/npm/dt/term-logger)
![licence](https://img.shields.io/npm/l/term-logger)

## Installation

To install this package simply run:

```bash
npm i term-logger@latest
```

## Usage

Usage only for Console Logs

```javascript
const { Logger } = require("term-logger");

//Defaul Logs
Logger.error(`Example log text!`);
Logger.debug(`Example log text!`);
Logger.info(`Example log text!`);
Logger.warn(`Example log text!`);
Logger.critical(`Example log text!`);

//Discord Logs
Logger.ready(`Example log text!`);
Logger.command(`Example log text!`);
Logger.event(`Example log text!`);
Logger.database(`Example log text!`);
Logger.shard(`Example log text!`);
Logger.cluster(`Example log text!`);
Logger.lang("Example log text!");
```

Usage for Colors

```javascript
const { Colors } = require("term-logger");

Colors.grey("message");
Colors.red("message");
Colors.green("message");
Colors.yellow("message");
Colors.blue("message");
Colors.purple("message");
Colors.cyan("message");
Colors.white("message");
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

<h3>Colors Options</h3>
        <table>
          <tr>
            <th>Colors</th>
          </tr>
          <tr>
            <td>Grey</td>
          </tr>
          <tr>
            <td>Red</td>
          </tr>
          <tr>
            <td>Green</td>
          </tr>
          <tr>
            <td>Yellow</td>
          </tr>
          <tr>
            <td>Blue</td>
          </tr>
          <tr>
            <td>Purple</td>
          </tr>
          <tr>
            <td>Cyan</td>
          </tr>
          <tr>
            <td>White</td>
          </tr>
        </table>

# Do you have any issues?

If you have any issues don't hesitate to report it via [Github Issues](https://github.com/devdeem/term-logger/issues).

# Support

If you need help or assistance please either ask in my [Discord Server](https://support.roblybot.xyz/) and if you have an idea what to add to term-logger let us know on support.

# Sponsor Us

Do you use **Term-Logger** and are you satisfied?
You can support us with a one-time donation to help us improve our work: [Donate here](https://ko-fi.com/deemdev).

[![Discord Banner](https://api.weblutions.com/discord/invite/UdKSrxBXyd/)](https://discord.gg/UdKSrxBXyd)

> Developed by @deemdev with ❤️
