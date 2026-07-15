 const quotes = [
      {
        text: "The only way to do great work is to love what you do.",
      },
      {
        text: "Life is what happens when you're busy making other plans.",
      },
      {
        text: "The best way to predict the future is to create it.",
      },
      {
        text: "Do what you can, with what you have, where you are.",
      },
      {
        text: "Empty praises are posionous, but empty actions are deadly.",
      },
      {
        text: "As long as I want to walk there will always be a path for me to walk.",
      }
    ];

    const quoteText = document.getElementById('quoteText');
    const generateBtn = document.getElementById('generateBtn');

    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }

    function showQuote() {
      const quote = getRandomQuote();
      quoteText.textContent = quote.text;
    }

    generateBtn.addEventListener('click', showQuote);