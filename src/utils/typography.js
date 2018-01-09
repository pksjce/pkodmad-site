import Typography from "typography";
import theme from "typography-theme-noriega";

const bodyFontFace = "Poppins";

theme.googleFonts = [
  {
    name: bodyFontFace,
    styles: ["300", "300i", "400", "400i", "700", "700i"]
  },
  {
    name: "Merriweather",
    styles: ["700", "700i"]
  },
  {
    name: "Special Elite",
    styles: ["400"]
  },
  {
    name: "Macondo",
    styles: ["400"]
  }
];

theme.headerFontFamily = ["Merriweather", "sans-serif"];
theme.bodyFontFamily = [bodyFontFace, "Special Elite", "serif"];

const typography = new Typography(theme);

export default typography;
