import { useEffect, useState } from 'react'
import Quote from "./components/Quote/Quote";
import './App.css'

function App() {

  const [quotes, setQuotes] = useState([])


  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes))
      }, []);

  return (
    <>
    <div className="quote-header">
      <h1 className="quote-title">Quote Generator</h1>
      <h2 className="quote-subtitle">Discover powerful quotes to fuel your motivation
        and inspire your journey <br />to greatness.</h2>
    </div>
    <Quote quotes={quotes} />
  </>
  )
}

export default App
