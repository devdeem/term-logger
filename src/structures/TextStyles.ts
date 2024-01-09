/**
 * Defines various text styles using chalk library.
 */
import chalk from "chalk";

/**
 * An object that represents different text styles.
 */
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

/**
 * An object that maps each text style to a function that logs the styled message to the console.
 */
export const TextStyles = Object.fromEntries(
  Object.entries(TEXT_STYLES).map(([key, value]) => [key, (message: string) => console.log(chalk[value](message))]),
) as Record<keyof typeof TEXT_STYLES, (message: string) => void>;
