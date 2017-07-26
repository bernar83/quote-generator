var url = 'http://quotes.stormconsultancy.co.uk/random.json';
var quote = document.querySelector('p');

fetch(url)
.then(response => response.json())
.then(function(data) {
  quote.textContent = data.quote;
})
.catch(error => console.log(error.message));
