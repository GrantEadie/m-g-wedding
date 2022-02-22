import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as Berry } from "../../svgs/simple-berry.svg";

const offWhite = "#f5f5f5";

const Backdrop = styled.div`
  background: ${offWhite};
  opacity: 0.8;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const Box = styled.div`
  background: var(--tertiary);
  width: 50%;
  height: 80%;
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
`;

const Title = styled.div`
  font-family: "Italiana", serif;
  letter-spacing: 1px;
  font-size: 5rem;
  margin: 10px;
`;

const Desc = styled.div`
  margin: 10px;
`;

export default function Modal() {
  return (
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
      >
        <Box>
          <Title>Thank you</Title>
          <Desc>We are so excited to have you!</Desc>
          <Berry />
        </Box>
      </Container>
      <Backdrop></Backdrop>
    </motion.div>
  );
}
