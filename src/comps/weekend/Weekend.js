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
`;

const Title = styled.div`
  font-size: 2em;
  width: 100%;
  text-align: center;
  margin: 10px 0;
`;

const Desc = styled.div`
  font-size: 1.1em;
  text-align: center;
  margin: 10px 0;
  margin-bottom: 20px;
`;

const Item = styled.div`
  width: 100%;
  margin: 20px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 20px;
  border-radius: 10px;
`;

const ItemTitle = styled.div`
  font-weight: 900;
  border-bottom: 1px solid black;
  padding: 10px 0;
  margin: 10px 0;
  font-size: 1.2em;
`;

const ItemDesc = styled.div`
  font-style: italic;
  font-size: 0.85em;
`;

const ItemBody = styled.div`
  li {
    font-size: 0.85em;
    margin: 20px 0;
    list-style-type: circle;
    padding: 0 10px;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin: 40px 0;
  font-weight: 800;
`;

export default function Weekend() {
  return (
    <Holder>
      <Container>
        <Title>Weekend Info</Title>
        <Desc>
          Come camp and hangout with us!
          <br /> <i>Wednesday evening, June 21st - Sunday morning, June 26th</i>
        </Desc>
        <Item>
          <ItemTitle>I'm in! What should I expect?</ItemTitle>
          <ItemDesc>Gosh, much fun stuff!</ItemDesc>
          <ItemBody>
            <ul>
              <li>A keg! Or two!</li>
              <li>120 acres of forest and mountains to explore</li>
              <li>Plenty of camping</li>
              <li>A large outdoor kitchen, and an indoor kitchen!</li>
              <li>BATHROOMS</li>
              <li>A bangin soundsystem (that we can use AT ALL HOURS)</li>
              <li>A fantastic swimming (just down the road)</li>
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
              <li>A fantastic swimming (just down the road)</li>
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
