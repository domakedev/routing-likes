import { Link, Outlet } from "react-router-dom";
import React, {useState} from 'react'
import styled from "styled-components";
import "./App.css";
import Like from "./images/like.png"

const Linkito = styled(Link)`
  width: 33%;
  display: inline-block;
  text-align: center;
  color: white;
  background-color: #222;
  padding: 10px;
  text-decoration: none;

  :hover {
    background-color: #4b4b4b;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;

const Nav = styled.nav`
  display: flex;
`

const Container = styled.div`
  display: block;
`;

function App() {

  const [clicks, setClicks] = useState(0);

  return (
    <Container>

      <Nav>
        <Linkito to="/Home" onClick={()=>(setClicks(clicks+1))}>Home</Linkito>
        <Linkito to="/pricing" onClick={()=>(setClicks(clicks+1))}>Pricing</Linkito>
        <Linkito to="/about" onClick={()=>(setClicks(clicks+1))}>About</Linkito>
      </Nav>

      
      <p>Likes/Clicks/Visitas totales: {clicks}</p>

      <Outlet />
    </Container>
  );
}

export default App;
