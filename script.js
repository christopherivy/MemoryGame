const gameContainer = document.getElementById("game"); //this is the div
const log = console.log;
const COLORS = [
	"red",
	"blue",
	"green",
	"orange",
	"purple",
	"red",
	"blue",
	"green",
	"orange",
	"purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
	for (let color of colorArray) {
		// create a new div
		const newDiv = document.createElement("div");

		// give it a class attribute for the value we are looping over
		newDiv.classList.add(color);

		// call a function handleCardClick when a div is clicked on
		newDiv.addEventListener("click", handleCardClick);

		// append the div to the element with an id of game
		gameContainer.append(newDiv);
	}
}

// TODO: Implement this function!------------------------

let choice1;
let choice2;
let card = [];

let numberOfChoices = 2;

function handleCardClick(event) {
	// you can use event.target to see which element was clicked

	// console.log(event.target.tagName);
	let squareColor = event.target.className;

	//this is for making a blank card get a color
	if (event.target.style.backgroundColor === "") {
		//this is giving the card a color
		if (event.target.tagName === "DIV") {
			event.target.style.backgroundColor = squareColor;
		}

		//user has 2 choices remaining
		if (numberOfChoices === 2) {
			choice1 = event.target.className;
			card.push(choice1);
		}
		//this is the second choice
		if (numberOfChoices === 1) {
			choice2 = event.target.className;
			card.push(choice2);
		}

		//this is to see if choices match
		if (card[0] === card[1]) {
			numberOfChoices = 2;
			console.log("match");
		}
		//if the choices do not match and its the last choice, then cards are flipped back over.
		if (card[0] !== card[1] && numberOfChoices === 1) {
			console.log("does not match:", card[0], "/", card[1]);
		}
		numberOfChoices--;
	}
}

createDivsForColors(shuffledColors);

//------------------

// let firstCard = null;
// let secondCard = null;
// let matchCount = 0;
// let allowClicks = true;

// function handleCardClick(event) {
// 	//change the color of the current card
// 	let currentCard = event.target;
// 	let currentColor = currentCard.className;
// 	if (allowClicks === false) return;

// 	//set the color on the card that was clicked
// 	currentCard.style.backgroundColor = currentColor;

// 	//if this is the first card...
// 	if (firstCard === null) {
// 		//save the first card
// 		firstCard = currentCard;
// 	} else {
// 		//if this is not the first card, then compare it to the first card
// 		//if both cards have the same class...
// 		if (firstCard.style.backgroundColor === currentColor) {
// 			//we have a match. reset firstCard
// 			currentCard.classList.add("flipped");
// 			firstCard = null;
// 			// console.log(currentCard);

// 			//increment matchCount
// 			console.log("we have a match");

// 			matchCount++;
// 		} else {
// 			//we don't have a match. turn both cards over and reset

// 			//add a delay before turning both cards white
// 			setTimeout(() => {
// 				currentCard.style.backgroundColor = "";
// 				firstCard.style.backgroundColor = "";

// 				//reset firstcard
// 				firstCard = null;
// 			}, 1500);
// 			//turn both cards white
// 			console.log("we dont have a match");
// 		}
// 	}
// 	//if all matches are found show a message
// }

//=========================================

// let flippedCards = [];
// let choice = null;
// let clicksAllowed = true;

// function handleCardClick(event) {
// 	if (!clicksAllowed) return;
// 	let selection = event.target;
// 	let color = selection.className;

// 	//turn card the class color
// 	selection.style.backgroundColor = color;

// 	//add the card to the array
// 	flippedCards.push(color);

// 	//have 2 cards been clicked
// 	if (flippedCards.length === 2) {
// 		console.log(flippedCards);
// 		//if cards match
// 		if (flippedCards[0] === flippedCards[1]) {
// 			console.log("match");
// 			//they matched reset flippedcards
// 			flippedCards = [];
// 			choice = null;
// 		} else {
// 			//if no match
// 			console.log("no match");
// 			setTimeout(function () {
// 				selection.style.backgroundColor = "";
// 				choice.style.backgroundColor = "";
// 				flippedCards = [];
// 				choice = null;
// 			}, 1000);
// 		}
// 	} else {
// 		//only 1 card has been clicked
// 		choice = event.target;
// 	}

// 	console.log(color);
// }

// // when the DOM loads
// createDivsForColors(shuffledColors);

// //MY WORK ABOVE------------------------------
// let firstCard = null;
// let maxMatches = COLORS.length / 2;
// let matchCount = 0;

// function handleCardClick(event) {
// 	let currentCard = event.target;
// 	let currentColor = currentCard.className;
// 	console.log(currentColor);

// 	//change card color
// 	currentCard.style.backgroundColor = currentColor;

// 	//is this the first card
// 	if (firstCard === null) {
// 		firstCard = currentCard;
// 	} else {
// 		//this is the second card, is this a match

// 		if (firstCard.style.backgroundColor === currentColor) {
// 			//this is a match, increment matchCount
// 			console.log("match");
// 			matchCount++;

// 			//is this the last match, meaning game over
// 			if (matchCount === maxMatches) {
// 				alert("Game Over!");
// 			}
// 			//reset the first card
// 			firstCard = null;
// 		} else {
// 			//this is not a match
// 			//can only click 2 cards at a time
// 			setTimeout(function () {
// 				console.log("not a match");
// 				currentCard.style.backgroundColor = "";
// 				firstCard.style.backgroundColor = "";
// 				//reset the first card
// 				firstCard = null;
// 			}, 1000);
// 		}
// 	}
// }

// // when the DOM loads
// createDivsForColors(shuffledColors);

//---------ANOTHER ATTEMPT--------------
