const palette = {
  // polar night
  polar_1: "#2E3440",
  polar_2: "#3B4252",
  polar_3: "#434C5E",
  polar_4: "#4C566A",
  // snow storm
  snow_1: "#D8DEE9",
  snow_2: "#E5E9F0",
  snow_3: "#ECEFF4",
  // frost
  frost_1: "#8FBCBB",
  frost_2: "#88C0D0",
  frost_3: "#81A1C1",
  frost_4: "#5E81AC",
  // aurora
  red: "#BF616A",
  orange: "#D08770",
  yellow: "#EBCB8B",
  green: "#A3BE8C",
  info: "#B48EAD",
};

export const theme = {
  button: {
    color: {
      button: palette.frost_1,
      reset: palette.red,
      submit: palette.green,
    },
  },
  text: {
    color: palette.snow_1,
  },
};
