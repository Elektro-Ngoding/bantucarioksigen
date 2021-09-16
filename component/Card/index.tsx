import Router from "next/router";
import { useEffect, useState } from "react";
import Moment from "react-moment";
interface DataCard {
  _id: any;
  namaToko: string;
  status: string;
  provinsi: string;
  kota: string;
  alamat: string;
  kontak: number;
  statusBuka: string;
  stokBarang: string;
  antrian: string;
  waktuBuka: string;
  waktuTutup: string;
  updated_date: string;
  save: boolean;
  handleRefreshBookmark: any;
}

export default function Card<T>(props: DataCard) {
  const [kontakTersalin, setKontakTersalin] = useState<boolean>(false);
  const [alamatTersalin, setAlamatTersalin] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false || props.save);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("bookMark") || "{}");
    if (Router.pathname == "/bookmark") {
      setSave(true);
    } else {
      if (getData.length == 0) {
        setSave(false);
      } else if (getData.length > 0) {
        const results = getData.filter(() => {
          const res = getData.includes(props._id);
          setSave(res);
        });
      } else {
        setSave(false);
      }
    }
  }, []);

  const handleCopyKontak = () => {
    navigator.clipboard.writeText(`0${props.kontak}`);
    setKontakTersalin(true);
    setTimeout(() => {
      setKontakTersalin(false);
    }, 2000);
  };
  const handleCopyAlamat = () => {
    navigator.clipboard.writeText(`${props.alamat}`);
    setAlamatTersalin(true);
    setTimeout(() => {
      setAlamatTersalin(false);
    }, 2000);
  };
  const handleSave = (newData: any) => {
    setSave(true);
    const getData = JSON.parse(localStorage.getItem("bookMark") || "{}");
    if (getData === null) {
      localStorage.setItem("bookMark", JSON.stringify([newData]));
    } else {
      if (getData.length > 0) {
        const putData = (getData[getData.length] = newData);
        const alldata = getData;
        localStorage.setItem("bookMark", JSON.stringify(alldata));
      } else {
        localStorage.setItem("bookMark", JSON.stringify([newData]));
      }
    }
  };
  const handleUnSave = (dataID: any) => {
    const dataGet = localStorage.getItem("bookMark");
    const dataParse = JSON.parse(dataGet || "{}");
    const result = dataParse.indexOf(dataID);
    const remove = dataParse.splice(result, 1);
    localStorage.setItem("bookMark", JSON.stringify(dataParse));
    setSave(false);
    {
      Router.pathname == "/" ? null : props.handleRefreshBookmark();
    }
  };
  return (
    <div className="px-4 pt-4  mb-2 sm:px-6 relative bg-gray-50 rounded">
      <div className="px-4 pt-4 pb-2 sm:px-6 relative hover:bg-gray-50">
        <div className="flex items-center justify-between">
          <strong className="text-sm font-semibold text-blue-600 truncate block helper-link-cover">
            {props.namaToko}
          </strong>
          <div className="flex-shrink-0 flex space-x-2">
            {props.status === "terverifikasi" ? (
              <span className="rounded-full bg-red-500 text-white px-2.5 py-0.5 text-xs inline-flex items-center font-medium">
                dikelola oleh mitra
              </span>
            ) : (
              <span className="rounded-full bg-yellow-100 text-yellow-800 px-2.5 py-0.5 text-xs inline-flex items-center font-medium">
                menunggu dikelola oleh mitra
              </span>
            )}
          </div>
        </div>
        {props.status === "terverifikasi" ? (
          <>
            <div className="mt-1 flex items-center justify-between">
              <p className="rounded-full bg-red-500  px-2.5 py-0.5 text-sm font-medium text-white truncate">
                {props.statusBuka}
              </p>
              <div className="flex-shrink-0 flex space-x-2">
                <p className="text-sm font-medium text-gray-500 truncate">
                  Buka Pukul : {props.waktuBuka}-{props.waktuTutup}
                </p>
              </div>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500 truncate">
                Stok Barang : {props.stokBarang}
              </p>
              <div className="flex-shrink-0 flex space-x-2">
                <p className="text-sm font-medium text-gray-500 truncate">
                  Antrian : {props.antrian}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-1 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-300 truncate">
                buka / tutup
              </p>
              <div className="flex-shrink-0 flex space-x-2">
                <p className="text-sm font-medium text-gray-300 truncate">
                  Buka Pukul : --:--
                </p>
              </div>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-300 truncate">
                Stok Barang : .....
              </p>
              <div className="flex-shrink-0 flex space-x-2">
                <p className="text-sm font-medium text-gray-300 truncate">
                  Antrian : ......
                </p>
              </div>
            </div>
          </>
        )}
        <div className="mt-2 flex justify-between w-full">
          <p className="flex items-center text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <a
              className="text-indigo-600 hover:text-indigo-500 relative"
              href={`http://wa.me/0${props.kontak}`}
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              0{props.kontak}
            </a>
          </p>
          <div className="flex items-start">
            {kontakTersalin ? (
              <>
                <button
                  className="inline-flex flex-row px-2.5 py-1.5 text-xs rounded items-center justify-center border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-red-700 bg-red-100 hover:bg-red-200 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-75 relative z-10"
                  type="button"
                  aria-label="Salin"
                  onClick={() => handleCopyKontak()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      strokeWidth="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    ></path>
                  </svg>
                  Tersalin
                </button>
              </>
            ) : (
              <>
                <button
                  className="inline-flex flex-row px-2.5 py-1.5 text-xs rounded items-center justify-center border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-75 relative z-10"
                  type="button"
                  aria-label="Salin"
                  onClick={() => handleCopyKontak()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      strokeWidth="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    ></path>
                  </svg>
                  Salin
                </button>
              </>
            )}
          </div>
        </div>
        <div className="mt-2 flex justify-between w-full">
          <p className="select-all mt-2 flex items-start text-sm text-gray-500 sm:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            {props.alamat}
          </p>
          <div className="flex flex-col items-end space-y-1 flex-none ml-2">
            <div className="flex items-start">
              {alamatTersalin ? (
                <>
                  <button
                    className="inline-flex flex-row px-2.5 py-1.5 text-xs rounded items-center justify-center border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-red-700 bg-red-100 hover:bg-red-200 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-75 relative z-10"
                    type="button"
                    aria-label="Salin"
                    onClick={() => handleCopyKontak()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="-ml-0.5 mr-2 h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      ></path>
                    </svg>
                    Tersalin
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="inline-flex flex-row px-2.5 py-1.5 text-xs rounded items-center justify-center border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-75 relative z-10"
                    type="button"
                    aria-label="Salin"
                    onClick={() => handleCopyAlamat()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="-ml-0.5 mr-2 h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      ></path>
                    </svg>
                    Salin
                  </button>
                </>
              )}
            </div>
            <div className="flex items-start">
              <a
                className="inline-flex flex-row px-2.5 py-1.5 text-xs rounded items-center justify-center border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-75 relative z-10"
                type="button"
                aria-label="Buka Peta"
                target="_blank"
                href={
                  "https://www.google.com/maps/search/?api=1&query=" +
                  props.alamat
                }
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="-ml-0.5 mr-2 h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    strokeWidth="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  ></path>
                </svg>
                Buka Peta
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 border-top">
          <p className="space-y-1 text-xs text-gray-400 align-middle">
            update : <Moment fromNow>{props.updated_date}</Moment>,
          </p>
          <div className="space-y-1 align-middle ">
            {save ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-8"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() => handleUnSave(props._id)}
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-gray-500 hover:text-gray-900"
                aria-hidden="true"
                onClick={() => handleSave(props._id)}
              >
                <path
                  strokeWidth="1"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
