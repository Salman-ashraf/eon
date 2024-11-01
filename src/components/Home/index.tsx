import DealAnalysisTabs from "../DealAnalysisTabs/DealAnalysisTabs";
import Header from "../Header/Header";
import PropertyOfferPage from "../pages/PropertyOfferPage";
import { Box } from "@mui/material";
import backgroundImage from "@src/assets/Background-Image.png";
import TrendAnalysis from "../TrendAnalysis/TrendAnalysis";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import InfoCardContainer from "../InfoCard/InfoCardContainer";
import Controls from "../Controls/Controls";
// Builder Public API Key set in .env file

const propertyDetails = {
  propertyName: "Ocean View Apartments",
  address: "123 Beachfront Ave, Miami, FL 33101",
  avmPrice: 850000,
  titanPrice: 830000,
  beds: 3,
  baths: 2,
  sqft: 1500,
  neighbourhoodRating: 8.5,
  crimeRate: 3.2,
  capRate: 5.6,
  datePosted: "2024-10-15",
  expectedProfit: 55000,
  profitPercentage: 6.5,
};

const onZoomIn = () => {
  console.log("Zooming in on the image");
};

const onZoomOut = () => {
  console.log("Zooming out of the image");
};

const onExpand = () => {
  console.log("Expanding the image to fullscreen");
};

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
      <TrendAnalysis />
      <PropertyDetails {...propertyDetails} />
      <InfoCardContainer />
      <Controls onZoomIn={onZoomIn} onZoomOut={onZoomOut} onExpand={onExpand} />
    </Box>
  );
};

export default Home;
