// Global variables.
const buttonEl = document.querySelector(".valdLedare");
selectedPersonEl = document.querySelector(".pickOne");
partiLedareEl = document.querySelector(".ledare");
partiEl = document.querySelector(".parti");
informationEl = document.querySelector(".information");

// Immediatly Invoked Function Expression.
(function () {
  // Event listener for selecting correct image.
  buttonEl.addEventListener("click", () => {
    if (selectedPersonEl.value === "red") {
      document.getElementById("picture").src = "stefan.jpg";
      partiLedareEl.innerText = "Stefan löfven";
      partiEl.innerText = "Socialdemokraterna";
    }
    if (selectedPersonEl.value === "blue") {
      document.getElementById("picture").src = "ulf.jpg";
      partiLedareEl.innerText = "Ulf Kristersson";
      partiEl.innerText = "Moderaterna";
    }
    if (selectedPersonEl.value === "green") {
      document.getElementById("picture").src = "annie.jpg";
      partiLedareEl.innerText = "Annie Lööf";
      partiEl.innerText = "Centerpartiet";
    }
    if (selectedPersonEl.value === "yellow") {
      document.getElementById("picture").src = "jimmie.jpg";
      partiLedareEl.innerText = "Jimmie Åkesson";
      partiEl.innerText = "Sverigedemokraterna";
    }
    changeColor(selectedPersonEl.value);
  });

  // Event listener for textcolor.
  informationEl.addEventListener("colorChanged", function (e) {
    informationEl.style.color = e.detail.textColor;
    partiEl.style.color = e.detail.textColor;
    partiLedareEl.style.color = e.detail.textColor;
  });

  // CustomEvent for changing color.
  function changeColor(c) {
    const event = new CustomEvent("colorChanged", {
      detail: {
        textColor: c,
      },
    });
    informationEl.dispatchEvent(event);
  }
})();
