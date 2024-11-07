import { Builder } from "@builder.io/react";
import theme1 from "@src/theme/_theme1.module.scss";
import AiChatComponent from "./components/AiChatModule/AiChatComponent";
import ArrowUpIcon from "./components/SVGIcons/ArrowUpIcon";
import Avatar from "./components/mui/Avatar";
import BackArrowIcon from "./components/SVGIcons/BackArrowIcon";
import BathIcon from "./components/SVGIcons/BathIcon";
import BedIcon from "./components/SVGIcons/BedIcon";
import BuildingInfo from "./components/BuildingInfo/BuildingInfo";
import BuildingInfoRow from "./components/BuildingInfoRow/BuildingInfoRow";
import CheckCircleIcon from "./components/SVGIcons/CheckCircleIcon";
import CloseIcon from "./components/SVGIcons/CloseIcon";
import Controls from "./components/Controls/Controls";
import DealAnalysisTabs from "./components/DealAnalysisTabs/DealAnalysisTabs";
import ExpandIcon from "./components/SVGIcons/ExpandIcon";
import FinancingAssumptionsCard from "./components/FinancingAssumptions/FinancingAssumptionsCard";
import Header from "./components/Header/Header";
import HelpIcon from "./components/SVGIcons/HelpIcon";
import HomeIcon from "./components/SVGIcons/HomeIcon";
import InfoCardContainer from "./components/InfoCard/InfoCardContainer";
import InfoIcon from "./components/SVGIcons/InfoIcon";
import InternalRateReturn from "./components/InternalRateReturn/InternalRateReturn";
import LocationIcon from "./components/SVGIcons/LocationIcon";
import MinusIcon from "./components/SVGIcons/MinusIcon";
import MoreVerticalIcon from "./components/SVGIcons/MoreVerticalIcon";
import MUIGraph from "./components/Graph/MUIGraph";
import MUIGraph1 from "./components/Graph/MUIGraph1";
import NotificationRingIcon from "./components/SVGIcons/NotificationRingIcon";
import PercentageIcon from "./components/SVGIcons/PercentageIcon";
import PlusIcon from "./components/SVGIcons/PlusIcon";
import ProfitIcon from "./components/SVGIcons/ProfitIcon";
import PropertyDetailsMainPage from "./components/PropertyDetails/PropertyDetailsMainPage";
import { PropertyFinancialCard } from "./components/page5/PropertyFinancials/PropertyFinancialCard";
import PropertyOfferPage from "./components/pages/PropertyOfferPage";
import RefreshIcon from "./components/SVGIcons/RefreshIcon";
import RobotAiIcon from "./components/SVGIcons/RobotAiIcon";
import SendIcon from "./components/SVGIcons/SendIcon";
import ShareIcon from "./components/SVGIcons/ShareIcon";
import SqftIcon from "./components/SVGIcons/SqftIcon";
import StarFilledIcon from "./components/SVGIcons/StarFilledIcon";
import StarIcon from "./components/SVGIcons/StarIcon";
import TrendAnalysis from "./components/TrendAnalysis/TrendAnalysis";

const colors = theme1;

Builder.registerComponent(BackArrowIcon, {
  name: "BackArrowIcon",
});
Builder.register("editor.settings", {
  designTokens: {
    spacing: [
      { name: "Tiny", value: "5px" },
      { name: "Small", value: "10px" },
      { name: "Large", value: "var(--space-large, 20px)" },
    ],
    colors: [
      { name: "Primary", value: colors.primary500 },
      { name: "Secondary", value: colors.primary500 },
      { name: "Accent", value: colors.secondary400 },
      { name: "Error", value: "var(--error-color, #ff5252)" },
      { name: "Warning", value: "var(--warning-color, #ff9800)" },
      { name: "Info", value: "var(--info-color, #2196f3)" },
      { name: "Success", value: "var(--success-color, #4caf50)" },
      { name: "Text Primary", value: colors.white },
      { name: "Text Secondary", value: colors.dark300 },
    ],
    // other design tokens
  },
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

Builder.registerComponent(ExpandIcon, {
  name: "ExpandIcon",
});

Builder.registerComponent(MinusIcon, {
  name: "MinusIcon",
});

Builder.registerComponent(PlusIcon, {
  name: "PlusIcon",
});

Builder.registerComponent(Controls, {
  name: "Controls",
});

Builder.registerComponent(BuildingInfo, {
  name: "BuildingInfo",
});

Builder.registerComponent(CheckCircleIcon, {
  name: "CheckCircleIcon",
});

Builder.registerComponent(CloseIcon, {
  name: "CloseIcon",
});

Builder.registerComponent(SendIcon, {
  name: "SendIcon",
});

Builder.registerComponent(RobotAiIcon, {
  name: "RobotAiIcon",
});

Builder.registerComponent(BuildingInfoRow, {
  name: "BuildingInfoRow",
});

Builder.registerComponent(InfoCardContainer, {
  name: "InfoCardContainer",
});

Builder.registerComponent(PropertyDetailsMainPage, {
  name: "PropertyDetailsMainPage",
});

Builder.registerComponent(DealAnalysisTabs, {
  name: "DealAnalysisTabs",
});

Builder.registerComponent(PropertyOfferPage, {
  name: "PropertyOfferPage",
});

Builder.registerComponent(TrendAnalysis, {
  name: "TrendAnalysis",
});

Builder.registerComponent(AiChatComponent, {
  name: "AiChatComponent",
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(FinancingAssumptionsCard, {
  name: "FinancingAssumptionsCard",
});

Builder.registerComponent(PropertyFinancialCard, {
  name: "PropertyFinancialCard",
});

Builder.registerComponent(MoreVerticalIcon, {
  name: "MoreVerticalIcon",
});

Builder.registerComponent(RefreshIcon, {
  name: "RefreshIcon",
});

Builder.registerComponent(MUIGraph, {
  name: "MUIGraph",
});

Builder.registerComponent(MUIGraph1, {
  name: "MUIGraph1",
});
