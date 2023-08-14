export const handleBid = (e, setError, price) => {
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

export const handleSubmit = (id, name, price, image, setSelected, setAdd) => {
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
