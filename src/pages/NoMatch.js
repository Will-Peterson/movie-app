import React from "react";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Styles = styled.div`
  text-align: center;
  margin: 120px;
`;

export const NoMatch = () => (
  <Styles>
    <h2>We can't find that page...</h2>
    <Link to='/'>
      <Button variant='primary'>Home</Button>
    </Link>
  </Styles>
);
