import { MDBBtn, MDBCol, MDBRow } from "mdbreact";
import { ChangeEvent, useEffect, useState } from "react";
import { getMitra, updateMitra } from "../../../lib/mitraAction";
import { removeUserSession } from "../../../lib/withSession";

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

export default function Home(props: Type) {
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
  return (
    <div className="w-full sm:max-w-xl mx-auto pb-8 space-y-4">
      <form method="post" onSubmit={handleSubmit}>
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
                onChange={(event: ChangeEvent<{ value: string }>) => {
                  const newValue: string = event.target.value;
                  setStatusBuka(newValue);
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
            <MDBBtn type="submit" className="btn p-2">
              Update
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </form>
      <hr />
      <form onSubmit={handleSubmit}>
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
                onChange={(event: ChangeEvent<{ value: string }>) => {
                  const newValue: string = event.target.value;
                  setStokBarang(newValue);
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
            <MDBBtn type="submit" className="btn p-2">
              Update
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </form>
      <hr />
      <form onSubmit={handleSubmit}>
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
                onChange={(event: ChangeEvent<{ value: string }>) => {
                  const newValue: string = event.target.value;
                  setAntrian(newValue);
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
            <MDBBtn type="submit" className="btn p-2">
              Update
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </form>
    </div>
  );
}
