import styled from "styled-components";
import { ReactComponent as MG } from "../../svgs/m&g.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Logo = styled.div`
  svg {
    width: 5rem;
    height: 5rem;
    padding: 5px 25px;
    path {
      fill: black;
    }
  }
  position: absolute;
  left: 0;
  top: 0;
`;

const Categories = styled.div`
display: flex;
justify-content: center;
`

const Item = styled.div`
margin: 25px 50px;


`

export default function Header() {
  return (
    <Container>
      <Logo>
        <MG />
      </Logo>
    <Categories>
      <Item>rsvp</Item>
      <Item>lodging</Item>
      <Item>schedule</Item>
      <Item>registry</Item>
      <Item>weekend</Item>
    </Categories>
    </Container>
  );
}
