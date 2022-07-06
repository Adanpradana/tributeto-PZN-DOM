const image = document.getElementById("logo");

const source = document.createAttribute("src");
source.value = "https://www.programmerzamannow.com/img/pzn.png";
image.setAttributeNode(source);

//cara kedua

image.setAttribute("src", "https://www.programmerzamannow.com/img/pzn.png");
