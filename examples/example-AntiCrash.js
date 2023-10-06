/*
    Contacts:
    Discord : @deemdev
    Support Server : https://discord.gg/UdKSrxBXyd
 */

// Import necessary modules
const { Client, GatewayIntentBits } = require("discord.js");
const { TermLogger } = require("term-logger");
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

// Login the client to Discord
client.login(process.env.DISCORD_TOKEN);
