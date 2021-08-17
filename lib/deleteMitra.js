import axios from "axios";
import Router from "next/router";
export const deleteMitra = async (id) => {
  const { data } = await axios.delete(
    `http://localhost:3006/dataoksigen/${id}`
  );
  const deleteMitra = await axios.delete(
    `http://localhost:3006/auth/${id}`
  );
  try {
      if (data.status === 200) {
        Router.push("/adminOksigen");
    }
  } catch (error) {
      alert(error);
  }
};
