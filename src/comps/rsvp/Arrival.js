import styled from "styled-components";
import moment from "moment";

const times = ["06/22/2022", "06/23/2022", "06/24/2022", "06/25/2022"];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px 0;
  align-items: center;
  @media only screen and (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Title = styled.div`
  padding: 20px 0;
  font-size: 2rem;
  font-weight: 900;
  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`;

const Options = styled.div``;

const Selection = styled.div`
  padding: 20px;
  font-size: 12px;
  border: 2px
    ${({ selected }) =>
      selected ? "solid var(--tertiary)" : "dotted lightgrey"};
  box-shadow: ${({ selected }) =>
    selected ? "-8px 6px 0px -1px rgba(0, 0, 0, 0.19)" : "none"};
  transform: ${({ selected }) => (selected ? " translate(2%, -2%) " : "null")};
  font-weight: 900;
  cursor: pointer;
  position: relative;
  margin: 20px;
`;

const Special = styled.div`
  position: absolute;
  top: -10%;
  right: -10%;
  font-size: 8px;

  background: white;

  padding: 5px 10px;
`;

const Arrival = ({ guestInfo, setGuestInfo }) => {
  return (
    <Container>
      <Title>When will you arrive?</Title>
      <Options>
        {times.map((date, index) => (
          <Selection
            key={index}
            selected={guestInfo.arrivalTime === date}
            onClick={(e) =>
              setGuestInfo({
                ...guestInfo,
                arrivalTime: date,
              })
            }
          >
            {moment(date).format("dddd,  MMMM Do")}
            {date === "06/24/2022" && <Special>wedding day!</Special>}
            {date === "06/25/2022" && <Special>party day!</Special>}
          </Selection>
        ))}
      </Options>
    </Container>
  );
};

export default Arrival;
