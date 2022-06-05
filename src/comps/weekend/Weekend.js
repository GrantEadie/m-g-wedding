import styled from "styled-components";
import { ReactComponent as Map } from "../../svgs/skalitude-map.svg";

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  font-family: "Montserrat", sans-serif;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: var(--main);
  padding: 40px;
  border-radius: 3px;
  color: var(--secondary);
  margin-bottom: 40px;
`;

const Title = styled.div`
  font-size: 80px;
  width: 100%;
  text-align: center;
  font-family: "Italiana", serif;
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: 200;
  line-height: 2rem;
  i {
    font-size: 12px;
  }
`;

const Item = styled.div`
  width: 80%;
  margin: 20px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 40px;
  border-radius: 10px;
  color: var(--secondary);
`;

const ItemTitle = styled.div`
  font-weight: 900;
  /* border-bottom: 1px solid black; */
  padding: 10px 0;
  margin: 10px 0;
  font-size: 1.2em;
  font-weight: 700;
`;

const ItemDesc = styled.div`
  font-style: italic;
  font-size: 0.75em;
  font-weight: 300;
`;

const ItemBody = styled.div`
  ul {
    padding: 0;
  }
  li {
    font-size: 0.85em;
    margin: 10px 0;
    list-style-type: none;
    padding: 0px 0px;
    font-weight: 500;

    letter-spacing: 1px;
  }
`;

const Footer = styled.div`
  text-align: left;
  margin: 40px 0;
  font-weight: 500;
`;

const MapHolder = styled.div`
  width: 100%;
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
`;

export default function Weekend() {
  return (
    <Holder>
      <Container>
        <Title>Weekend Info</Title>
        <Desc>
          <i>Wednesday, June 22nd through Sunday, June 26th</i>
        </Desc>
        <Item>
          <ItemTitle>I'm in! What should I expect?</ItemTitle>
          <ItemDesc>Gosh, so much fun stuff!</ItemDesc>
          <ItemBody>
            <ul>
              <li>A keg! Or two!</li>
              <li>120 acres of forest and mountains to explore</li>
              <li>Plenty of camping</li>
              <li>A large outdoor kitchen, and an indoor kitchen!</li>
              <li>BATHROOMS</li>
              <li>A bangin soundsystem (that we can use AT ALL HOURS)</li>
              <li>A fantastic swimming hole (just down the road)</li>
              <li>Woodfire hottub</li>
              <li>Zipline</li>
              <li>ALL THE COOLEST PEOPLE EVER</li>
            </ul>
          </ItemBody>
        </Item>
        <Item>
          <ItemTitle>Wow, this sounds awesome. What should I bring?</ItemTitle>
          <ItemDesc>
            Wow, fantastic question, you are so great. Okay, so pretty much
            anything you’d bring to a music festival will be perfect for this
            venue.
          </ItemDesc>
          <ItemBody>
            <ul>
              <li>Tent/Sleeping quarters</li>
              <li>Blankets and bedding</li>
              <li>Towels</li>
              <li>Swimsuit</li>
              <li>
                Personal meals for Wednesday (breakfast, lunch, dinner),
                Thursday (breakfast, lunch, dinner), Saturday (lunch), Sunday
                (breakfast) - we've got you on Friday and Saturday (breakfast,
                dinner)!
              </li>
              <li>Maybe some special drinks for yourself? Or to share?</li>
              <li>Fun games that you love</li>
              <li>Walkie Talkies</li>
              <li>A COSTUME (this is very important)</li>
              <li>Your wonderful self</li>
            </ul>
          </ItemBody>
        </Item>
      </Container>
      <MapHolder>
        <Map />
      </MapHolder>
    </Holder>
  );
}
