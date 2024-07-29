import {
  iconsLocation,
  specialInputsLocation,
  elementsLocation,
} from "./domSelects.js";

const specialList = [
  "strength",
  "perception",
  "endurance",
  "charisma",
  "intelligence",
  "agility",
  "luck",
];

let totalSpecial = 5;

export const assignSpecial = function () {
  Object.values(iconsLocation).forEach((icon) => {
    icon.addEventListener("click", (e) => {
      const clickedIcon = e.target;
      const clickedIconClassList = clickedIcon.classList;
      const specialHandler = function (special, input) {
        if (
          clickedIconClassList.contains(`${special}-plus`) &&
          totalSpecial >= 1 &&
          input.value < 10
        ) {
          totalSpecial--;
          input.value++;
          elementsLocation.specialRemainingNumber.textContent = totalSpecial;
        }

        if (
          clickedIconClassList.contains(`${special}-minus`) &&
          input.value > 1
        ) {
          totalSpecial++;
          input.value--;
          elementsLocation.specialRemainingNumber.textContent = totalSpecial;
        }
      };

      specialList.forEach((special) => {
        specialHandler(special, specialInputsLocation[`${special}Input`]);
      });
    });
  });
};
