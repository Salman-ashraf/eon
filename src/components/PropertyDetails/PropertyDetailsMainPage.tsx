import PropertyDetails from "./PropertyDetails";

const propertyDetails = {
  propertyName: "Ocean View Apartments",
  address: "123 Beachfront Ave, Miami, FL 33101",
  avmPrice: 850000,
  titanPrice: 830000,
  beds: 3,
  baths: 2,
  sqft: 1500,
  neighbourhoodRating: 8.5,
  crimeRate: 3.2,
  capRate: 5.6,
  datePosted: "2024-10-15",
  expectedProfit: 55000,
  profitPercentage: 6.5,
};

const PropertyDetailsMainPage = () => {
  return <PropertyDetails {...propertyDetails} />;
};

export default PropertyDetailsMainPage;
