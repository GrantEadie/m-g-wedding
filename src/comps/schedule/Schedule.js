import styled from "styled-components";
import { schedules } from "./schedules";

const Outer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 500px;
`;

const Day = styled.div`
  padding: 40px 20px;
  border-top: 1px solid var(--primary);
  color: var(--primary);
  background: ${({ bg }) => (bg === "friday" ? "#f0f6ff" : "transparent")};
`;

const DayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.05rem;
  font-family: "Montserrat", sans-serif;
  padding: 20px 0;
  align-items: center;
`;

const DayTitle = styled.div`
  font-weight: 800;
  font-size: 20px;
`;

const DayDate = styled.div`
  font-size: 12px;
`;

const DayDesc = styled.div`
  font-size: 12px;
`;

const Item = styled.div`
  padding: 10px 0;
  display: flex;
  line-height: 1.7rem;
`;

const ItemTime = styled.div`
  padding-right: 10px;
  min-width: 20%;
`;

const ItemTitle = styled.div``;

const Header = styled.div`
  padding: 40px;
  background: var(--secondary);
  color: white;
  border-radius: 10px;
  box-shadow: -15px 15px 46px -20px #686868;

  margin-bottom: 80px;
`;

const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 0 30px;
`;

const Body = styled.div``;

const Date = styled.div`
  text-align: center;
  padding-top: 40px;
  font-weight: 900;
  font-style: italic;
`;

const PSA = styled.div`
  text-align: center;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  background: var(--primary);
  color: white;
  border-radius: 5px 5px 0px 0px ;
`;

const Schedule = () => {
  return (
    <Outer>
      <Container>
        <Header>
          <Title>WEDDING DAY SCHEDULE</Title>
          <Date>Friday, June 24th 2022</Date>
          <Time>
            <Body>Guests Arrive</Body>
            <Body>4:00pm</Body>
          </Time>
          <Time>
            <Body>Ceremony</Body>
            <Body>6:00pm</Body>
          </Time>
          <Time>
            <Body>Dinner</Body>
            <Body>7:00pm</Body>
          </Time>
          <Time>
            <Body>Dancing</Body>
            <Body>8:30pm</Body>
          </Time>
        </Header>
        <PSA>full weekend schedule</PSA>
        {schedules.map((day, index) => (
          <Day key={index} bg={day.title}>
            <DayHeader>
              <DayTitle>{day.title}</DayTitle> <DayDate>{day.date}</DayDate>{" "}
              <DayDesc>{day.desc}</DayDesc>
            </DayHeader>
            {day.items.map((item, index) => (
              <Item key={index}>
                <ItemTime>{item.time}</ItemTime>
                <ItemTitle>{item.title}</ItemTitle>
              </Item>
            ))}
          </Day>
        ))}
      </Container>
    </Outer>
  );
};

export default Schedule;
