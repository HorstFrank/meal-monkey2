import "./form-input-text.css";
import "./form-verify.css";
import {formInput} from "./form-input-text.js";
import {formVerify} from "./form-verify.js";
// import buttonOutline from "./button-outline.html";

export default {
  title: "Components/input",
  parameters: { layout: "centered" },
};

export const formInputText = () => formInput('bla');
export const formVerifyExprt = () => formVerify();
// export const withOutline = () => buttonOutline;
