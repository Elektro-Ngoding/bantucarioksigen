import axios from "axios";
export const getMitra = async () => {
  const id = sessionStorage.getItem("user")
  const { data } = await axios.get(`http://localhost:3006/dataoksigen/${id}`);
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
  waktuBuka
) => {
  const token = sessionStorage.getItem("token");
  const { data } = await axios.put(`http://localhost:3006/dataoksigen/${_id}`, {
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
    },
  });
  try {
    const validation = data.message.message;
    if (!validation) {
      if (data.status === 200) {
        Router.push("/Mitra");
      }
    } else {
      alert(validation);
    }
  } catch (error) {}
};
