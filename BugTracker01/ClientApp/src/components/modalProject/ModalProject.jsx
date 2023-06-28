import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import db from "../fakedb/db.js";

export default function ModalProject() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{ backgroundColor: "#FF7630" }} onClick={handleShow}>
        Create New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                className="selectFocus"
                type="text"
                placeholder="Enter project name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Project Description</Form.Label>
              <Form.Control className="selectFocus" as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
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
