import React from "react";
import Gallery from "../gallery/Gallery";
import "./main.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import QuickInfo from "./QuickInfo";


const Container = styled.div``;

const Buttons = styled.div`
  display: flex;
  font-family: "Italiana", serif;
  justify-content: space-between;
  padding: 0 80px;
  margin-bottom: 40px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  a {
    @media screen and (max-width: 800px) {
      margin: 20px 0;
    }
    margin: 0 20px;
    color: var(--secondary);
    font-size: 1.5em;
    padding: 5px 30px;

    text-decoration: none;
    width: 100%;
    max-width: 300px;
    text-align: center;
    background: var(--main);
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
      <QuickInfo />
      
      <Gallery />
    </Container>
  );
};

export default Main;
