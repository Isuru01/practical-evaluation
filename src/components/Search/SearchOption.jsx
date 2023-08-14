import { useState, useContext } from "react";
import { SearchContext } from "../../pages/Home";
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  TextField,
  Button,
} from "@mui/material";

const brands = [
  { id: 1, brand: "Volkswagen" },
  { id: 2, brand: "Audi" },
  { id: 3, brand: "Ford" },
];

const SearchOption = () => {
  const { setSearch, search } = useContext(SearchContext);

  const handleChange = (e) => {
    //destructer event
    const { name, value } = e.target;

    setSearch((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const options = brands.map((brand) => (
    <MenuItem key={brand.id} value={brand.brand}>
      {brand.brand}
    </MenuItem>
  ));

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Brand</InputLabel>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Select
            name="brand"
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={search.brand}
            label="Brand"
            sx={{ minWidth: 120 }}
            onChange={handleChange}
          >
            {options}
          </Select>

          <TextField
            name="query"
            value={search.query}
            onChange={handleChange}
            label="Search"
            size="small"
          />

          <Button variant="contained" size="small">
            Search
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default SearchOption;
