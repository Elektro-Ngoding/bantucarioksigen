import axios from "axios";
import Router from "next/router";
import { v4 as uuidv4 } from "uuid";
export const addMitra = async (
  namaToko,
  username,
  provinsi,
  kota,
  alamat,
  kontak
) => {
  const idMitra = uuidv4();
  const dataAuth = await axios.post("http://localhost:3006/auth/register", {
    id_mitra: idMitra,
    username,
    password: "bantucarioksigen",
    role: "mitra",
    verify: "belum terverivikasi",
  });
  const { data } = await axios.post("http://localhost:3006/dataoksigen", {
    _id: idMitra,
    namaToko,
    status: "belum terverivikasi",
    data: {
      provinsi,
      kota,
      alamat,
      kontak,
      statusBuka: "Buka / Tutup",
      stokBarang: "Stok Barang : .....",
      antrian: "Antrian : ......",
      waktuBuka: "00-00",
      waktuTutup: "00-00",
    },
  });
  try {
    const validation = data.message.message;
    if (!validation) {
      if (data.status === 200 && dataAuth.status) {
        Router.push("/adminOksigen");
      }
    } else {
      alert(validation);
    }
  } catch (error) {
    console.log(error);
  }
};
