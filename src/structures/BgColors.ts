/**
 * Defines various text backgrounds using chalk library.
 */
import chalk from "chalk";

/**
 * An object that represents different text backgrounds.
 */
const BACKGROUND_COLORS = {
  blue: "bgBlue",
  cyan: "bgCyan",
  gray: "bgGray",
  green: "bgGreen",
  purple: "bgMagenta",
  red: "bgRed",
  white: "bgWhite",
  yellow: "bgYellow",
} as const;

/**
 * Object that maps background color names to functions that log a message with the specified background color.
 */
export const BgColors = Object.fromEntries(
  Object.entries(BACKGROUND_COLORS).map(([key, value]) => [
    key,
    /**
     * Logs a message with the specified background color.
     * @param message - The message to be logged.
     */
    (message: string) => console.log(chalk[value](message)),
  ]),
) as Record<keyof typeof BACKGROUND_COLORS, (message: string) => void>;
