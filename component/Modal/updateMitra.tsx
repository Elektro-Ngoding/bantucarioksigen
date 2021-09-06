import Router from "next/router";
import React, { useState } from "react";
import { updateMitra } from "../../lib/updateMitra";
import Address from "../Address";
interface Type {
  handleCloseModal: any;
  _id: any;
  namaToko: any;
  status: any;
  provinsi: any;
  kota: any;
  alamat: any;
  kontak: any;
  statusBuka: any;
  stokBarang: any;
  antrian: any;
  waktuBuka: any;
  waktuTutup: any;
}
export default function UpdateMitra(props: Type) {
  const { _id, status, statusBuka, stokBarang, antrian } = props;
  const [namaToko, setNamaToko] = useState(props.namaToko);
  const [provinsi, setProvinsi] = useState(props.provinsi);
  const [kota, setKota] = useState(props.kota);
  const [alamat, setAlamat] = useState(props.alamat);
  const [kontak, setKontak] = useState(props.kontak);
  const [waktuBuka, setwaktuBuka] = useState(props.waktuBuka);
  const [waktuTutup, setwaktuTutup] = useState(props.waktuTutup);
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

  const handleWaktuBuka = (event: any) => {
    setwaktuBuka(event?.target.value);
  };

  const handleWaktuTutup = (event: any) => {
    setwaktuTutup(event?.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    updateMitra(
      _id,
      namaToko,
      status,
      provinsi,
      kota,
      alamat,
      kontak,
      statusBuka,
      stokBarang,
      antrian,
      waktuBuka,
      waktuTutup
    );
    Router.push("/dashboard");
    props.handleCloseModal(false);
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
                    defaultValue={props.namaToko}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 space-y-1">
                  <div className="grid grid-cols-1 space-y-1">
                    <label className="text-sm font-bold text-gray-500 tracking-wide">
                      Waktu Buka
                    </label>
                    <input
                      onChange={(event) => handleWaktuBuka(event)}
                      className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                      type="time"
                      name="waktuBuka"
                      defaultValue={props.waktuBuka}
                    />
                  </div>
                  <div className="grid grid-cols-1 space-y-1">
                    <label className="text-sm font-bold text-gray-500 tracking-wide">
                      Waktu Tutup
                    </label>
                    <input
                      onChange={(event) => handleWaktuTutup(event)}
                      className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                      type="time"
                      name="waktuTutup"
                      defaultValue={props.waktuTutup}
                    />
                  </div>
                </div>
                <Address
                  handleLoad={(data: string) => handleLoad(data)}
                  handleSearch={(data: string) => handleSearch(data)}
                  valueProv={props.provinsi}
                  valueKota={props.kota}
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
                    defaultValue={props.alamat}
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
                    defaultValue={props.kontak}
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
                    props.handleCloseModal(false);
                  }}
                  className="text-white bg-red-500 hover:bg-red-400 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
