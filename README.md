<div align="center">
<img alt="term-logger" src="https://cdn.discordapp.com/attachments/1050740855805313064/1125727738410573894/Logo.png" width="546" style="max-width: 100%;">
</div>

<h4 align="center">
Custom formatted <b>Console Logs</b> and <b>Anti-Crash</b> system for your Discord bot!
</h4>

<h4 align="center">
<img alt="version" src="https://img.shields.io/npm/v/term-logger">
<img alt="collaborators" src="https://img.shields.io/npm/collaborators/term-logger">
<img alt="downloads" src="https://img.shields.io/npm/dw/term-logger">
<img alt="licence" src="https://img.shields.io/npm/l/term-logger">
</h4>

<h1 align="center">
Install
</h1>
<h4 align="center">
To install this package simply run <b>npm install term-logger@latest</b>.
</h4>

<h1 align="center">
Usage
</h1>

#### Usage only for console logs

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

#### Usage only for Anti-Crash

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

#### Usage for both

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

<h1 align="center">
Documentation
</h1>
<h2>Package Options</h2>
<h3>Constructor</h3>

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
        <p><b>Message must always be either a STRING or DATA</b></p>

<h1 align="center">
Do you have any issues?
</h1>
<h4 align="center">
If you have any issues don't hesitate to report it via <a href="https://github.com/DEEM-0001/term-logger/issues">GitHub Issues</a>.
</h4>

<h1 align="center">
Support
</h1>

<h4 align="center">
If you need help or assistance please either ask in my <a href="https://support.roblybot.xyz/">Discord Server</a> and if you have an idea what to add to term-logger let us know on support.
</h4>

<h1 align="center">
Sponsor Us
</h1>

<h4 align="center">
Do you use <b>Term-Logger</b> and are you satisfied?<br>You can support us with a one-time donation to help us improve our work: <a href="https://github.com/sponsors/DEEM-0001">Donate here</a>
</h4>

> Developed by @deemdev with ❤️
