{
  //nodelist Static
  const list = document.querySelectorAll("li");

  const getMenu1 = document.getElementById("menu-1");
  const getMenu2 = document.getElementById("menu-2");

  // ccreate element LI
  const newLi = document.createElement("li");
  const newLi2 = document.createElement("li");
  getMenu1.appendChild(newLi);
  getMenu1.appendChild(newLi2);
  console.log(list);
}

{
  // nodelist Live ambil nodes berdasarkan
  const listLive = document.getElementById("li");
  const getMenu1 = document.getElementById("menu-1");
  const getMenu2 = document.getElementById("menu-2");
  const listing = getMenu1.childNodes;
  console.log(listing);

  const newL1 = document.createElement("li");
  const newL2 = document.createElement("li");
  getMenu1.appendChild(newL1);
  getMenu1.appendChild(newL2);
}
