import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { removeUser } from "../lib/auth";
const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(async () => {
      const data = await axios
        .get(`${process.env.API_HOST_ROUTER_7}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.userLogIn) {
            setVerified(true);
          } else {
            setVerified(false);
            removeUser();
            Router.replace("/");
          }
        })
        .catch(() => {
          setVerified(false);
          Router.replace("/");
        });
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};
export default withAuth;
