import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const COLORS = {
  primary: "#008078",
  fadedBackground: "#0aada2",
  white: "#fff",
  border: "#f2f2f2",
  darkBorder: "#e5e5e5",
  icons: "#05375a",
  grey: "grey",
  defaultGreen: "#5D9C59"
};

export const SIZES = {
  h1: 22,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  base: 10,
  width,
  height,
};

export const FONTS = {
  Flowers: "Flowers",
  BrushFont: "BrushFont",
};

const Theme = { COLORS, SIZES, FONTS };
export default Theme;
