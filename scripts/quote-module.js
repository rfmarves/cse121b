// module to take Quote Garden API quotes and lists
// module written by René Marves

const randomQuoteURL = "https://quote-garden.onrender.com/api/v3/quotes/random";
const genresURL = "https://quote-garden.onrender.com/api/v3/genres";
const authorsURL = "https://quote-garden.onrender.com/api/v3/authors";

// function for selected quote
// returns quote and author array
export const addQuote = async (quoteSelector, authorSelector, quoteAuthor, quoteGenre) => {
    let parametrizedURL = randomQuoteURL;
    if ((quoteAuthor == "random") && (quoteGenre == "random")) {
        // addRandomQuote(quoteSelector, authorSelector);
        parametrizedURL = randomQuoteURL;
    } else if ((quoteAuthor == "random") && (quoteGenre != "random")) {
        parametrizedURL = `${randomQuoteURL}?genre=${quoteGenre}`;
    }
    else if ((quoteAuthor != "random") && (quoteGenre == "random")) {
        parametrizedURL = `${randomQuoteURL}?author=${quoteAuthor}`;
    }
    else {
        parametrizedURL = `${randomQuoteURL}?genre=${quoteGenre}&author=${quoteAuthor}`;
    }
    console.log(`getting quote from ${parametrizedURL}`);
    const response = await fetch(parametrizedURL);
    if (response.ok) {
        console.log("quote fetched. Parsing...");
        let quoteJson = await response.json();
        console.log("quote parsed. Adding to page...");
        // console.log(quoteJson.data[0]);
        // console.log(quoteJson.data[0].quoteText);
        // console.log(quoteJson.data[0].quoteAuthor);
        let quoteText = "No quotes returned";
        let quoteAuthor = "";
        if (quoteJson.totalQuotes > 0) {
            quoteText = quoteJson.data[0].quoteText;
            quoteAuthor = quoteJson.data[0].quoteAuthor;
        }
        writeQuote(quoteSelector, authorSelector, quoteText, quoteAuthor);
    }
}

// function for random quote
// returns quote and author array
export const addRandomQuote = async (quoteSelector, authorSelector) => {
    console.log("getting random quote");
    const response = await fetch(randomQuoteURL);
    if (response.ok) {
        console.log("random quote fetched. Parsing...");
        let quoteJson = await response.json();
        console.log("quote parsed. Adding to page...");
        // console.log(quoteJson.data[0]);
        // console.log(quoteJson.data[0].quoteText);
        // console.log(quoteJson.data[0].quoteAuthor);
        let quoteText = quoteJson.data[0].quoteText;
        let quoteAuthor = quoteJson.data[0].quoteAuthor;
        writeQuote(quoteSelector, authorSelector, quoteText, quoteAuthor);
    }
}

const writeQuote = (quoteSelector, authorSelector, quoteText, quoteAuthor) => {
    console.log("writing quote");
    document.querySelector(quoteSelector).innerText = quoteText;
    document.querySelector(authorSelector).innerText = quoteAuthor;
    console.log("quote written");
}

// function for quote with defined author and genre
// returns quote and author array
export function getQuote(author, genre) {
    return ["quote", "author"];
}


// function to get author list
// appends author options to provided selector for SELECT element
export const appendAuthorList = async (selector) => {
    console.log("Fetching authors");
    const response = await fetch(authorsURL);
    if (response.ok) {
        console.log("Authors fetched, parsing json.");
        let authorListJson = await response.json();
        let authorList = authorListJson.data;
        console.log("Authors json parsed.");
        // console.log(authorList);
        addAuthors(selector, authorList);
    }
}

const addAuthors = async (selector, authorList) => {
    authorList.forEach(item => {
        let authorOpt = document.createElement("option");
        authorOpt.value = item;
        authorOpt.innerText = item;
        document.querySelector(selector).appendChild(authorOpt);
    });
    console.log("appended authors");
}

// function to get genre list
// appends genre options to provided selector for SELECT element
export const  appendGenreList = async (selector) => {
    console.log("fetching genres");
    const response = await fetch(genresURL);
    if (response.ok) {
        console.log("fetched genres, parsing Json");
        let genreListJson = await response.json();
        let genreList = genreListJson.data;
        console.log("Genres json parsed");
        // console.log(genreList);
        addGenres(selector, genreList);
    }
}

const addGenres = async (selector, genreList) => {
    genreList.forEach(item => {
        let genreOpt = document.createElement("option");
        genreOpt.value = item;
        genreOpt.innerText = item;
        document.querySelector(selector).appendChild(genreOpt)
    });
    console.log("appended genres");
}