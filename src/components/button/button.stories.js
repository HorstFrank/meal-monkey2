import "./button.css";
import "./tr-button.css";
import buttonSolid from "./button.html";
import buttonTaschenrecher from "./tr-button.html";
import buttonOutline from "./button-outline.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const withSolid = () => buttonSolid;
export const withTaschenrechner = () => buttonTaschenrecher;
export const withOutline = () => buttonOutline;
