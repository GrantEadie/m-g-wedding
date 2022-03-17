import styled from "styled-components";
import { ReactComponent as MG } from "../../svgs/m&g.svg";
import { Link } from "react-router-dom";
import { List } from "phosphor-react";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
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
  position: absolute;
  display: flex;
  justify-content: flex-end;
  margin-top: 60px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    right: 0;
    margin-top: 60px;
    background: white;
    z-index: 998;
    border: 1px solid var(--tertiary);
  }
`;

const Item = styled.div`
  margin: 25px 50px;
  transition: all 0.2s ease;
  border-bottom: 1px solid transparent;
  a {
    color: var(--primary);
    text-decoration: none;
  }
  &:hover {
    border-bottom: 1px solid var(--primary);
  }
  @media only screen and (max-width: 800px) {
    margin: 25px 25px;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media only screen and (max-width: 800px) {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
`;

export default function Header() {
  const [menu, setMenu] = useState(window.innerWidth >= 800);

  return (
    <Container>
      <Logo>
        <MG />
      </Logo>

      <MobileMenu onClick={() => setMenu(!menu)}>
        <List size={32} weight="fill" />
      </MobileMenu>
      {menu && (
        <Categories>
          <Item>
            <Link to="/rsvp">rsvp</Link>
          </Item>
          <Item>
            <Link to="lodging">lodging</Link>
          </Item>
          <Item>
            <Link to="schedule">schedule</Link>
          </Item>
          <Item>
            <Link to="registry">registry</Link>
          </Item>
          <Item>
            <Link to="weekend">weekend</Link>
          </Item>
        </Categories>
      )}
    </Container>
  );
}
