import AxiosInstance from "./AxiosInstance.mjs";

const fetchVehicles = async () => {
  const result = await AxiosInstance().get("/vehicles");
  return result.data;
};

const fetchAVehicle = async ({ queryKey }) => {
  const result = await AxiosInstance().get(`/vehicles/${queryKey[1]}`);
  return result.data;
};

export { fetchVehicles, fetchAVehicle };
