function getQuote() {
  const url = 'http://quotes.stormconsultancy.co.uk/random.json'

  axios.get(url)
  .then(function(response) {
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');

    quote.textContent = response.data.quote;
    author.textContent = response.data.author;
  })
  .catch(error => console.log(error));
}

getQuote();

const btn = document.getElementById('quoteButton');
btn.onclick = getQuote;