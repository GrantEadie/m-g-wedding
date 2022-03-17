import styled from "styled-components";

const SelectComing = styled.div`
  display: flex;
  width: 100%;
  font-weight: 700;
  font-size: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SelectText = styled.div`
  margin: 40px 0;
`;

const SelectOption = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
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

const Selection = styled.div`
  width: 50%;
  @media only screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Coming = ({ guestInfo, setGuestInfo }) => {
  return (
    <SelectComing>
      <SelectText>RSVP:</SelectText>
      <Selection>
        <SelectOption
          onClick={() =>
            setGuestInfo({
              ...guestInfo,
              rsvp: true,
            })
          }
          selected={guestInfo.rsvp}
        >
          <SelectOptionText>Yep, we'll be there!</SelectOptionText>
          <SelectBox selected={guestInfo.rsvp}></SelectBox>
        </SelectOption>
        <SelectOption
          selected={!guestInfo.rsvp}
          onClick={() =>
            setGuestInfo({
              ...guestInfo,
              rsvp: false,
            })
          }
        >
          <SelectOptionText>
            Unfortunately, we won't be able to make it.
          </SelectOptionText>
          <SelectBox selected={!guestInfo.rsvp}></SelectBox>
        </SelectOption>
      </Selection>
    </SelectComing>
  );
};

export default Coming;
