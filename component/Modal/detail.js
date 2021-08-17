import { MDBCol, MDBInput, MDBRow } from "mdbreact";
import React from "react";
export default class Detail extends React.Component {
  constructor(props) {
    const { dataMitra } = props;
    super(props);
    this.state = {
      _id: this.props._id,
      namaToko: this.props.namaToko,
    };
  }
  render() {
    console.log(this.props);
    return (
      <>
        <MDBRow fluid="true" center>
          <MDBCol md="8">
            <form>
              <div className="grey-text">
                <MDBInput
                  label="Nama Toko"
                  name="namaToko"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={this.props.namaToko}
                />
                <MDBInput
                  label="Username"
                  name="username"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={this.props.username}
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <MDBInput
                      label="Waktu Buka"
                      name="waktuBuka"
                      icon="tag"
                      group
                      type="time"
                      validate
                      error="wrong"
                      success="right"
                      value={this.props.waktuBuka}
                    />
                  </div>
                  <div className="space-y-1">
                    <MDBInput
                      label="Waktu Tutup"
                      name="waktuTutup"
                      group
                      type="time"
                      validate
                      error="wrong"
                      success="right"
                      value={this.props.waktuTutup}
                    />
                  </div>
                </div>
                <MDBInput
                  label="Status Buka"
                  name="statusBuka"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={this.props.statusBuka}
                />

                <MDBInput
                  label="Stok Barang"
                  name="stokBarang"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={this.props.stokBarang}
                />
                <MDBInput
                  label="Antrian"
                  name="antrian"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={this.props.antrian}
                />
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </>
    );
  }
}
