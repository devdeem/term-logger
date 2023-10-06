/*
    Contacts:
    Discord : @deemdev
    Support Server : https://discord.gg/UdKSrxBXyd
 */

// Import necessary modules
const { Colors } = require("term-logger");

try {
  // Your code here:)
  Colors.cyan("Successfully passed try/catch test");
} catch (e) {
  // When there is an error in the code it sends an error message
  return Colors.red(e);
}

// ALL COLORS OPTIONS:

/**
Colors.grey('message');
Colors.red('message');
Colors.green('message');
Colors.yellow('message');
Colors.blue('message');
Colors.purple('message');
Colors.cyan('message');
Colors.white('message');
 */
