import { MDBBtn, MDBCol, MDBRow } from "mdbreact";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import { getMitra, updateMitra } from "../../lib/mitraAction";
import { removeUserSession } from "../../lib/withSession";
import Modal from "../Modal/index";
const Mitra = () => {
  const [modal, setModal] = useState(false);
  const [_id, set_id] = useState();
  const [namaToko, setNamaToko] = useState();
  const [status, setStatus] = useState();
  const [provinsi, setProvinsi] = useState();
  const [kota, setKota] = useState();
  const [alamat, setAlamat] = useState();
  const [kontak, setKontak] = useState();
  const [statusBuka, setStatusBuka] = useState();
  const [stokBarang, setStokBarang] = useState();
  const [antrian, setAntrian] = useState();
  const [waktuBuka, setWaktuBuka] = useState();
  const [waktuTutup, setWaktuTutup] = useState();
  useEffect(() => {
    getMitra().then((res) => {
      {
        res === null ?
        removeUserSession()
         : 
        set_id(res._id || null);
        setNamaToko(res.namaToko || null);
        setStatus(res.status || null);
        setProvinsi(res.data.provinsi || null);
        setKota(res.data.kota || null);
        setAlamat(res.data.alamat || null);
        setKontak(res.data.kontak || null);
        setStatusBuka(res.data.statusBuka || null),
        setStokBarang(res.data.stokBarang || null),
        setAntrian(res.data.antrian || null),
        setWaktuBuka(res.data.waktuBuka || null);
        setWaktuTutup(res.data.waktuTutup || null);
      }
    });
  }, []);
  const handleCloseModal = () => {
    setModal(false);
  };
  const handleSubmit = () => {
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
  };

  if (status === "terverifikasi") {
    return (
      <>
        <div className="w-full sm:max-w-xl mx-auto pb-8 space-y-4">
          <MDBRow center style={{ marginBottom: 30 }}>
            <h1 className="text-center">
              <b>
                {namaToko}
                <a
                  href="#"
                  className="btn p-2"
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
          </MDBRow>
          <MDBRow center>
            <p className="text-center">{alamat}</p>
          </MDBRow>
          <MDBRow center style={{ marginBottom: 10 }}>
            <span style={{ fontSize: 13, color: "grey" }}>
              Buka Pukul : {waktuBuka} - {waktuTutup}
            </span>
          </MDBRow>
          <MDBRow center style={{ marginBottom: 20 }}>
            <span style={{ fontSize: 13, color: "grey" }}>
              Kontak Darurat : {kontak}
            </span>
          </MDBRow>
          <hr />
          <MDBRow center>
            <MDBCol sm="4" middle>
              <h4>Status</h4>
            </MDBCol>
            <MDBCol sm="4" middle>
              <div>
                <select
                  className="browser-default custom-select"
                  data-style="select-new"
                  data-live-search="true"
                  data-size={3}
                  id="StatusToko"
                  name="StatusToko"
                  data-width="100%"
                  onChange={(event) => {
                    setStatusBuka(event.target.value);
                  }}
                >
                  <option selected disabled value={statusBuka}>
                    {statusBuka}
                  </option>
                  <option value="buka">Buka</option>
                  <option value="istirahat">Istirahat</option>
                  <option value="tutup">Tutup</option>
                </select>
              </div>
            </MDBCol>
            <MDBCol sm="4" middle>
              <MDBBtn
                onClick={() => {
                  handleSubmit();
                }}
                type="submit"
                className="btn p-2"
              >
                Update
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <hr />
          <form>
            <MDBRow center>
              <MDBCol sm="4" middle>
                <h4>Stok</h4>
              </MDBCol>
              <MDBCol sm="4" middle>
                <div>
                  <select
                    className="browser-default custom-select"
                    data-style="select-new"
                    data-live-search="true"
                    data-size={3}
                    id="StatusToko"
                    name="StatusToko"
                    data-width="100%"
                    onChange={(event) => {
                      setStokBarang(event.target.value);
                    }}
                  >
                    <option selected disabled>
                      {stokBarang}
                    </option>
                    <option>Stok Tersedia</option>
                    <option>Stok Kosong</option>
                  </select>
                </div>
              </MDBCol>

              <MDBCol sm="4" middle>
                <MDBBtn
                  onClick={() => {
                    alert("status");
                  }}
                  type="submit"
                  className="btn p-2"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Update
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
          <hr />
          <form>
            <MDBRow center>
              <MDBCol sm="4">
                <h4>Antrian</h4>
              </MDBCol>
              <MDBCol sm="4" middle>
                <div>
                  <select
                    className="browser-default custom-select"
                    data-style="select-new"
                    data-live-search="true"
                    data-size={3}
                    id="StatusToko"
                    name="StatusToko"
                    data-width="100%"
                    onChange={(event) => {
                      setAntrian(event.target.value);
                    }}
                  >
                    <option selected disabled>
                      {antrian}
                    </option>
                    <option>Ada</option>
                    <option>Tidak Ada</option>
                  </select>
                </div>
              </MDBCol>

              <MDBCol sm="4" middle>
                <MDBBtn
                  onClick={() => {
                    alert("status");
                  }}
                  type="submit"
                  className="btn p-2"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Update
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </div>
        {modal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                    <p className="text-2xl font-semibold text-gray-800">
                      {" "}
                      Update Data Mitra {namaToko}
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
                  <div className="bg-gray-50 rounded">
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
  } else {
    return <h1>Oopss your account not activate</h1>;
  }
};

export default Mitra;
