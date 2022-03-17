import styled from "styled-components";

const Input = styled.input`
  border: 2px solid transparent;
  border-bottom: 2px solid lightgrey;
  padding: 15px;
  margin: 30px 0px;
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
  width: 100%;
  @media only screen and (max-width: 800px) {
    width: 70%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

const NameEmail = ({ guestInfo, setGuestInfo }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default NameEmail;
