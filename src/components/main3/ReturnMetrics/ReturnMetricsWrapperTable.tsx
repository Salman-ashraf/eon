import { styled } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { formatCurrency } from "../../../utils/formatters";

const data = {
  coc: [8, 10, 12, 55], // Cash on Cash return percentages
  moic: [1.2, 1.5, 1.8], // Multiple on Invested Capital ratios
  currentEquity: [50000, 75000, 100000], // Current equity values in dollars
  loanBalance: [200000, 150000, 100000], // Loan balance values in dollars
  irr: [12, 15, 18], // Internal Rate of Return percentages
};
const ReturnMetricsWrapperTable = () => {
  const { control } = useForm();

  const rows = [
    { metric: "CoC", values: data.coc },
    { metric: "MOIC", values: data.moic },
    { metric: "Currently Equity *", values: data.currentEquity },
    { metric: "Loan Balance", values: data.loanBalance },
    { metric: "IRR", values: data.irr },
  ];

  return (
    <ReturnMetricsWrapper>
      <Typography variant="h6" component="h2" gutterBottom>
        Return Metrics
      </Typography>
      <Controller
        name="metricsTable"
        control={control}
        defaultValue={rows}
        render={({ field }) => (
          <TableContainer component={Paper}>
            <Table aria-label="return metrics table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Metric</StyledTableCell>
                  <StyledTableCell align="right">Assumption</StyledTableCell>
                  <StyledTableCell align="right">Year 1</StyledTableCell>
                  <StyledTableCell align="right">3% Year 2</StyledTableCell>
                  <StyledTableCell align="right">3% Year 3</StyledTableCell>
                  <StyledTableCell align="right">3% Year 4</StyledTableCell>
                  <StyledTableCell align="right">3% Year 5</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {field.value.map((row, index) => (
                  <TableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {row.metric}
                    </StyledTableCell>
                    {row.values.map((value, cellIndex) => (
                      <StyledTableCell key={cellIndex} align="right">
                        {formatCurrency(value)}
                      </StyledTableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    </ReturnMetricsWrapper>
  );
};

const ReturnMetricsWrapper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  background:
    "linear-gradient(96deg, rgba(35, 51, 71, 0.8) 0%, rgba(30, 44, 60, 0.9) 100%)",
  backdropFilter: "blur(4px)",
  padding: theme.spacing(2),
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  color: theme.palette.common.white,
  maxWidth: "740px",
  [theme.breakpoints.down("md")]: {
    minHeight: "542px",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.common.white,
  border: "none",
  padding: theme.spacing(1),
  "&.MuiTableCell-head": {
    backgroundColor: "rgba(35, 51, 71, 0.8)",
    fontWeight: 600,
  },
  "&.MuiTableCell-body": {
    fontSize: 14,
  },
}));

export default ReturnMetricsWrapperTable;
