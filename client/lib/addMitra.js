import axios from "axios";
import Router from "next/router";
export const addMitra = async (
  namaToko,
  username,
  provinsi,
  kota,
  alamat,
  kontak,
) => {
    const { data } = await axios.post("http://localhost:3006/dataoksigen", {
      namaToko,
      username,
      status: "belum terverivikasi",
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
               Router.push('/adminOksigen');
           }
        }else{
            console.log("masih ada yang error")
            alert(validation);
        }
    } catch (error) {
       
    }
    
};