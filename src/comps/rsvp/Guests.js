import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0;
  justify-content: center;
  /* input {
    margin-right: 20px;
  } */
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
  @media only screen and (max-width: 800px) {
    width: 70%;
  }
`;

const Guests = ({ guestInfo, setGuestInfo }) => {
  return (
    <Container>
      <Input
        placeholder="# OF GUESTS (including yourself!)"
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
      <Input
        placeholder="# OF CHILDREN"
        name="children"
        onChange={(e) =>
          setGuestInfo({
            ...guestInfo,
            [e.target.name]: e.target.value.toLowerCase(),
          })
        }
        type="number"
        autoComplete="off"
      ></Input>
    </Container>
  );
};

export default Guests;
