/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import styled from 'styled-components';
import { PropertyFinancialCard } from '@src/components/page5/PropertyFinancials/PropertyFinancialCard';
import { Grid } from '@material-ui/core';

interface PropertyData {
  id: number;
  // Add other properties as needed
}

interface PropertyFinancialRowProps {
  properties: PropertyData[];
}

const PropertyFinancialRow: React.FC<PropertyFinancialRowProps> = ({ properties }) => {
  return (
    <StyledGrid container spacing={2}>
      {properties.map((property) => (
        <Grid item xs={12} sm={6} key={property.id}>
          <PropertyFinancialCard />
        </Grid>
      ))}
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)`
  overflow: hidden;
`;

export default PropertyFinancialRow;