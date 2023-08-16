import { useState, useContext } from "react";
import { Box, TextField, Button } from "@mui/material";
import { handleSubmit, handleBid } from "./utils/utils.mjs";
import { BiddingContext } from "../context/Context.mjs";
import PopUp from "./Models/PopUp";

const BiddingField = ({ id, name, price, brand, image }) => {
  const { bidding, setBidding } = useContext(BiddingContext);

  const [error, setError] = useState({
    error: true,
    msg: "",
  });

  const [bid, setBid] = useState(0);
  const [add, setAdd] = useState(false);

  const handleClose = () => {
    setAdd(false);
  };

  if (add) return <PopUp name={name} brand={brand} handleClose={handleClose} />;

  return (
    <Box>
      <TextField
        name="bid"
        fullWidth
        label="Bid"
        size="small"
        defaultValue={bid}
        onChange={(e) => handleBid(e, setBid, setError, price)}
        helperText={error.msg}
      />

      <Button
        sx={{ mt: 1 }}
        disabled={error.error}
        fullWidth
        variant="contained"
        onClick={() =>
          handleSubmit(id, name, brand, price, image, bid, setBidding, setAdd)
        }
      >
        Bid
      </Button>
    </Box>
  );
};

export default BiddingField;
