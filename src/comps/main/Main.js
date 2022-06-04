import React from "react";
import Gallery from "../gallery/Gallery";
import "./main.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Italiana", serif;
  justify-content: center;
  align-items: center;
  padding: 0 80px;

  a {
    margin: 40px 0;
    color: var(--secondary);
    font-size: 2em;
    padding: 5px 30px;
    border: 1px solid white;
    text-decoration: none;
    width: 100%;
    max-width: 300px;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 3px;
  }
`;

const Main = () => {
  return (
    <Container>
      <Buttons>
        <Link to="/rsvp">rsvp</Link>

        <Link to="lodging">lodging</Link>

        <Link to="schedule">schedule</Link>

        <Link to="weekend">weekend</Link>
        <Link to="food">food</Link>
      </Buttons>
      <Gallery />
    </Container>
  );
};

export default Main;
