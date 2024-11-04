import DealAnalysisTabs from "../DealAnalysisTabs/DealAnalysisTabs";
import Header from "../Header/Header";
import PropertyOfferPage from "../pages/PropertyOfferPage";
import { Box } from "@mui/material";
import backgroundImage from "@src/assets/Background-Image.png";
import TrendAnalysis from "../TrendAnalysis/TrendAnalysis";
import InfoCardContainer from "../InfoCard/InfoCardContainer";
import BuildingInfoRow from "../BuildingInfoRow/BuildingInfoRow";
import PropertyDetailsMainPage from "../PropertyDetails/PropertyDetailsMainPage";
import Grid from "@mui/material/Grid2";
import AiChatComponent from "../AiChatModule/AiChatComponent";
const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Ensures the image covers the Box area
        backgroundRepeat: "no-repeat", // Prevents image from repeating
        backgroundPosition: "center", // Centers the image in the Box
        backgroundColor: "blue", // Fallback color
        minHeight: "100vh",
      }}
    >
      <Header />
      <PropertyOfferPage />
      <DealAnalysisTabs />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <TrendAnalysis />
            <Box sx={{ display: "flex" }}>
              <PropertyDetailsMainPage />
              <InfoCardContainer />
            </Box>
            <BuildingInfoRow />
          </Grid>
          <Grid size={4}>
            <AiChatComponent />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
