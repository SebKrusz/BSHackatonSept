// const wrapper = document.querySelector('main');
// const yesBtn = document.querySelector('.buttondance');

// const wrapperRect = wrapper.getBoundingClientRect();
// const buttondanceRect = yesBtn.getBoundingClientRect(); // Use yesBtn instead of buttondance

// yesBtn.addEventListener('mouseover', () => {
//    const i = Math.floor(Math.random() * (wrapperRect.width - buttondanceRect.width)) + 1;
//    const j = Math.floor(Math.random() * (wrapperRect.height - buttondanceRect.height)) + 1;

//    yesBtn.style.left = i + 'px';
//    yesBtn.style.top = j + 'px';
// });

////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById('toggle-button');
  let currentModeIndex = 0;
  const modes = [
      { name: "SUBMIT", className: "alert-message--countdown", action: Countdown },
      { name: "SUBMIT", className: "alert-message--question", action: Question },
      { name: "SUBMIT", className: "alert-message--question", action: Question2 },
      { name: "SUBMIT", className: "alert-message--question", action: Question3 },
      { name: "SUBMIT", className: "alert-message--question", action: Question4 },
      { name: "SUBMIT", className: "alert-message--question", action: Question5 },
      { name: "SUBMIT", className: "alert-message--countdown", action: Countdown2 },
      { name: "SUBMIT", className: "alert-message--countdown", action: AboutToRun }

  ];

  function createCustomAlert(className) {
      const customAlert = document.createElement("div");
      customAlert.id = "customAlert";
      customAlert.classList.add("custom-alert");

      const countdownText = document.createElement("div");
      countdownText.classList.add("countdown");
      countdownText.textContent = 5; 

      const alertMessage = document.createElement("div");
      alertMessage.classList.add("alert-message", className);
      alertMessage.textContent = "Error";
      alertMessage.style.display = "none"; 

      customAlert.appendChild(countdownText);
      customAlert.appendChild(alertMessage);
      document.body.appendChild(customAlert);

      return { countdownText, alertMessage };
  }

  function toggleAction() {
      const currentMode = modes[currentModeIndex];
      currentMode.action();
      updateButtonLabel(currentMode.name);
      currentModeIndex = (currentModeIndex + 1) % modes.length; 
  }

  function updateButtonLabel(modeName) {
      toggleButton.textContent = `${modeName}`;
  }

  function Countdown() {
      const { countdownText, alertMessage } = createCustomAlert("alert-message--countdown");
      const customAlert = countdownText.parentElement;

      customAlert.style.display = "block";

      let count = 5;
      countdownText.textContent = count;

      const countdownInterval = setInterval(function () {
          if (count > 1) {
              count--;
              countdownText.textContent = count;
          } else {
              clearInterval(countdownInterval);
              countdownText.style.display = "none";
              alertMessage.style.display = "block"; 

              setTimeout(() => {
                  customAlert.style.display = "none";
              }, 2000);
          }
      }, 1000);
  }

  function Question() {
    const { countdownText, alertMessage } = createCustomAlert("alert-message--question");
    const customAlert = countdownText.parentElement;

    customAlert.style.display = "block";
    countdownText.textContent = "Are you sure?";
    customAlert.classList.add("question-alert")

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.classList.add("question-button")

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.classList.add("question-button")

    yesButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: Yes";
    });

    noButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: No";
    });

    customAlert.appendChild(yesButton);
    customAlert.appendChild(noButton);
    }
  function Question2() {
    const { countdownText, alertMessage } = createCustomAlert("alert-message--question");
    const customAlert = countdownText.parentElement;

    customAlert.style.display = "block";
    countdownText.textContent = "Are you really sure?";
    customAlert.classList.add("question-alert")

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.classList.add("question-button")

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.classList.add("question-button")

    yesButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: Yes";
    });

    noButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: No";
    });

    customAlert.appendChild(yesButton);
    customAlert.appendChild(noButton);
  }

  function Question3() {
    const { countdownText, alertMessage } = createCustomAlert("alert-message--question");
    const customAlert = countdownText.parentElement;

    customAlert.style.display = "block";
    countdownText.textContent = "Are you really, really sure?";
    customAlert.classList.add("question-alert")

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.classList.add("question-button")

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.classList.add("question-button")

    yesButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: Yes";
    });

    noButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: No";
    });

    customAlert.appendChild(yesButton);
    customAlert.appendChild(noButton);
  }

  function Question4() {
    const { countdownText, alertMessage } = createCustomAlert("alert-message--question");
    const customAlert = countdownText.parentElement;

    customAlert.style.display = "block";
    countdownText.textContent = "Are you really, really, really sure? (final time i promise)";
    customAlert.classList.add("question-alert")

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.classList.add("question-button")

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.classList.add("question-button")

    yesButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: Yes";
    });

    noButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: No";
    });

    customAlert.appendChild(yesButton);
    customAlert.appendChild(noButton);
  }
  function Question5() {
    const { countdownText, alertMessage } = createCustomAlert("alert-message--question");
    const customAlert = countdownText.parentElement;

    customAlert.style.display = "block";
    countdownText.textContent = "Are you really, really, really, really sure? (I lied)";
    customAlert.classList.add("question-alert")

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.classList.add("question-button")

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.classList.add("question-button")

    yesButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: Yes";
    });

    noButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: No";
    });

    customAlert.appendChild(yesButton);
    customAlert.appendChild(noButton);
  }
  function Countdown2() {
    const { countdownText, alertMessage } = createCustomAlert("alert-message--countdown");
    const customAlert = countdownText.parentElement;

    customAlert.style.display = "block";

    let count = 5;
    countdownText.textContent = count;

    const countdownInterval = setInterval(function () {
        if (count > 1) {
            count--;
            countdownText.textContent = count;
        } else {
            clearInterval(countdownInterval);
            countdownText.style.display = "none";
            alertMessage.style.display = "block"; 

            setTimeout(() => {
                customAlert.style.display = "none";
            }, 2000);
        }
    }, 1000);
  }
  function AboutToRun() {
    const { text, alertMessage } = createCustomAlert("alert-message--runaway");
    const customAlert = text.parentElement;

    customAlert.style.display = "block";
    countdownText.textContent = "OMG it's running away running!!";
    customAlert.classList.add("question-alert")   
  }

  toggleButton.addEventListener("click", toggleAction);
});




