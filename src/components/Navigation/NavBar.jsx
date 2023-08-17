import { useState } from "react";
import { Box, Typography } from "@mui/material";
import SideDrawer from "../Drawer/SIdeDrawer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ backgroundColor: "primary.main", py: 2, px: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color="#FFFFFF">
          Bidding House
        </Typography>
        <AddShoppingCartIcon
          sx={{ color: "#FFFFFF", fontSize: "1.8rem" }}
          onClick={handleToggle}
        />
      </Box>

      <SideDrawer open={open} handleToggle={handleToggle} />
    </Box>
  );
};

export default NavBar;
