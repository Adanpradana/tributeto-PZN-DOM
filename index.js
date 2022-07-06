const header = document.getElementById("header");
console.log(header);
const second = document.getElementById("dua");
//nodes component
const component = header.childNodes;
console.log(component);
console.log(second.previousElementSibling);
console.log(second.nextElementSibling);
console.log(second.textContent);

//node method
header.removeChild(second);