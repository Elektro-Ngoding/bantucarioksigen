import axios from "axios";
import { Router } from "next/router";

export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const setToken = (token, id_mitra) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", id_mitra);
};

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.setItem("userLogIn", false);
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("iat");
};

// set the token and user from the session storage
export const setUserSession = (token, userLogIn, iat) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("userLogIn", userLogIn);
  sessionStorage.setItem("iat", iat);
};
