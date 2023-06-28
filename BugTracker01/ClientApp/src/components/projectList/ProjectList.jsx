
import { projectData } from "../fakedb/db.js";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { MDBDataTable, MDBBtn, MDBAnimation } from "mdbreact";
import "./projectList.css"

function ProjectList(props) {
  const [projects, setProjects] = useState(null);
  const navigate = useNavigate();



  useEffect(() => {
    function getProjects() {
      setProjects(projectData);
    }

    getProjects();
  }, []);

  const handleButtonClick = () => {
    // navigate(`/tickets/${project}`);
    navigate("/tickets");
  };

  if (!projects) return null; // or a loading spinner

  return (
    <div className="projectListContainer">
      <center>
        <h2 style={{ color: "#292929" }}>{props.title}</h2>
      </center>
      <div style={{ display: "flex", justifyContent: "flex-end", zIndex: 1 }}>
        {/* <ModalProject /> */}
      </div>
      <div>

        <MDBDataTable
          className="fade-in"
          responsive
          striped
          bordered
          small
          data={props.buttonAction}
          style={{ backgroundColor: "white" }}
        />
      </div>

    </div>
  );
}
{
  /* <button style={{backgroundColor: '#FF7630'}} onClick={() => handleButtonClick(row.project)} className="btn btn-primary">Tickets</button> */
}
export default ProjectList;
