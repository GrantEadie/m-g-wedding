import styled from "styled-components";

const Container = styled.div`
  transition: all 0.2s ease;
  padding: 20px;
  width: 10%;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  color: black;
  margin: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border: 1px solid lightgrey;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px;
  }
`;

const Body = styled.div``;

const Title = styled.div`
  padding: 10px;
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
