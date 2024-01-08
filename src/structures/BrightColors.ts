import chalk from "chalk";

const BRIGHT_COLORS = {
  blue: "blueBright",
  cyan: "cyanBright",
  green: "greenBright",
  purple: "magentaBright",
  red: "redBright",
  white: "whiteBright",
  yellow: "yellowBright",
} as const;

export const BrightColors = Object.fromEntries(
  Object.entries(BRIGHT_COLORS).map(([key, value]) => [key, (message: string) => console.log(chalk[value](message))]),
) as Record<keyof typeof BRIGHT_COLORS, (message: string) => void>;
