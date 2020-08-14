import React from "react";
import styled from "styled-components";
import "../App.css";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  font-size: 3vw;
  color: #0B3D91;
  font-family: 'Rowdies', cursive;
  font-weight: 300;
  img {
    object-fit: contain;
  }

`


const Header = () => {
    return (
      <StyledHeader>
        <img src='https://api.nasa.gov/assets/img/favicons/favicon-192.png' alt='NASA logo' />
        <h1>NASA Photo of the Day</h1>
      </StyledHeader>
    )
  }

export default Header;