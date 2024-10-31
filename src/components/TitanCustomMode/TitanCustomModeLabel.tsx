/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface TitanCustomModeLabelProps {
  text: string;
}

const TitanCustomModeLabel: React.FC<TitanCustomModeLabelProps> = ({
  text,
}) => {
  return (
    <div className="titan-custom-mode-label">
      {text}
      <style>{`
        .titan-custom-mode-label {
          color: var(--BodyPrimary, #fff);
          text-align: right;
          align-self: stretch;
          margin: auto 0;
          margin-right:10px;
          font: 600 12px Poppins, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default TitanCustomModeLabel;