import {roundPathCorners} from "./rounding.js";

export const svgTest = () => {

const x = '<path class="svg__path" d="M 10 10 H 90 V 90 H 10 L 10 10" />';

const y = roundPathCorners(x , 5, true);

// console.log(y);

return `
<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">

    ${y}

</svg>
`

}