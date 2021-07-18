import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

export class Admin extends Component {
  render() {
    return (
      <div>
        <Container
          fluid="md"
          style={{ marginTop: 100, backgroundColor: "#F1F3F0", padding: 50 }}
        >
          <Row style={{ marginBottom: 30, textAlign: "center" }}>
            <h1>
              <b>Alkes Central Medica</b>
            </h1>
          </Row>
          <Form>
            <Row>
              <Col xs="3">
                <h4>Status</h4>
              </Col>
              <Col xs="4" style={{ textAlign: "right",}}>
                <div>
                  <select
                    className="selectpicker"
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
              <Col xs="4" style={{ textAlign: "right"}}>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#073180",
                    color: "#FFFFFF",
                    padding: "6px 40px 6px 40px",
                  }}
                >
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
              <Col xs="4" style={{ textAlign: "right",}}>
                <div>
                  <select
                    className="selectpicker"
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
              
              <Col xs="4" style={{ textAlign: "right"}}>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#073180",
                    color: "#FFFFFF",
                    padding: "6px 40px 6px 40px",
                  }}
                >
                  Update
                </Button>
              </Col>
            </Row>
          </Form>
          <hr />
          <Form>
            <Row>
              <Col xs="3">
                <h4>Antrian</h4>
              </Col>
              <Col xs="4" style={{ textAlign: "right",}}>
                <div>
                  <select
                    className="selectpicker"
                    data-style="select-new"
                    data-live-search="true"
                    data-size={3}
                    id="StatusToko"
                    name="StatusToko"
                    data-width="100%"
                  >
                    <option value>Ada Antrian</option>
                    <option value>Tidak Ada Antrian</option>
                  </select>
                </div>
              </Col>
              
              <Col xs="4" style={{ textAlign: "right"}}>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#073180",
                    color: "#FFFFFF",
                    padding: "6px 40px 6px 40px",
                  }}
                >
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

export default Admin;
