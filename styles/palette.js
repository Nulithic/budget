import { alpha } from "@mui/material/styles";

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const discordPalette = {
  white: "#ffffff",
  black: "#000000",
  notQuiteBlack: "#23272A",
  grey: "#37393E",
  darkGrey: "#2F3136",
  nitroGrey: "#4F5D7E",
  notSoBlurple: "#5866EF",
  onlineGreen: "#3DA560",
  idleYellow: "#f9A62B",
  dndRed: "#EC4145",
  braveryPurple: "#9B84EC",
  brillianceCoral: "#F37B68",
  balanceTurquoise: "#49DDC1",
  boostPink: "#FE73F6",
  streamerPurple: "#583694",
  hyperlinkBlue: "#09B0F2",
};

const greyLevels = {
  eight: alpha(discordPalette.grey, 0.08),
  twelve: alpha(discordPalette.grey, 0.12),
  sixteen: alpha(discordPalette.grey, 0.16),
  twentyFour: alpha(discordPalette.grey, 0.24),
  thirtyTwo: alpha(discordPalette.grey, 0.32),
  fourtyEight: alpha(discordPalette.grey, 0.48),
  fiftySix: alpha(discordPalette.grey, 0.56),
  eighty: alpha(discordPalette.grey, 0.8),
};

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: { main: discordPalette.notSoBlurple },
  secondary: { main: discordPalette.balanceTurquoise },
  info: { main: discordPalette.nitroGrey },
  success: { main: discordPalette.onlineGreen },
  warning: { main: discordPalette.idleYellow },
  error: { main: discordPalette.dndRed },
  grey: { main: discordPalette.grey },
  darkGrey: { main: discordPalette.darkGrey },
  divider: { main: discordPalette.notQuiteBlack },
  text: { primary: "#fff", secondary: discordPalette.nitroGrey, disabled: discordPalette.darkGrey },
  background: { paper: discordPalette.notQuiteBlack, default: discordPalette.grey, neutral: discordPalette.darkGrey },
  action: {
    active: discordPalette.grey,
    hover: greyLevels.eight,
    selected: greyLevels.sixteen,
    disabled: greyLevels.eighty,
    disabledBackground: greyLevels.twentyFour,
    focus: greyLevels.twentyFour,
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
