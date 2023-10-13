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
      { name: "Countdown", className: "alert-message--countdown", action: startCountdownCountdown },
      { name: "Question", className: "alert-message--question", action: startCountdownQuestion },

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
      toggleButton.textContent = `Switch to ${modeName} Mode`;
  }

  function startCountdownCountdown() {
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

  function startCountdownQuestion() {
      const { countdownText, alertMessage } = createCustomAlert("alert-message--question");
      const customAlert = countdownText.parentElement;

      customAlert.style.display = "block";

      let count = 5;
      let remainingTries = 5;
      countdownText.textContent = `Are you sure? (${remainingTries} more times)`;

      function askAgain() {
          remainingTries--;
          countdownText.textContent = `Are you sure? (${remainingTries} more times)`;

          if (remainingTries <= 0) {
              clearInterval(countdownInterval);
              countdownText.style.display = "none";
              alertMessage.style.display = "block"; 

              setTimeout(() => {
                  customAlert.style.display = "none";
              }, 2000);
          }
      }

      const countdownInterval = setInterval(function () {
          if (count > 1) {
              count--;
              countdownText.textContent = `Are you sure? (${remainingTries} more times)`;
          } else {
              count = 5; 
              askAgain();
          }
      }, 1000);
  }

  toggleButton.addEventListener("click", toggleAction);
});




