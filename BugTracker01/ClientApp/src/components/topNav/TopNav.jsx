
import styles from "./TopNav.module.css";

import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

import '@fortawesome/fontawesome-free/css/all.min.css';

import bug from "../assets/bug.png";

export default function TopNav() {
  return (
    <>
      <Navbar style={{ height: 300 }} className={`${styles.mainNav} align-items-start`}>
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="/home">
            <img style={{ width: "10%", padding: 5 }} src={bug} />
            {localStorage.getItem("name")
              ? localStorage.getItem("name")
              : "name"}
            's Dashboard
          </Navbar.Brand>
          <div className={styles.iconContainer}>
          <Nav>
            <Nav.Link href="/home">
              <i className={`fa fa-home ${styles.icon}`} />
            </Nav.Link>

            <Nav.Link href="/userticket">
              <i className={`fa fa-ticket ${styles.icon}`} />
            </Nav.Link>
            {localStorage.getItem("role") === "admin" && (
            <Nav.Link href="/admin">
              <i className={`fa fa-lock ${styles.icon}`} />
            </Nav.Link>
            )}

          </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}