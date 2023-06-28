import React, { useState, useEffect } from "react";
import TopNav from "../../components/topNav/TopNav.jsx";
import SideNavbar from "../../components/sideNav/SideNavbar.jsx";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx";

import { ticketData } from "../fakedb/db.js";

import "./admin.css";
import Table from "react-bootstrap/Table";

import Form from "react-bootstrap/Form";
import { db } from "../fakedb/db.js";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Card from "react-bootstrap/Card";

import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

export default function Administration() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setEditedUser(user);
  };

  const handleToggle = () => {
    if (show === false) {
      return setShow(true);
    }
    setShow((prevShow) => !prevShow);
  };

  const [tickets, setTickets] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("role") !== "admin") {
      return navigate("/error");
    }

    function getTickets() {
      setTickets(ticketData);
    }

    getTickets();
  }, []);

  if (!tickets) return null;

  return (
    <div className="adminWrapper">
      <div>
        <TopNav />
        <SideNavbar className="sideNavbar" />
        <div className="contentWrapper">
          <MDBContainer className="tfadeIn">
            <MDBRow className="responsiveFlex">
              <MDBCol size="5">
                <Card>
                  <Card.Body>
                    <div>
                      <div className="mt-3">
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Employee's</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {db.map((n) => (
                              <tr key={n.id}>
                                <td className="bg-white px-3">{n.name}</td>
                                <td className="bg-white px-3">
                                  <center>
                                    <Button
                                      className="btn btn-light"
                                      style={{
                                        color: "#FF7630",
                                        fontWeight: "bold",
                                      }}
                                      onClick={() => handleUserClick(n)}
                                    >
                                      . . .
                                    </Button>
                                  </center>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </MDBCol>

              <MDBCol size="1"></MDBCol>

              <MDBCol size="6">
                <Card>
                  <Card.Body>
                    {selectedUser ? (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={editedUser.name}
                            value={editedUser.name}
                            onChange={(e) =>
                              setEditedUser({
                                ...editedUser,
                                name: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder={editedUser.email}
                            value={editedUser.email}
                            onChange={(e) =>
                              setEditedUser({
                                ...editedUser,
                                email: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Age</Form.Label>
                          <Form.Control
                            type="number"
                            value={editedUser.age}
                            placeholder={editedUser.age.toString()}
                            onChange={(e) =>
                              setEditedUser({
                                ...editedUser,
                                age: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Role</Form.Label>
                          <Form.Control
                            as="select"
                            value={editedUser.role}
                            onChange={(e) =>
                              setEditedUser({
                                ...editedUser,
                                role: e.target.value,
                              })
                            }
                          >
                            <option>developer</option>
                            <option>admin</option>
                          </Form.Control>
                        </Form.Group>
                        <Button
                          style={{ backgroundColor: "#FF7630" }}
                          onClick={handleShow}
                        >
                          Submit
                        </Button>

                        <Button
                          style={{ color: "#FF7630", float: "right" }}
                          variant="light"
                          onClick={handleShow}
                        >
                          Delete Employee
                        </Button>
                      </>
                    ) : (
                      <p>Select an employee to edit their details.</p>
                    )}
                  </Card.Body>
                </Card>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm changes</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure ?</Modal.Body>
          <Modal.Footer>
            <Button
              style={{ color: "#FF7630" }}
              variant="light"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              style={{ backgroundColor: "#FF7630", float: "right" }}
              onClick={handleClose}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
    </ div>
  );
}
