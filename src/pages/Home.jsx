import { useState, createContext, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchBar from "../components/Search/SearchBar";
import SearchResults from "../components/Search/SearchResults";
import SelectedCard from "../components/Cards/SelectedCard";

export const SearchContext = createContext();

const Home = () => {
  let total = 0;
  const [search, setSearch] = useState({
    brand: "",
    query: "",
  });

  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const searchContextValue = {
    setSearch,
    search,
    selected,
    setSelected,
  };

  return (
    <Container>
      <Box sx={{ mt: 2 }}>
        <AddShoppingCartIcon color="primary" onClick={handleToggle} />

        <Divider />

        <SearchContext.Provider value={searchContextValue}>
          <SearchBar />
          <SearchResults />
        </SearchContext.Provider>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box>
        <SearchContext.Provider value={searchContextValue}>
          <Drawer
            anchor="right"
            open={open}
            width="400px"
            onClose={handleToggle}
          >
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Bidding
            </Typography>

            {selected.map((vehicle) => {
              total += vehicle.price;
              return (
                <SelectedCard
                  id={vehicle.id}
                  name={vehicle.name}
                  image={vehicle.image}
                  price={vehicle.price}
                />
              );
            })}

            <Typography>Total {total}.00 LKR</Typography>
          </Drawer>
        </SearchContext.Provider>
      </Box>
    </Container>
  );
};

export default Home;
