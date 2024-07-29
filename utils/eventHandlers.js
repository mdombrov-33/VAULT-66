import { animateTextTyping } from "./textAnimation.js";
import { elementsLocation } from "./domSelects.js";

elementsLocation.registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  elementsLocation.welcomeText.classList.add("hidden");
  elementsLocation.loginButton.classList.add("hidden");
  elementsLocation.registerForm.classList.remove("hidden");
  elementsLocation.registerButton.classList.add("hidden");
});

elementsLocation.registerSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    !elementsLocation.registerName.value ||
    !elementsLocation.registerPassword.value ||
    !elementsLocation.registerPasswordConfirm.value ||
    elementsLocation.registerPassword.value !==
      elementsLocation.registerPasswordConfirm.value
  ) {
    return;
  }
  elementsLocation.specialForm.classList.remove("hidden");
  elementsLocation.registerForm.classList.add("hidden");
  elementsLocation.specialNameGreeting.classList.remove("hidden");
  elementsLocation.specialRemember.classList.remove("hidden");
  elementsLocation.specialRemainingNumber.classList.remove("hidden");
  elementsLocation.specialNameGreeting.textContent = `Hello, ${elementsLocation.registerName.value}`;

  animateTextTyping(
    elementsLocation.specialNameGreeting,
    elementsLocation.specialNameGreeting.textContent
  );
  animateTextTyping(
    elementsLocation.specialRemember,
    elementsLocation.specialRemember.textContent
  );
});

elementsLocation.specialSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  elementsLocation.specialForm.classList.add("hidden");
  elementsLocation.specialNameGreeting.classList.add("hidden");
  elementsLocation.specialRemember.classList.add("hidden");
  elementsLocation.welcomeText.classList.remove("hidden");
  elementsLocation.loginButton.classList.remove("hidden");
  elementsLocation.registerButton.classList.remove("hidden");
  animateTextTyping(
    elementsLocation.welcomeText,
    elementsLocation.welcomeText.textContent
  );
});

elementsLocation.loginButton.addEventListener("click", (e) => {
  elementsLocation.registerButton.classList.add("hidden");
  elementsLocation.welcomeText.classList.add("hidden");
  elementsLocation.loginButton.classList.add("hidden");
  elementsLocation.loginForm.classList.remove("hidden");
});

elementsLocation.loginSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  elementsLocation.navbarElements.classList.remove("hidden");
  elementsLocation.loginForm.classList.add("hidden");
});
