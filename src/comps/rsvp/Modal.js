import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { ReactComponent as Berry } from "../../svgs/simple-berry.svg";
import { X } from "phosphor-react";

const offWhite = "#f5f5f5";

const Backdrop = styled.div`
  /* background: ${offWhite}; */
  opacity: 0.8;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
  @media only screen and (max-width: 800px) {
    align-items: flex-start;
    
  }
`;

const Box = styled.div`
  background: var(--tertiary);
  width: 50%;
  height: 80%;
  @media only screen and (max-width: 800px) {
    width: 70%;
    
  }
  border-radius: 2px;
  box-shadow: -5px 5px 33px -10px rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  padding: 40px;
  color: ${offWhite};
  flex-direction: column;
  align-items: center;
  svg {
    width: 4rem;
    height: 4rem;
    margin: 20px;
  }
  svg path {
    fill: ${offWhite};
  }
  position: relative;
`;

const Title = styled.div`
  font-family: "Italiana", serif;
  letter-spacing: 1px;
  font-size: 5rem;
  margin: 10px;
  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`;

const Desc = styled.div`
  margin: 10px;
`;

const InfoContainer = styled.div`
  line-height: 20px;
  font-size: 12px;
`;

const Info = styled.div`
  bottom: 0;
  color: white;
  text-align: center;
`;

const Exit = styled.div`
  background: transparent;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 50%;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 80%;
    height: 80%;
    margin: 0;
  }
`;

export default function Modal({ setModal }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <Container
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <Box>
            <Exit onClick={() => setModal(false)}>
              <X size={10} />
            </Exit>
            <Title>Thank you</Title>
            <Desc>We are so excited to have you!</Desc>
            <Berry />
            <InfoContainer>
              Feel free to reach out if you have any questions.
              <Info>grantleadie@gmail.com | (509) 590-7955</Info>
            </InfoContainer>
          </Box>
        </Container>
        <Backdrop></Backdrop>
      </motion.div>
    </AnimatePresence>
  );
}
