import { createTheme } from "@mui/material/styles";
import theme1 from "@src/theme/_theme1.module.scss";
// Style import
/* --------------------------------------------------- MAIN Function -------------------------------------------------- */
const Palette = () => {
  const colors = theme1;

  return createTheme({
    palette: {
      mode: "light",
      common: {
        blue: colors.blue700,
      },
      primary: {
        light: colors.primary200,
        main: colors.primary500,
        dark: colors.primary700,
      },
      secondary: {
        light: colors.secondary300,
        main: colors.secondary400,
        dark: colors.secondary600,
      },

      shades: {
        light: colors.shades200,
        main: colors.shades400,
        dark: colors.shades600,
      },
      dark: {
        light: colors.dark200,
        main: colors.dark400,
        dark: colors.dark600,
      },

      red: {
        main: colors.red500,
        light: colors.red300,
        dark: colors.red700,
      },
      blue: {
        main: colors.blue300,
        light: colors.blue500,
        dark: colors.blue700,
      },
      yellow: {
        main: colors.yellow300,
        light: colors.yellow500,
        dark: colors.yellow700,
      },
      green: {
        main: colors.green300,
        light: colors.green500,
        dark: colors.green700,
      },

      background: {
        paper: colors.background,
        white: colors.white,
      },
      // text: {
      //   primary: colors.dark500,
      // },
    },
  });
};

export default Palette;
