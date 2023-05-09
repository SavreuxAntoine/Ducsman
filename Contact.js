var modal = document.getElementById("myModal"); // Le modal
var header = document.getElementById("header"); // Le header
var footer = document.getElementById("footer"); // Le footer

var btn = document.getElementById("btnContact");

var span = document.getElementsByClassName("fermer")[0];

btn.onclick = function () {
  modal.style.display = "block";

  header.classList.add("blur");
  footer.classList.add("blur");
};

span.onclick = function () {
  modal.style.display = "none";
  header.classList.remove("blur");
  footer.classList.remove("blur");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    header.classList.remove("blur");
    footer.classList.remove("blur");
  }
};
