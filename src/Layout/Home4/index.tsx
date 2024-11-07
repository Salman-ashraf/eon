import DealAnalysisTabs from "../../components/DealAnalysisTabs/DealAnalysisTabs";
import Header from "../../components/Header/Header";
import PropertyOfferPage from "../../components/pages/PropertyOfferPage";
import { Box } from "@mui/material";
import backgroundImage from "@src/assets/Background-Image.png";
import TrendAnalysis from "../../components/TrendAnalysis/TrendAnalysis";
import InfoCardContainer from "../../components/InfoCard/InfoCardContainer";
import BuildingInfoRow from "../../components/BuildingInfoRow/BuildingInfoRow";
import PropertyDetailsMainPage from "../../components/PropertyDetails/PropertyDetailsMainPage";
import Grid from "@mui/material/Grid2";
import AiChatComponent from "../../components/AiChatModule/AiChatComponent";
import ReturnMetricsComponent from "@src/components/ReturnMetrics/ReturnMetricsComponent";
import FixFlipAnalysis from "@src/components/FixFlipAnalysis/FixFlipAnalysis";

const Home4 = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // Ensures the image covers the Box area
          backgroundRepeat: "no-repeat", // Prevents image from repeating
          backgroundPosition: "center", // Centers the image in the Box
          backgroundColor: "blue", // Fallback color
          minHeight: "100vh",
          pb: "30px",
        }}
      >
        <Header />
        <PropertyOfferPage />
        <DealAnalysisTabs />
        <Box sx={{ flexGrow: 1, pt: "22px", pl: "14px" }}>
          <Grid container spacing={2}>
            <Grid size={9.5}>
              <TrendAnalysis />
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  mt: "18px",
                  justifyContent: "space-between",
                }}
              >
                <FixFlipAnalysis />
                <ReturnMetricsComponent />
              </Box>
            </Grid>
            <Grid size={2.5}>
              <AiChatComponent />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home4;
