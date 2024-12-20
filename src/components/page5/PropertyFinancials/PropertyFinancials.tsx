/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import PropertyFinancialRow from './PropertyFinancialRow';

const dummyProperties = [
  { id: 1 },
  { id: 2 },
  // Add more dummy properties as needed
];

const PropertyFinancials: React.FC = () => {
  return (
    <section>
      <PropertyFinancialRow properties={dummyProperties} />
    </section>
  );
};

export default PropertyFinancials;