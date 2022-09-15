import React from "react";

const Nav = () => {
  return (
    <div class="bg-dark">
        <ul class="container nav nav-pills display-6 bg-dark text-uppercase">
      <li class="nav-item">
        <a class="nav-link link-light bg-warning" href="#">
          Movie Info
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Best Movie
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Worst Movie
        </a>
      </li>
    </ul>
    </div>
  );
};

export default Nav;
