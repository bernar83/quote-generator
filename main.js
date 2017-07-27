// return a quote
var dailyQuote = function getQuote() {
  const url = 'http://quotes.stormconsultancy.co.uk/random.json';
  const quote = document.querySelector('p');

  // get quote from api
  fetch(url)
  .then(response => response.json())
  .then(function(data) {
    quote.textContent = data.quote;
  })
  .catch(error => console.log(error.message));
}

dailyQuote();

// get date
var dayOfMonth = function getDate() {
  var date = new Date();
  var day = date.getDate();
  return day;
}

dayOfMonth();
