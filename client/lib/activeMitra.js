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
  const aktivasi = 'terverifikasi';
  const getMitra = await axios.get(`http://localhost:3006/auth/getMitra/${_id}`);
  const updateMitra = await axios.put(`http://localhost:3006/auth/updateMitra/${getMitra.data.id}`, {
    id_mitra: getMitra.data.id_mitra,
    username: getMitra.data.username,
    password: getMitra.data.password,
    role: getMitra.data.role,
    verify: aktivasi
  })

  const { data } = await axios.put(`http://localhost:3006/dataoksigen/${_id}`, {
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
      waktuTutup
    },
  });
  try {
    const validation = data.message.message;
    if (!validation) {
      if (data.status === 200) {
        Router.push("/adminOksigen");
      }
    } else {
      alert(validation);
    }
  } catch (error) {}
};
