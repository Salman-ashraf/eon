/**
 * This code was generated by Builder.io.
 */
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import FinancingAssumptionsCard from "@src/components/FinancingAssumptions/FinancingAssumptionsCard";

const assumptions = [
  { title: "Name", value: "John Doe" },
  { title: "Age", value: "30" },
];
const FinancingAssumptionsRow = () => {
  return (
    <StyledBox>
      {assumptions.map((assumption, index) => (
        <FinancingAssumptionsCard
          key={index}
          title={assumption.title}
          value={assumption.value}
        />
      ))}
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  justifyContent: "flex-start",
  height: "100%",
  width: "100%",
  "& > *": {
    flexGrow: 1,
    flexBasis: "calc(25% - 16px)",
    minWidth: "240px",
    [theme.breakpoints.down("md")]: {
      flexBasis: "calc(50% - 16px)",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
    },
  },
}));
export default FinancingAssumptionsRow;