import React from "react";
import { Chip } from "@mui/material";
import { randomColor } from "./utils/utils.mjs";

const TagChip = ({ label }) => {
  return (
    <Chip
      sx={{
        color: "text.secondary",
        fontWeight: 600,
        bgcolor: randomColor,
        position: "relative",
        top: -10,
        left: 10,
        borderRadius: 0,
      }}
      label={label}
    />
  );
};

export default TagChip;
