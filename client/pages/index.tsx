import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Address from "../component/Address";

import Card from "../component/Card";
import Layout from "../component/Layout/Layout";

interface DataProps {
  dataCard: Array<any>;
}

export default function Home(props: DataProps) {
  const { dataCard } = props;
  return (
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
                <Address />
              </MDBCol>
              <MDBCol size="auto">
                <div className="mt-4">
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
