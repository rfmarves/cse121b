/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = {};

/* async displayTemples Function */

const displayTemples = (temples) => {
    console.log(temples);
    temples.forEach(element => {
        let article = document.createElement("article");
        let heading = document.createElement("h3");
        heading.textContent = element.templeName;
        let templeImg = document.createElement("img");
        templeImg.src = element.imageUrl;
        templeImg.alt = element.location;
        article.appendChild(heading);
        article.appendChild(templeImg);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const  getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = (temples) =>  {
    reset();
    let element = document.getElementById("sortBy");
    let filter = element.options[element.selectedIndex].value;
    let filteredTemples = {};
    switch (filter) {
        case "utah":
            filteredTemples = temples.filter( (temple) => temple.location.toLowerCase().includes("utah"));
            break;
        case "notutah":
            filteredTemples = temples.filter( (temple) => !temple.location.toLowerCase().includes("utah"));
            break;
        case "older":
            // filteredTemples = temples.filter( (temple) => parseInt(temple.dedicated.substring(0,4)) < 1950);
            filteredTemples = temples.filter( (temple) => new Date(temple.dedicated) < new Date(1950,0,1));
            break;
        case "all":
            filteredTemples = temples;
        default:
            break;
     }
     displayTemples(filteredTemples);
}
// console.log(templeList);
getTemples();

/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => {sortBy(templeList)});