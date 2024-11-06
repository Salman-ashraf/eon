/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { styled } from "@mui/material/styles";
import { Card, CardContent, Typography, Divider } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { financingAssumptionData } from "./financingAssumptionData";
import AssumptionRow from "./AssumptionRow";

const FinancingAssumptionsCard = () => {
  const { control } = useForm();

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" component="h2" className="card-title">
          Financing Assumptions
        </Typography>
        <HeaderRow>
          <Typography variant="subtitle1" className="header-item">
            Description
          </Typography>
          <Typography variant="subtitle1" className="header-item">
            Short Term
          </Typography>
          <Typography variant="subtitle1" className="header-item">
            Long Term
          </Typography>
        </HeaderRow>
        <StyledDivider />
        {financingAssumptionData.map((assumption, index) => (
          <React.Fragment key={assumption.id}>
            <Controller
              name={assumption.id}
              control={control}
              defaultValue={assumption}
              render={() => <AssumptionRow {...assumption} />}
            />
            {index < financingAssumptionData.length - 1 && <StyledDivider />}
          </React.Fragment>
        ))}
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  background:
    "linear-gradient(96deg, rgba(35, 51, 71, 0.8) 0%, rgba(30, 44, 60, 0.9) 100%)",
  backdropFilter: "blur(4px)",
  padding: theme.spacing(1.5),
  fontFamily: "Poppins, sans-serif",
  width: "100%",
  color: theme.palette.common.white,
}));

const HeaderRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(0.5),
  "& .header-item": {
    flex: 1,
    "&:first-of-type": {
      flexBasis: 180,
      flexGrow: 0,
    },
    "&:not(:first-of-type)": {
      textAlign: "right",
    },
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: "rgba(80, 94, 110, 1)",
  margin: `${theme.spacing(0.5)} 0`,
}));

export default FinancingAssumptionsCard;