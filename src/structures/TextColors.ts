/**
 * Defines various text colors using chalk library.
 */
import chalk from "chalk";

/**
 * An object that represents different text colors.
 */
const TEXT_COLORS = {
  blue: "blue",
  cyan: "cyan",
  gray: "gray",
  green: "green",
  purple: "magenta",
  red: "red",
  white: "white",
  yellow: "yellow",
} as const;

/**
 * An object that maps color names to functions that log a message with the specified color.
 */
export const TextColors = Object.fromEntries(
  Object.entries(TEXT_COLORS).map(([key, value]) => [key, (message: string) => console.log(chalk[value](message))]),
) as Record<keyof typeof TEXT_COLORS, (message: string) => void>;
