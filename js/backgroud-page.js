const about = document.getElementById("about");
const main = document.getElementById("main-section");
const bgcBg = document.querySelector(".bgc-container");
const cometa = document.querySelector(".cometa");

//Background First | Początek strony
window.onload = function () {
  let sky = document.querySelector("#sky");
  const rocketOne = document.querySelector("#rocket-1");
  const rocketTwo = document.querySelector("#rocket-2");
  const rocketThree = document.querySelector("#rocket-3");

  sky.addEventListener("mousemove", function (e) {
    var pageX = e.clientX - window.innerWidth / 2,
      pageY = e.clientY - window.innerHeight / 2;
    rocketOne.style.transform =
      "translateX(" +
      (5 + pageX / 100) +
      "%) translateY(" +
      (5 + pageY / 100) +
      "%)";
    rocketTwo.style.transform =
      "translateX(-" +
      (5 + pageX / 150) +
      "%) translateY(-" +
      (5 + pageY / 150) +
      "%)";
    rocketThree.style.transform =
      "translateX(-" +
      (5 + pageX / 200) +
      "%) translateY(" +
      (5 + pageY / 200) +
      "%)";
  });
};

function bgc() {
  about.style.display = "block";
  main.style.display = "none";
  bgcBg.style.display = "block";
}

const span = document.querySelector("span");
window.addEventListener("keypress", function (e) {
  if (e.keyCode === 48) {
    span.style.animationPlayState = "running";
    cometa.style.animationPlayState = "running";
  } else {
    return;
  }
  setTimeout("bgc()", 1000);
});
