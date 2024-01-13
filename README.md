<div align="center">
  <img alt="TermLogger-Banner" src="./media/Banner.png" />
</div>

<p align="center">A simple & fast logger for better console formatted output!</p>

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

<h4>Using NPM:</h4>

```
npm install term-logger
```

<h4>Using YARN:</h4>

```
yarn add term-logger
```

<h2>Usage</h2>
<h4>Logger Options</h4>
<ul>
  <li>Import term-logger and start using any of the default loggers and colors.</li>
</ul>

<details>
  <summary>View all of the available logger options.</summary>

  <br />

- `error`
- `success`
- `warn`
- `waiting`
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
</details>

<br />

```js
const { Logger } = require("term-logger");

Logger.error(new Error("..."));
Logger.success("...");
// and 17 more logs...
```

<h4>TextColors Options</h4>

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
</details>

<br />

```js
const { TextColors } = require("term-logger");

TextColors.red("...");
TextColors.blue("...");
// and 6 more colors...
```

<h4>TextStyles Options</h4>

<details>
  <summary>View all of the available text styles.</summary>

  <br />

- `bold`
- `dim`
- `italic`
- `underline`
- `inverse`
- `hidden`
- `strikethrough`
- `visible`
</details>

<br />

```js
const { TextStyles } = require("term-logger");

TextStyles.italic("...");
TextStyles.underline("...");
// and 7 more text styles...
```

<h4>BgColors Options</h4>

<details>
  <summary>View all of the available background options.</summary>

  <br />

- `red`
- `green`
- `yellow`
- `blue`
- `purple`
- `cyan`
- `white`
- `gray`
</details>

<br />

```js
const { BgColors } = require("term-logger");

BgColors.red("...");
BgColors.blue("...");
// and 6 more colors...
```

<h4>BrightColors Options</h4>

<details>
  <summary>View all of the available bright colors.</summary>

  <br />

- `red`
- `green`
- `yellow`
- `blue`
- `purple`
- `cyan`
- `white`
</details>

<br />

```js
const { BrightColors } = require("term-logger");

BrightColors.red("...");
BrightColors.blue("...");
// and 6 more colors...
```

<h2 align="left">Core Contributors</h2>

| [![DEEM](https://avatars.githubusercontent.com/u/91419390?s=100&u=8fc8e4d78fb9a0b4724e10d0df346eb89cd231c4&v=3)](https://github.com/devdeem) | [![Samculo](https://avatars.githubusercontent.com/u/74377339?v=3&s=100)](https://github.com/samculo) | [![Hegy](https://avatars.githubusercontent.com/u/45619085?v=3&s=100)](https://github.com/hegyok) |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [deemdev](https://github.com/devdeem)                                                                                                        | [samculo](https://github.com/samculo)                                                                | [hegyok](https://github.com/hegyok)                                                              |

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
