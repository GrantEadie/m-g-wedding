import styled from "styled-components";
import { registryItems } from "./items";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";

const Container = styled.div`
  position: relative;
`;

const Header = styled.div``;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  border: 1px solid white;
  margin-right: 20px;
  margin-top: 20px;
  width: 300px;
  min-height: 300px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemIcon = styled.div`
  svg {
    width: 4rem;
    height: 4rem;
    path {
      fill: var(--secondary);
    }
    opacity: 0.7;
  }
`;

const ItemTitle = styled.div`
  font-family: "Italiana", serif;
  font-size: 2rem;
  text-transform: capitalize;
  margin-bottom: 20px;
  display: flex;
`;

const ItemDesc = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  line-height: 25px;
  font-size: 0.8rem;
`;

const ItemPrice = styled.div``;

const Button = styled.div`
  font-family: "Italiana", serif;
  font-size: 1.2rem;
  text-align: center;
  padding: 10px;
  border: 1px solid var(--secondary);
  color: var(--secondary);
  cursor: pointer;
  &:hover {
    background: var(--secondary);
    color: white;
  }
`;

const Registry = () => {
  const [modal, showModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(registryItems[0])
  const handleSelect = (item) => {
    showModal(true)
    setSelectedItem(item)
  }
  return (
    <Container>
      {modal && <CheckoutModal setModal={showModal} selectedItem={selectedItem}/>}
      <Header></Header>
      <Body>
        {registryItems.map((item, i) => (
          <Item>
            <ItemTitle>
              {item.title} <ItemIcon>{item.icon}</ItemIcon>
            </ItemTitle>
            <ItemDesc>{item.desc}</ItemDesc>
            <ItemPrice>{item.price}</ItemPrice>
            <Button onClick={() => handleSelect(item)}>Donate</Button>
          </Item>
        ))}
      </Body>
    </Container>
  );
};

export default Registry;
