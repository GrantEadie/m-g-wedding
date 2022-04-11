import styled from "styled-components";

const Container = styled.div`
  transition: all 0.3s ease;
  padding: 20px;
  
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  color: black;
  margin: 10px;
  border: 1px solid rgb(240, 240, 240);
  cursor: pointer;
  min-height: 300px;

  &:hover {
    border: 1px solid rgb(240, 240, 240);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.45) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.4) 0px 30px 60px -30px;
  }
`;

const Body = styled.div``;

const Title = styled.div`
  color: black;
`;

const Card = ({ item, redirectToCheckout, isLoading }) => {
  return (
    <Container onClick={redirectToCheckout}>
      <Body>
        <Title>{isLoading ? "Loading..." : item.title}</Title>
      </Body>
    </Container>
  );
};

export default Card;
