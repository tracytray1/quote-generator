import { useEffect, useState } from 'react'

import Quotes from "./components/Quotes/Quotes";
import Button from "./components/Button/Button";

import './App.css'

function App() {

  const [quote, setQuote] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quotes);
        const i = Math.floor(Math.random() * data.quotes.length);
        setRandomQuote(data.quotes[i]);
      }
    )}, []);


  const handleQuote = () => {
    let i = Math.floor(Math.random() * quote.length);
    let chosenQuote = quote[i];
    setRandomQuote(chosenQuote);
  }

  return (
    <div className='quote-card'>
      <div className="quote-header">
        <h1 className="quote-title">Quote Generator</h1>
        <h2 className="quote-subtitle">Discover powerful quotes to fuel your motivation
          and inspire your journey <br />to greatness.</h2>
      </div>
      <Quotes quote={randomQuote} />
      <Button handleQuote={handleQuote}/>
    </div>
  )
}

export default App
