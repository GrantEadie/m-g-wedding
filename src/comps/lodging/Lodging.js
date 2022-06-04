import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  flex-direction: column;
  width: auto;
  margin: 20px;
  padding: 80px;
  max-width: 500px;
  color: var(--secondary);
  line-height: 1.7rem;
  background: rgba(245, 245, 245, 0.95);
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 6rem;
  padding: 15px 0;
  margin: 40px 0;
  font-family: "Italiana", serif;
`;

const Body = styled.div`
  padding: 20px 0;
  font-family: "Montserrat", sans-serif;
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  a {
    border: 1px solid var(--secondary);
    color: var(--secondary);
    padding: 10px;
    text-decoration: none;
    margin: 3px;
    font-size: 14px;
  }
`;

const Lodging = () => {
  return (
    <Holder>
      <Container>
        <Title>Lodging</Title>
        <Body>
          There are more than enough camp spots at our venue for everyone.
          Trailers, tents, and vans are all welcome. You will have access to a
          large kitchen, bathrooms, and two showers. 
        </Body>
        <Body>
          If you are looking for accommodations in town, here are some options
          we recommend:
        </Body>
        <Options>
          <a href="http://www.twispriversuites.com/">Twisp River Suites</a>
          <a href="http://www.methowvalleyinn.com/">Methow Valley Inn</a>
          <a href="https://www.hotelriovista.com/">Rio Vista</a>
          <a href="https://riverrun-inn.com/">River Run Inn</a>
        </Options>
      </Container>
      <Container>
        <Title>Camping</Title>
        <Body>
          Camping? Maybe even for a few days!? Here are all your questions
          answered.
        </Body>
        <Body>
          Upon arrival at Skalitude please follow signs to camping, cars are
          welcome to car camp in the camping area. If you plan to not need your
          car for camping follow the sign for regular parking. People are
          welcome to set up camp no earlier than 4pm Wednesday.
        </Body>
        <Body>
          The venue charges us $20 per person per night for camping, ideally try
          to venmo Grant (@grant-eadie) or Mollie (@mollie-hunt-1) before you
          arrive as there is limited service at the venue.
        </Body>
        <Body>
          There are two full bathrooms off of the Lodge that campers are welcome
          to use - please avoid using the full bathroom during the wedding day
          between 11-2pm as the wedding party is hoping to have this space
          during these hours.
        </Body>
        <Body>
          Fresh water can be found in the outdoor kitchen. If you are staying
          most of the weekend you will need to plan some of your own meals
          (refer to the schedule as to which meals are provided). We can not
          offer you use of our limited fridge space so please bring coolers!
        </Body>
        <Body>
          There likely won't be any fires allowed during this time, please keep
          open flames to an absolutely minimum!
        </Body>
        <Body>Thank you guys, so excited to have you!</Body>
      </Container>
    </Holder>
  );
};

export default Lodging;
