
  
const quotes = ["good morning", "Lazy Monday" , "The early bird gets the first worm"]

//Function to generate quote.value(below)
  let pickQuote = () => {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
     return quotes[quoteIndex];
}


// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ===================================

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
	document.getElementById("quote").value = pickQuote();
};
// Event listener for generate PW button
// genBtn.addEventListener("click", buttonHandler);
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ====================================


