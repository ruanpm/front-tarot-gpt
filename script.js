const tarotCards = [
  {id: 1, name: "The Fool", url: "9/90/RWS_Tarot_00_Fool"},
  {id: 2, name: "The Magician", url: "d/de/RWS_Tarot_01_Magician"},
  {id: 3, name: "The High Priestess", url: "8/88/RWS_Tarot_02_High_Priestess"},
  {id: 4, name: "The Empress", url: "d/d2/RWS_Tarot_03_Empress"},
  {id: 5, name: "The Emperor", url: "c/c3/RWS_Tarot_04_Emperor"},
  {id: 6, name: "The Hierophant", url: "8/8d/RWS_Tarot_05_Hierophant"},
  {id: 7, name: "The Lovers", url: "3/3a/TheLovers"},
  {id: 8, name: "The Chariot", url: "9/9b/RWS_Tarot_07_Chariot"},
  {id: 9, name: "Strength", url: "f/f5/RWS_Tarot_08_Strength"},
  {id: 10, name: "The Hermit", url: "4/4d/RWS_Tarot_09_Hermit"},
  {id: 11, name: "Wheel of Fortune", url: "3/3c/RWS_Tarot_10_Wheel_of_Fortune"},
  {id: 12, name: "Justice", url: "e/e0/RWS_Tarot_11_Justice"},
  {id: 13, name: "The Hanged Man", url: "2/2b/RWS_Tarot_12_Hanged_Man"},
  {id: 14, name: "Death", url: "d/d7/RWS_Tarot_13_Death"},
  {id: 15, name: "Temperance", url: "f/f8/RWS_Tarot_14_Temperance"},
  {id: 16, name: "The Devil", url: "5/55/RWS_Tarot_15_Devil"},
  {id: 17, name: "The Tower", url: "5/53/RWS_Tarot_16_Tower"},
  {id: 18, name: "The Star", url: "d/db/RWS_Tarot_17_Star"},
  {id: 19, name: "The Moon", url: "7/7f/RWS_Tarot_18_Moon"},
  {id: 20, name: "The Sun", url: "1/17/RWS_Tarot_19_Sun"},
  {id: 21, name: "Judgment", url: "d/dd/RWS_Tarot_20_Judgement"},
  {id: 22, name: "The World", url: "f/ff/RWS_Tarot_21_World"},
  {id: 23, name: "Ace of Wands", url: "1/11/Wands01"},
  {id: 24, name: "Two of Wands", url: "0/0f/Wands02"},
  {id: 25, name: "Three of Wands", url: "f/ff/Wands03"},
  {id: 26, name: "Four of Wands", url: "a/a4/Wands04"},
  {id: 27, name: "Five of Wands", url: "9/9d/Wands05"},
  {id: 28, name: "Six of Wands", url: "3/3b/Wands06"},
  {id: 29, name: "Seven of Wands", url: "e/e4/Wands07"},
  {id: 30, name: "Eight of Wands", url: "6/6b/Wands08"},
  {id: 31, name: "Nine of Wands", url: "4/4d/Tarot_Nine_of_Wands"},
  {id: 32, name: "Ten of Wands", url: "0/0b/Wands10"},
  {id: 33, name: "Page of Wands", url: "6/6a/Wands11"},
  {id: 34, name: "Knight of Wands", url: "1/16/Wands12"},
  {id: 35, name: "Queen of Wands", url: "0/0d/Wands13"},
  {id: 36, name: "King of Wands", url: "c/ce/Wands14"},
  {id: 37, name: "Ace of Cups", url: "3/36/Cups01"},
  {id: 38, name: "Two of Cups", url: "f/f8/Cups02"},
  {id: 39, name: "Three of Cups", url: "7/7a/Cups03"},
  {id: 40, name: "Four of Cups", url: "3/35/Cups04"},
  {id: 41, name: "Five of Cups", url: "d/d7/Cups05"},
  {id: 42, name: "Six of Cups", url: "1/17/Cups06"},
  {id: 43, name: "Seven of Cups", url: "a/ae/Cups07"},
  {id: 44, name: "Eight of Cups", url: "6/60/Cups08"},
  {id: 45, name: "Nine of Cups", url: "2/24/Cups09"},
  {id: 46, name: "Ten of Cups", url: "8/84/Cups10"},
  {id: 47, name: "Page of Cups", url: "a/ad/Cups11"},
  {id: 48, name: "Knight of Cups", url: "f/fa/Cups12"},
  {id: 49, name: "Queen of Cups", url: "6/62/Cups13"},
  {id: 50, name: "King of Cups", url: "0/04/Cups14"},
  {id: 51, name: "Ace of Swords", url: "1/1a/Swords01"},
  {id: 52, name: "Two of Swords", url: "9/9e/Swords02"},
  {id: 53, name: "Three of Swords", url: "0/02/Swords03"},
  {id: 54, name: "Four of Swords", url: "b/bf/Swords04"},
  {id: 55, name: "Five of Swords", url: "2/23/Swords05"},
  {id: 56, name: "Six of Swords", url: "2/29/Swords06"},
  {id: 57, name: "Seven of Swords", url: "3/34/Swords07"},
  {id: 58, name: "Eight of Swords", url: "a/a7/Swords08"},
  {id: 59, name: "Nine of Swords", url: "2/2f/Swords09"},
  {id: 60, name: "Ten of Swords", url: "d/d4/Swords10"},
  {id: 61, name: "Page of Swords", url: "4/4c/Swords11"},
  {id: 62, name: "Knight of Swords", url: "b/b0/Swords12"},
  {id: 63, name: "Queen of Swords", url: "d/d4/Swords13"},
  {id: 64, name: "King of Swords", url: "3/33/Swords14"},
  {id: 65, name: "Ace of Pentacles", url: "f/fd/Pents01"},
  {id: 66, name: "Two of Pentacles", url: "9/9f/Pents02"},
  {id: 67, name: "Three of Pentacles", url: "4/42/Pents03"},
  {id: 68, name: "Four of Pentacles", url: "3/35/Pents04"},
  {id: 69, name: "Five of Pentacles", url: "9/96/Pents05"},
  {id: 70, name: "Six of Pentacles", url: "a/a6/Pents06"},
  {id: 71, name: "Seven of Pentacles", url: "6/6a/Pents07"},
  {id: 72, name: "Eight of Pentacles", url: "4/49/Pents08"},
  {id: 73, name: "Nine of Pentacles", url: "f/f0/Pents09"},
  {id: 74, name: "Ten of Pentacles", url: "4/42/Pents10"},
  {id: 75, name: "Page of Pentacles", url: "e/ec/Pents11"},
  {id: 76, name: "Knight of Pentacles", url: "d/d5/Pents12"},
  {id: 77, name: "Queen of Pentacles", url: "8/88/Pents13"},
  {id: 78, name: "King of Pentacles", url: "1/1c/Pents14"}
];

async function generateReading() {
  showSpinner(true);

  const generateButton = document.getElementById("generateButton");
  generateButton.disabled = true;


  const readingContainer = document.getElementById("reading");
  readingContainer.innerHTML = "";

  const availableCards = [...tarotCards];
  const selectedCards = [];

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const randomCard = availableCards[randomIndex];

    availableCards.splice(randomIndex, 1);
    selectedCards.push(randomCard);
  }

  // Get the purpose input value
  const purposeInput = document.getElementById("purpose");
  const purpose = purposeInput.value;


  // Send GET request to the backend API
  const response = await fetch(`https://back-tarot-gpt.vercel.app/reading?cards=${JSON.stringify(selectedCards)}&purpose=${encodeURIComponent(purpose)}`);
  const data = await response.json(); // Assuming the API returns a JSON object with card meanings and explanation text

  for (let i = 0; i < selectedCards.length; i++) {

    const cardData = selectedCards[i];
    const cardMeaning = data.cardMeanings[i];

    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("p");
    cardTitle.textContent = `Card ${i + 1}: #${cardData.id} - ${cardData.name}`;
    card.appendChild(cardTitle);

    const cardImage = document.createElement("img");
    cardImage.src = `https://upload.wikimedia.org/wikipedia/commons/${cardData.url}.jpg`;
    card.appendChild(cardImage);

    const cardMeaningElement = document.createElement("p");
    cardMeaningElement.textContent = cardMeaning.exaplanationText; // Use the meaning from the API response
    card.appendChild(cardMeaningElement);

    readingContainer.appendChild(card);
  }

  // Show the explanation on the screen
  const explanationContainer = document.getElementById("explanation");
  explanationContainer.innerHTML = data.explanationText;

  showSpinner(false);
  generateButton.disabled = false;

  showHeader2(true);
}


function showSpinner(visible) {
  const spinner = document.getElementById("spinner");
  spinner.style.display = visible ? "block" : "none";
}

function showHeader2(visible) {
  const header2 = document.getElementById("header2");
  header2.style.display = visible ? "block" : "none";
}
