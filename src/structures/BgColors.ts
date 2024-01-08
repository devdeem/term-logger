import chalk from "chalk";

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

export const BgColors = Object.fromEntries(
  Object.entries(BACKGROUND_COLORS).map(([key, value]) => [
    key,
    (message: string) => console.log(chalk[value](message)),
  ]),
) as Record<keyof typeof BACKGROUND_COLORS, (message: string) => void>;
