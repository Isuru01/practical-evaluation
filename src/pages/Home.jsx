import { useState } from "react";
import { Box, Container, Divider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SideDrawer from "../components/Drawer/SIdeDrawer";
import NavBar from "../components/Navigation/NavBar";
import { SearchContext } from "../context/Context.mjs";
import SearchBar from "../components/Search/SearchBar";
import SearchResults from "../components/Search/SearchResults";

const Home = () => {
  //search query state
  const [search, setSearch] = useState({
    brand: "All",
    query: "",
  });

  const searchContextValue = {
    search,
    setSearch,
  };

  return (
    <Container>
      <NavBar />
      <Box sx={{ mt: 2 }}>
        <Divider />

        <SearchContext.Provider value={searchContextValue}>
          <SearchBar />
          <SearchResults />
        </SearchContext.Provider>
      </Box>

      <Divider sx={{ mb: 2 }} />
    </Container>
  );
};

export default Home;
