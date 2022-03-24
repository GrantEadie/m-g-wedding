import styled from "styled-components";

const Container = styled.div`
  flex-direction: column;
  width: auto;
  margin: 0px 20px;
  padding: 0px 5px;
  max-width: 500px;
  color: var(--secondary);
  line-height: 1.7rem;
`;

const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  padding: 15px 0;
`;

const Body = styled.div`
  padding: 20px 0;
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
    <>
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
    </>
  );
};

export default Lodging;
