/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/
const quotes = [
	{
		quote: 'Programming is Thinking, not Typing.',
		source: 'Casey Patton',
		citation: 'FDE at Palantir',
	},
	{
		quote:
			'Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.',
		source: 'Leland Dieno',
		citation: 'Face the Book With Your Small Business',
		year: 2012,
	},
	{
		quote:
			'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
		source: 'Bill Gates',
		citation: '',
		year: 2016,
	},
	{
		quote: 'The real hero of programming is the one who writes negative code.',
		source: 'Douglas McIlroy',
		citation: 'DLSLUG',
		year: 2009,
	},
	{
		quote:
			'Bad programmers worry about the code. Good programmers worry about data structures and their relationships.',
		source: 'Linus Torvalds',
		year: 2006,
	},
];


/***
 * `getRandomQuote` function
 ***/

function getRandomQuote(array) {
	// 1. Create a variable that generates a random number
	// between zero and the last index in the `quotes` array
  let random = Math.floor(Math.random() * array.length);
  return array[random];
}

/***
 * `printQuote` function
 ***/
function printQuote() {
	let randomQuote = getRandomQuote(quotes);
  let html = "";
  html += `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;
  if (randomQuote.citation !== undefined) {
    html += `
    <span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year !== undefined) {
    html += `
    <span class="year">${randomQuote.year}, ${randomQuote.tags} Quote</span></p>`;
  }
  if (randomQuote.tags !== undefined) {
    html += `
    , ${randomQuote.tags} Quote</p>`;
  }
  document.getElementById("quote-box").innerHTML = html;
  return;
}
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById('load-quote')
	.addEventListener('click', printQuote, false);
