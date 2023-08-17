import { useContext } from "react";
import { Drawer, Typography, Box, Button } from "@mui/material";
import { BiddingContext } from "../../context/Context.mjs";
import SelectedCard from "../Cards/SelectedCard";

const SideDrawer = ({ open, handleToggle }) => {
  const { bidding, setBidding } = useContext(BiddingContext);

  let totalValue = Number(0.0);
  let totalBid = Number(0.0);

  const handleClear = () => {
    setBidding([]);
  };

  return (
    <Drawer anchor="right" open={open} onClose={handleToggle}>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Bidding
        </Typography>
        <Button variant="outlined" onClick={handleClear}>
          Claear All
        </Button>
      </Box>

      {bidding.map((vehicle) => {
        totalValue += Number(vehicle.price);
        totalBid += Number(vehicle.bid);

        return (
          <SelectedCard
            id={vehicle.id}
            brand={vehicle.brand}
            name={vehicle.name}
            image={vehicle.image}
            price={vehicle.price}
            bid={vehicle.bid}
          />
        );
      })}

      {bidding.length === 0 && (
        <Typography variant="h6" sx={{ textAlign: "center", ml: 2, mr: 5 }}>
          There is no bid items
        </Typography>
      )}

      <Box sx={{ borderTop: "1px solid black", my: 2 }}>
        <Typography fontWeight="500" sx={{ ml: 2, my: 2, fontSize: "1.2rem" }}>
          Total Item Worth <br /> {totalValue}.00 LKR
        </Typography>

        <Typography fontWeight="500" sx={{ ml: 2, fontSize: "1.2rem" }}>
          My Total Bidding
          <br /> {totalBid}.00 LKR
        </Typography>
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
