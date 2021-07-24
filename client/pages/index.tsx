import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import Card from "../component/Card";

export default function Home() {
  return (
    <div>
      <MDBContainer
        fluid
        center
        style={{
          backgroundColor: "#F1F3F0",
          paddingTop: 100,
          paddingBottom: 30,
        }}
      >
        <form action="" method="get">
          <MDBRow center>
            <MDBCol size="auto">
              <div>
                <label>Provinsi</label>
              </div>
              <div>
                <select
                  className="browser-default custom-select"
                  data-style="select-new"
                  data-live-search="true"
                  data-size={5}
                  id="propinsi"
                  name="propinsi"
                  data-width="100%"
                >
                  <option value={0}>PILIH </option>
                  <option >ACEH </option>
                  <option >SUMATERA UTARA </option>
                  <option >SUMATERA BARAT </option>
                  <option >R I A U </option>
                  <option >JAMBI </option>
                  <option >SUMATERA SELATAN </option>
                  <option >BENGKULU </option>
                  <option  selected>
                    LAMPUNG{" "}
                  </option>
                  <option >KEPULAUAN BANGKA BELITUNG </option>
                  <option >KEPULAUAN RIAU </option>
                  <option >DKI JAKARTA </option>
                  <option >JAWA BARAT </option>
                  <option >JAWA TENGAH </option>
                  <option >D I YOGYAKARTA </option>
                  <option >JAWA TIMUR </option>
                  <option >BANTEN </option>
                  <option >BALI </option>
                  <option >NUSA TENGGARA BARAT </option>
                  <option >NUSA TENGGARA TIMUR </option>
                  <option >KALIMANTAN BARAT </option>
                  <option >KALIMANTAN TENGAH </option>
                  <option >KALIMANTAN SELATAN </option>
                  <option >KALIMANTAN TIMUR </option>
                  <option >KALIMANTAN UTARA </option>
                  <option >SULAWESI UTARA </option>
                  <option >SULAWESI TENGAH </option>
                  <option >SULAWESI SELATAN </option>
                  <option >SULAWESI TENGGARA </option>
                  <option >GORONTALO </option>
                  <option >SULAWESI BARAT </option>
                  <option >MALUKU </option>
                  <option >MALUKU UTARA </option>
                  <option >PAPUA BARAT </option>
                  <option >PAPUA </option>
                </select>
              </div>
            </MDBCol>
            <MDBCol size="auto">
              <div>
                <label>Kab.Kota</label>
              </div>
              <div>
                <select
                  className="browser-default custom-select"
                  data-style="select-new"
                  data-live-search="true"
                  data-size={3}
                  id="kabkota"
                  name="kabkota"
                  data-width="100%"
                >
                  <option>Bandar Lampung</option>
                </select>
              </div>
            </MDBCol>
            <MDBCol size="auto">
              <div className="my-4">
                <div
                  className="btn ml-1"
                  style={{
                    backgroundColor: "#073180",
                    color: "#FFFFFF",
                    padding: "10px 30px 12px 30px",
                  }}
                >
                  Cari
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
      <br />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
