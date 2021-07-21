import React, { select } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Form, Col } from "react-bootstrap";


import CardComponent from "../component/CardComponent";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Container
          fluid
          style={{
            backgroundColor: "#F1F3F0",
            paddingTop: 100,
            paddingBottom: 30,
          }}
        >
          <Form action method="get">
            <Row className="justify-content-md-center">
              <Col xs="auto">
                <div>
                  <Form.Label>Provinsi</Form.Label>
                </div>
                <div>
                  <select
                    className="browser-default custom-select"
                    data-style="select-new"
                    data-live-search="true"
                    data-size={5}
                    id="propinsi"
                    name="propinsi"
                    data-width="100%"
                  >
                    <option value={0}>PILIH </option>
                    <option value="11prop">ACEH </option>
                    <option value="12prop">SUMATERA UTARA </option>
                    <option value="13prop">SUMATERA BARAT </option>
                    <option value="14prop">R I A U </option>
                    <option value="15prop">JAMBI </option>
                    <option value="16prop">SUMATERA SELATAN </option>
                    <option value="17prop">BENGKULU </option>
                    <option value="18prop" selected>
                      LAMPUNG{" "}
                    </option>
                    <option value="19prop">KEPULAUAN BANGKA BELITUNG </option>
                    <option value="20prop">KEPULAUAN RIAU </option>
                    <option value="31prop">DKI JAKARTA </option>
                    <option value="32prop">JAWA BARAT </option>
                    <option value="33prop">JAWA TENGAH </option>
                    <option value="34prop">D I YOGYAKARTA </option>
                    <option value="35prop">JAWA TIMUR </option>
                    <option value="36prop">BANTEN </option>
                    <option value="51prop">BALI </option>
                    <option value="52prop">NUSA TENGGARA BARAT </option>
                    <option value="53prop">NUSA TENGGARA TIMUR </option>
                    <option value="61prop">KALIMANTAN BARAT </option>
                    <option value="62prop">KALIMANTAN TENGAH </option>
                    <option value="63prop">KALIMANTAN SELATAN </option>
                    <option value="64prop">KALIMANTAN TIMUR </option>
                    <option value="65prop">KALIMANTAN UTARA </option>
                    <option value="71prop">SULAWESI UTARA </option>
                    <option value="72prop">SULAWESI TENGAH </option>
                    <option value="73prop">SULAWESI SELATAN </option>
                    <option value="74prop">SULAWESI TENGGARA </option>
                    <option value="75prop">GORONTALO </option>
                    <option value="76prop">SULAWESI BARAT </option>
                    <option value="81prop">MALUKU </option>
                    <option value="82prop">MALUKU UTARA </option>
                    <option value="91prop">PAPUA BARAT </option>
                    <option value="92prop">PAPUA </option>
                  </select>
                </div>
              </Col>
              <Col xs="auto">
                <div>
                  <Form.Label>Kab.Kota</Form.Label>
                </div>
                <div>
                  <select
                    className="browser-default custom-select"
                    data-style="select-new"
                    data-live-search="true"
                    data-size={3}
                    id="kabkota"
                    name="kabkota"
                    data-width="100%"
                  >
                    <option value>Bandar Lampung</option>
                  </select>
                </div>
              </Col>
              <Col xs="auto">
                <div className="my-4">
                <div
                    className="btn ml-1"
                    style={{
                      backgroundColor: "#073180",
                      color: "#FFFFFF",
                      padding: "10px 30px 12px 30px",
                    }}
                  >
                    Cari
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
        <br />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    );
  }
}
