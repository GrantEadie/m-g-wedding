import styled from "styled-components";
import { provided, notProvided } from "./meals";

const Container = styled.div`
  display: flex;
  justify-content: center;
  
`;

const Card = styled.div`
  border: 1px solid white;
  background: 1px rgba(255, 255, 255, 0.8);
  min-width: 10rem;
  margin-right: 10px;
  padding: 20px;
  border-radius: 3px;
`;

const CardTitle = styled.div`
  font-family: "Italiana", serif;
  font-weight: bold;
  font-size: 26px;
`;

const CardDay = styled.div`
  padding: 10px;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 3px;
  margin: 20px 0;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
`;

const DayTitle = styled.div`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
`;

const CardMeal = styled.div`
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  display: flex;
  padding: 10px 0;
`;

const MealTitle = styled.div`
  min-width: 30%;
  font-weight: 500;
`;

const MealDesc = styled.div`
  min-width: 70%;
`;

const Food = () => {
  return (
    <Container>
      <Card>
        <CardTitle>Provided Meals</CardTitle>
        {provided.map((day, index) => (
          <CardDay key={index}>
            <DayTitle>{day.title}</DayTitle>
            {day.meals.map((meal, index) => (
              <CardMeal key={index}>
                <MealTitle>{meal.title}</MealTitle>
                <MealDesc>{meal.desc}</MealDesc>
              </CardMeal>
            ))}
          </CardDay>
        ))}
      </Card>
      <Card>
        <CardTitle>
          <i>Not</i> Provided Meals
        </CardTitle>
        {notProvided.map((day, index) => (
          <CardDay key={index}>
            <DayTitle>{day.title}</DayTitle>
            {day.meals.map((meal, index) => (
              <CardMeal key={index}>
                <MealTitle>{meal.title}</MealTitle>
                <MealDesc>{meal.desc}</MealDesc>
              </CardMeal>
            ))}
          </CardDay>
        ))}
      </Card>
    </Container>
  );
};

export default Food;
