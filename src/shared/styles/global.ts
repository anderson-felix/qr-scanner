import { Appearance } from "react-native";

export default {
  text: Appearance.getColorScheme() === "dark" ? "#fff" : "#40424a",
  primary: "#4895ef",
};
