import { useContext, useState } from "react";
import { Box, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchVehicles } from "../../api/vehicle.api.mjs";
import { SearchContext } from "../../pages/Home";
import { Pagination } from "@mui/material";

import VehicleCard from "../Cards/VehicleCard";

const SearchResults = () => {
  const { setSearch, search } = useContext(SearchContext);
  const [page, setPage] = useState(1);
  const resultsPerPage = 5;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { isLoading, data: vehicleData } = useQuery({
    queryKey: [
      "vehicles",
      { query: search.brand, start: page.start, limit: page.limit },
    ],
    queryFn: fetchVehicles,
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  const results = vehicleData
    .slice((page - 1) * resultsPerPage, page * resultsPerPage)
    .map((vehicle) => (
      <VehicleCard
        key={vehicle.id}
        id={vehicle.id}
        name={vehicle.name}
        details={vehicle.details}
      />
    ));

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
        {results}
      </Box>
      <Pagination
        mt={2}
        count={Math.ceil(vehicleData.length / resultsPerPage)}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </>
  );
};

export default SearchResults;
