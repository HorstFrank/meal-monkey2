export function createElement (tagName,props) {
  
  const element = document.createElement(tagName);
  Object.assign(element,props);
  
  // console.log(props) 

  return element;
}

