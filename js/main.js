(function getQuote() {
  const url = 'http://quotes.stormconsultancy.co.uk/random.json'

  axios.get(url)
  .then(response => console.log(response))
  .catch(error => console.log(error));
})();
