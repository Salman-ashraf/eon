import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import Avatar from "@src/components/mui/Avatar";
import HomeIcon from "@src/components/SVGIcons/HomeIcon";
import HelpIcon from "@src/components/SVGIcons/HelpIcon";
import NotificationRingIcon from "@src/components/SVGIcons/NotificationRingIcon";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  padding: "24px 24px 0",
  [theme.breakpoints.down("md")]: {
    padding: "0 20px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "-2px",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#fff",
  whiteSpace: "nowrap",
  letterSpacing: "-0.64px",
  font: "500 32px/1 Poppins, sans-serif",
  [theme.breakpoints.down("md")]: {
    whiteSpace: "initial",
  },
}));

const IconContainer = styled(Box)({
  display: "flex",
  minWidth: "240px",
  alignItems: "center",
  gap: "40px",
  justifyContent: "flex-start",
  margin: "auto 0",
});

const StyledIconButton = styled(IconButton)({
  width: "48px",
  height: "48px",
});

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <StyledTypography variant="h1" sx={{ color: "black" }}>
          Titan
        </StyledTypography>
        <IconContainer>
          <StyledIconButton aria-label="Home">
            <HomeIcon />
          </StyledIconButton>
          <StyledIconButton aria-label="Help">
            <HelpIcon />
          </StyledIconButton>
          <StyledIconButton aria-label="Notifications">
            <NotificationRingIcon />
          </StyledIconButton>
          <Avatar sx={{ width: 52, height: 52, margin: "auto 0" }} />
        </IconContainer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
