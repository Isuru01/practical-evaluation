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
import { BiddingContext, SearchContext } from "../../context/Context.mjs";
import { handleSubmit, handleBid } from "../utils/utils.mjs";
import PopUp from "../Models/PopUp";
import BiddingField from "../BiddingField";

const VehicleCard = (props) => {
  // const { bidding, setBidding } = useContext(BiddingContext);

  // const [error, setError] = useState({
  //   error: true,
  //   msg: "",
  // });

  // const [bid, setBid] = useState(0);
  // const [add, setAdd] = useState(false);

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

  // if (add) return <PopUp name={name} brand={brand} />;

  return (
    <Card
      component={Paper}
      elevation={3}
      sx={{
        maxWidth: { sm: 1, md: "300px" },
        minWidth: { sm: 1, md: "300px" },
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

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "space-between",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {brand} {name}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="text.secondary"
          sx={{ height: "40px" }}
        >
          {description.slice(0, 100)}
        </Typography>

        <Typography gutterBottom color="primary">
          {price} {currency}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Typography color="text.secondary">Color</Typography>

          <Chip
            sx={{
              bgcolor: color,
              borderRadius: "222113",
              width: "18px",
              height: "18px",
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
        </Box> */}
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
