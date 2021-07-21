import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import TableComponent from "../component/TableComponent";

export class Admin extends Component {
  render() {
    return (
      <div>
        <Container
          fluid
          style={{ marginTop: 100, backgroundColor: "#F1F3F0", padding: 50 }}
        >
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              <Row>
                <Col>
                  <div className="btn btn-primary p-3">
                    <i className="fa fa-plus" aria-hidden="true">  Tambah Data</i>
                    
                  </div>
                </Col>
              </Row>
              <TableComponent />
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <h1>hai hal 2</h1>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <h1>hai hal 3</h1>
            </Tab>
          </Tabs>
        </Container>
      </div>
    );
  }
}

export default Admin;
