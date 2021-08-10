import axios from "axios";
import Router from "next/router";
export const updateMitra = async (
  _id,
  namaToko,
  username,
  provinsi,
  kota,
  alamat,
  kontak,
) => {
    const { data } = await axios.put(`http://localhost:3006/dataoksigen/${_id}`, {
      namaToko,
      username,
      status: "terverivikasi",
      password: "123",
      data: {
        provinsi,
        kota,
        alamat,
        kontak,
      },
    });
    try {
        const validation = data.message.message;
        if(!validation){
           if(data.status === 400){
               Router.reload();
           }
        }else{
            alert(validation);
        }
    } catch (error) {
       
    }
    
};