const buttonEl = document.querySelector(".valdLedare");
let selectedPersonEl = document.querySelector(".pickOne");
let partiLedareEl = document.querySelector(".ledare");
let partiEl = document.querySelector(".parti");

(function () {
  buttonEl.addEventListener("click", () => {
    if (selectedPersonEl.value === "red") {
      document.getElementById("picture").src = "stefan.jpg";
    }
    if (selectedPersonEl.value === "blue") {
      document.getElementById("picture").src = "ulf.jpg";
    }
    if (selectedPersonEl.value === "green") {
      document.getElementById("picture").src = "annie.jpg";
    }
    if (selectedPersonEl.value === "yellow") {
      document.getElementById("picture").src = "jimmie.jpg";
    }
  });
})();
