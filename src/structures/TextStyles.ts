import chalk from "chalk";

const TEXT_STYLES = {
  bold: "bold",
  dim: "dim",
  hidden: "hidden",
  inverse: "inverse",
  italic: "italic",
  strikethrough: "strikethrough",
  underline: "underline",
  visible: "visible",
} as const;

export const TextStyles = Object.fromEntries(
  Object.entries(TEXT_STYLES).map(([key, value]) => [key, (message: string) => console.log(chalk[value](message))]),
) as Record<keyof typeof TEXT_STYLES, (message: string) => void>;
