import {
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdbreact";
import Table from "../../component/Table";
import Link from 'next/link'

export default function Admin() {
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
        <MDBRow center>
          <h1>
            <b>Halaman Admin</b>
          </h1>
        </MDBRow>
        <MDBRow start>
          <MDBCol sm="3">
          <Link href="adminOksigen/addData">
            <div className="btn btn-primary p-3">
              <i className="fa fa-plus" aria-hidden="true">
                {" "}
                Tambah Data
              </i>
            </div>
        </Link>
          </MDBCol>
        </MDBRow>
        <MDBRow className="pt-3" center>
          <MDBCol md="12">
            <Table />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
