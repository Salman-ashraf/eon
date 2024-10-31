/* eslint-disable @typescript-eslint/no-unused-vars */
import * as createPalette from "@mui/material/styles/createPalette";
import * as createTypography from "@mui/material/styles/createTypography";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteOptions {
    blue: PaletteColorOptions;
    red: PaletteColorOptions;
    yellow: PaletteColorOptions;
    green: PaletteColorOptions;
    dark: PaletteColorOptions;
  }

  interface Palette {
    blue: PaletteColor;
    red: PaletteColor;
    yellow: PaletteColor;
    green: PaletteColor;
    dark: PaletteColor;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    light9: React.CSSProperties;
    light10: React.CSSProperties;
    light11: React.CSSProperties;
    light12: React.CSSProperties;
    light14: React.CSSProperties;
    light16: React.CSSProperties;
    light18: React.CSSProperties;
    light20: React.CSSProperties;
    light22: React.CSSProperties;
    light24: React.CSSProperties;
    light28: React.CSSProperties;
    light30: React.CSSProperties;
    light32: React.CSSProperties;
    light36: React.CSSProperties;
    light40: React.CSSProperties;
    light42: React.CSSProperties;
    light44: React.CSSProperties;
    regular9: React.CSSProperties;
    regular10: React.CSSProperties;
    regular11: React.CSSProperties;
    regular12: React.CSSProperties;
    regular14: React.CSSProperties;
    regular16: React.CSSProperties;
    regular18: React.CSSProperties;
    regular20: React.CSSProperties;
    regular22: React.CSSProperties;
    regular24: React.CSSProperties;
    regular28: React.CSSProperties;
    regular30: React.CSSProperties;
    regular32: React.CSSProperties;
    regular36: React.CSSProperties;
    regular40: React.CSSProperties;
    regular42: React.CSSProperties;
    regular44: React.CSSProperties;
    medium9: React.CSSProperties;
    medium10: React.CSSProperties;
    medium11: React.CSSProperties;
    medium12: React.CSSProperties;
    medium14: React.CSSProperties;
    medium16: React.CSSProperties;
    medium18: React.CSSProperties;
    medium20: React.CSSProperties;
    medium22: React.CSSProperties;
    medium24: React.CSSProperties;
    medium28: React.CSSProperties;
    medium30: React.CSSProperties;
    medium32: React.CSSProperties;
    medium36: React.CSSProperties;
    medium40: React.CSSProperties;
    medium42: React.CSSProperties;
    medium44: React.CSSProperties;
    semiBold9: React.CSSProperties;
    semiBold10: React.CSSProperties;
    semiBold11: React.CSSProperties;
    semiBold12: React.CSSProperties;
    semiBold14: React.CSSProperties;
    semiBold16: React.CSSProperties;
    semiBold18: React.CSSProperties;
    semiBold20: React.CSSProperties;
    semiBold22: React.CSSProperties;
    semiBold24: React.CSSProperties;
    semiBold28: React.CSSProperties;
    semiBold30: React.CSSProperties;
    semiBold32: React.CSSProperties;
    semiBold36: React.CSSProperties;
    semiBold40: React.CSSProperties;
    semiBold42: React.CSSProperties;
    semiBold44: React.CSSProperties;
    bold9: React.CSSProperties;
    bold10: React.CSSProperties;
    bold11: React.CSSProperties;
    bold12: React.CSSProperties;
    bold14: React.CSSProperties;
    bold16: React.CSSProperties;
    bold18: React.CSSProperties;
    bold20: React.CSSProperties;
    bold22: React.CSSProperties;
    bold24: React.CSSProperties;
    bold28: React.CSSProperties;
    bold30: React.CSSProperties;
    bold32: React.CSSProperties;
    bold36: React.CSSProperties;
    bold40: React.CSSProperties;
    bold42: React.CSSProperties;
    bold44: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    light9?: React.CSSProperties;
    light10?: React.CSSProperties;
    light11?: React.CSSProperties;
    light12?: React.CSSProperties;
    light14?: React.CSSProperties;
    light16?: React.CSSProperties;
    light18?: React.CSSProperties;
    light20?: React.CSSProperties;
    light22?: React.CSSProperties;
    light24?: React.CSSProperties;
    light28?: React.CSSProperties;
    light30?: React.CSSProperties;
    light32?: React.CSSProperties;
    light36?: React.CSSProperties;
    light40?: React.CSSProperties;
    light42?: React.CSSProperties;
    light44?: React.CSSProperties;
    regular9?: React.CSSProperties;
    regular10?: React.CSSProperties;
    regular11?: React.CSSProperties;
    regular12?: React.CSSProperties;
    regular14?: React.CSSProperties;
    regular16?: React.CSSProperties;
    regular18?: React.CSSProperties;
    regular20?: React.CSSProperties;
    regular22?: React.CSSProperties;
    regular24?: React.CSSProperties;
    regular28?: React.CSSProperties;
    regular30?: React.CSSProperties;
    regular32?: React.CSSProperties;
    regular36?: React.CSSProperties;
    regular40?: React.CSSProperties;
    regular42?: React.CSSProperties;
    regular44?: React.CSSProperties;
    medium9?: React.CSSProperties;
    medium10?: React.CSSProperties;
    medium11?: React.CSSProperties;
    medium12?: React.CSSProperties;
    medium14?: React.CSSProperties;
    medium16?: React.CSSProperties;
    medium18?: React.CSSProperties;
    medium20?: React.CSSProperties;
    medium22?: React.CSSProperties;
    medium24?: React.CSSProperties;
    medium28?: React.CSSProperties;
    medium30?: React.CSSProperties;
    medium32?: React.CSSProperties;
    medium36?: React.CSSProperties;
    medium40?: React.CSSProperties;
    medium42?: React.CSSProperties;
    medium44?: React.CSSProperties;
    semiBold9?: React.CSSProperties;
    semiBold10?: React.CSSProperties;
    semiBold11?: React.CSSProperties;
    semiBold12?: React.CSSProperties;
    semiBold14?: React.CSSProperties;
    semiBold16?: React.CSSProperties;
    semiBold18?: React.CSSProperties;
    semiBold20?: React.CSSProperties;
    semiBold22?: React.CSSProperties;
    semiBold24?: React.CSSProperties;
    semiBold28?: React.CSSProperties;
    semiBold30?: React.CSSProperties;
    semiBold32?: React.CSSProperties;
    semiBold36?: React.CSSProperties;
    semiBold40?: React.CSSProperties;
    semiBold42?: React.CSSProperties;
    semiBold44?: React.CSSProperties;
    bold9?: React.CSSProperties;
    bold10?: React.CSSProperties;
    bold11?: React.CSSProperties;
    bold12?: React.CSSProperties;
    bold14?: React.CSSProperties;
    bold16?: React.CSSProperties;
    bold18?: React.CSSProperties;
    bold20?: React.CSSProperties;
    bold22?: React.CSSProperties;
    bold24?: React.CSSProperties;
    bold28?: React.CSSProperties;
    bold30?: React.CSSProperties;
    bold32?: React.CSSProperties;
    bold36?: React.CSSProperties;
    bold40?: React.CSSProperties;
    bold42?: React.CSSProperties;
    bold44?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    light9: true;
    light10: true;
    light11: true;
    light12: true;
    light14: true;
    light16: true;
    light18: true;
    light20: true;
    light22: true;
    light24: true;
    light28: true;
    light30: true;
    light32: true;
    light36: true;
    light40: true;
    light42: true;
    light44: true;
    regular9: true;
    regular10: true;
    regular11: true;
    regular12: true;
    regular14: true;
    regular16: true;
    regular18: true;
    regular20: true;
    regular22: true;
    regular24: true;
    regular28: true;
    regular30: true;
    regular32: true;
    regular36: true;
    regular40: true;
    regular42: true;
    regular44: true;
    medium9: true;
    medium10: true;
    medium11: true;
    medium12: true;
    medium14: true;
    medium16: true;
    medium18: true;
    medium20: true;
    medium22: true;
    medium24: true;
    medium28: true;
    medium30: true;
    medium32: true;
    medium36: true;
    medium40: true;
    medium42: true;
    medium44: true;
    semiBold9: true;
    semiBold10: true;
    semiBold11: true;
    semiBold12: true;
    semiBold14: true;
    semiBold16: true;
    semiBold18: true;
    semiBold20: true;
    semiBold22: true;
    semiBold24: true;
    semiBold28: true;
    semiBold30: true;
    semiBold32: true;
    semiBold36: true;
    semiBold40: true;
    semiBold42: true;
    semiBold44: true;
    bold9: true;
    bold10: true;
    bold11: true;
    bold12: true;
    bold14: true;
    bold16: true;
    bold18: true;
    bold20: true;
    bold22: true;
    bold24: true;
    bold28: true;
    bold30: true;
    bold32: true;
    bold36: true;
    bold40: true;
    bold42: true;
    bold44: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    extraSmall: true;
  }
  interface ButtonPropsVariantOverrides {
    "primary-contained": true;
    "primary-outlined": true;
    "dark-outlined": true;
    "primary-text": true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsSizeOverrides {
    large: true;
  }
  interface ChipPropsVariantOverrides {
    "outlined-grey": true;
    "outlined-red": true;
    "filled-red": true;
    "filled-yellow": true;
  }
}
interface BaseTheme extends SystemTheme {
  mixins: Mixins;
  palette: Palette;
  shadows: Shadows;
  transitions: Transitions;
  typography: Typography;
  zIndex: ZIndex;
  unstable_strictMode?: boolean;
}
