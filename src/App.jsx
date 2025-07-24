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
      .then((data) => setQuote(data.quotes))
      }, []);


  const handleQuote = () => {
    let i = Math.floor(Math.random() * quote.length);
    let shuffleQuote = quote[i];
    setRandomQuote(shuffleQuote);
    console.log(randomQuote);
  }

  return (
    <>
    <div className="quote-header">
      <h1 className="quote-title">Quote Generator</h1>
      <h2 className="quote-subtitle">Discover powerful quotes to fuel your motivation
        and inspire your journey <br />to greatness.</h2>
    </div>
    <Quotes quote={randomQuote} handleQuote={handleQuote} />
    <Button handleQuote={handleQuote}/>
  </>
  )
}

export default App
