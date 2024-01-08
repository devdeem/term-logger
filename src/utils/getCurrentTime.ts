export const getCurrentTime = (): string =>
  new Date().toLocaleString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
