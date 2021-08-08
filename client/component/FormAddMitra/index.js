import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdbreact";
import React from "react";
import data from "../../data/dataProv";
import { addMitra } from "../../lib/addMitra";
import { useRouter } from "next/router";
import next from "next";

class FormAddMitra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: data.provinces,
      provinceId: null,
      cities: data.cities,
      namaToko: "",
      username: "",
      provinsi: "",
      kota: "",
      alamat: "",
      kontak: "",
    };
  }

  onSelectProvince = (provId) => {
    const selCities = data.cities.filter((c) => c.provinceId === provId);
    const nameProv = data.provinces.filter((c) => c.id === provId);
    this.setState({
      provinceId: provId,
      cities: selCities,
      provinsi: nameProv[0].name,
    });
  };

  onSelectCity = (city) => {
    this.setState({
      kota: city,
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const { namaToko, username, provinsi, kota, alamat, kontak } = this.state;
    event.preventDefault();
    addMitra(namaToko, username, provinsi, kota, alamat, kontak);
  };

  render() {
    return (
      <>
        <MDBContainer className="container-top">
          <MDBRow fluid="true" center>
            <MDBCol md="8">
              <form onSubmit={this.handleSubmit}>
                <p className="h5 text-center mb-4">Tambahkan Mitra Oksigen</p>
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
                    onChange={this.handleChange}
                  />
                  <MDBInput
                    label="Username"
                    name="username"
                    icon="envelope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.handleChange}
                  />
                  <Province
                    data={this.state.provinces}
                    selectedId={this.state.provinceId}
                    onSelect={this.onSelectProvince}
                  />
                  <br />
                  <City data={this.state.cities} onSelect={this.onSelectCity} />
                  <MDBInput
                    label="Alamat"
                    name="alamat"
                    icon="tag"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.handleChange}
                  />
                  <MDBInput
                    label="Kontak"
                    name="kontak"
                    icon="tag"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-center">
                  <MDBBtn type="submit" outline color="secondary">
                    Add Data
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
export default FormAddMitra;

class Province extends React.Component {
  onSelect = (event) => {
    this.props.onSelect(parseInt(event.target.value));
  };
  render() {
    return (
      <div>
        <label>Provinsi :</label>
        <select
          className="browser-default custom-select"
          onChange={this.onSelect}
        >
          <option>Select province</option>
          {this.props.data.map((prov) => (
            <option
              key={prov.id}
              value={prov.id}
              name="province"
              selected={this.props.selectedId === prov.id}
            >
              {prov.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

class City extends React.Component {
  onSelect = (event) => {
    this.props.onSelect(event.target.value);
  };
  render() {
    return (
      <div>
        <label>Kab.Kota</label>
        <select
          className="browser-default custom-select"
          onClick={this.onSelect}
        >
          <option>Select city</option>
          {this.props.data.map((city) => (
            <option
              key={city.id}
              value={city.name}
              name="city"
              selected={this.props.selectedId === city.id}
            >
              {city.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
