/*
   This bot is an one-file and all-in-one example bot, 
   that shows the main things that you can do with Term-Logger.

   - This example is made on discord.js v14!
   - The bot is 100% works but it's recommended to remake it!
   - This bot's code can be used in your code in any way without any restrictions!
     That's all. Enjoy!

    Contacts:
    Discord : @deemdev
    Support Server : https://discord.gg/UdKSrxBXyd
 */

// Import necessary modules
const { Client, GatewayIntentBits, Events, ActivityType } = require("discord.js");
const { TermLogger, Logger } = require("term-logger");
require("dotenv").config();

// Create a new instance of the Discord Client
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// Create a new instance of the Term-Logger
const logger = new TermLogger(client, {
  enableAntiCrash: true,
  systemMessages: true,
});

// Event handler for when the client is ready
client.on(Events.ClientReady, async () => {
  setInterval(async () => {
    client.user.setPresence({
      status: "online",
      activities: [
        {
          type: ActivityType.Listening,
          name: `Example Code by @deemdev`,
        },
      ],
    });
  }, 60000);

  Logger.ready(`Logged in as ${client.user.username}`);
});

// Login the client to Discord
client.login(process.env.DISCORD_TOKEN);
