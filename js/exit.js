const escape = document.querySelector(".esc");

function getAway() {
  setTimeout(function () {
    window.location.reload(true);
  }, 1000);
}

escape.addEventListener("click", getAway);
