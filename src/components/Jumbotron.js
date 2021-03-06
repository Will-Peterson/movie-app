import React from "react";
import Container from 'react-bootstrap/Container';
import {Jumbotron as Jumbo} from 'react-bootstrap';
import styled from "styled-components";
import bgImage from "../assets/pulp-fiction.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${bgImage}) no-repeat center;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Movie DB</h1>
        <p>Build your personal movie list</p>
      </Container>
    </Jumbo>
  </Styles>
);
