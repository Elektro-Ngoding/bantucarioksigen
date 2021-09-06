import axios from "axios";

export const getMitra = async (id) => {
  const { data } = await axios.get(`${process.env.API_HOST_ROUTER}${id}`);
  if (data === null) {
    return;
  } else {
    return data;
  }
};
export const updateMitra = async (
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
  const token = sessionStorage.getItem("token");
  const { data } = await axios.put(`${process.env.API_HOST_ROUTER}${_id}`, {
    headers: {
      token: token,
    },
    namaToko,
    status,
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
