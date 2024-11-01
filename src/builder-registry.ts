import { Builder } from "@builder.io/react";
import ArrowUpIcon from "./components/SVGIcons/ArrowUpIcon";
import Avatar from "./components/mui/Avatar";
import BackArrowIcon from "./components/SVGIcons/BackArrowIcon";
import BathIcon from "./components/SVGIcons/BathIcon";
import BedIcon from "./components/SVGIcons/BedIcon";
import HelpIcon from "./components/SVGIcons/HelpIcon";
import HomeIcon from "./components/SVGIcons/HomeIcon";
import InfoIcon from "./components/SVGIcons/InfoIcon";
import InternalRateReturn from "./components/InternalRateReturn/InternalRateReturn";
import LocationIcon from "./components/SVGIcons/LocationIcon";
import NotificationRingIcon from "./components/SVGIcons/NotificationRingIcon";
import PercentageIcon from "./components/TitanCustomMode/PercentageIcon";
import PercentageIcon from "./components/SVGIcons/PercentageIcon";
import ProfitIcon from "./components/SVGIcons/ProfitIcon";
import ShareIcon from "./components/SVGIcons/ShareIcon";
import SqftIcon from "./components/SVGIcons/SqftIcon";
import StarFilledIcon from "./components/SVGIcons/StarFilledIcon";
import StarIcon from "./components/SVGIcons/StarIcon";

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

Builder.registerComponent(ArrowUpIcon, {
  name: "ArrowUpIcon",
});

Builder.registerComponent(InternalRateReturn, {
  name: "InternalRateReturn",
});

Builder.registerComponent(InfoIcon, {
  name: "InfoIcon",
});

Builder.registerComponent(PercentageIcon, {
  name: "PercentageIcon",
});

Builder.registerComponent(ArrowUpIcon, {
  name: "ArrowUpIcon",
});

Builder.registerComponent(BathIcon, {
  name: "BathIcon",
});

Builder.registerComponent(BedIcon, {
  name: "BedIcon",
});

Builder.registerComponent(LocationIcon, {
  name: "LocationIcon",
});

Builder.registerComponent(PercentageIcon, {
  name: "PercentageIcon",
});

Builder.registerComponent(ProfitIcon, {
  name: "ProfitIcon",
});

Builder.registerComponent(ShareIcon, {
  name: "ShareIcon",
});

Builder.registerComponent(StarIcon, {
  name: "StarIcon",
});

Builder.registerComponent(SqftIcon, {
  name: "SqftIcon",
});

Builder.registerComponent(StarFilledIcon, {
  name: "StarFilledIcon",
});

Builder.registerComponent(PercentageIcon, {
  name: "PercentageIcon",
});
