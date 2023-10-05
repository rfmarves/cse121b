/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "René Marves",
    photo: "images/me.jpg",
    favoriteFoods: ["kiupi","ceviche", "shrimp","pizza"],
    hobbies: ["reading", "software development", "videogames", "3D printing", "making furniture"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({ place:"Guatemala", length: "29 years"});
myProfile.placesLived.push({ place:"Honduras", length: "10 years"});
myProfile.placesLived.push({ place:"Ecuador", length: "2 years"});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(element => {
    let newItem = document.createElement("li");
    newItem.textContent = element;
    document.querySelector("#favorite-foods").appendChild(newItem);
});

/* Hobbies List */
myProfile.hobbies.forEach(element => {
    let newItem = document.createElement("li");
    newItem.textContent = element;
    document.querySelector("#hobbies").appendChild(newItem);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(element => {
    let placeItem = document.createElement("dt");
    placeItem.textContent = element.place;
    let timeItem = document.createElement("dd");
    timeItem.textContent = element.length;
    document.querySelector("#places-lived").appendChild(placeItem);
    document.querySelector("#places-lived").appendChild(timeItem);
})

