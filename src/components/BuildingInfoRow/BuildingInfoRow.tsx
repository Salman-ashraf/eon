import { Box } from "@mui/material";
import BuildingInfo from "@src/components/BuildingInfo/BuildingInfo";

const buildingInfos = [
  {
    yearBuilt: "2001",
    levels: "1",
    garage: "Detached",
    foundation: "Slab",
    construction: "Wood",
    roofConstruction: "Metal",
    basement: "Unfinished",
  },
  {
    yearBuilt: "1985",
    levels: "3",
    garage: "Attached",
    foundation: "Concrete",
    construction: "Vinyl",
    roofConstruction: "Tile",
    basement: "Finished",
  },
  {
    yearBuilt: "2010",
    levels: "2",
    garage: "None",
    foundation: "Pier and Beam",
    construction: "Stucco",
    roofConstruction: "Flat",
    basement: "None",
  },
];

const BuildingInfoRow = () => {
  return (
    <Box className="building-info-row">
      {buildingInfos.map((info) => (
        <BuildingInfo
          key={info.foundation}
          className="building-info-item"
          {...info}
        />
      ))}
      <style>{`
        .building-info-row {
          display: flex;
          gap: 12px;
          justify-content: flex-start;
          flex-wrap: wrap;
        }
        .building-info-item {
          min-width: 240px;
          flex: 1;
          flex-basis: 0%;
        }
      `}</style>
    </Box>
  );
};

export default BuildingInfoRow;
