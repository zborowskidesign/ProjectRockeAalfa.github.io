const element = document.querySelector(".door");
//const exit = document.querySelector(".exit");
const HtmlPage = document.querySelector(".MyHtmlSkill");
const JSPage = document.querySelector(".MyJSSkill");


element.addEventListener("click", toggleDoor);
function toggleDoor() {
  element.classList.toggle("doorOpen");
}

// exit.addEventListener('click',function()
// {
//    HtmlPage.style.display = 'none';
//    document.querySelector('.myHTML').style.display = 'none';
// })
