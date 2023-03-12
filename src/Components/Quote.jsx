import React from "react";


const Quote = () => {

// Funcion para frases aleatorias:

const quotes = [
    "The best way to predict your future is to create it. - Abraham Lincoln",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "I have not failed. I’ve just found 10,000 ways that won’t work. - Thomas Edison",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    "The best way to predict your future is to create it. -Abraham Lincoln",
    "Don't let yesterday take up too much of today. -Will Rogers",
    "A journey of a thousand miles begins with a single step. -Lao Tzu",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.-Winston Churchill",
    "The only way to do great work is to love what you do. -Steve Jobs",
"The way to get started is to quit talking and begin doing. -Walt Disney",
"The difference between ordinary and extraordinary is that little extra. -Jimmy Johnson",
"The only place where success comes before work is in the dictionary. -Vidal Sassoon",
"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"
  ];

  const generateRandomQuote = () => {
	// Generate a random index based on the length of the quotes array
	const randomIndex = Math.floor(Math.random() * quotes.length);
  
	// Return a random quote from the array
	return quotes[randomIndex];
  }

return (
<div className="lista-tareas__mensaje"> {generateRandomQuote()} </div>
)
}

export default Quote;