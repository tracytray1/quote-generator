import './Quotes.css'

const Quotes = ( { quote } ) => {
  return (
    (!quote)
      ? <div>Loading...</div>
      : <div>
          <p>{quote.quote}</p>
          <p>— {quote.author}</p>
        </div>
  )
}

export default Quotes;
