import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 40px 0;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
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
`;

const DietaryRestrictions = styled.div`
  display: flex;
  width: 60%;
  font-weight: 700;
  font-size: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

const DietText = styled.div`
  font-size: 1rem;
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
`;

const Input = styled.div`
  width: 50%;
  min-height: 40px;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
`;

function Dietary({ guestInfo, setGuestInfo }) {
  return (
    <Container>
      <DietaryRestrictions>
        <DietText>Dietary Restrictions?</DietText>
        <SelectOption
          onClick={() =>
            setGuestInfo({
              ...guestInfo,
              dietaryRestrictions: true,
            })
          }
          selected={guestInfo.dietaryRestrictions}
        >
          <SelectOptionText>Yes!</SelectOptionText>
          <SelectBox selected={guestInfo.dietaryRestrictions}></SelectBox>
        </SelectOption>
        <SelectOption
          selected={!guestInfo.dietaryRestrictions}
          onClick={() =>
            setGuestInfo({
              ...guestInfo,
              dietaryRestrictions: false,
            })
          }
        >
          <SelectOptionText>Nope!</SelectOptionText>
          <SelectBox selected={!guestInfo.dietaryRestrictions}></SelectBox>
        </SelectOption>
      </DietaryRestrictions>
      <Input>
        {guestInfo.dietaryRestrictions && (
          <TextArea
            placeholder="PLEASE ELABORATE ON YOUR DIETARY RESTRICTIONS"
            onChange={(e) =>
              setGuestInfo({
                ...guestInfo,
                dietaryInfo: e.target.value.toLowerCase(),
              })
            }
            type="number"
            autoComplete="off"
          ></TextArea>
        )}
      </Input>
    </Container>
  );
}

export default Dietary;
