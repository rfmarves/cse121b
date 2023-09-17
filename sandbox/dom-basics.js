const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute('src', 'https://placeimg.com/200/200/animals');
newImage.setAttribute('alt', 'Animal image');
document.body.appendChild(newImage);

// const newDiv = document.createElement("div");
// newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
// document.body.appendChild(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = "<H2>CSE 121b</H2><P>Welcome to Javascript Language</P>";
document.body.appendChild(newSection);