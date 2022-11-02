import React from "react";

const Header = () => {
  return (
    <div
      class="jumbotron-fluid p-3 text-uppercase"
      style={{ backgroundColor: "aquamarine" }}
    >
      <div class="container">
        <h1 style={{ fontSize: "4rem", fontFamily: "monospace" }}>
          Movie Information
        </h1>
        <p class="lead" style={{ fontSize: "1.5rem"}}>Know about the Movie.</p>
      </div>
    </div>
  );
};

export default Header;
