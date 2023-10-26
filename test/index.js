const { Logger, TextColors, TextStyles, BrightColors, BgColors } = require('../main');

console.log('---------------------- LOGGER ----------------------');
Logger.error('ERROR event test');
Logger.success('SUCCESS event test');
Logger.warn('WARN event test');
Logger.await('AWAIT event test');
Logger.complete('COMPLETE event test');
Logger.debug('DEBUG event test');
Logger.fatal('FATAL event test');
Logger.info('INFO event test');
Logger.note('NOTE event test');
Logger.pending('PENDING event test');
Logger.start('START event test');
Logger.watch('WATCH event test');
Logger.critical('CRITICAL event test');
Logger.ready('READY event test');
Logger.command('COMMAND event test');
Logger.event('EVENT event test');
Logger.database('DATABASE event test');
Logger.shard('SHARD event test');
Logger.cluster('CLUSTER event test');
Logger.log('BASIC LOG event test');

console.log('---------------------- TEXT STYLES ----------------------');
TextStyles.bold('BOLD');
TextStyles.italic('ITALIC');
TextStyles.underline('UNDERLINE');
TextStyles.inverse('INVERSE');
TextStyles.strikethrough('STRIKETHROUGH');
TextStyles.rainbow('RAINBOW');
TextStyles.america('AMERICA');
TextStyles.trap('TRAP');
TextStyles.random('RANDOM');

console.log('---------------------- TEXT COLORS ----------------------');
TextColors.red('RED');
TextColors.green('GREEN');
TextColors.yellow('YELLOW');
TextColors.blue('BLUE');
TextColors.purple('PURPLE');
TextColors.cyan('CYAN');
TextColors.white('WHITE');
TextColors.gray('GRAY');
TextColors.grey('GREY');

console.log('---------------------- BRIGHT COLORS ----------------------');
BrightColors.brightRed('RED');
BrightColors.brightGreen('GREEN');
BrightColors.brightYellow('YELLOW');
BrightColors.brightBlue('BLUE');
BrightColors.brightPurple('PURPLE');
BrightColors.brightCyan('CYAN');
BrightColors.brightWhite('WHITE');

console.log('---------------------- BACKGROUND COLORS ----------------------');
BgColors.bgRed('RED');
BgColors.bgGreen('GREEN');
BgColors.bgYellow('YELLOW');
BgColors.bgBlue('BLUE');
BgColors.bgPurple('PURPLE');
BgColors.bgCyan('CYAN');
BgColors.bgWhite('WHITE');
BgColors.bgGrey('GREY');