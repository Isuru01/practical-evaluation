import { useContext } from "react";
import { Drawer, Typography, Box } from "@mui/material";
import { BiddingContext } from "../../context/Context.mjs";
import SelectedCard from "../Cards/SelectedCard";

const SideDrawer = ({ open, handleToggle }) => {
  const { bidding } = useContext(BiddingContext);

  let totalValue = 0.0;
  let totalBid = 0.0;

  return (
    <Drawer anchor="right" open={open} onClose={handleToggle}>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Bidding
      </Typography>

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
        <Typography fontWeight="500" sx={{ ml: 2, mt: 2 }}>
          Total <br /> {totalValue}.00 LKR
        </Typography>

        <Typography fontWeight="500" sx={{ ml: 2 }}>
          My Total Bidding
          <br /> {totalBid}.00 LKR
        </Typography>
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
