import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import Card from "../component/Card";
import Layout from "../component/Layout/Layout";

interface DataProps {
  dataCard: Array<any>;
}

export default function Home(props: DataProps) {
  const { dataCard } = props;
  return (
    <>
      <Layout>
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
                    <option>ACEH </option>
                    <option>SUMATERA UTARA </option>
                    <option>SUMATERA BARAT </option>
                    <option>R I A U </option>
                    <option>JAMBI </option>
                    <option>SUMATERA SELATAN </option>
                    <option>BENGKULU </option>
                    <option selected>LAMPUNG</option>
                    <option>KEPULAUAN BANGKA BELITUNG </option>
                    <option>KEPULAUAN RIAU </option>
                    <option>DKI JAKARTA </option>
                    <option>JAWA BARAT </option>
                    <option>JAWA TENGAH </option>
                    <option>D I YOGYAKARTA </option>
                    <option>JAWA TIMUR </option>
                    <option>BANTEN </option>
                    <option>BALI </option>
                    <option>NUSA TENGGARA BARAT </option>
                    <option>NUSA TENGGARA TIMUR </option>
                    <option>KALIMANTAN BARAT </option>
                    <option>KALIMANTAN TENGAH </option>
                    <option>KALIMANTAN SELATAN </option>
                    <option>KALIMANTAN TIMUR </option>
                    <option>KALIMANTAN UTARA </option>
                    <option>SULAWESI UTARA </option>
                    <option>SULAWESI TENGAH </option>
                    <option>SULAWESI SELATAN </option>
                    <option>SULAWESI TENGGARA </option>
                    <option>GORONTALO </option>
                    <option>SULAWESI BARAT </option>
                    <option>MALUKU </option>
                    <option>MALUKU UTARA </option>
                    <option>PAPUA BARAT </option>
                    <option>PAPUA </option>
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
        {dataCard.map((card: any) => {
          return (
            <>
              <Card
                namaToko={card.namaToko}
                provinsi={card.data.provinsi}
                kota={card.data.kota}
                alamat={card.data.alamat}
                kontak={card.data.kontak}
                statusBuka={card.data.statusBuka}
                stokBarang={card.data.stokBarang}
                antrian={card.data.antrian}
                waktuBuka={card.data.waktuBuka}
                updated_date={card.data.updated_date}
              />
            </>
          );
        })}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3006/dataoksigen");
  const dataCard = await res.json();

  return {
    props: {
      dataCard,
    },
  };
}
