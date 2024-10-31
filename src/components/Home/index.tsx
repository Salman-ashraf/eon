import DealAnalysisTabs from "../DealAnalysisTabs/DealAnalysisTabs";
import Header from "../Header/Header";
import InternalRateReturn from "../InternalRateReturn/InternalRateReturn";
import PropertyOfferPage from "../pages/PropertyOfferPage";
import { Box } from "@mui/material";
import backgroundImage from "@src/assets/Background-Image.png";
// Builder Public API Key set in .env file

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
      <InternalRateReturn value={122121} percentage={3000} />
    </Box>
  );
};

export default Home;
