import styled from "styled-components";
import { ReactComponent as Map } from "../../svgs/skalitude-map.svg";

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  background: var(--main);
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  font-family: "Italiana", serif;
  color: var(--secondary);
  max-width: 960px;
  border-radius: 3px;
`;

const Item = styled.div`
  padding: 40px;
  width: 33%;
  @media screen and (max-width: 800px) {
    width: unset;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
`;

const Desc = styled.div`
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  padding: 10px 0;
  line-height: 20px;

  ul {
    padding: 0 0px;
  }
  li {
    list-style-type: none;
  }
`;

const MapHolder = styled.div`
  max-width: 950px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 85%;
    height: 100%;
    path {
      fill: var(--tertiary);
    }
  }
  padding: 20px 0;
  background: var(--main);
  border-radius: 3px;
  margin: 20px 0;
`;

const QuickInfo = () => {
  return (
    <Holder>
      <Container>
        <Item>
          <Title>Dress Code</Title>
          <Desc>
            Summer casual. Guys: it's going to be hot, so don't worry about ties
            or a blazer. Ladies: you do you!
          </Desc>
        </Item>
        <Item>
          <Title>Ceremony Schedule</Title>
          <Desc>
            <div>June 24th, 2022</div>
            <ul>
              <li>4:00pm Guest Arrival</li>
              <li>5:30pm Ceremony</li>
              <li>6:30pm Dinner</li>
              <li>7:30pm Dancing</li>
            </ul>
          </Desc>
        </Item>
        <Item>
          <Title>Address</Title>
          <Desc>302 Smith Canyon Rd, Carlton, WA 98814</Desc>
        </Item>
      </Container>
      <MapHolder>
        <Map />
      </MapHolder>
    </Holder>
  );
};

export default QuickInfo;
