import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { projectData } from "../fakedb/db.js";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import styles from "./ticketList.module.css";

import { MDBDataTable, MDBBtn } from "mdbreact";

function TicketList() {
  const [projects, setProjects] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // // Fetch database
  // useEffect(() => {
  //   function getProjects() {
  //     setProjects(projectData);
  //   }

  //   getProjects();
  // }, []);

  const Project = (props) => (
    <tr>
      <td>{props.project.projects}</td>
      <td>{props.project.description}</td>
      <td>{props.project.contributor_name}</td>
    </tr>
  );

  // NOT IMPLEMENTED YET This method will delete a project
  function deleteProject(id) {
    const newProjects = projects.filter((el) => el.id !== id);
    setProjects(newProjects);
  }

  // This method will map out the projects on the table
  function List() {
    return projects.map((project) => {
      return (
        <Project
          project={project}
          deleteProject={() => deleteProject(project.id)}
          key={project.id}
        />
      );
    });
  }

  return (
    <div style={{ postition: "relative", zIndex: 1 }}>
      <center>
        <h1>Ticket list</h1>
      </center>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="primary" onClick={handleShow}>
          Create new
        </Button>
      </div>
      <MDBDataTable
        className={styles.myCustomTable}
        scrollY
        maxHeight="200px"
        maxWidth="200px"
        striped
        bordered
        small
        data={projectData}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TicketList;
