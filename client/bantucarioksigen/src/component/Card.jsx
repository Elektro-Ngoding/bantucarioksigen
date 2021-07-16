import React, { select } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
export default class Card extends React.Component {
  render() {
    return (
      <div>
        <Container

        >
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <div
                className="cardRS col-md-12 mb-2 "
                data-string="Alkes Central Medica"
              >
                <div className="card" style={{ backgroundColor: "#F1F3F0" }}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-7">
                        <h5 className="mb-0" style={{ color: "#4D514D" }}>
                          Alkes Central Medica
                        </h5>
                        <p
                          className="mb-0"
                          style={{ fontSize: 14, color: "#4D514D" }}
                        >
                          Jl. Teuku Umar No.38B, Sidodadi, Kec. Kedaton, Kota
                          Bandar Lampung, Lampung 35123
                        </p>
                      </div>
                      <div className="col-md-5 text-right">
                        {/* <span class="fa fa-bed badge badge-info" aria-hidden="true"> IGD Khusus Covid 19</span> */}
                        <p
                          className="mt-0 mb-1"
                          style={{ fontSize: 13, color: "grey" }}
                        >
                          Buka : 07:00 - 17:00
                        </p>
                        <p
                          className="mb-0"
                          style={{ fontSize: 18, color: "#4D514D" }}
                        >
                          <b>Stok Tersedia</b>
                        </p>
                        <p
                          className="mb-0"
                          style={{ fontSize: 14, color: "#4D514D" }}
                        >
                          tanpa antrian pembeli.{" "}
                        </p>
                        <p
                          className="mb-0"
                          style={{ fontSize: 13, color: "grey" }}
                        >
                          diupdate 2 menit yang lalu{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-footer"
                    style={{ backgroundColor: "#F1F3F0" }}
                  >
                    <div style={{ textAlign: "right" }}>
                      <i style={{ fontSize: 13, color: "grey" }}>
                        Kontak Darurat &nbsp;
                      </i>
                      <i
                        className="fa fa-phone"
                        style={{ color: "#000000" }}
                        aria-hidden="true"
                      >
                        {" "}
                        &nbsp;
                      </i>
                      <span style={{ fontSize: 13, color: "grey" }}>
                        0721703312
                      </span>
                      <a
                        href="https://yankes.kemkes.go.id/app/siranap/tempat_tidur?kode_rs=1801017&jenis=1&propinsi=18prop&kabkota=1871"
                        className="btn ml-1"
                        style={{
                          backgroundColor: "#073180",
                          color: "#FFFFFF",
                          marginLeft:"10px",
                          padding: "6px 10px 6px 10px",
                        }}
                      >
                        <i className="fa fa-bed" aria-hidden="true">
                          {" "}
                         Get Lokasi
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
