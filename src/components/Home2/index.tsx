import { Box } from "@mui/material";
import DealAnalysisDetails from "../DealAnalysis/DealAnalysisDetails";
import backgroundImage from "@src/assets/Background-Image.png";

const Home2 = () => {
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
      <DealAnalysisDetails />
    </Box>
  );
};

export default Home2;
