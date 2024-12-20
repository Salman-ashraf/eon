/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";
import RefreshIcon from "@src/components/SVGIcons/RefreshIcon";
import MoreVerticalIcon from "@src/components/SVGIcons/MoreVerticalIcon";
import ArrowUpIcon from "@src/components/SVGIcons/ArrowUpIcon";
import { Box, CardContent, Typography, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import MUIGraph1 from "@src/components/Graph/MUIGraph1";

interface TabOption {
  label: string;
  value: string;
}

const tabOptions: TabOption[] = [
  { label: "1 Mile", value: "1" },
  { label: "5 Mile", value: "5" },
  { label: "10 Mile", value: "10" },
];

const DemographicInsightsCard: React.FC = () => {
  const { control } = useForm();

  return (
    <StyledCard>
      <CardContent>
        <Header>
          <Typography variant="h6" className="insights-title">
            Demographic Insights
          </Typography>
          <div className="icon-group">
            <Button startIcon={<RefreshIcon />} />
            <Button startIcon={<MoreVerticalIcon />} />
          </div>
        </Header>
        <Divider />
        <ContentWrapper>
          <PricingSection>
            <Typography variant="caption" className="pricing-label">
              Pricing
            </Typography>
            <PriceWrapper>
              <Typography variant="h5" className="price-value">
                251K
              </Typography>
              <ArrowUpIcon className="arrow-icon" />
            </PriceWrapper>
          </PricingSection>
          <Controller
            name="tabSelection"
            control={control}
            defaultValue="1"
            render={({ field }) => (
              <TabGroup>
                {tabOptions.map((option) => (
                  <TabButton
                    key={option.value}
                    onClick={() => field.onChange(option.value)}
                    className={field.value === option.value ? "active" : ""}
                  >
                    {option.label}
                  </TabButton>
                ))}
              </TabGroup>
            )}
          />
        </ContentWrapper>
        <ChartWrapper>
          <MUIGraph1 />
        </ChartWrapper>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Box)`
  border-radius: 8px;
  background: linear-gradient(
    96deg,
    rgba(35, 51, 71, 0.8) 0%,
    rgba(30, 44, 60, 0.9) 100%
  );
  backdrop-filter: blur(4px);
  width: 100%;
  font-family: Poppins, sans-serif;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  .insights-title {
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    line-height: 2;
  }

  .icon-group {
    display: flex;
    gap: 16px;
  }
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid rgba(80, 94, 110, 1);
  margin: 16px 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const PricingSection = styled.div`
  .pricing-label {
    color: #b6bec3;
    font-size: 12px;
    font-weight: 400;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .price-value {
    color: #fff;
    font-weight: 500;
    letter-spacing: -0.18px;
  }

  .arrow-icon {
    width: 16px;
    height: 16px;
  }
`;

const TabGroup = styled.div`
  display: flex;
  background-color: rgba(17, 25, 34, 1);
  border-radius: 8px;
  padding: 2px;
`;

const TabButton = styled(Button)`
  && {
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    padding: 2px 32px;
    border-radius: 6px;
    min-width: 112px;

    &.active {
      background-color: #1b2735;
      box-shadow: 0px 4px 12px 0px rgba(20, 34, 48, 0.05);
    }

    @media (max-width: 991px) {
      padding: 2px 20px;
    }
  }
`;

const ChartWrapper = styled.div`
  margin-top: 16px;
  min-height: 116px;
  width: 100%;
  max-width: 412px;
`;

export default DemographicInsightsCard;
