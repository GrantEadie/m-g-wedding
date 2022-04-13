import styled from "styled-components";
import { ReactComponent as MG } from "../../svgs/m&g.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const Logo = styled.div`
  svg {
    width: 5rem;
    height: 5rem;
    padding: 5px 25px;
    path {
      fill: white;
    }
  }
  position: absolute;
  left: 0;
  top: 0;
`;

export default function Header() {
  return (
    <Container>
      <Logo>
        <MG />
      </Logo>
    </Container>
  );
}
