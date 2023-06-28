import React, { useState, useEffect } from "react";
import TopNav from "../../components/topNav/TopNav.jsx";
import SideNavbar from "../../components/sideNav/SideNavbar.jsx";
import ProjectList from "../../components/projectList/ProjectList.jsx";
import PieCharts from "../../components/pieCharts/PieCharts.tsx";
import Footer from "../../components/footer/Footer.jsx";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { projectData } from "../fakedb/db.js";
import ModalProject from "../modalProject/ModalProject.jsx";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function Home() {
  const [projects, setProjects] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // navigate(`/tickets/${project}`);
    navigate("/tickets");
  };

  useEffect(() => {

    if (!localStorage.getItem("name")) {
        return navigate("/");
    }

    function getProjects() {
      setProjects(projectData);
    }

    getProjects();
  }, []);

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
                <ModalProject />
              </div>
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
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

          </div>

    <Footer />
    </>
  );
}
