import { MDBNavbar } from "mdbreact";
import Router from "next/router";
import { useEffect, useState } from "react";
import { removeUserSession } from "../../lib/withSession";

interface Type {
  userLogin: boolean;
}
export default function Navbar() {
  const [userLogIn, setUserLogIn] = useState<boolean>(false);
  useEffect(() => {
    const user = sessionStorage.getItem("userLogIn");
    if (user === "false") {
      setUserLogIn(false);
    } else if (user === "true") {
      setUserLogIn(true);
    }
  }, []);
  const handleLogout = () => {
    removeUserSession();
    Router.push("/");
  };
  const handleLogin = () => {
    Router.push("/Auth/login");
  };
  return (
    <header className="flex items-center justify-center fixed w-full h-16 z-40 bg-blue-900 shadow-md">
      <div className="w-full sm:max-w-xl mx-auto flex items-center justify-between h-full px-4">
        <div className="flex flex-row items-end">
          <div className="flex flex-1 items-center mt-1">
            <a className="align-middle text-white" href="/">
              <h2>
                <strong>BantuCari</strong>
              </h2>
            </a>
          </div>
          <div className="p-2 space-y-1 flex-1">
            <select
              className="browser-default custom-select"
              // onChange={this.onSelect}
            >
              <option>Oksigen</option>
              <option>Vaksin</option>
            </select>
          </div>
        </div>
        <div className="relative">
          {userLogIn ? (
            <button
              className="flex items-center justify-center rounded-md h-10 w-10 ml-4 hover:bg-gray-100 hover:bg-opacity-10 focus:bg-gray-100 focus:bg-opacity-10"
              id="headlessui-popover-button-1"
              type="button"
              aria-expanded="false"
              onClick={() => {
                handleLogout();
              }}
            >
              <div className="inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="text-white h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span className="text-xs truncate">Logout</span>
              </div>
            </button>
          ) : (
            <button
              className="flex items-center justify-center rounded-md h-10 w-10 ml-4 hover:bg-gray-100 hover:bg-opacity-10 focus:bg-gray-100 focus:bg-opacity-10"
              id="headlessui-popover-button-1"
              type="button"
              aria-expanded="false"
              onClick={() => {
                handleLogin();
              }}
            >
              <div className="inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="text-white h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span className="text-xs truncate">Login</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
