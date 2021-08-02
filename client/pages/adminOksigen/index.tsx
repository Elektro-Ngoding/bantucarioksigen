import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Link from "next/link";
import Layout from "../../component/Layout/Layout";
import Table from "../../component/Table";

interface DataProps {
  dataTable: Array<any>;
}
export default function Admin(props: DataProps) {
  const { dataTable } = props;
  return (
    <div>
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
          <MDBRow center>
            <h1>
              <b>Halaman Admin</b>
            </h1>
          </MDBRow>

          <MDBRow start>
            <MDBCol sm="3">
              <Link href="adminOksigen/addData">
                <div className="btn btn-primary p-3">
                  <b aria-hidden="true">Tambah Data</b>
                </div>
              </Link>
            </MDBCol>
          </MDBRow>
          <MDBRow className="pt-3" center>
            <MDBCol md="12">
              <Table dataTab={props.dataTable} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3006/dataoksigen");
  const dataTable = await res.json();

  return {
    props: {
      dataTable,
    },
  };
}
