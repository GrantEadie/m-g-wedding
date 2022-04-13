import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  flex-direction: column;
  width: auto;
  margin: 0px 20px;
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
          large kitchen, bathrooms, and a sauna in the main lodge.
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
    </Holder>
  );
};

export default Lodging;
