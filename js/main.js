function getQuote() {
  const url = 'http://quotes.stormconsultancy.co.uk/random.json'

  axios.get(url)
  .then(function(response) {
    const quote = document.getElementById('quote');
    quote.textContent = response.data.quote;

    const author = document.getElementById('author');
    const authorName = response.data.author;
    author.textContent = authorName;
    var nameArr = authorName.split(' ');
    author.href = `https://www.google.com/search?q=${nameArr[0]}+${nameArr[1]}`;
  })
  .catch(error => console.log(error));
}

getQuote();

const btn = document.getElementById('quoteButton');
btn.onclick = getQuote;