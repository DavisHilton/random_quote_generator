// ========= variables ===================================
let quote_input = document.getElementById("quote_input");
let genBtn = document.getElementById("btnGen");

quote.style.display ="none";
author.style.display ="none";
quote_input.style.display = "block";

//=======  Function to generate randomQuote and get the author from API or url

let randomQuote = () => {

	fetch("https://type.fit/api/quotes") // put url into fetch('') between quotes
		.then((rep) => rep.json()) //have to convert rep to json
		.then((data) => {
			// once converted to json data is the object
			let quoteIndex = Math.floor(Math.random() * data.length); //gen. an index #
			quote.innerHTML = `" ${data[quoteIndex].text}"`; //place index# into data[] brackets
			if (data[quoteIndex].author === null) {
				author.innerHTML = `--Unknown Author--`;
			} else {
				author.innerHTML = `-- ${data[quoteIndex].author} --`; // then use .text/ .author to get value.
			}

			quote_input.style.display = "none";
			quote.style.display = "block";
			author.style.display = "block";
		});
};

   //calling the function



// =====  separate function to be placed in the event listener as a handeler object

let buttonHandler = () => {
	document.getElementById("text").innerHTML = randomQuote();
};


//=======    Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);


