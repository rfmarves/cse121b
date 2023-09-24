/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "René Marves";
let currentYear = 2023;
let profilePicture = "images/me.jpg"

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const favFoods = ["Kiupi", "Ceviche", "Shrimp", "Pizza"];
foodElement.innerHTML += `<br>${favFoods}`;
let foodItem = "Crêpes";
favFoods.push(foodItem);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;
// for (let i = 0; i < favFoods.length; i++) {
//     foodElement.innerHTML += `<br>${favFoods[i]}`;
//   }



