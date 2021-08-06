import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow
} from "mdbreact";
import Layout from "../../component/Layout/Layout";
import Address from "../../component/Address/index";
export default function addData() {
  return (
    <>
      <Layout>
        <MDBContainer className="container-top">
          <MDBRow fluid center>
             
            <MDBCol md="8">
              <form method="post" action="">
                <p className="h5 text-center mb-4">Tambahkan Mitra Oksigen</p>
                <div className="grey-text">
                  <MDBInput
                    label="Nama Toko"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Username"
                    icon="tag"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                   <Address/>

                  <MDBInput
                    label="Alamat"
                    icon="tag"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Kontak"
                    icon="tag"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn type="submit" outline color="primary">
                    Add Data
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </>
  );
}
