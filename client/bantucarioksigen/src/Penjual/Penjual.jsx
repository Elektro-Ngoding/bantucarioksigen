import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

export class Penjual extends Component {
  render() {
    return (
      <div>
        <Container
          fluid="md"
          style={{ marginTop: 100, backgroundColor: "#F1F3F0", padding: 50 }}
        >
          <Row style={{ marginBottom: 30, textAlign: "center" }}>
            <h1>
              <b>
                Alkes Central Medica{" "}
                <a
                  href="#"
                  className="btn"
                  style={{
                    backgroundColor: "#073180",
                    color: "#FFFFFF",
                  }}
                >
                  <i className="fa fa-edit" aria-hidden="true">
                    {" "}
                  </i>
                </a>
              </b>
            </h1>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <p>
              Jl. Teuku Umar No.38B, Sidodadi, Kec. Kedaton, Kota Bandar
              Lampung, Lampung 35123
            </p>
          </Row>
          <Row style={{ marginBottom: 20, textAlign: "center" }}>
            <span style={{ fontSize: 13, color: "grey" }}>
              Kontak Darurat : 0721703312
            </span>
          </Row>
          <hr />
          <Form>
            <Row>
              <Col xs="4">
                <h4>Status</h4>
              </Col>
              <Col xs="4" style={{ textAlign: "right" }}>
                <div>
                  <select
                    className="browser-default custom-select"
                    data-style="select-new"
                    data-live-search="true"
                    data-size={3}
                    id="StatusToko"
                    name="StatusToko"
                    data-width="100%"
                  >
                    <option value>Buka</option>
                    <option value>Istirahat</option>
                    <option value>Tutup</option>
                  </select>
                </div>
              </Col>
              <Col
                xs="4"
                className="align-middle"
                style={{ textAlign: "right" }}
              >
                <Button type="submit" className="btn p-2">
                  Update
                </Button>
              </Col>
            </Row>
          </Form>
          <hr />
          <Form>
            <Row>
              <Col xs="3">
                <h4>Stok</h4>
              </Col>
              <Col xs="5" style={{ textAlign: "right" }}>
                <div>
                  <select
                    className="browser-default custom-select"
                    data-style="select-new"
                    data-live-search="true"
                    data-size={3}
                    id="StatusToko"
                    name="StatusToko"
                    data-width="100%"
                  >
                    <option value>Stok Tersedia</option>
                    <option value>Stok Kosong</option>
                  </select>
                </div>
              </Col>

              <Col xs="4" style={{ textAlign: "right" }}>
                <Button type="submit" className="btn p-2">
                  Update
                </Button>
              </Col>
            </Row>
          </Form>
          <hr />
          <Form>
            <Row>
              <Col xs="4">
                <h4>Antrian</h4>
              </Col>
              <Col xs="4" style={{ textAlign: "right" }}>
                <div>
                  <select
                    className="browser-default custom-select"
                    data-style="select-new"
                    data-live-search="true"
                    data-size={3}
                    id="StatusToko"
                    name="StatusToko"
                    data-width="100%"
                  >
                    <option value>Ada</option>
                    <option value>Tidak Ada</option>
                  </select>
                </div>
              </Col>

              <Col xs="4" style={{ textAlign: "right" }}>
                <Button type="submit" className="btn p-2">
                  Update
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Penjual;
