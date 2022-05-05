import styled from "styled-components";
import Modal from "./Modal";
import { ReactComponent as Leaf } from "../../svgs/simple-leaf.svg";
import { AnimatePresence, motion } from "framer-motion";
import Arrival from "./Arrival";
import NameEmail from "./NameEmail";
import Coming from "./Coming";
import Guests from "./Guests";
import Dietary from "./Dietary";
import Camp from "./Camp";
import { useState } from "react";
import { projectFirestore, timestamp } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  padding: 10px;
  max-width: 100vw;
  padding: 100px 0;
  background: rgba(245, 245, 245, 0.8);
  border-radius: 10px;
`;

const Body = styled.div`
  font-family: "Montserrat", sans-serif;
  color: var(--tertiary);
  * {
    letter-spacing: 1.5px;
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
  width: 80%;
  margin: 40px 0;
  letter-spacing: 2px;
`;

const ConfirmedContainer = styled.div`
  width: 100%;
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
      {modal && <Modal setModal={setModal} />}

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
            <NameEmail guestInfo={guestInfo} setGuestInfo={setGuestInfo} />
            <Coming guestInfo={guestInfo} setGuestInfo={setGuestInfo} />

            {guestInfo.rsvp && (
              <AnimatePresence>
                <ConfirmedContainer
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  layout
                >
                  <Guests guestInfo={guestInfo} setGuestInfo={setGuestInfo} />
                  <Dietary guestInfo={guestInfo} setGuestInfo={setGuestInfo} />
                  <Arrival guestInfo={guestInfo} setGuestInfo={setGuestInfo} />
                  <Camp guestInfo={guestInfo} setGuestInfo={setGuestInfo} />
                </ConfirmedContainer>
              </AnimatePresence>
            )}
            <Submit onClick={() => handleAdd()}>SEND RSVP</Submit>
          </Form>
        </Body>
      </Container>
    </>
  );
}
