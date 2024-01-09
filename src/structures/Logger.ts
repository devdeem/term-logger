/**
 * Logger module for logging messages with different types and colors.
 */

import { getCurrentTime } from "../utils/getCurrentTime";
import chalk from "chalk";

/**
 * Available log types and their corresponding colors.
 */
const LOGS = {
  cluster: "blue",
  command: "cyan",
  complete: "green",
  critical: "red",
  database: "gray",
  debug: "magenta",
  error: "red",
  event: "yellow",
  fatal: "red",
  info: "white",
  note: "gray",
  pending: "magenta",
  ready: "blue",
  shard: "green",
  start: "green",
  success: "green",
  waiting: "blue",
  warn: "yellow",
  watch: "yellow",
} as const;

/**
 * Template function for logging messages with the specified type and color.
 * @param message - The message to be logged.
 * @param type - The type of the log message.
 * @param color - The color of the log message.
 */
const template = (message: string, type: keyof typeof LOGS, color: (typeof LOGS)[keyof typeof LOGS]) =>
  console.log(
    [
      chalk.grey(">"),
      [chalk.underline[color](type.toUpperCase()), chalk.gray(`[${getCurrentTime()}]`)].join(
        "\xa0".repeat(12 - type.length),
      ),
      chalk.white(message),
    ].join("\xa0".repeat(2)),
  );

/**
 * Logger object that contains logging functions for each log type.
 */
export const Logger = Object.fromEntries(
  Object.entries(LOGS).map(([key, value]) => [
    key,
    (message: string) => template(message, key as keyof typeof LOGS, value),
  ]),
) as Record<keyof typeof LOGS, (message: string) => void>;
