import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Styles = styled.div`
  .brand {
    padding: 0.3125rem 0;
    font-size: 1.25rem;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="sm" bg="dark" fixed="top" variant="dark">
      <Link className="brand" to="/">
        Movie App
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/watchlist">
              Watchlist
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/watched">
              Watched
            </NavLink>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
