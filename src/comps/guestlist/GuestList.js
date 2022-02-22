import styled from "styled-components";
import useFirestore from "../firebase/hooks/useFirestore";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10% 25%;
`;

const List = styled.div`
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const Name = styled.div`
  width: 33%;
`;

const Email = styled.div`
  width: 33%;
  text-align: right;
`;

const Guests = styled.div`
  text-align: right;
`;

const Line = styled.div`
  border-top: 1px solid black;
  width: 100%;
  padding: 10px 0;
`;

const Total = styled.div`
  width: 100%;
  text-align: right;
  span {
    color: lightgrey;
  }
`;

function total(docs) {
  let count = 0;
  for (let i = 0; i < docs.length; i++) {
    count += parseInt(docs[i].guestNumber);
  }
  return count;
}

export default function GuestList() {
  const { docs } = useFirestore("guests");
  console.log(docs[0]);

  return docs.length ? (
    <Container>
      <List>
        {docs.map((guest, index) => (
          <Item key={guest.id}>
            <Name>{guest.name}</Name>
            <Email>{guest.email}</Email>
            <Guests>{guest.guestNumber}</Guests>
          </Item>
        ))}
      </List>
      <Line></Line>
      <Total>
        <span>total: </span>
        {total(docs)}
      </Total>
    </Container>
  ) : (
    <p>Loading....</p>
  );
}
