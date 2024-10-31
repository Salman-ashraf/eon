import React, { useMemo } from "react";
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Theme,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Palette from "./palette";
import Typography from "./typography";
import { CustomShadowProps } from "@src/types/theme-types/default-theme";
import customShadows from "@src/theme/shadows";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { FONTFAMILY } from "@src/config/config";
export default function ThemeCustomization({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme: Theme = Palette();
  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(
    () => customShadows("light", theme),
    [theme]
  );
  const fontFamily = FONTFAMILY.POPPINS;
  const themeTypography: TypographyOptions = useMemo<TypographyOptions>(
    () => Typography(theme, fontFamily),
    [theme, fontFamily]
  );
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: theme.palette,
      typography: themeTypography,
      customShadows: themeCustomShadows,
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1380,
          xl: 1536,
        },
      },
    }),
    [theme, themeCustomShadows, themeTypography]
  );
  const themes = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
