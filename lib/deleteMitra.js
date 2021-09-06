import axios from "axios";
import Router from "next/router";
export const deleteMitra = async (id) => {
  const { data } = await axios.delete(
    `${process.env.API_HOST_ROUTER}${id}`
  );
  const deleteMitra = await axios.delete(
    `${process.env.API_HOST_ROUTER_2}${id}`
  );
  try {
      if (data.status === 200) {
        Router.push("/dashboard");
    }
  } catch (error) {
      alert(error);
  }
};
