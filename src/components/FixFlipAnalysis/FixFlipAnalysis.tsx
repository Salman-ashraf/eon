/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";

import { Divider } from "@material-ui/core";
import { AnalysisHeader } from "./AnalysisHeader";
import { AnalysisDataRow } from "./AnalysisDataRow";

interface FixFlipAnalysisProps {
  purchasePrice: number;
  capitalImprovements: number;
  totalHardCosts: number;
  totalSoftCosts: number;
  totalCosts: number;
  afterRepairValue: number;
  netProfit: number;
  netProfitPercentage: number;
}
const fixFlipAnalysisVal: FixFlipAnalysisProps = {
  purchasePrice: 250000,
  capitalImprovements: 50000,
  totalHardCosts: 30000,
  totalSoftCosts: 15000,
  totalCosts: 345000,
  afterRepairValue: 400000,
  netProfit: 55000,
  netProfitPercentage: 13.75,
};

const FixFlipAnalysis = () => {
  const {
    purchasePrice,
    capitalImprovements,
    totalHardCosts,
    totalSoftCosts,
    totalCosts,
    afterRepairValue,
    netProfit,
    netProfitPercentage,
  } = fixFlipAnalysisVal;

  const analysisData = [
    { label: "Purchase Price", value: `$ ${purchasePrice.toLocaleString()}` },
    {
      label: "Capital Improvements",
      value: `$ ${capitalImprovements.toLocaleString()}`,
    },
    {
      label: "Total Hard Costs",
      value: `$ ${totalHardCosts.toLocaleString()}`,
    },
    {
      label: "Total Soft Costs (including holding costs)",
      value: `$ ${totalSoftCosts.toLocaleString()}`,
    },
    { label: "Total Costs", value: `$ ${totalCosts.toLocaleString()}` },
    {
      label: "After Repair Value (ARV)",
      value: `$ ${afterRepairValue.toLocaleString()}`,
    },
    { label: "Net Profit", value: `$ ${netProfit.toLocaleString()}` },
    { label: "Net Profit %", value: `${netProfitPercentage.toFixed(2)}%` },
    { label: "Breakeven Sales Price", value: "Calculated" },
    { label: "MOIC", value: "Calculated" },
    { label: "IRR", value: "Calculated" },
    { label: "ROI", value: "Calculated" },
  ];

  return (
    <AnalysisContainer>
      <AnalysisHeader title="Fix & Flip Analysis" subtitle="Moderate Rehab" />
      <Divider />
      <AnalysisContent>
        {analysisData.map((item, index) => (
          <React.Fragment key={index}>
            <AnalysisDataRow label={item.label} value={item.value} />
            {index < analysisData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </AnalysisContent>
    </AnalysisContainer>
  );
};

const AnalysisContainer = styled.section`
  border-radius: 8px;
  background: var(
    --Gradient-Dark,
    linear-gradient(96deg, rgba(35, 51, 71, 0.8) 0%, rgba(30, 44, 60, 0.9) 100%)
  );
  backdrop-filter: blur(4px);
  max-width: 480px;
  padding: var(--spacing-s, 12px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m, 16px);
  font-family: Poppins, sans-serif;
`;

const AnalysisContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 4px;
`;

export default FixFlipAnalysis;
