// "use strict";
import { elementsLocation } from "./domSelects.js";
import { textData } from "./textData.js";
//*Text is hardcoded for start page because if we use .textContent of element there is a big delay in rendering the text.
//*Can call animateTextTyping function separately when we need it with text content

export function animateTextOnStart() {
  const elements = [
    {
      element: elementsLocation.loginButton,
      text: textData.loginButton,
    },
    {
      element: elementsLocation.footer,
      text: textData.footer,
    },
    {
      element: elementsLocation.welcomeText,
      text: textData.welcomeText,
    },
    {
      element: elementsLocation.vaultName,
      text: textData.vaultNameText,
    },
    {
      element: elementsLocation.registerButton,
      text: textData.registerButton,
    },
  ];
  elements.forEach(({ element, text }) => {
    animateTextTyping(element, text);
  });
}

//* Use recursive function to animate text typing, calling it for every character in the string
export function animateTextTyping(element, text, i = 0) {
  //* Clear element before rerendering
  if (i === 0) {
    element.textContent = "";
  }

  //* Get first character at i[0] and render it on screen.
  element.textContent += text[i];

  //* Guard close to avoid errors where call stack is too large, which will cause crash
  //* Stop the execution of the function if we reached the end of the string
  if (i === text.length - 1) {
    return;
  }

  //* Call function again with + 1 to index to get next character
  setTimeout(() => {
    animateTextTyping(element, text, i + 1);
  }, 35);
}
