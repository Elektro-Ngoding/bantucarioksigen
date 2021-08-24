import React, { useState, useEffect } from "react";
import Header from "./Header/header";
import Home from "./Home";
import Profile from "./DataShop";
import DataShop from "./DataShop";
import Sidebar from "./Sidebar";
import DataMitra from "./DataMitra";
interface Type {
  dataTable: Array<any>;
}

function DashboardAdmin(props: Type) {
  const { dataTable } = props;

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [dataShop, setDataShop] = useState<boolean>(false);
  const [dataMitra, setDataMitra] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        dataShop={dataShop}
        setDataShop={setDataShop}
        dataMitra={dataMitra}
        setdataMitra={setDataMitra}
      />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header
          profile={profile}
          setProfile={setProfile}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <section className="flex flex-col flex-1 mb-5">
          <div className="">
            <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
              {/* Background illustration */}
              <div
                className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"
                aria-hidden="true"
              >
                <svg
                  width="319"
                  height="198"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
                    <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
                    <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="welcome-b"
                    >
                      <stop stopColor="#A5B4FC" offset="0%" />
                      <stop stopColor="#818CF8" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="50%"
                      y1="24.537%"
                      x2="50%"
                      y2="100%"
                      id="welcome-c"
                    >
                      <stop stopColor="#4338CA" offset="0%" />
                      <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <g transform="rotate(64 36.592 105.604)">
                      <mask id="welcome-d" fill="#fff">
                        <use xlinkHref="#welcome-a" />
                      </mask>
                      <use fill="url(#welcome-b)" xlinkHref="#welcome-a" />
                      <path
                        fill="url(#welcome-c)"
                        mask="url(#welcome-d)"
                        d="M64-24h80v152H64z"
                      />
                    </g>
                    <g transform="rotate(-51 91.324 -105.372)">
                      <mask id="welcome-f" fill="#fff">
                        <use xlinkHref="#welcome-e" />
                      </mask>
                      <use fill="url(#welcome-b)" xlinkHref="#welcome-e" />
                      <path
                        fill="url(#welcome-c)"
                        mask="url(#welcome-f)"
                        d="M40.333-15.147h50v95h-50z"
                      />
                    </g>
                    <g transform="rotate(44 61.546 392.623)">
                      <mask id="welcome-h" fill="#fff">
                        <use xlinkHref="#welcome-g" />
                      </mask>
                      <use fill="url(#welcome-b)" xlinkHref="#welcome-g" />
                      <path
                        fill="url(#welcome-c)"
                        mask="url(#welcome-h)"
                        d="M40.333-15.147h50v95h-50z"
                      />
                    </g>
                  </g>
                </svg>
              </div>

              {/* Content */}
              <div className="relative">
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
                  Good afternoon, Acme Inc. 👋
                </h1>
                <p>Here is what’s happening with your projects today:</p>
              </div>
            </div>
            {dataMitra ? (
              <DataMitra dataTab={dataTable} />
            ) : (
              <>{dataShop ? <DataShop /> : <Home dataTab={dataTable} />}</>
            )}

            {/* {profile ? <Profile /> : <>{shop ? <Shop /> : <Home />}</>} */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardAdmin;
