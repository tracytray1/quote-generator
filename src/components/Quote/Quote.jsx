const Quote = ( { quotes } ) => {
  return (
    <div>
      {quotes.map((quote) => {
        <ul>
          <li>"{quote.quote}" - {quote.author}</li>
        </ul>

    })}
  </div>
  )
}

export default Quote
