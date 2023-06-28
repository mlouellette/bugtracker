import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="text-center p-4 mt-5">
        <span style={{color: '#383838'}}>
          © 2023 Copyright:{" "}
        </span>
        <span style={{color:'#FF7630'}}>
          <a className="text-reset fw-bold text-light" href="/home">
            mlouellette.dev
          </a>
        </span>
      </div>
    </div>
  );
}