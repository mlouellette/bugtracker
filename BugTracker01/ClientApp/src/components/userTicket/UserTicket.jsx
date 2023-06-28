import React, { useState, useEffect } from "react";
import TopNav from "../../components/topNav/TopNav.jsx";
import SideNavbar from "../../components/sideNav/SideNavbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ProjectList from "../projectList/ProjectList.jsx";
import { ticketData } from "../fakedb/db.js";
import "./userTicket.css";
import { useNavigate } from "react-router-dom";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

export default function UserTicket() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleToggle = () => {
    if (show === false) {
      return setShow(true);
    }
    setShow((prevShow) => !prevShow);
  };

  const [tickets, setTickets] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("name")) {
      return navigate("/");
    }


    function getTickets() {
      setTickets(ticketData);
    }

    getTickets();
  }, []);

  if (!tickets) return null;

  return (
    <div className="userTicketWrapper">
    <div>
      <TopNav />
      <SideNavbar className="sideNavbar" />
      <div className="contentWrapper">
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12">
              <ProjectList
                buttonAction={{
                  columns: tickets.columns,
                  rows: tickets.rows
                    .filter(
                      (row) => row.author === localStorage.getItem("name")
                    )
                    .map((row) => ({
                      ...row,
                      info: (
                        <center>
                          <button
                            onClick={() => navigate("/tickets")}
                            className="btn btn-light"
                            style={{color: '#FF7630', fontWeight:"bold"}}
                          >
                            . . .
                          </button>
                        </center>
                      ),
                    })),
                }}
                className="bg-white"
                title={`${
                  localStorage.getItem("name")
                    ? localStorage.getItem("name")
                    : "name"
                }'s Ticket List`}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div style={{ bottom: -600 }}>
   
      </div>
     
    </div>
    <Footer />
    </ div>
  );
}
