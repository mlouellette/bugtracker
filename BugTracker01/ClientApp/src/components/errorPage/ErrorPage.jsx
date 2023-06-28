import React from "react";
import bug from "../assets/bug.png";

export default function ErrorPage() {
  return (
    <>
      <center>
        <br />
        <h1>404 NOT FOUND</h1>
        <img style={{ top: 0, width: "10%", padding: 5 }} src={bug} />
      </center>
    </>
  );
}
