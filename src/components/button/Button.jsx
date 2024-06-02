import { Link } from 'react-router-dom';
import './button.css';

// eslint-disable-next-line react/prop-types
export const Button = ({ text, disabled, to, onClick }) => {
  if (to) {
    return (
      <Link to={to} className={`pink__btn ${disabled ? 'disabled' : ''}`}>
        {text}
      </Link>
    );
  }

  return (
    <button
      className={`pink__btn ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
