import React from "react";
import { Box, Typography, Chip, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAVehicle } from "../api/vehicle.api.mjs";

const DetailPage = () => {
  const { id } = useParams();

  const { isLoading, data: vehicle } = useQuery({
    queryKey: ["vehicles", id],
    queryFn: fetchAVehicle,
  });

  if (isLoading) return <div>Loading</div>;

  const {
    name,
    details: { currency, color, description, manufactureYear, image, price },
  } = vehicle;

  // const handleBid = (e) => {
  //   const { name, value } = e.target;

  //   if (!isNaN(value)) {
  //     if (value <= price) {
  //       setError({
  //         error: true,
  //         msg: "Bid should be equal or higher than the price",
  //       });
  //     } else {
  //       setError({ error: false, msg: "" });
  //     }
  //   } else {
  //     setError({
  //       error: true,
  //       msg: "Please input only a number price",
  //     });
  //   }
  // };

  // const handleSubmit = (id, name, price, image) => {
  //   const vehicle = { id, name, price, image };

  //   //reference from the stackover flow to get the unique values to seleceted state array
  //   setSelected((prevSelected) => {
  //     // Check if the vehicle already exists in the selected array
  //     const vehicleExists = prevSelected.some(
  //       (selectedVehicle) => selectedVehicle.id === vehicle.id
  //     );
  //     // If the vehicle doesn't exist, add it to the selected array
  //     if (!vehicleExists) {
  //       return [...prevSelected, vehicle];
  //     }
  //     // If the vehicle already exists, return the previous selected array
  //     return prevSelected;
  //   });
  // };

  return (
    <Container>
      <Box>
        <Box sx={{ display: "flex" }}>
          <img src={image} />

          <Box>
            <Typography variant="h6">{name}</Typography>

            <Typography>Description</Typography>

            <Typography color="text.secondary">{description}</Typography>

            <Chip
              sx={{
                bgcolor: color,
                borderRadius: "222113",
                width: "32px",
                height: "32px",
              }}
            />

            {/* <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                name="bid"
                fullWidth
                label="Bid"
                size="small"
                onChange={handleBid}
                helperText={error.msg}
              />

              <Button
                disabled={error.error}
                variant="contained"
                onClick={() => handleSubmit(id, name, price, image)}
              >
                Bid
              </Button>
            </Box> */}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default DetailPage;
