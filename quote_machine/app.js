document.addEventListener('DOMContentLoaded', (e) => {
  const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

  const newQuoteButton = document.querySelector('button')

  const displayQuote = (quote) => {
    let quoteText = document.querySelector('.quote-text')
    quoteText.textContent = quote;
  }

  const getQuote = () => {
    fetch(endpoint)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayQuote(data.message);
      })
      .catch(function() {
        console.log('An error occurred')
      })
  }
  newQuoteButton.addEventListener('click', getQuote);
  getQuote()
})