import Quotes from "./data.js";

let pastQuoteIndex;

function changeQuote() {
  let index = quoteIndex();

  if (index === pastQuoteIndex) {
    while (index === pastQuoteIndex) {
      index = quoteIndex();
    }
  } else {
    changeDOMQuoteContent(index);
  }

  if (index !== pastQuoteIndex) {
    changeDOMQuoteContent(index);
  }

  updatePastIndex(index);
}

function changeDOMQuoteContent(index) {
  document.getElementById("quote").innerText = Quotes[index].quote;
  document.getElementById("author").innerText = Quotes[index].author;
}

function updatePastIndex(i) {
  pastQuoteIndex = i;
}

function quoteIndex() {
  return Math.floor(Math.random() * Quotes.length);
}

document
  .getElementById("generate-button")
  .addEventListener("click", () => changeQuote());

document.addEventListener("DOMContentLoaded", changeQuote());
