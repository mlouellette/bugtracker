import React, { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import TopNav from "../../components/topNav/TopNav.jsx";
import SideNavbar from "../../components/sideNav/SideNavbar.jsx";
import ProjectList from "../../components/projectList/ProjectList.jsx";
import PieCharts from "../../components/pieCharts/PieCharts.tsx";
import Footer from "../../components/footer/Footer.jsx";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { projectData } from "../fakedb/db.js";
import ModalProject from "../modalProject/ModalProject.jsx";
import Card from "react-bootstrap/Card";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function Home() {
    const { user, isAuthenticated } = useAuth0();
    const [projects, setProjects] = useState(null);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // navigate(`/tickets/${project}`);
        navigate("/tickets");
    };

    useEffect(() => {

        if (isAuthenticated) {
            fetch('http://localhost:5265/api/Users', {
                crossDomain: true,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name: user.name,
                    Birthdate: new Date(), // Or another value
                    AuthO_ID: user.sub, // This is the unique user ID from Auth0
                    Role: 'developer', // Or another value
                    CreatedAt: new Date(),
                    UpdatedAt: new Date()
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                })
                .catch(error => {
                    console.log('Fetch error: ', error);
                });
        }

        function getProjects() {
            setProjects(projectData);
        }

        getProjects();
    }, [isAuthenticated, user]);

    if (!projects) return null;

  return (
    <>
    <div className="pb-5">
      <TopNav user={"Allo"} />
      <SideNavbar className={styles.sideNavbar} />
      <div className={styles.contentWrapper}>
        <MDBContainer>
          <MDBRow className={styles.centerOnMobile}>
            <MDBCol size="3" className={styles.pieChartsContainer}>
              <PieCharts />
            </MDBCol>
            <MDBCol size="1"></MDBCol>

            <MDBCol size="8" className={styles.projectListContainer}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  zIndex: 1,
                }}
              >
                              </div>
          <Card>
            <Card.Body>
                <ModalProject />
              <ProjectList
                buttonAction={{
                  columns: projects.columns,
                  rows: projects.rows.map((row) => ({
                    ...row,
                    actions: (
                      <button
                        onClick={() => handleButtonClick(row.title)}
                        className="btn btn-light"
                        style={{color: '#FF7630', fontWeight:"bold"}}
                      >
                        Tickets
                      </button>
                    ),
                  })),
                }}
                title="Project List"
                                      />
              </Card.Body>
            </Card>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

          </div>

    <Footer />
    </>
  );
}
