function getQuote() {
  const url = 'http://quotes.stormconsultancy.co.uk/random.json'

  axios.get(url)
  .then(function(response) {
    const quote = document.getElementById('quote');

    quote.textContent = response.data.quote;
  })
  .catch(error => console.log(error));
}

getQuote();

const btn = document.getElementById('quoteButton');
btn.onclick = getQuote;