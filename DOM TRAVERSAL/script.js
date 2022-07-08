//event handling
const card = document.querySelectorAll(".card");
const closing = document.querySelectorAll(".close");

//loop close button
{
  for (let i = 0; i < closing.length; i++) {
    closing[i].onclick = function (event) {
      event.target.parentElement.style.display = "none";
    };
  }
}
{
  //loop using foreach
  closing.forEach((el) => {
    el.onclick = function (event) {
      event.taget.parentElement.style.display = "none";
    };
  });
}
