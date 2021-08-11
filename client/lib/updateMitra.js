import axios from "axios";
import Router from "next/router";
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
) => {
  const { data } = await axios.put(`http://localhost:3006/dataoksigen/${_id}`, {
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
    if(!validation){
       if(data.status === 200){
           Router.reload();
       }
    }else{
        alert(validation);
    }
  } catch (error) {}
};
