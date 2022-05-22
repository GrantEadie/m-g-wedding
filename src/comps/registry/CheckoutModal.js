import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { ReactComponent as Berry } from "../../svgs/simple-berry.svg";
import { ReactComponent as Venmo } from "../../svgs/venmo.svg";
import { X, Heart } from "phosphor-react";
import { useState } from "react";
import { projectFirestore, timestamp } from "../firebase/config";

const offWhite = "#f5f5f5";

const Backdrop = styled.div`
  opacity: 0.2;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

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
  font-size: 2rem;
  margin: 10px;
  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`;

const Desc = styled.div`
  margin: 10px;
  line-height: 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  width: 80%;
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

const SubTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
  font-size: 1rem;
  margin: 10px;
  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`;

const Input = styled.input`
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  margin: 10px 0px;
  font-family: "Montserrat", sans-serif;
  background: transparent;
  transition: all 1s ease;
  caret-color: white;
  min-width: 300px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;

  &:focus {
    outline: none;
    transform: translate(4%, -4%);
    box-shadow: -8px 6px 0px -1px rgba(255, 255, 255, 0.19);
    border: 2px solid var(--tertiary);
    border: 2px solid rgba(255, 255, 255, 0.1);
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 700;
  }
`;

const TextArea = styled.textarea`
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 15px;
  margin: 10px 0px;
  font-family: "Montserrat", sans-serif;
  caret-color: white;
  min-width: 300px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
  transition: all 1s ease;
  background: transparent;
  height: 100px;

  &:focus {
    outline: none;
    transform: translate(4%, -4%);
    box-shadow: -8px 6px 0px -1px rgba(255, 255, 255, 0.19);
    border: 2px solid var(--tertiary);
    border: 2px solid rgba(255, 255, 255, 0.1);
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 700;
  }
  ::-webkit-resizer {
    display: none;
  }
`;

const Icon = styled.div``;

const Submit = styled.div`
  padding: 10px 15px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  &:hover {
    background: rgba(255, 255, 255, 0.8);
    color: white;
  }
  text-align: center;
  margin: 40px 0;
  letter-spacing: 2px;
`;

const ThankYou = styled.div`
  padding: 10px 15px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.8);
  svg {
    width: 1rem;
    height: 1rem;
    padding: 3px;
    margin: 0;
  }
  margin: 40px 0;
`;

const PaymentBox = styled.div`
  display: flex;
  svg {
    width: 50%;
    height: 50%;
  }
`;

const Payment = styled.div`
  font-size: 10px;
  width: 33%;
  border: 1px solid white;
  padding: 10px;
  margin: 5px;
`;

const PaymentTitle = styled.div`
  font-weight: 900;
`;

const PaymentInfo = styled.div`
  font-family: "Montserrat", sans-serif;
  padding: 5px 0;
`;

export default function CheckoutModal({ setModal, selectedItem }) {
  const [info, setInfo] = useState({});
  const [thankYou, setThankYou] = useState(false);
  const handleAdd = () => {
    setThankYou(true);

    projectFirestore
      .collection("registry")
      .add({ ...info, createdAt: timestamp() });
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <Container
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <Box>
            <Exit onClick={() => setModal(false)}>
              <X size={5} />
            </Exit>
            <Title>We're doing this a bit different...</Title>
            <Desc>
              In order to avoid administration fees from other online-registry
              companies, we're asking our guests to make a gift through Venmo,
              Paypal, or by check. You can find all the relevant information
              below!
            </Desc>
            <PaymentBox>
              <Payment>
                <PaymentTitle>Venmo</PaymentTitle>
                <PaymentInfo>Grant: @grant-eadie</PaymentInfo>
                <PaymentInfo>Mollie: @Mollie-Hunt-1</PaymentInfo>
                <Venmo />
              </Payment>
              <Payment>
                <PaymentTitle>Paypal</PaymentTitle>
                <PaymentInfo>Grant: grantleadie@gmail.com</PaymentInfo>
                <PaymentInfo>Mollie: mollie.hunt77@gmail.com</PaymentInfo>
              </Payment>
              <Payment>
                <PaymentTitle>Check</PaymentTitle>
                <PaymentInfo>
                  Grant Eadie or Mollie Hunt: PO Box 545, Twisp WA 98856
                </PaymentInfo>
              </Payment>
            </PaymentBox>
            <Icon>{selectedItem.icon}</Icon>
            <SubTitle>
              Fill out this form below so we know who sent us gifts :)
            </SubTitle>
            <Input
              placeholder="Name"
              onBlur={(e) => setInfo({ ...info, name: e.target.value })}
            ></Input>
            <Input
              placeholder="Gift Amount"
              onBlur={(e) => setInfo({ ...info, gift: e.target.value })}
            ></Input>
            <TextArea
              placeholder="Notes"
              onBlur={(e) => setInfo({ ...info, notes: e.target.value })}
            ></TextArea>
            {thankYou ? (
              <ThankYou>
                Thank you <Heart size={10} />{" "}
              </ThankYou>
            ) : (
              <Submit onClick={() => handleAdd()}>Submit</Submit>
            )}

            <InfoContainer>
              Feel free to reach out if you have any questions.
              <Info>grantleadie@gmail.com | (509) 590-7955</Info>
            </InfoContainer>
            <Berry />
          </Box>
        </Container>
        <Backdrop></Backdrop>
      </motion.div>
    </AnimatePresence>
  );
}
