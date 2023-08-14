import AxiosInstance from "./AxiosInstance.mjs";

const fetchVehicles = async ({ queryKey }) => {
  console.log(queryKey[1].query);
  const result = await AxiosInstance().get(
    `/vehicles?details.brand=${queryKey[1].query}`
  );
  console.log(result);
  return result.data;
};

const fetchAVehicle = async ({ queryKey }) => {
  const result = await AxiosInstance().get(`/vehicles/${queryKey[1]}`);
  return result.data;
};

export { fetchVehicles, fetchAVehicle };
