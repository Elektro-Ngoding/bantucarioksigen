import Router from "next/router";
import React, { useState } from "react";
import { removeUser } from "../../../lib/auth";

interface Type {
  profile: any;
  setProfile: any;
}
function UserMenu(props: Type) {
  const { profile, setProfile } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleProfile = () => {
    setProfile(true);
    setDropdownOpen(false);
  };
  const handleLogout = () => {
    removeUser();
    Router.push("/");
  };
  return (
    <div className="text-gray-200 hover:text-gray-50 relative inline-flex">
      <button
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => {
          dropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true);
        }}
        aria-expanded={dropdownOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      {dropdownOpen ? (
        <>
          <div className="origin-top-right z-10 absolute top-full right-0 bg-white border border-gray-200 rounded shadow-lg mt-1">
            <div>
              <div
                className="font-medium text-sm text-gray-900 flex items-center px-4 hover:bg-blue-900 hover:text-white rounded cursor-pointer"
                onClick={handleProfile}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="px-1 py-2">Profile</p>
              </div>

              <div
                className="font-medium text-sm text-gray-900 flex items-center align-middle pb-1 px-4 hover:text-white hover:bg-red-500 rounded cursor-pointer"
                onClick={handleLogout}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <p className="py-2 px-1">logout</p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default UserMenu;
