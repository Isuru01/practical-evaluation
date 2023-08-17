import { useContext, useState } from "react";
import { blue } from "@mui/material/colors";
import {
  Box,
  Card,
  Chip,
  Typography,
  CardMedia,
  CardContent,
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BiddingField from "../BiddingField";
import TagChip from "../TagChip";

const VehicleCard = (props) => {
  // const { bidding, setBidding } = useContext(BiddingContext);

  // const [error, setError] = useState({
  //   error: true,
  //   msg: "",
  // });

  // const [bid, setBid] = useState(0);
  // const [add, setAdd] = useState(false);
  const naviagte = useNavigate();

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

  const handleView = () => {
    naviagte(`/vehicle/${id}`);
  };

  // if (add) return <PopUp name={name} brand={brand} />;

  return (
    <Card
      component={Paper}
      elevation={3}
      sx={{
        maxWidth: { sm: "100%", md: "300px" },
        minWidth: { sm: "100%", md: "300px" },
        ":hover": {
          position: "relative",
          top: -10,
          bgcolor: blue[50],
          transition: "0.2s ease-in",
        },
      }}
    >
      <Box>
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

        <TagChip label={`${brand} ${manufactureYear}`} />
      </Box>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography gutterBottom variant="h6" sx={{ flexGrow: 1 }}>
          {brand} {name}
        </Typography>

        <Typography
          gutterBottom
          variant="body2"
          color="text.secondary"
          sx={{ mt: "auto", height: "40px" }}
        >
          {description.slice(0, 100)}
        </Typography>

        <Typography gutterBottom color="primary">
          Original Price {price} {currency}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
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

        <Button sx={{ my: 1 }} variant="outlined" onClick={handleView}>
          View Details
        </Button>

        {/*
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
        </Box> */}
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
