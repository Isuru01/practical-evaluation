import { useContext, useState } from "react";
import {
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
import { SearchContext } from "../../pages/Home";

const SelectedCard = (props) => {
  const { id, name, price, image } = props;
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
        display: "flex",
        alignItems: "center",
        gap: 1,
        maxWidth: { sm: 1, md: "300px" },
        minWidth: { md: "300px" },
      }}
    >
      <CardMedia
        sx={{ width: "100px", height: "100px", ml: "4px", borderRadiu: 3 }}
        component="img"
        image={image}
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
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {price} LKR
        </Typography>

        <Button
          sx={{ ml: "auto" }}
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
