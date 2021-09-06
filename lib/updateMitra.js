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
  waktuTutup
) => {
  const { data } = await axios.put(`${process.env.API_HOST_ROUTER}${_id}`, {
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

export const UpdateAccountMitra = async (_id, password) => {
  const data = await axios
    .put(`${process.env.API_HOST_ROUTER_6_1}${_id}`, {
      password: password,
    })
    .then((res) => {
      alert(res.data.message);
      return false
    })
};

export const resCAPTCHA = async (token, ip, _id, password) => {
  const userIp = ip.IPv4;
  const data = await axios
    .post(`${process.env.API_HOST_ROUTER_10}`, {
      token: token,
      ip: userIp,
    })
    .then((res) => {
      if (res.data.success == true) {
        UpdateAccountMitra(_id, password);
      }else if(res.data.success == false){
        alert("Terjadi Kesalahan CAPTCHA");
      }
    })
    .catch((err) => {
      alert("Terjadi Kesalahan CAPTCHA");
    });
};
