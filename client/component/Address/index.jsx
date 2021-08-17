import React from "react";
import data from "../../data/dataProv";
export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: data.provinces,
      provinceId: null,
      cities: data.cities,
      _id: this.props._id,
      provinsi: this.props.provinsi,
      kota: this.props.kota,
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
    this.props.handleSearch(city);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Province
              data={this.state.provinces}
              selectedId={this.state.provinceId}
              onSelect={this.onSelectProvince}
            />
          </div>
          <div className="space-y-1">
            <City
              data={this.state.cities}
              selectedId={this.state.cityId}
              onSelect={this.onSelectCity}
            />
          </div>
        </div>
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
          <option selected disabled>
            Pilih Provinsi
          </option>
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
          <option selected disabled>
            Pilih Kota
          </option>
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
