import { Box } from "@mui/material";
import ReturnMetricsComponent from "@src/components/ReturnMetrics/ReturnMetricsComponent";
import ReturnMetricsWrapperTable from "@src/components/main3/ReturnMetrics/ReturnMetricsWrapperTable";
import ReturnMetricsComponent2 from "@src/components/main3/ReturnMetrics/ReturnMetricsComponent";

const Home3 = () => {
  return (
    <Box>
      <ReturnMetricsComponent />
      <Box m={4}>
        <ReturnMetricsComponent2 />
      </Box>
      <Box m={4}>
        <ReturnMetricsWrapperTable />
      </Box>
    </Box>
  );
};

export default Home3;
