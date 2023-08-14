import { useState, createContext, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchBar from "../components/Search/SearchBar";
import SearchResults from "../components/Search/SearchResults";
import SelectedCard from "../components/Cards/SelectedCard";

export const SearchContext = createContext();

const Home = () => {
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
      <Box>
        <AddShoppingCartIcon component={Button} onClick={handleToggle} />

        <SearchContext.Provider value={searchContextValue}>
          <SearchBar />
          <SearchResults />
        </SearchContext.Provider>
      </Box>

      <Box>
        <SearchContext.Provider value={searchContextValue}>
          <Drawer anchor="right" open={open} onClose={handleToggle}>
            {selected.map((vehicle) => (
              <SelectedCard
                id={vehicle.id}
                name={vehicle.name}
                image={vehicle.image}
                price={vehicle.price}
              />
            ))}
            <List>
              <ListItem>
                <ListItemText primary="Hellow" secondary="WOrkd" />
              </ListItem>
            </List>
          </Drawer>
        </SearchContext.Provider>
      </Box>
    </Container>
  );
};

export default Home;
