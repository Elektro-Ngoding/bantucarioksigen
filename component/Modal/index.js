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
      status: this.props.status,
      provinsi: this.props.provinsi,
      kota: this.props.kota,
      alamat: this.props.alamat,
      kontak: this.props.kontak,
      statusBuka: this.props.statusBuka,
      stokBarang: this.props.stokBarang,
      antrian: this.props.antrian,
      waktuBuka: this.props.waktuBuka,
      waktuTutup: this.props.waktuTutup,
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
    const {
      _id,
      namaToko,
      status,
      provinsi,
      kota,
      alamat,
      kontak,
      statusBuka,
      stokBarang,
      antrian,
      waktuBuka,
      waktuTutup,
    } = this.state;
    event.preventDefault();
    updateMitra(
      _id,
      namaToko,
      status,
      provinsi,
      kota,
      alamat,
      kontak,
      statusBuka,
      stokBarang,
      antrian,
      waktuBuka,
      waktuTutup
    );
    this.props.handleCloseModal();
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
                  required
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <MDBInput
                      label="Waktu Buka"
                      name="waktuBuka"
                      required
                      icon="tag"
                      group
                      type="time"
                      validate
                      error="wrong"
                      success="right"
                      valueDefault={this.props.waktuBuka}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <MDBInput
                      label="Waktu Tutup"
                      name="waktuTutup"
                      required
                      group
                      type="time"
                      validate
                      error="wrong"
                      success="right"
                      valueDefault={this.props.waktuTutup}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
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
                  required
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
                  required
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  valueDefault={this.props.kontak}
                  onChange={this.handleChange}
                />
                <div class="flex flex-cols-3 flex-row-reverse mb-2">
                  <button
                    type="submit"
                    class="text-white bg-blue-500 hover:bg-blue-400 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Update Data
                  </button>
                  <p
                    onClick={() => {
                      this.props.handleCloseModal();
                    }}
                    class="text-white bg-red-500 hover:bg-red-400 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Cancel
                  </p>
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
