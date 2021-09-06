import axios from "axios";
import Router from "next/router";
export const activeMitra = async (
  _id,
  namaToko,
  status,
  provinsi,
  kota,
  alamat,
  kontak,
  statusBuka,
  stokBarang,
  antrian,
  waktuBuka,
  waktuTutup
) => {
  const aktivasi = status;
  const getMitra = await axios.get(`${process.env.API_HOST_ROUTER_2_1}${_id}`);
  const updateMitra = await axios.put(
    `${process.env.API_HOST_ROUTER_6}${getMitra.data._id}`,
    {
      verify: aktivasi,
    }
  );

  const { data } = await axios.put(`${process.env.API_HOST_ROUTER}${_id}`, {
    namaToko,
    status: aktivasi,
    data: {
      provinsi,
      kota,
      alamat,
      kontak,
      statusBuka,
      stokBarang,
      antrian,
      waktuBuka,
      waktuTutup,
    },
  });
  try {
    const validation = data.message.message;
    if (!validation) {
      if (data.status === 200) {
        Router.push("/dashboard");
      }
    } else {
      alert(validation);
    }
  } catch (error) {}
};
