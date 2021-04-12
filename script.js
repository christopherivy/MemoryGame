const gameContainer = document.getElementById("game"); //this is the div
let canClick = false;
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

let flippedCards = [];
let choice = null;
let clicksAllowed = true;

function handleCardClick(event) {
	if (!clicksAllowed) return;
	let selection = event.target;
	let color = selection.className;

	//turn card the class color
	selection.style.backgroundColor = color;

	//add the card to the array
	flippedCards.push(color);

	//have 2 cards been clicked
	if (flippedCards.length === 2) {
		//if cards match
		if (flippedCards[0] === flippedCards[1]) {
			console.log("match");
			//they matched reset flippedcards
			flippedCards = [];
			choice = null;
		} else {
			//if no match
			console.log("no match");
			setTimeout(function () {
				selection.style.backgroundColor = "";
				choice.style.backgroundColor = "";
				flippedCards = [];
				choice = null;
			}, 1000);
		}
	} else {
		//only 1 card has been clicked
		choice = event.target;
	}

	console.log(color);
}

// when the DOM loads
createDivsForColors(shuffledColors);
