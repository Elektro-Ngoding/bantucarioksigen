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
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
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
