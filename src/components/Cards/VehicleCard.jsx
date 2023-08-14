import { useContext, useState } from "react";
import {
  Box,
  Card,
  Chip,
  Typography,
  CardMedia,
  CardContent,
  Paper,
  CardActionArea,
  TextField,
  Button,
} from "@mui/material";
import { SearchContext } from "../../pages/Home";
import { handleSubmit, handleBid } from "../utils/utils.mjs";
import PopUp from "../Models/PopUp";

const VehicleCard = (props) => {
  const { selected, setSelected } = useContext(SearchContext);

  const [error, setError] = useState({
    error: true,
    msg: "",
  });

  const [add, setAdd] = useState(false);

  const {
    id,
    name,
    details: {
      currency,
      color,
      description,
      manufactureYear,
      image,
      price,
      brand,
    },
  } = props;

  if (add) return <PopUp />;

  return (
    <Card
      component={Paper}
      elevation={3}
      sx={{
        maxWidth: { sm: 1, md: "300px" },
        minWidth: { md: "300px" },
      }}
    >
      <CardMedia
        component="img"
        sx={{ maxHeight: 200, minHeight: 200 }}
        image={
          image
            ? image
            : "https://th.bing.com/th/id/OIP.GnqZiwU7k5f_kRYkw8FNNwHaF3?pid=ImgDet&rs=1"
        }
        title={name}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand} {name}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {description}
        </Typography>

        <Typography gutterBottom color="text.secondary">
          {price} {currency}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography gutterBottom color="text.secondary">
            Color
          </Typography>

          <Chip
            sx={{
              bgcolor: color,
              borderRadius: "222113",
              width: "18px",
              height: "18px",
            }}
          />
        </Box>

        <Box>
          <TextField
            name="bid"
            fullWidth
            label="Bid"
            size="small"
            onChange={(e) => handleBid(e, setError, price)}
            helperText={error.msg}
          />
          <CardActionArea>
            <Button
              sx={{ mt: 1 }}
              disabled={error.error}
              fullWidth
              variant="contained"
              onClick={() =>
                handleSubmit(id, name, price, image, setSelected, setAdd)
              }
            >
              Bid
            </Button>
          </CardActionArea>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
