import { useContext, useState } from "react";
import {
  Chip,
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Paper,
  CardActionArea,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SelectedCard = ({ id, name, brand, price, image, bid }) => {
  const naviagte = useNavigate();

  const handleNavigate = (id) => {
    naviagte(`/vehicle/${id}`);
  };

  return (
    <Card
      component={Paper}
      elevation={3}
      sx={{
        p: 0,
        m: 1,
        gap: 1,
        display: "flex",
        alignItems: "center",
        maxWidth: { sm: 1, md: "100%" },
        minWidth: { md: "300px" },
      }}
    >
      <CardMedia
        sx={{ width: "160px", height: "120%", ml: "4px", borderRadiu: 3 }}
        component="img"
        image={
          image
            ? image
            : "https://th.bing.com/th/id/OIP.GnqZiwU7k5f_kRYkw8FNNwHaF3?pid=ImgDet&rs=1"
        }
        title={name}
      />

      <Box
        sx={{
          p: 0,
          m: 1,
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "1.2rem" }} component="div">
          {brand} {name}
        </Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          <Typography gutterBottom variant="body2" color="primary">
            Latest Bid <br /> {bid} LKR
          </Typography>

          <Typography
            sx={{ textAlign: "right" }}
            gutterBottom
            variant="body2"
            color="primary"
          >
            Original Price <br /> {price} LKR
          </Typography>
        </Box>

        <Button
          sx={{ ml: "auto", mt: 1 }}
          size="small"
          variant="outlined"
          onClick={() => handleNavigate(id)}
        >
          View
        </Button>
      </Box>
    </Card>
  );
};

export default SelectedCard;
