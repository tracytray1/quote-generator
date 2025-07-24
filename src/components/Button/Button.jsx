import './Button.css'

const Button = ({handleQuote}) => {
  return (
    <button className="quote-button" onClick={handleQuote} >
      New quote
    </button>
  )
}

export default Button;
