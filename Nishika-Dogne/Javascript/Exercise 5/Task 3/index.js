let box1 = document.getElementsByClassName("box1")[0];
let box2 = document.getElementsByClassName("box2")[0];
let box3 = document.getElementsByClassName("box3")[0];
let box4 = document.getElementsByClassName("box4")[0];

window.onload = () => {
  alert("page is fully loaded");

  box1.innerHTML += "Click me first";

  let index = 0;
  setInterval(function () {
    let colorBox2 = ["blue", "red", "yellow", "cyan"];
    let color_length = colorBox2.length;

    box2.style.backgroundColor = colorBox2[index];
    index++;
  }, 3000);
};

let colorBox4 = ["yellow", "pink", "violet", "green", "purple"];
box1.addEventListener("click", changeText);
let index = 0;
function changeText() {
  box3.innerHTML += "Oops Something Went Wrong! ";

  setInterval(function () {
    let color_len = colorBox4.length;
    box4.style.backgroundColor = colorBox4[index];
    index++;
  }, 5000);
}

document.addEventListener("keydown", function (event) {
  let currentColor = box4.style.backgroundColor;
  let colorIndex = colorBox4.indexOf(currentColor);
  console.log(colorIndex);
  if (event.keyCode == "38" || event.keyCode == 39)
    box4.style.backgroundColor = colorBox4[++colorIndex];
  else if (event.keyCode == "40" || event.keyCode == 37)
    box4.style.backgroundColor = colorBox4[--colorIndex];
});
