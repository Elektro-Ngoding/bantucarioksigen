import axios from "axios";
import Router from "next/router";
export const deleteMitra = async (id) => {
  const { data } = await axios.delete(
    `http://localhost:3006/dataoksigen/${id}`
  );
  try {
      if (data.status === 200) {
        Router.reload();
    }
  } catch (error) {
      alert(error);
  }
};
