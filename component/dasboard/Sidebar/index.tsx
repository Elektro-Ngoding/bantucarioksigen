import Link from "next/link";
import React from "react";
interface Type {
  sidebarOpen: boolean;
  setSidebarOpen: any;
  shop: any;
  setShop: any;
  profile: any;
  setProfile: any;
}

function Sidebar(props: Type) {
  const { sidebarOpen, setSidebarOpen, shop, setShop, profile, setProfile } =
    props;

  const handleShop = () => {
    setShop(true);
    setProfile(false);
    setSidebarOpen(false);
  };
  const handleDasboard = () => {
    setShop(false);
    setProfile(false);
    setSidebarOpen(false);
  };
  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-40 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-200 p-4 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-400 pr-3"
            onClick={() => setSidebarOpen(false)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer text-gray-900 pt-2 rounded">
              <h6>
                <b>Dashboard Mitra</b>
              </h6>
            </div>
          </Link>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
            Pages
          </h3>
          <ul className="mt-3">
            {/* Dashboard */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0`}
              onClick={() => handleDasboard()}
            >
              <div
                className={`block text-gray-900 hover:text-blue-900 transition duration-150`}
              >
                <div className="flex flex-grow">
                  <svg
                    className="flex-shrink-0 h-6 w-6 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className={`fill-current text-gray-400`}
                      d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                    />
                    <path
                      className={`fill-current text-gray-600`}
                      d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                    />
                    <path
                      className={`fill-current text-gray-400`}
                      d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Dashboard</span>
                </div>
              </div>
            </li>
            {/* Customers */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0`}
              onClick={() => handleShop()}
            >
              <div
                className={`block text-gray-900 hover:text-blue-900 transition duration-150`}
              >
                <div className="flex flex-grow">
                  <svg
                    className="h-6 w-6 mr-3 fill-current text-gray-400"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Shop</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <hr />
          <ul className="mt-3">
            {/* home page */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0`}>
              <Link href="/">
                <div className="block text-gray-900 hover:text-blue-900 transition duration-150">
                  <div className="flex flex-grow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 mr-3 text-gray-400"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                    <span className="text-sm font-medium pt-1">Beranda</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0`}>
              <Link href="/explore">
                <div
                  className={`block text-gray-900 hover:text-blue-900 transition duration-150`}
                >
                  <div className="flex flex-grow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 mr-3 text-gray-400"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium pt-1">Explore</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
