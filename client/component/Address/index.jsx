import React from "react";
import data from "../../data/dataProv";

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
    this.props.onSelect(parseInt(event.target.value));
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
              value={city.id}
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

export default class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: data.provinces,
      provinceId: null,
      cities: data.cities,
      cityId: null,
    };
  }

  onSelectProvince = (provId) => {
    const selCities = data.cities.filter((c) => c.provinceId === provId);
    this.setState({
      provinceId: provId,
      cities: selCities,
    });
  };

  onSelectCity = (city) => {
    this.setState({
      cityId: city.id,
    });
  };

  render() {
    return (
      <>
        <div>
          <Province
            data={this.state.provinces}
            selectedId={this.state.provinceId}
            onSelect={this.onSelectProvince}
          />
          <br />
          <City
            data={this.state.cities}
            selectedId={this.state.cityId}
            onSelect={this.onSelectCity}
          />
        </div>
      </>
    );
  }
}
