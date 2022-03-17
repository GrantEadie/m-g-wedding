import styled from "styled-components";
import Modal from "./Modal";
import { ReactComponent as Leaf } from "../../svgs/simple-leaf.svg";

import { useState } from "react";
import { projectFirestore, timestamp } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  font-family: "Montserrat", sans-serif;
  color: var(--tertiary);
  * {
    letter-spacing: 2px;
    transition: all 0.5s ease;
  }
`;

const Title = styled.div`
  color: var(--tertiary);
  font-size: 2rem;
  flex-grow: 2;
  display: flex;
  justify-content: center;
  font-weight: 900;
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;

const Divide = styled.div`
  display: flex;
  justify-content: center;
  svg {
    width: 5rem;
    height: 5rem;
    margin: 40px;
  }
  svg path {
    fill: var(--tertiary);
  }
  align-items: center;
  width: 80%;
`;

const Line = styled.div`
  border-top: 2px solid var(--tertiary);
  width: 100%;
`;

const Info = styled.div`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tag = styled.div``;

const Date = styled.div`
  font-weight: 100;
  font-size: 5rem;
  font-style: italic;
  font-family: "Italiana", serif;
  margin: 30px 0;
  text-align: center;
`;
const Button = styled.div`
  padding: 10px 30px;
  border: 1px solid var(--tertiary);
  cursor: pointer;

  &:hover {
    background: var(--tertiary);
    color: white;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border: 2px solid transparent;
  border-bottom: 2px solid lightgrey;
  padding: 15px;
  margin: 30px 0px;

  width: 100%;
  &:focus {
    outline: none;
    transform: translate(2%, -2%);
    box-shadow: -8px 6px 0px -1px rgba(0, 0, 0, 0.19);
    border: 2px solid var(--tertiary);
  }
  ::placeholder {
    color: lightgrey;
  }
  font-weight: 900;
`;

const Submit = styled.div`
  padding: 10px 15px;
  border: 1px solid var(--tertiary);
  cursor: pointer;
  &:hover {
    background: var(--tertiary);
    color: white;
  }
  text-align: center;
  flex-grow: 2;
  width: 100%;
  margin: 40px 0;
  letter-spacing: 2px;
`;

export default function RSVP() {
  const [guestInfo, setGuestInfo] = useState({});
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleAdd = () => {
    setModal(true);

    projectFirestore
      .collection("guests")
      .add({ ...guestInfo, createdAt: timestamp() });
  };

  function handleDetailClick() {
    navigate("/");
  }

  return (
    <>
      {modal && <Modal />}

      <Container>
        <Title>RSVP</Title>
        <Divide>
          <Line />
          <Leaf />
          <Line />
        </Divide>
        <Body>
          <Info>
            <Tag>SAVE THE DATE AND RSVP</Tag>
            <Date>June 24th, 2022</Date>
            <Button onClick={() => handleDetailClick()}>DETAILS</Button>
          </Info>
          <Form>
            <Input
              placeholder="NAME"
              name="name"
              onChange={(e) =>
                setGuestInfo({
                  ...guestInfo,
                  [e.target.name]: e.target.value.toLowerCase(),
                })
              }
              autoComplete="off"
            ></Input>
            <Input
              placeholder="EMAIL ADDRESS"
              name="email"
              onChange={(e) =>
                setGuestInfo({
                  ...guestInfo,
                  [e.target.name]: e.target.value.toLowerCase(),
                })
              }
              type="email"
              autoComplete="off"
            ></Input>
            <Input
              placeholder="# OF GUESTS"
              name="guestNumber"
              onChange={(e) =>
                setGuestInfo({
                  ...guestInfo,
                  [e.target.name]: e.target.value.toLowerCase(),
                })
              }
              type="number"
              autoComplete="off"
            ></Input>
            <Submit onClick={() => handleAdd()}>SEND RSVP</Submit>
          </Form>
        </Body>
      </Container>
    </>
  );
}
