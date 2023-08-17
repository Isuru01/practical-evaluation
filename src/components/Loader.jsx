import { useState, CSSProperties } from "react";
import { Box } from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loader = () => {
  return (
    <Box sx={{ minHeight: "80vh", margin: "auto" }}>
      <ClipLoader
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  );
};

export default Loader;
