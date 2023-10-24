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

const applyFormat = () => {
    applyColors();
}

const applyColors = () => {
    let bgColor = document.querySelector("#bg_color_selection").value;
    let fontColor = document.querySelector("#font_color_selecction").value;
    document.querySelector("#quote_block").style.backgroundColor = bgColor;
    document.querySelector("#quote_block").style.color = fontColor;
}

// function calls on load
appendGenreList("#genre");
appendAuthorList("#author");
addRandomQuote("#quote_text", "#quote_author");

// event functions
document.getElementById("refresh_quote").addEventListener("click", () => {refreshQuote()});
document.getElementById("apply_button").addEventListener("click", () => {applyFormat()});