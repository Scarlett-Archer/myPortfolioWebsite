const randButton = document.querySelector("button");
const randomFacts = [
  "I played football at Academy level for WestHam, Leyton Orient and Colchester⚽️",
  "I have a pet Cockerspaniel called Winnie🐶",
  "I swam for Redbridge county🏊‍♀️",
  "I played football for Hertfordshire County⚽️",
];

function randFunc() {
  //document.getElementsByClassName("randomFacts").innerHTML = "HELLO";
  randButton.innerHTML = randomFact(randomFacts);
}

const randomFact = (array) => {
  let random = Math.floor(Math.random() * randomFacts.length);
  let phrase = array[random];
  return phrase;

  
};

randButton.onclick = randFunc;
