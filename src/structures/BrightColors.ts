/**
 * Defines various text bright colors using chalk library.
 */
import chalk from "chalk";

/**
 * An object that represents different bright colors.
 */
const BRIGHT_COLORS = {
  blue: "blueBright",
  cyan: "cyanBright",
  green: "greenBright",
  purple: "magentaBright",
  red: "redBright",
  white: "whiteBright",
  yellow: "yellowBright",
} as const;

/**
 * Represents a collection of bright colors with associated logging functions.
 */
export const BrightColors = Object.fromEntries(
  Object.entries(BRIGHT_COLORS).map(([key, value]) => [key, (message: string) => console.log(chalk[value](message))]),
) as Record<keyof typeof BRIGHT_COLORS, (message: string) => void>;
