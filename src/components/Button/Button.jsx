import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const Button = ({handleQuote}) => {
  return (
    <button className="quote-button" onClick={handleQuote}>
      <FontAwesomeIcon icon={faArrowsRotate} style={{ color: '#ffffff', marginRight: '8px' }} />
      New quote
    </button>
  )
}

export default Button;
