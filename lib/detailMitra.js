import axios from "axios";
export const getDetailMitra = async (_id) => {
  const { data } = await axios.get(
    `${process.env.API_HOST_ROUTER_2_1}${_id}`
  );
  try {
    return data;
  } catch (error) {
    return null;
  }
};
