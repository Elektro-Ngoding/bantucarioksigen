import axios from "axios";
import { useState } from "react";
import Router from "next/router";
import { setToken } from "./withSession";
// "bantucarioksigen",
export const loginAuth = async (username, password, remember) => {
  try {
    const loginAuth = await axios.post("http://localhost:3006/auth/login", {
      username,
      password,
    });
    const status = loginAuth.data.status;

    if (status === 200) {
      //   if (remember === "on") {
      //     localStorage.setItem("token", loginAuth.data.token);
      //     localStorage.setItem("mitraLogin", loginAuth.data.id_mitra);
      //     Router.push("/");
      //   } else {
      //     sessionStorage.setItem("token", loginAuth.data.token);
      //     sessionStorage.setItem("mitraLogin", loginAuth.data.id_mitra);

      //     withSession(response.data.token, response.data.user);
      //     Router.push("/");
      //   }
      // console.log(loginAuth.data.token)
      const token = loginAuth.data.token;
      const id_mitra = loginAuth.data.id_mitra;
      setToken(token, id_mitra);
      Router.push("/Mitra");
    } else if (status === 400) {
      alert(loginAuth.data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
