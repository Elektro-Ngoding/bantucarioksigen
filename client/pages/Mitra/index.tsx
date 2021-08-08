import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Layout from "../../component/Layout/Layout";

export default function Penjual() {
  return (
    <>
      <Layout>
        <MDBContainer
          size="md"
          style={{ marginTop: 100, backgroundColor: "#F1F3F0", padding: 50 }}
        >
          <MDBRow center style={{ marginBottom: 30 }}>
            <h1 className="text-center">
              <b>
                Alkes Central Medica{" "}
                <a
                  href="#"
                  className="btn p-2"
                  style={{
                    backgroundColor: "#073180",
                    color: "#FFFFFF",
                  }}
                >
                  <i className="fa fa-edit" aria-hidden="true">
                    {" "}
                  </i>
                </a>
              </b>
            </h1>
          </MDBRow>
          <MDBRow center>
            <p className="text-center">
              Jl. Teuku Umar No.38B, Sidodadi, Kec. Kedaton, Kota Bandar
              Lampung, Lampung 35123
            </p>
          </MDBRow>
          <MDBRow center style={{ marginBottom: 20 }}>
            <span style={{ fontSize: 13, color: "grey" }}>
              Kontak Darurat : 0721703312
            </span>
          </MDBRow>
          <hr />
          <form>
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
                  >
                    <option>Buka</option>
                    <option>Istirahat</option>
                    <option>Tutup</option>
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
                  >
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
                  >
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
        </MDBContainer>
      </Layout>
    </>
  );
}
