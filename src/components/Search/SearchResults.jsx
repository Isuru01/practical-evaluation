import { useContext, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Loader from "../Loader";
import { useQuery } from "@tanstack/react-query";
import { fetchVehicles } from "../../api/vehicle.api.mjs";
import { SearchContext } from "../../context/Context.mjs";
import { Pagination } from "@mui/material";

import VehicleCard from "../Cards/VehicleCard";

const SearchResults = () => {
  const { setSearch, search } = useContext(SearchContext);

  const resultsPerPage = 5;
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { isLoading, data: vehicleData } = useQuery({
    queryKey: [
      "vehicles",
      { query: search.brand, page: page, limit: resultsPerPage },
    ],
    queryFn: fetchVehicles,
  });

  if (isLoading) {
    return <Loader />;
  }

  const results = vehicleData.map((vehicle) => (
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
        {results.length === 0 ? (
          <Typography variant="h4" sx={{ my: 4, color: "primary.main" }}>
            There are no more results
          </Typography>
        ) : (
          results
        )}
      </Box>

      <Pagination
        mt={2}
        count={results.length < 5 ? page : 4}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </>
  );
};

export default SearchResults;
