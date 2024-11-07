import DealAnalysisTabs from "../../components/DealAnalysisTabs/DealAnalysisTabs";
import Header from "../../components/Header/Header";
import PropertyOfferPage from "../../components/pages/PropertyOfferPage";
import { Box } from "@mui/material";
import backgroundImage from "@src/assets/Background-Image.png";
import TrendAnalysis from "../../components/TrendAnalysis/TrendAnalysis";
import Grid from "@mui/material/Grid2";
import AiChatComponent from "../../components/AiChatModule/AiChatComponent";
import FiveYearPLContainer from "@src/components/FiveYearPL/FiveYearPLContainer";
import PropertyFinancials from "@src/components/page5/PropertyFinancials/PropertyFinancials";
import DemographicInsightsCard from "@src/components/page5/DemographicInsights/DemographicInsightsCard";

const Home7 = () => {
  return (
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
                flexDirection: "column",
                width: "100%",
                mt: "18px",
                gap: "15px",
              }}
            >
              <PropertyFinancials />
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  gap: "30px",
                }}
              >
                <DemographicInsightsCard />
                <DemographicInsightsCard />
              </Box>
            </Box>
          </Grid>
          <Grid size={2.5}>
            <AiChatComponent />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home7;
