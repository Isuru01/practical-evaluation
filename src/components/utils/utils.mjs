import { blue, red, green, yellow, orange } from "@mui/material/colors";

export const randomColor = () => {
  const colors = [green[200], orange[200], red[200], yellow[200], blue[200]];
  const randomCol = Math.floor(Math.random() * colors.length);
  return colors[randomCol];
};

export const handleBid = (e, setBid, setError, price) => {
  const { name, value } = e.target;

  if (!isNaN(value)) {
    if (value <= price) {
      setError({
        error: true,
        msg: "Bid should be equal or higher than the price",
      });
    } else {
      setError({ error: false, msg: "" });
      setBid(value);
    }
  } else {
    setError({
      error: true,
      msg: "Please input only a number price",
    });
  }
};

export const handleSubmit = (
  id,
  name,
  brand,
  price,
  image,
  bid,
  setBidding,
  setAdd
) => {
  const vehicle = { id, name, price, image, bid, brand };

  setBidding((prev) => {
    let exist = prev.find((prevVeh) => prevVeh.id === vehicle.id);

    if (exist) {
      exist.bid = bid;
      setAdd(true);
      return [...prev];
    } else {
      setAdd(true);
      return [...prev, vehicle];
    }
  });

  // //reference from the stackover flow to get the unique values to seleceted state array
  // setBidding((prevBdidding) => {
  //   // Check if the vehicle already exists in the selected array
  //   const vehicleExists = prevBdidding.some(
  //     (selectedVehicle) => selectedVehicle.id === vehicle.id
  //   );
  //   // If the vehicle doesn't exist, add it to the selected array
  //   if (!vehicleExists) {
  //     setAdd(true);
  //     return [...prevBdidding, vehicle];
  //   }
  //   // If the vehicle already exists, return the previous selected array
  //   return prevBdidding;
  // })
};
