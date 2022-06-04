import styled from "styled-components";
import useFirestore from "../firebase/hooks/useFirestore";
import { Trash } from "phosphor-react";
import { projectFirestore } from "../firebase/config";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.8);
`;

const Table = styled.table`
  border-collapse: collapse;
  tr,
  td {
    padding: 10px 20px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Button = styled.div`
  color: red;
  padding: 3px;
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const Header = styled.tr`
  background: grey;
  color: white;
`;

const Name = styled.td`
  font-weight: 900;
  text-transform: capitalize;
`;

const Totals = styled.div`
  padding: 20px;
  font-size: 30px;
  width: 100%;
`;

const TotalArrivals = styled.div`
  display: flex;
  font-size: 12px;
  div {
    margin-right: 10px;
  }
`;

function total(docs) {
  let count = 0;
  for (let i = 0; i < docs.length; i++) {
    count += parseInt(
      docs[i].guestNumber <= 0 || !docs[i].guestNumber ? 1 : docs[i].guestNumber
    );
  }
  return count;
}

function campers(docs) {
  let count = 0;
  for (let i = 0; i < docs.length; i++) {
    if (docs[i].camp) {
      count += parseInt(
        docs[i].guestNumber <= 0 || !docs[i].guestNumber
          ? 1
          : docs[i].guestNumber
      );
    }
  }
  return count;
}

function arrivalDay(docs) {
  let count = [];
  for (let i = 0; i < docs.length; i++) {
    if (count.filter((e) => e.date === docs[i].arrivalTime).length <= 0) {
      count.push({ date: docs[i].arrivalTime, amount: 1 });
    } else {
      count[
        count.indexOf(count.filter((e) => e.date === docs[i].arrivalTime)[0])
      ].amount += parseInt(
        docs[i].guestNumber <= 0 || !docs[i].guestNumber
          ? 1
          : docs[i].guestNumber
      );
    }
  }
  return count;
}

export default function GuestList() {
  const { docs } = useFirestore("guests");

  const deleteGuest = (id) => {
    if (prompt("You sure?") === "yes") {
      projectFirestore.collection("guests").doc(id).delete();
    }
  };

  console.log(arrivalDay(docs));

  return docs.length ? (
    <Container>
      <Table>
        <Totals>
          Total: {total(docs)} | Campers: {campers(docs)}
          <TotalArrivals>
            {arrivalDay(docs).map((day, index) => (
              <div>
                {day.date ? day.date : "unspecified"}: {day.amount}
              </div>
            ))}
          </TotalArrivals>
        </Totals>
        <tbody>
          <Header>
            <td>Name</td>
            <td>Email</td>
            <td>RSVP</td>
            <td>Guests</td>
            <td>Children</td>
            <td>Arrival</td>
            <td>Camping</td>
            <td>Diet</td>
            <td>Diet Info</td>
            <td>Accommodation</td>
            <td>delete</td>
          </Header>
          {docs.map((guest) => (
            <tr key={guest.id}>
              <Name>{guest.name}</Name>
              <td>{guest.email}</td>
              <td>{guest.rsvp ? "yes" : "no"}</td>
              <td>
                {guest.guestNumber <= 0 || !guest.guestNumber
                  ? 1
                  : guest.guestNumber}
              </td>
              <td>
                {guest.children < 0 || !guest.children ? "" : guest.children}
              </td>
              <td>{guest.arrivalTime}</td>
              <td>{guest.camp ? "yes" : "no"}</td>
              <td>{guest.dietaryRestrictions ? "yes" : "no"}</td>
              <td>{guest.dietaryInfo}</td>
              <td>{guest.accommodation}</td>
              <td>
                <Button>
                  <Trash onClick={() => deleteGuest(guest.id)} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  ) : (
    <p>Loading....</p>
  );
}
