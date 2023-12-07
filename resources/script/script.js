const randButton = document.querySelector("button");

const randomFacts = [
  "I played football at Academy level for WestHam, Leyton Orient and Colchester⚽️",
  "I have a pet Cockerspaniel called Winnie🐶",
  "I swam for Redbridge county🏊‍♀️",
  "I played football for Hertfordshire County⚽️",
];

function randFunc() {
  randButton.innerHTML = randomFact(randomFacts);
}

const randomFact = (array) => {
  let random = Math.floor(Math.random() * randomFacts.length);
  let phrase = array[random];
  return phrase;

};

randButton.onclick = randFunc;

//-------------------Function for nav bar depending on width of screen -------------------
//When in mobile view, only the h1 appears until mouse enters then the nav bar appears. Once it leaves, it disappears again.

/*const navBar = document.querySelector('h1');
const navMenu = document.querySelector('ul');

//connecting it to media query

function navFunction(width) {
    if (width.matches) {
        navBar.onmouseenter = function() {
            navMenu.style.display = "block"
        }

        //hiding nav bar
        navMenu.onmouseleave = function() {
            navMenu.style.display = 'none';
        };
    } else {
            navMenu.style.display = '';  
}}

//create media query list object
let width = window.matchMedia('(max-width: 500px)');

//call listener function
navFunction(width);

//attach listener function on state changes
width.addEventListener("change", function() {
    navFunction(width);
});*/