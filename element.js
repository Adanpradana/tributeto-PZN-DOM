const container = document.getElementById("container");
const paragraph = document.getElementById("paragraph");
console.log(container.id);
console.log(container.className);

//remove element
paragraph.remove();

//create element
const newH2 = document.createElement("h2");
newH2.textContent = "this is new content";
container.appendChild(newH2);
