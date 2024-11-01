// MUI Import
import { Theme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

/* --------------------------------------------------- MAIN Function -------------------------------------------------- */

const Typography = (theme: Theme, fontFamily: string): TypographyOptions => ({
  fontFamily,

  h1: {
    [theme.breakpoints.up("md")]: {
      fontSize: "64px",
      fontWeight: 500,
      lineHeight: "96px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "48px",
      fontWeight: 500,
      lineHeight: "64px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: "48px",
    },
  },
  h2: {
    [theme.breakpoints.up("md")]: {
      fontSize: "48px",
      fontWeight: 500,
      lineHeight: "64px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: "44px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: "40px",
    },
  },
  h3: {
    [theme.breakpoints.up("md")]: {
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: "44px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "32px",
    },
  },
  h4: {
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "32px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
      fontWeight: 500,
      lineHeight: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "28px",
    },
  },
  // Keep your existing h5 and h6 settings as they are.
  h5: {
    [theme.breakpoints.up("md")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    fontWeight: 600,
  },
  h6: {
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    fontWeight: 600,
  },

  subtitle1: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
  },
  caption: {
    fontSize: "14px",
    fontWeight: 400,
  },
  body1: {
    fontSize: "14px",
    lineHeight: "21pt",
    fontWeight: 400,
  },
  body2: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
  },
  button: {
    textTransform: "capitalize",
  },
  customInput: {
    marginTop: 1,
    marginBottom: 1,
    "& > label": {
      top: 23,
      left: 0,
      color: theme.palette.grey[500],
      '&[data-shrink="false"]': {
        top: 5,
      },
    },
    "& > div > input": {
      padding: "30.5px 14px 11.5px !important",
    },
    "& legend": {
      display: "none",
    },
    "& fieldset": {
      top: 0,
    },
  },

  commonAvatar: {
    cursor: "pointer",
    borderRadius: "8px",
  },
  smallAvatar: {
    width: "22px",
    height: "22px",
    fontSize: "1rem",
  },
  mediumAvatar: {
    width: "34px",
    height: "34px",
    fontSize: "1.2rem",
  },
  largeAvatar: {
    width: "48px",
    height: "48px",
    fontSize: "1.5rem",
  },
});

export default Typography;
