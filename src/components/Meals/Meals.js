import React from "react";
import AvailableMeals from "./AvailableMeals/AvailableMeals";
import MealsSummary from "./MealsSummary/MealsSummary";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
