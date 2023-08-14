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
    details: { currency, color, description, manufactureYear, image, price },
  } = props;

  const handleBid = (e) => {
    const { name, value } = e.target;

    if (!isNaN(value)) {
      if (value <= price) {
        setError({
          error: true,
          msg: "Bid should be equal or higher than the price",
        });
      } else {
        setError({ error: false, msg: "" });
      }
    } else {
      setError({
        error: true,
        msg: "Please input only a number price",
      });
    }
  };

  const handleSubmit = (id, name, price, image) => {
    const vehicle = { id, name, price, image };

    //reference from the stackover flow to get the unique values to seleceted state array
    setSelected((prevSelected) => {
      // Check if the vehicle already exists in the selected array
      const vehicleExists = prevSelected.some(
        (selectedVehicle) => selectedVehicle.id === vehicle.id
      );
      // If the vehicle doesn't exist, add it to the selected array
      if (!vehicleExists) {
        setAdd(true);
        return [...prevSelected, vehicle];
      }
      // If the vehicle already exists, return the previous selected array
      return prevSelected;
    });
  };

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
          {name}
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
            onChange={handleBid}
            helperText={error.msg}
          />
          <CardActionArea>
            <Button
              sx={{ mt: 1 }}
              disabled={error.error}
              fullWidth
              variant="contained"
              onClick={() => handleSubmit(id, name, price, image)}
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
