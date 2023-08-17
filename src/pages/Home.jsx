import { useState } from "react";
import { Box, Container, Divider } from "@mui/material";
import NavBar from "../components/Navigation/NavBar";
import Loader from "../components/Loader";
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
        <SearchContext.Provider value={searchContextValue}>
          <SearchBar />
          <Divider sx={{ mb: 2 }} />
          <SearchResults />
        </SearchContext.Provider>
      </Box>

      <Divider sx={{ mb: 2 }} />
    </Container>
  );
};

export default Home;
