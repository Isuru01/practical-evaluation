import React from "react";
import { Box, Typography, Chip, Container, Paper, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAVehicle } from "../api/vehicle.api.mjs";
import BiddingField from "../components/BiddingField";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavBar from "../components/Navigation/NavBar";
import TagChip from "../components/TagChip";

const DetailPage = () => {
  const { id } = useParams();

  const naigate = useNavigate();

  const { isLoading, data: vehicle } = useQuery({
    queryKey: ["vehicles", id],
    queryFn: fetchAVehicle,
  });

  if (isLoading) return <Loader />;

  const {
    name,
    details: {
      currency,
      color,
      description,
      manufactureYear,
      brand,
      image,
      price,
    },
  } = vehicle;

  return (
    <Container>
      <NavBar />
      <Box component={Paper} sx={{ mt: 2 }} elevation={4}>
        <ArrowBackIcon sx={{ ml: 2, mt: 2 }} onClick={() => naigate("/")} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "2fr 2fr" },
            gap: 2,
          }}
        >
          <img
            width="100%"
            src={
              image
                ? image
                : "https://th.bing.com/th/id/OIP.GnqZiwU7k5f_kRYkw8FNNwHaF3?pid=ImgDet&rs=1"
            }
          />

          <Stack spacing={2} sx={{ my: 2, mx: 4 }}>
            <Typography variant="h4" mt={2}>
              {brand} {name}
            </Typography>

            <Box>
              <TagChip label={`${brand} ${manufactureYear}`} />
            </Box>

            <Typography variant="h6">
              Original Price {price} {currency}
            </Typography>

            <Box>
              <Typography>Description</Typography>
              <Typography color="text.secondary">{description}</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography>Color</Typography>

              <Chip
                sx={{
                  bgcolor: color,
                  borderRadius: "222113",
                  width: "32px",
                  height: "32px",
                }}
              />
            </Box>

            <BiddingField
              id={id}
              name={name}
              price={price}
              brand={brand}
              image={image}
            />

            {/* <Box>
              <TextField
                name="bid"
                fullWidth
                label="Bid"
                size="small"
                defaultValue={bid}
                onChange={(e) => handleBid(e, setBid, setError, price)}
                helperText={error.msg}
              />

              <Button
                sx={{ mt: 1 }}
                disabled={error.error}
                fullWidth
                variant="contained"
                onClick={() =>
                  handleSubmit(
                    id,
                    name,
                    brand,
                    price,
                    image,
                    bid,
                    setBidding,
                    setAdd
                  )
                }
              >
                Bid
              </Button>
              </Box>*/}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default DetailPage;
