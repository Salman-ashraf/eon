import { styled } from "@mui/material/styles";
import Header from "@src/components/Header/Header";
import PropertyOfferPage from "@src/components/pages/PropertyOfferPage";
import DealAnalysisTabs from "@src/components/DealAnalysisTabs/DealAnalysisTabs";
import TrendAnalysis from "@src/components/TrendAnalysis/TrendAnalysis";
import AiChatComponent from "@src/components/AiChatModule/AiChatComponent";
import PropertyDetailsMainPage from "@src/components/PropertyDetails/PropertyDetailsMainPage";
import InfoCardContainer from "@src/components/InfoCard/InfoCardContainer";
import BuildingInfoRow from "@src/components/BuildingInfoRow/BuildingInfoRow";

const DealAnalysisDetails = () => {
  return (
    <StyledDealAnalysisDetails>
      <Header />
      <Content>
        <PropertyOfferPage />

        <DealAnalysisTabs />
        <WidgetsSection>
          <LeftColumn>
            <TrendAnalysis />
            <DetailsRow>
              <PropertyDetailsMainPage />
              <InfoCardContainer />
            </DetailsRow>
            <BuildingInfoRow />
          </LeftColumn>
          <AiChatComponent />
        </WidgetsSection>
      </Content>
    </StyledDealAnalysisDetails>
  );
};

const StyledDealAnalysisDetails = styled("section")(({ theme }) => ({
  borderRadius: "24px",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  border: `4px solid ${theme.palette.divider}`,
}));

const Content = styled("main")(({ theme }) => ({
  display: "flex",
  minHeight: "824px",
  width: "100%",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 2.5),
  },
}));

const WidgetsSection = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(4),
  gap: theme.spacing(3),
  flexWrap: "wrap",
}));

const LeftColumn = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minWidth: "240px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const DetailsRow = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(3),
  gap: theme.spacing(1.5),
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export default DealAnalysisDetails;
