import React from "react";
import "./SideNavbar.css";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

export default function SideNavbar() {
  const navigate = useNavigate();
  return (
    <div className="sideNavContainer">
      <SideNav
        className="sidenav"
        onSelect={(selected) => {
          console.log(selected);
          if (selected === "") {
            toast.warn("Logging out... ", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => {
              navigate("/");
            }, 3000);
          } else {
            navigate("/" + selected);
          }
        }}
      >
        <SideNav.Toggle />

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <SideNav.Nav>
          <NavItem eventKey="home">
            <NavIcon>
              <i
                className="fa far-fw fa-home"
                style={{ color: "white", fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="userticket">
            <NavIcon>
              <i
                className="fa far-regular fa-ticket"
                style={{ color: "white", fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>My Tickets</NavText>
          </NavItem>

          {localStorage.getItem("role") === "admin" && (
            <NavItem eventKey="admin">
              <NavIcon>
                <i
                  className="fa far-regular fa-lock"
                  style={{ color: "white", fontSize: "1.5em" }}
                ></i>
              </NavIcon>

              <NavText>Administration</NavText>
            </NavItem>
          )}

          <br />

          <NavItem eventKey="">
            <NavIcon>
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                style={{ color: "white", fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>logout</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
