import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Router from "next/router";
import { useEffect, useState } from "react";
import Dashboard from "../../component/dasboardMitra";
import LoginForm from "../../component/LoginForm";
import {
  getToken,
  removeUserSession,
  setUserSession,
} from "../../lib/withSession";

export default function MitraOksigen() {
  const [authLoading, setAuthLoading] = useState(true);
  useEffect(() => {
    const token = getToken();
    if (!token) {
      Router.push("/Auth/login");
    }
    axios
      .get(`http://localhost:3006/verifyToken/`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setUserSession(token, res.data.userLogIn, res.data.iat);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  return <>{authLoading ? <LoginForm /> : <Dashboard />}</>;
}
