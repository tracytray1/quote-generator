import './Quotes.css'

const Quotes = ( { quote } ) => {
  return (
    (!quote)
      ? <div>Loading...</div>
      : <div className="quote-container">
          <p className="quote-text">"{quote.quote}"</p>
          <p className="quote-author">— {quote.author}</p>
        </div>
  )
}

export default Quotes;
