import { MDBBtn, MDBCol, MDBIcon, MDBInput, MDBRow } from "mdbreact";
import Router from "next/router";
import React from "react";
import data from "../../data/dataProv";
import { updateMitra } from "../../lib/updateMitra";
export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: data.provinces,
      provinceId: null,
      cities: data.cities,
      _id: this.props._id,
      namaToko: this.props.namaToko,
      username: this.props.username,
      provinsi: this.props.provinsi,
      kota: this.props.kota,
      alamat: this.props.alamat,
      kontak: this.props.kontak,
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
    const { _id, namaToko, username, provinsi, kota, alamat, kontak } =
      this.state;
    event.preventDefault();
    updateMitra(_id, namaToko, username, provinsi, kota, alamat, kontak);
  };
  render() {
    return (
      <>
        <MDBRow fluid="true" center>
          <MDBCol md="8">
            <form onSubmit={this.handleSubmit}>
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
                  valueDefault={this.props.namaToko}
                  defaultValue={this.props.namaToko}
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
                  valueDefault={this.props.username}
                  onChange={this.handleChange}
                />
                <Province
                  data={this.state.provinces}
                  selectedId={this.state.provinceId}
                  onSelect={this.onSelectProvince}
                  valueDefault={this.props.provinsi}
                />
                <br />
                <City
                  data={this.state.cities}
                  onSelect={this.onSelectCity}
                  valueDefault={this.props.kota}
                />
                <MDBInput
                  label="Alamat"
                  name="alamat"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  valueDefault={this.props.alamat}
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
                  valueDefault={this.props.kontak}
                  onChange={this.handleChange}
                />
                <div className="mb-5 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <button
                    className="text-white bg-green-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Update Data
                  </button>
                </div>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </>
    );
  }
}

class Province extends React.Component {
  onSelect = (event) => {
    this.props.onSelect(parseInt(event.target.value));
  };
  render() {
    return (
      <div>
        <label>Provinsi : </label>
        <select
          className="browser-default custom-select"
          onChange={this.onSelect}
        >
          <option>{this.props.valueDefault}</option>
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
        <label>Kab.Kota :</label>
        <select
          className="browser-default custom-select"
          onClick={this.onSelect}
        >
          <option>{this.props.valueDefault}</option>
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
