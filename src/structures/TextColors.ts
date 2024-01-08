import chalk from "chalk";

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

export const TextColors = Object.fromEntries(
  Object.entries(TEXT_COLORS).map(([key, value]) => [key, (message: string) => console.log(chalk[value](message))]),
) as Record<keyof typeof TEXT_COLORS, (message: string) => void>;
