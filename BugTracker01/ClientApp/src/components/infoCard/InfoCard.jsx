import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "./infocard.module.css";

export default function InfoCard() {
  const [position, setPosition] = useState("top-end");

  return (
    <Card className="custom-card" style={{ borderRadius: "5px" }} body>
      <center>
        <h3>INFO - COMMENTS</h3>
      </center>
      <Container>
        <Row>
          <Col xs lg="3">
            <Table className="align-middle" striped bordered hover>
              <thead>
                <tr>
                  <th>STATUS</th>
                  <th>PRIORITY</th>
                  <th>TYPE</th>
                  <th>TIME</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RESOLVED</td>
                  <td>IMMEDIATE</td>
                  <td>ISSUE</td>
                  <td>8</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col xs={2}></Col>
          <Col xs={7}>
            <div
              aria-live="polite"
              aria-atomic="true"
              className="bg-light position-relative rounded me-2"
              style={{
                minHeight: "240px",
                maxHeight: "240px",
                overflowY: "auto",
                borderRadius: "5px",
              }}
            >
              <ToastContainer
                className="p-3 custom-card"
                position={position}
                style={{ zIndex: 1 }}
              >
                <Toast>
                  <Toast.Header closeButton={false}>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">User</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Hello, this is my message!</Toast.Body>
                </Toast>

                <Toast>
                  <Toast.Header closeButton={false}>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">User</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Hello, this is my message!</Toast.Body>
                </Toast>

                <Toast>
                  <Toast.Header closeButton={false}>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">User</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Hello, this is my message!</Toast.Body>
                </Toast>

                <Toast>
                  <Toast.Header closeButton={false}>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">User</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Hello, this is my message!</Toast.Body>
                </Toast>

                <Toast>
                  <Toast.Header closeButton={false}>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">User</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Hello, this is my message!</Toast.Body>
                </Toast>
              </ToastContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
