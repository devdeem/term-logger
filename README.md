<div align="center">
  <img alt="TermLogger-Banner" src="./media/Banner.png" />
</div>

<h1 align="center">TERM LOGGER</h1>
<p align="center">A simple node logger with custom formatted console logs!</p>

<p align="center">
  <a href="https://www.npmjs.com/package/term-logger">
    <img alt="version" src="https://img.shields.io/npm/v/term-logger" />
  </a>
  <a href="https://www.npmjs.com/package/term-logger">
    <img alt="collaborators" src="https://img.shields.io/npm/collaborators/term-logger" />
  </a>
  <a href="https://www.npmjs.com/package/term-logger">
    <img alt="downloads" src="https://img.shields.io/npm/dt/term-logger" />
  </a>
  <a href="https://www.npmjs.com/package/term-logger">
    <img alt="licence" src="https://img.shields.io/npm/l/term-logger" />
  </a>
</p>

<h1>Getting Started</h1>
<h2>Installation</h2>
<ul>
  <li>To install term-logger package simply run this command in cmd:</li>
</ul>

```
npm install term-logger@latest
```

<h2>Usage</h2>
<h4>Logger Options</h4>
<ul>
  <li>Import term-logger and start using any of the default loggers and colors.</li>
</ul>

<details>
  <summary>View all of the available loggers.</summary>

  <br />

- `error`
- `success`
- `warn`
- `await`
- `complete`
- `debug`
- `fatal`
- `info`
- `note`
- `pending`
- `start`
- `watch`
- `critical`
- `ready`
- `command`
- `event`
- `database`
- `shard`
- `cluster`
- `log`
</details>

<br />

```js
const { Logger } = require('term-logger');

Logger.error(new Error('...'));
Logger.success('...');
// and 18 more logs...
```

<h4>Colors Options</h4>

<details>
  <summary>View all of the available colors.</summary>

  <br />

- `red`
- `green`
- `yellow`
- `blue`
- `purple`
- `cyan`
- `white`
- `gray`
- `grey`
- `brightRed`
- `brightGreen`
- `brightYellow`
- `brightBlue`
- `brightPurple`
- `brightCyan`
- `brightWhite`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgPurple`
- `bgCyan`
- `bgWhite`
- `bgGrey`
</details>

<br />

```js
const { TextColors, BrightColors, BgColors } = require('term-logger');

TextColors.red('...');
TextColors.blue('...');
// and 7 more colors...

BrightColors.brightWhite('...');
BrightColors.brightYellow('...');
// and 5 more bright colors...

BgColors.bgGreen('...');
BgColors.bgRed('...');
// and 6 more background colors...
```

<h4>TextStyles Options</h4>

<details>
  <summary>View all of the available text styles.</summary>

  <br />

- `bold`
- `italic`
- `underline`
- `inverse`
- `strikethrough`
- `rainbow`
- `america`
- `trap`
- `random`
</details>

<br />

```js
const { TextStyles } = require('term-logger');

TextStyles.italic('...');
TextStyles.underline('...');
// and 7 more text styles...
```

<h2>Do you have any issues?</h2>
<p>
  If you have any issues don't hesitate to report it via
  <a href="https://github.com/devdeem/term-logger/issues">GitHub Issues</a>.
</p>

<h2>Sponsor Us ❤️</h2>
<p>
  Do you use <b>Term Logger</b> and are you satisfied?<br>You can support us with a one-time donation to help us improve our
  work <a href="https://ko-fi.com/deemdev">here</a>.
</p>

<footer>> Developed by <b>@deemdev</b> with ❤️</footer>
