import React from "react";
import { Typography, Box, Grid, Rating, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useForm, Controller } from "react-hook-form";
import ShareIcon from "@src/components/SVGIcons/ShareIcon";
import LocationIcon from "@src/components/SVGIcons/LocationIcon";
import BedIcon from "@src/components/SVGIcons/BedIcon";
import BathIcon from "@src/components/SVGIcons/BathIcon";
import SqftIcon from "@src/components/SVGIcons/SqftIcon";
import StarFilledIcon from "@src/components/SVGIcons/StarFilledIcon";
import StarIcon from "@src/components/SVGIcons/StarIcon";
import ProfitIcon from "@src/components/SVGIcons/ProfitIcon";

interface PropertyDetailsProps {
  propertyName: string;
  address: string;
  avmPrice: number;
  titanPrice: number;
  beds: number;
  baths: number;
  sqft: number;
  neighbourhoodRating: number;
  crimeRate: number;
  capRate: number;
  datePosted: string;
  expectedProfit: number;
  profitPercentage: number;
}

const StyledBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  background:
    "linear-gradient(96deg, rgba(35, 51, 71, 0.8) 0%, rgba(30, 44, 60, 0.9) 100%)",
  backdropFilter: "blur(4px)",
  padding: theme.spacing(1.5),
  color: theme.palette.common.white,
  width: "816px",
  height: "256px",
}));

const PropertyName = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.primary,
}));

const PropertyLocation = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.grey[400],
}));

const PriceLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
}));

const PriceValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const ShareButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[400],
  textTransform: "none",
}));

const PropertyFeatures = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const ProfitSection = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(17, 25, 34, 1)",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const ProfitValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.success.main,
  fontWeight: 500,
}));

const ProfitPercentage = styled(Box)(({ theme }) => ({
  color: theme.palette.success.main,
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
}));

const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  propertyName,
  address,
  avmPrice,
  titanPrice,
  beds,
  baths,
  sqft,
  neighbourhoodRating,
  crimeRate,
  capRate,
  datePosted,
  expectedProfit,
  profitPercentage,
}) => {
  const { control } = useForm();

  return (
    <StyledBox>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <PropertyName variant="h5">{propertyName}</PropertyName>
          <PropertyLocation>
            <LocationIcon />
            <Typography variant="body2">{address}</Typography>
          </PropertyLocation>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <PriceLabel variant="caption">AVM Price:</PriceLabel>
              <PriceValue variant="h6">${avmPrice.toLocaleString()}</PriceValue>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <PriceLabel variant="caption">Titan Price:</PriceLabel>
              <PriceValue variant="h6">
                ${titanPrice.toLocaleString()}
              </PriceValue>
            </Box>
            <ShareButton startIcon={<ShareIcon />}>Share</ShareButton>
          </Box>
        </Grid>
      </Grid>
      <PropertyFeatures container spacing={3}>
        <Grid item xs={4}>
          <Box display="flex" alignItems="center">
            <FeatureIcon>
              <BedIcon />
            </FeatureIcon>
            <Typography variant="body2">{beds} Beds</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" alignItems="center">
            <FeatureIcon>
              <BathIcon />
            </FeatureIcon>
            <Typography variant="body2">{baths} Baths</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" alignItems="center">
            <FeatureIcon>
              <SqftIcon />
            </FeatureIcon>
            <Typography variant="body2">
              {sqft.toLocaleString()} sqft
            </Typography>
          </Box>
        </Grid>
      </PropertyFeatures>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2">Neighbourhood Rating</Typography>
          <Controller
            name="neighbourhoodRating"
            control={control}
            defaultValue={neighbourhoodRating}
            render={({ field }) => (
              <Rating
                {...field}
                readOnly
                icon={<StarFilledIcon />}
                emptyIcon={<StarIcon />}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2">Crime Rate</Typography>
          <Controller
            name="crimeRate"
            control={control}
            defaultValue={crimeRate}
            render={({ field }) => (
              <Rating
                {...field}
                readOnly
                icon={<StarFilledIcon />}
                emptyIcon={<StarIcon />}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2">CAP Rate</Typography>
          <Typography variant="h6">{capRate}%</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2">Date Posted</Typography>
          <Typography variant="h6">{datePosted}</Typography>
        </Grid>
      </Grid>
      <ProfitSection>
        <Typography variant="body2">Expected Profit</Typography>
        <ProfitValue variant="h5">
          ${expectedProfit.toLocaleString()}
        </ProfitValue>
        <ProfitPercentage>
          <ProfitIcon />
          <Typography variant="body1">{profitPercentage}%</Typography>
        </ProfitPercentage>
      </ProfitSection>
    </StyledBox>
  );
};

export default PropertyDetails;
