import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  font-family: "Montserrat", sans-serif;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: rgba(158, 90, 74, 0.9);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 12px;
  padding: 40px;
  border-radius: 10px;
  color: white;
`;

const Title = styled.div`
  font-size: 100px;
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
  background: rgba(0, 0, 0, 0.3);
  color: var(--main);
  backdrop-filter: blur(20px);
`;

const ItemTitle = styled.div`
  font-weight: 900;
  /* border-bottom: 1px solid black; */
  padding: 10px 0;
  margin: 10px 0;
  font-size: 1.2em;
  font-weight: 300;
`;

const ItemDesc = styled.div`
  font-style: italic;
  font-size: 0.85em;
  font-weight: 700;
`;

const ItemBody = styled.div`
  li {
    font-size: 0.85em;
    margin: 20px 0;
    list-style-type: none;
    padding: 10px 0;
    font-weight: 300;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    letter-spacing: 1px;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin: 40px 0;
  font-weight: 300;
  text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
  
`;

export default function Weekend() {
  return (
    <Holder>
      <Container>
        <Title>Weekend Info</Title>
        <Desc>
          <i>Wednesday, June 21st through Sunday, June 26th</i>
          <br />
          Camp and hangout with us and our family
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
              <li>Swimsuit</li>
              <li>
                Personal meals and snacks (not for the wedding day, we got you
                there)
              </li>
              <li>Maybe some special drinks for yourself? Or to share?</li>
              <li>Fun games that you love</li>
              <li>A costume</li>
              <li>Your wonderful self</li>
            </ul>
          </ItemBody>
        </Item>
        <Footer>
          Do not hesitate to call/text/email one of us with questions! <br />
          <br />
          Grant (509) 590 - 7955 | grantleadie@gmail.com <br />
          <br />
          Mollie (360) 255 - 3614 | mollie.hunt77@gmail.com
        </Footer>
      </Container>
    </Holder>
  );
}
