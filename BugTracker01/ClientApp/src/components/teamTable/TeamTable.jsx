import React, { useState } from "react";
import { db } from "../fakedb/db.js";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function TeamTable() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Team</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {db.map((n) => (
            <tr key={n.id}>
              <td className="bg-white px-3">{n.name}</td>
              <td className="bg-white px-3">
                <center>
                  <Button             style={{ color: "#FF7630" }}
            variant="light" onClick={handleShow}>
                    {" "}
                    X{" "}
                  </Button>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete teammate</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete ?</Modal.Body>
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
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
