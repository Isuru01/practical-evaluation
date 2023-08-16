import { useState } from "react";
import { Box } from "@mui/material";
import SideDrawer from "../Drawer/SIdeDrawer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <AddShoppingCartIcon color="primary" onClick={handleToggle} />

      <SideDrawer open={open} handleToggle={handleToggle} />
    </Box>
  );
};

export default NavBar;
