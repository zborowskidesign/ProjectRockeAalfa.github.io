const element = document.querySelector(".door");
const HtmlPage = document.querySelector(".MyHtmlSkill");
const JSPage = document.querySelector(".MyJSSkill");

element.addEventListener("click", toggleDoor);
function toggleDoor() {
  element.classList.toggle("doorOpen");
}
