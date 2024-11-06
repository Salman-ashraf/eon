import { Box } from "@mui/material";
import MUIGraph from "@src/components/Graph/MUIGraph";
import MUIGraph1 from "@src/components/Graph/MUIGraph1";
import PropertyFinancialCard from "@src/components/page5/PropertyFinancials/PropertyFinancialCard";
import PropertyFinancials from "@src/components/page5/PropertyFinancials/PropertyFinancials";

const Home7Component = () => {
  return (
    <>
      <Box m={4}>
        <PropertyFinancialCard />
      </Box>

      <Box m={4}>
        <PropertyFinancials />
      </Box>

      <Box m={4}>
        <MUIGraph />
        <MUIGraph1 />
      </Box>
      <Box m={4}></Box>
    </>
  );
};

export default Home7Component;
