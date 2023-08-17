import AxiosInstance from "./AxiosInstance.mjs";

const fetchVehicles = async ({ queryKey }) => {
  const { page, query, limit } = queryKey[1];

  const params =
    queryKey[1].query === "All"
      ? `?_page=${page}&_limit=${limit}`
      : `?details.brand=${queryKey[1].query}&_page=${page}&_limit=${limit}`;

  const result = await AxiosInstance().get(`/vehicles${params}`);
  return result.data;
};

const fetchAVehicle = async ({ queryKey }) => {
  const result = await AxiosInstance().get(`/vehicles/${queryKey[1]}`);
  return result.data;
};

export { fetchVehicles, fetchAVehicle };
