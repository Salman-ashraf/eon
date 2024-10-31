import { Builder } from "@builder.io/react";
import Avatar from "./components/mui/Avatar";
import BackArrowIcon from "./components/SVGIcons/BackArrowIcon";
import HelpIcon from "./components/SVGIcons/HelpIcon";
import HomeIcon from "./components/SVGIcons/HomeIcon";
import InfoIcon from "./components/SVGIcons/InfoIcon";
import NotificationRingIcon from "./components/SVGIcons/NotificationRingIcon";
import PercentageIcon from "./components/SVGIcons/PercentageIcon";

Builder.registerComponent(BackArrowIcon, {
  name: "BackArrowIcon",
});

Builder.registerComponent(HelpIcon, {
  name: "HelpIcon",
  inputs: [
    {
      name: "color",
      type: "string",
    },
  ],
  models: ["figma-imports"],
});

Builder.registerComponent(HomeIcon, {
  name: "HomeIcon",
  inputs: [
    {
      name: "color",
      type: "string",
    },
  ],
});

Builder.registerComponent(NotificationRingIcon, {
  name: "NotificationRingIcon",
  inputs: [
    {
      name: "color",
      type: "string",
    },
  ],
});

Builder.registerComponent(Avatar, {
  name: "Avatar",
});

Builder.registerComponent(InfoIcon, {
  name: "InfoIcon",
});

Builder.registerComponent(PercentageIcon, {
  name: "PercentageIcon",
});
