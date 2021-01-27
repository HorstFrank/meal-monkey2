import "./card.css";
import cardMealOne from "./card_meal_01.html";
import cardMealTwo from "./card_meal_02.html";
import cardContainer from "./card-container.html";
// import buttonOutline from "./button-outline.html";

export default {
  title: "Components/Card",
  parameters: { layout: "fullscreen" },
};

export const MealOne = () => cardMealOne;
export const MealTwo = () => cardMealTwo;
export const cardCont = () => cardContainer;
// export const withOutline = () => buttonOutline;
