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
        maxWidth: { sm: 1, md: "300px" },
        minWidth: { md: "300px" },
      }}
    >
      <CardMedia component="img" image={image} title={name} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {price} LKR
        </Typography>

        <Button onClick={() => handleNavigate(id)}>View</Button>
      </CardContent>
    </Card>
  );
};

export default SelectedCard;
