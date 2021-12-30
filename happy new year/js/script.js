let letter = document.getElementById("letter");
let letter2 = document.getElementById("letter2");
let clickto = document.getElementById("clickto");
let by = document.getElementById("by");
let text = document.getElementById("text");

letter.onclick = function () {
  letter2.style.display = "none";
  clickto.style.display = "none";
  by.style.display = "none";
  text.style.display = "block";
};
