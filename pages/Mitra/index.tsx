import Layout from "../../component/Layout/Layout";
import Mitra from "../../component/Mitra/index";
import { useState, useEffect } from "react";
import {
  getToken,
  setUserSession,
  removeUserSession,
} from "../../lib/withSession";
import axios from "axios";
import Router from "next/router";
import LoginForm from "../../component/LoginForm";

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

  return (
    <>
      <Layout>
        {authLoading ? (
          <LoginForm />
        ) : (
          <section className="flex flex-col flex-1 py-16">
            <div className="w-full sm:max-w-xl mx-auto pt-4 px-4">
              <Mitra />
            </div>
          </section>
        )}
      </Layout>
    </>
  );
}
