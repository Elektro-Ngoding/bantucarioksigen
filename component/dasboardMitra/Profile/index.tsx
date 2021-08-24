import Modal from "../../Modal";
import { ChangeEvent, useEffect, useState } from "react";
import { getMitra, updateMitra } from "../../../lib/mitraAction";
import { removeUserSession } from "../../../lib/withSession";
import { useWatch } from "react-hook-form";
import Router from "next/router";
interface Type {
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

export default function Profile(props: Type) {
  const [modal, setModal] = useState(false);
  const [_id, set_id] = useState(props._id);
  const [namaToko, setNamaToko] = useState(props.namaToko);
  const [status, setStatus] = useState(props.status);
  const [provinsi, setProvinsi] = useState(props.provinsi);
  const [kota, setKota] = useState(props.kota);
  const [alamat, setAlamat] = useState(props.alamat);
  const [kontak, setKontak] = useState(props.kontak);
  const [statusBuka, setStatusBuka] = useState<string>(props.statusBuka);
  const [stokBarang, setStokBarang] = useState<string>(props.stokBarang);
  const [antrian, setAntrian] = useState<string>(props.antrian);
  const [waktuBuka, setWaktuBuka] = useState(props.waktuBuka);
  const [waktuTutup, setWaktuTutup] = useState(props.waktuTutup);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    set_id(props._id);
    setNamaToko(props.namaToko);
    setStatus(props.status);
    setProvinsi(props.provinsi);
    setKota(props.kota);
    setAlamat(props.alamat);
    setKontak(props.kontak);
    setStatusBuka(props.statusBuka);
    setStokBarang(props.stokBarang);
    setAntrian(props.antrian);
    setWaktuBuka(props.waktuBuka);
    setWaktuTutup(props.waktuTutup);
  }, [props]);

  //noted
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <>
      <div>
        <h1 className="text-center">
          <b>
            {namaToko}
            <a
              href="#"
              className="btn p-2 rounded"
              onClick={() => {
                setModal(true);
              }}
              style={{
                backgroundColor: "#073180",
                color: "#FFFFFF",
              }}
            >
              <i className="fa fa-edit" aria-hidden="true" />
            </a>
          </b>
        </h1>
        <h6 className="text-center">{alamat}</h6>
        <div className="bg-gray-200 grid grid-cols-3 rounded hover:bg-gray-50">
          <div className="px-1">
            <h6>Provinsi</h6>
          </div>
          <div>:</div>
          <div className="px-1">
            <h6>{provinsi}</h6>
          </div>
        </div>
        <div className="grid grid-cols-3 rounded hover:bg-gray-50">
          <div className="px-1">
            <h6>Kota/Kab</h6>
          </div>
          <div>:</div>
          <div className="px-1">
            <h6>{kota}</h6>
          </div>
        </div>
        <div className="bg-gray-200 grid grid-cols-3 rounded hover:bg-gray-50">
          <div className="px-1">
            <h6>Waktu Buka : </h6>
          </div>
          <div>:</div>
          <div className="px-1">
            <h6>
              {waktuBuka} - {waktuTutup}
            </h6>
          </div>
        </div>
        <div className="grid grid-cols-3 rounded hover:bg-gray-50">
          <div className="px-1">
            <h6>Kontak</h6>
          </div>
          <div>:</div>
          <div className="px-1">
            <h6>{kontak}</h6>
          </div>
        </div>
      </div>

      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                  <p className="text-2xl font-semibold text-gray-800">
                    Update Data
                  </p>
                  <svg
                    onClick={() => setModal(false)}
                    className="ml-5 mt-1 w-6 h-6 hover:bg-gray-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
                {/*body*/}
                <div className="px-4 pt-2 bg-gray-50 rounded">
                  <Modal
                    _id={_id}
                    namaToko={namaToko}
                    status={status}
                    provinsi={provinsi}
                    kota={kota}
                    alamat={alamat}
                    kontak={kontak}
                    statusBuka={statusBuka}
                    stokBarang={stokBarang}
                    antrian={antrian}
                    waktuBuka={waktuBuka}
                    waktuTutup={waktuTutup}
                    handleCloseModal={() => handleCloseModal()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
