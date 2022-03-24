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
  border-top: 1px solid black;
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
  font-weight: 900;
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

const Schedule = () => {
  return (
    <Outer>
      <Container>
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
