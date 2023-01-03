/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
	{
		quote: "Programming is Thinking, not Typing.",
		source: "Casey Patton",
		citation: "FDE at Palantir",
	},
	{
		quote:
			"Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.",
		source: "Leland Dieno",
		citation: "Face the Book With Your Small Business",
		year: 2012,
	},
	{
		quote:
			"Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
		source: "Bill Gates",
		citation: " ",
		year: 2016,
	},
	{
		quote: "The real hero of programming is the one who writes negative code.",
		source: "Douglas McIlroy",
		citation: 'DLSLUG',
		year: 2009,
	},
	{
		quote:
			"Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
		source: "Linus Torvalds",
		year: 2006,
	},
];
console.log(quotes);

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
	// 1. Create a variable that generates a random number
	// between zero and the last index in the `quotes` array
	let index = Math.floor(Math.random() * quotes.length);
	let display = quotes[index];
	return display;
	//   randomQuote = getRandomQuote(quotes);
	// let quote = quotes[randomQuote];
	// return randomQuote;
	// 2. Use the random number variable and bracket notation
	// to grab a random object from the `quotes` array, and
	// store it in a variable

	// 3. Return the variable storing the random quote object
}
getRandomQuote();

/***
 * `printQuote` function
 ***/
function printQuote() {
	let i = getRandomQuote();
	let html = '';

	html += `
  <p class="quote">${i['quote']}</p>
  <p class="source">${i['source']}</p>`;

	// adding citation and year
	if (i['citation']) {
		html += `<span class="citation"> ${i['citation']}</span>`;
	}
	if (i['year']) {
		html += `<span class ="year"> ${i['year']}</span>`;
	}
	html += '</p>';

	document.getElementById('quote-box').innerHTML = html;
}
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById('load-quote')
	.addEventListener('click', printQuote, false);
