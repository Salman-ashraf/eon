import { Box } from "@mui/material";
import FinancingAssumptionsCard from "@src/components/FinancingAssumptions/FinancingAssumptionsCard";
import FinancingAssumptionsRow from "@src/components/FinancingAssumptions/FinancingAssumptionsRow";

const Home5Component = () => {
  return (
    <>
      <Box m={4}>
        <FinancingAssumptionsCard />
      </Box>

      <Box m={4}>
        <FinancingAssumptionsRow />
      </Box>
    </>
  );
};

export default Home5Component;
