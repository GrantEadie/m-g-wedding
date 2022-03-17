import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  margin: 100px 0;
  @media only screen and (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Text = styled.div`
  font-size: 1rem;
  @media only screen and (max-width: 800px) {
    margin: 20px 0;
  }
`;

const SelectOption = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  width: 30%;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  box-shadow: ${({ selected }) =>
    selected ? "-8px 6px 0px -1px rgba(0, 0, 0, 0.19)" : "none"};
  border: ${({ selected }) =>
    selected ? "2px solid var(--tertiary)" : "2px solid transparent"};
  transform: ${({ selected }) => (selected ? "translate(2%, -2%)" : "none")};
  @media only screen and (max-width: 800px) {
    width: 50%;
  }
`;

const SelectOptionText = styled.div`
  margin-right: 20px;
`;

const SelectBox = styled.div`
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  background: ${({ selected }) => (selected ? "black" : "white")};
  border: 2px solid var(--tertiary);
  border-radius: 50%;
`;

const TextArea = styled.textarea`
  border: 2px solid transparent;
  border-bottom: 2px solid lightgrey;
  padding: 15px;
  margin: 30px 0px;
  font-family: "Montserrat", sans-serif;
  width: 80%;

  &:focus {
    outline: none;
    transform: translate(2%, -2%);
    box-shadow: -8px 6px 0px -1px rgba(0, 0, 0, 0.19);
    border: 2px solid var(--tertiary);
  }
  ::placeholder {
    color: lightgrey;
    font-weight: 900;
  }
  ::-webkit-resizer {
    display: none;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Input = styled.div`
  width: 50%;
  min-height: 40px;
  display: flex;
  justify-content: flex-end;
`;

const Camp = ({ guestInfo, setGuestInfo }) => {
  return (
    <Container>
      <Text>Do you plan to camp?</Text>
      <SelectOption
        onClick={() =>
          setGuestInfo({
            ...guestInfo,
            camp: true,
          })
        }
        selected={guestInfo.camp}
      >
        <SelectOptionText>You bet.</SelectOptionText>
        <SelectBox selected={guestInfo.camp}></SelectBox>
      </SelectOption>
      <SelectOption
        selected={!guestInfo.camp}
        onClick={() =>
          setGuestInfo({
            ...guestInfo,
            camp: false,
          })
        }
      >
        <SelectOptionText>Nope!</SelectOptionText>
        <SelectBox selected={!guestInfo.camp}></SelectBox>
      </SelectOption>
      <Input>
        {!guestInfo.camp && (
          <TextArea
            placeholder="Where are you staying?"
            onChange={(e) =>
              setGuestInfo({
                ...guestInfo,
                accommodation: e.target.value.toLowerCase(),
              })
            }
            type="number"
            autoComplete="off"
          ></TextArea>
        )}
      </Input>
    </Container>
  );
};

export default Camp;
