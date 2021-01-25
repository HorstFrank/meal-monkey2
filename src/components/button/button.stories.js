import "./button.css";
import buttonSolid from "./button.html";
import buttonOutline from "./button-outline.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const withSolid = () => buttonSolid;
export const withOutline = () => buttonOutline;
