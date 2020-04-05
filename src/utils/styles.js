export const colors = {
  offblack: "#141414",
  white: "white",
}

export const typography = {
  sansSerif:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
}

// For media queries always default to desktop, and customise smaller screens
export const media = {
  s: "@media (max-width: 350px)",
  m: "@media (max-width: 600px)",
  l: "@media (max-width: 800px)",
}

const MARGIN = 5
export const units = {
  gridMargin: `${MARGIN}px`,
  doubleGridMargins: `${2 * MARGIN}px`,
}

export const animation = {
  easeOut: "0.2s ease-out",
}
