import React, { useState } from "react";
import { addMitra } from "../../lib/addMitra";
import Address from "../Address";
const {
  uniqueNamesGenerator,
  colors,
  NumberDictionary,
} = require("unique-names-generator");

interface Type {
  setModalAddData: any;
}
export default function AddMitra(props: Type) {
  const { setModalAddData } = props;
  const [namaToko, setNamaToko] = useState();
  const [provinsi, setProvinsi] = useState();
  const [kota, setKota] = useState();
  const [alamat, setAlamat] = useState();
  const [kontak, setKontak] = useState();

  const handleNamaToko = (event: any) => {
    setNamaToko(event.target.value);
  };

  const handleLoad = (data: any) => {
    setProvinsi(data);
  };
  const handleSearch = (data: any) => {
    setKota(data);
  };

  const handleAlamat = (event: any) => {
    setAlamat(event.target.value);
  };
  const handleKontak = (event: any) => {
    setKontak(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const numberDictionary = NumberDictionary.generate({ min: 100, max: 999 });
    const Loc = [provinsi, kota];
    const shortName = uniqueNamesGenerator({
      dictionaries: [colors, numberDictionary, Loc],
      length: 3,
    });
    const username = shortName.replace(/\s/g, "");
    addMitra(namaToko, username, provinsi, kota, alamat, kontak);
    props.setModalAddData(false);
  };
  return (
    <>
      <div>
        <div>
          <div className="p-2">
            <form method="post" onSubmit={handleSubmit}>
              <div className="grey-text">
                <div className="grid grid-cols-1 space-y-1">
                  <label className="text-sm font-bold text-gray-500 tracking-wide">
                    Nama Mitra
                  </label>
                  <input
                    onChange={(event) => handleNamaToko(event)}
                    className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    required
                    type="text"
                    name="namaToko"
                    placeholder="Nama Mitra"
                  />
                </div>
                <Address
                  handleLoad={(data: string) => handleLoad(data)}
                  handleSearch={(data: string) => handleSearch(data)}
                />
                <div className="pt-1 grid grid-cols-1 space-y-1">
                  <label className="text-sm font-bold text-gray-500 tracking-wide">
                    Alamat
                  </label>
                  <input
                    onChange={(event) => handleAlamat(event)}
                    className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    required
                    type="text"
                    name="alamat"
                    placeholder="Alamat"
                  />
                </div>
                <div className="grid grid-cols-1 space-y-1">
                  <label className="text-sm font-bold text-gray-500 tracking-wide">
                    Kontak
                  </label>
                  <input
                    onChange={(event) => handleKontak(event)}
                    className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    required
                    type="number"
                    name="kotak"
                    placeholder="Kontak"
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-cols-3 flex-row-reverse mb-2">
                <button
                  type="submit"
                  className="text-white bg-blue-500 hover:bg-blue-400 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Add Data
                </button>
                <div
                  onClick={() => {
                    props.setModalAddData(false);
                  }}
                  className="text-white bg-red-500 hover:bg-red-400 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
                >
                  cancel
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
