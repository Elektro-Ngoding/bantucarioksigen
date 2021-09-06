import axios from "axios";
import Router from "next/router";

export const loginAuth = async (username, password, remember) => {
  const loginAuth = await axios
    .post(
      `${process.env.API_HOST_ROUTER_4}`,
      {
        username,
        password,
        remember,
      },
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      if (remember) {
        if (res.data.status === 200) {
          if (res.data.verify === "terverifikasi") {
            localStorage.setItem("userLogIn", true);
            Router.replace("/");
          } else {
            alert("akun anda belum diaktivasi, segera hubungi admin");
          }
        } else if (res.data.status === 400) {
          alert(res.data.message);
        }
      } else {
        if (res.data.status === 200) {
          if (res.data.verify === "terverifikasi") {
            sessionStorage.setItem("userLogIn", true);
            Router.replace("/");
          } else {
            alert("akun anda belum diaktivasi, segera hubungi admin");
          }
        } else if (res.data.status === 400) {
          alert(res.data.message);
        }
      }
    });
};

export const removeUser = async () => {
  const data = await axios
    .get(`${process.env.API_HOST_ROUTER_5}`, {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      sessionStorage.removeItem("userLogIn");
      sessionStorage.removeItem("role");
      sessionStorage.removeItem("user");
      localStorage.removeItem("userLogIn");
      localStorage.removeItem("role");
      localStorage.removeItem("user");
    })
    .catch((error) => {
      alert("terjadi kesalahan logout");
    });
};
