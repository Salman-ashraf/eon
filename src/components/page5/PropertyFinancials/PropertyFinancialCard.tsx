/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";
import { Typography, Box, Divider } from "@material-ui/core";
import ProfitIcon from "@src/components/SVGIcons/ProfitIcon";
import { FinancialDataItem } from "./FinancialDataItem";
import { EstimatedProfit } from "./EstimatedProfit";

interface PropertyFinancialCardProps {
  financialData: {
    purchasePrice: string;
    renovation: string;
    yearlyPropertyTaxes: string;
    rehabLevel: string;
    afterRehabValue: string;
  };
  profitPercentage: string;
  estimatedProfit: string;
}

const propertyFinancialCardData: PropertyFinancialCardProps = {
  financialData: {
    purchasePrice: "250,000",
    renovation: "50,000",
    yearlyPropertyTaxes: "3,000",
    rehabLevel: "Moderate",
    afterRehabValue: "350,000",
  },
  profitPercentage: "15%",
  estimatedProfit: "30,000",
};
const { financialData, profitPercentage, estimatedProfit } =
  propertyFinancialCardData;

export const PropertyFinancialCard = () => {
  const financialItems = [
    { label: "Purchase Price", value: financialData.purchasePrice },
    { label: "Renovation", value: financialData.renovation },
    {
      label: "Yearly Property Taxes",
      value: financialData.yearlyPropertyTaxes,
    },
    { label: "Rehab Level", value: financialData.rehabLevel },
    { label: "After Rehab Value (ARV)", value: financialData.afterRehabValue },
  ];

  return (
    <CardWrapper>
      <Header>
        <Typography variant="h6" className="financial-title">
          Financial for Flip
        </Typography>
        <ProfitIndicator>
          <ProfitIcon />
          <Typography variant="body2" className="profit-percentage">
            {profitPercentage}
          </Typography>
        </ProfitIndicator>
      </Header>
      <Divider />
      <FinancialDataSection>
        {financialItems.map((item, index) => (
          <React.Fragment key={item.label}>
            <FinancialDataItem label={item.label} value={item.value} />
            {index < financialItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </FinancialDataSection>
      <EstimatedProfit amount={estimatedProfit} />
    </CardWrapper>
  );
};

const CardWrapper = styled(Box)`
  border-radius: 8px;
  background: linear-gradient(
    96deg,
    rgba(35, 51, 71, 0.8) 0%,
    rgba(30, 44, 60, 0.9) 100%
  );
  backdrop-filter: blur(4px);
  padding: 12px;
  font-family: Poppins, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  .financial-title {
    color: #40c8e0;
    font-weight: 600;
    flex: 1;
    min-width: 240px;
  }
`;

const ProfitIndicator = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #30d158;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: rgba(48, 209, 88, 0.1);

  .profit-percentage {
    font-weight: 600;
  }
`;

const FinancialDataSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default PropertyFinancialCard;
