import { Box } from "@mui/material";
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
    </>
  );
};

export default Home7Component;
