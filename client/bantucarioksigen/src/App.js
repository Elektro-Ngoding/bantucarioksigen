import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Home from "./Home/Home";
import Login from "./Auth/Login";
import Admin from "./Admin/Admin";
import Penjual from "./Penjual/Penjual";

function App() {
  return (
    <div>
      <Navbar
        className="navbar fixed-top navbar-light"
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #F1F3F0",
        }}
      >
        <a className="navbar-brand" href="#">
          <span
            className="badge"
            style={{ fontSize: 25, backgroundColor: "#073180" }}
          >
            Bantu Cari Oksigen
          </span>
        </a>
      </Navbar>
      {/* <Home /> */}
      {/* <Login /> */}
      <Admin/>
      {/* <Penjual/> */}
    </div>
  );
}

export default App;
