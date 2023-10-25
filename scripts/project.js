// executes the Swatchy function for the color picker
Swatchy();

// import of quotes module
import { appendAuthorList, appendGenreList, addRandomQuote, addQuote } from "./quote-module.js";

const refreshQuote = () => {
    let authorField = document.getElementById("author");
    let authorName = authorField.options[authorField.selectedIndex].value;
    console.log(`authorName: ${authorName}`);
    let genreField = document.getElementById("genre");
    let genreName = genreField.options[genreField.selectedIndex].value;
    console.log(`genreName: ${genreName}`);
    addQuote("#quote_text", "#quote_author",authorName, genreName);
}

const writeQuote = (quoteSelector, authorSelector, quoteText, quoteAuthor) => {
    console.log("writing quote");
    document.querySelector(quoteSelector).innerText = quoteText;
    document.querySelector(authorSelector).innerText = quoteAuthor;
    console.log("quote written");
}

const applyFormat = () => {
    applyColors();
}

const applyColors = () => {
    let bgColor = document.querySelector("#bg_color_selection").value;
    let fontColor = document.querySelector("#font_color_selection").value;
    document.querySelector("#quote_block").style.backgroundColor = bgColor;
    document.querySelector("#quote_block").style.color = fontColor;
}

const showAuthor = () => {
    document.getElementById("show_author_block").classList.add("hidden");
    document.getElementById("author_block").classList.remove("hidden");
    appendAuthorList("#author");
}

function randomHSLA(){
    return `hsl(${~~(360 * Math.random())}, 75%,  72%)`
}

const getRandomColors = (backgroundElement, fontElement) => {
    let saturation1 = Math.round(Math.random()*100);
    let saturation2 = 0;
    if (saturation1 <= 50) {
        saturation2 = saturation1 + 50;
    } else {
        saturation2 = saturation1 - 50;
    }
    let luminosity1 = Math.round(Math.random()*100);
    let luminosity2 = 0;
    if (luminosity1 <= 50) {
        luminosity2 = luminosity1 + 50;
    } else {
        luminosity2 = luminosity1 -50;
    }
    let bgColor =  `hsl(${~~(360 * Math.random())}, ${saturation1}%,  ${luminosity1}%)`;
    let fontColor = `hsl(${~~(360 * Math.random())}, ${saturation2}%,  ${luminosity2}%)`;
    document.querySelector(backgroundElement).value = bgColor;
    document.querySelector(backgroundElement).style = `background-color: ${bgColor}; color: ${bgColor};`;
    document.querySelector(fontElement).value = fontColor;
    document.querySelector(fontElement).style = `background-color: ${fontColor}; color: ${fontColor};`;

}



// function calls on load
appendGenreList("#genre");
// appendAuthorList("#author"); commented out as it takes to long to load.
addRandomQuote("#quote_text", "#quote_author");
getRandomColors("#bg_color_selection","#font_color_selection");
applyFormat();

// event functions
document.getElementById("refresh_quote").addEventListener("click", () => {refreshQuote()});
document.getElementById("apply_button").addEventListener("click", () => {applyFormat()});
document.getElementById("show_author_button").addEventListener("click", () => {showAuthor()});
document.getElementById("random_color_button").addEventListener("click", () => {getRandomColors("#bg_color_selection","#font_color_selection")});