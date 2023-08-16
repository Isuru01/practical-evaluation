import { useState, useContext } from "react";
import {
  Box,
  Typography,
  Chip,
  Container,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAVehicle } from "../api/vehicle.api.mjs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { handleSubmit, handleBid } from "../components/utils/utils.mjs";
import { BiddingContext } from "../context/Context.mjs";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";

const DetailPage = () => {
  const { id } = useParams();

  const naigate = useNavigate();
  const { bidding, setBidding } = useContext(BiddingContext);

  const [error, setError] = useState({
    error: true,
    msg: "",
  });

  const [bid, setBid] = useState(0);
  const [add, setAdd] = useState(false);

  const { isLoading, data: vehicle } = useQuery({
    queryKey: ["vehicles", id],
    queryFn: fetchAVehicle,
  });

  if (isLoading) return <div>Loading</div>;

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

        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <img width="100%" src={image} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h4" mt={2}>
              {brand} {name}
            </Typography>

            <Typography variant="h6">
              Price {price} {currency}
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

            <Box>
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default DetailPage;
