/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { Box, Divider } from "@mui/material";
import PlusIcon from "@src/components/SVGIcons/PlusIcon";
import MinusIcon from "@src/components/SVGIcons/MinusIcon";
import ExpandIcon from "@src/components/SVGIcons/ExpandIcon";
import ControlButton from "./ControlButton";

interface ControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onExpand: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onExpand,
}) => {
  return (
    <Box
      className="controls"
      sx={{
        borderRadius: "4px",
        backgroundColor: "rgba(17, 25, 34, 1)",
        boxShadow: "0px 0px 8px rgba(20, 79, 255, 0.5)",
        display: "flex",
        maxWidth: "32px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(64, 200, 224, 1)",
      }}
    >
      <ControlButton onClick={onZoomIn} aria-label="Zoom in">
        <PlusIcon className="control-icon" />
      </ControlButton>
      <Divider sx={{ width: "100%", borderColor: "rgba(80, 94, 110, 1)" }} />
      <ControlButton onClick={onZoomOut} aria-label="Zoom out">
        <MinusIcon className="control-icon" />
      </ControlButton>
      <Divider sx={{ width: "100%", borderColor: "rgba(80, 94, 110, 1)" }} />
      <ControlButton onClick={onExpand} aria-label="Expand">
        <ExpandIcon className="control-icon expand-icon" />
      </ControlButton>
      <style>{`
        .control-icon {
          align-self: stretch;
          min-height: 24px;
          width: 24px;
          margin: auto 0;
        }
        .expand-icon {
          min-height: 20px;
          width: 20px;
        }
      `}</style>
    </Box>
  );
};

export default Controls;