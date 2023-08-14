import { useContext } from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchVehicles } from "../../api/vehicle.api.mjs";
import { SearchContext } from "../../pages/Home";
import VehicleCard from "../Cards/VehicleCard";

const SearchResults = () => {
  const { setSearch, search } = useContext(SearchContext);

  const { isLoading, data: vehicleData } = useQuery({
    queryKey: ["vehicles"],
    queryFn: fetchVehicles,
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  console.log(search);
  const results = vehicleData
    ?.filter((vehicle) => vehicle.details.brand === search.brand)
    .map((vehicle) => (
      <VehicleCard
        key={vehicle.id}
        id={vehicle.id}
        name={vehicle.name}
        details={vehicle.details}
      />
    ));

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>{results}</Box>
  );
};

export default SearchResults;
