import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowButton } from '../../components/ArrowButton';
import { Input } from '../../components/input/Input';
import './register.css';
import { Button } from '../../components';

export const RegisterEmail = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
    console.log(emailValue);
    console.log(emailValue);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (isEmailValid) {
      navigate('/register-code', { state: { email } });
    }
  };

  return (
    <div className="register__page">
      <div>
        <ArrowButton text='Registration' prevIcon={true} />
        <h1 className="register__title">What&apos;s your email?</h1>
        <Input
          label='Email address'
          type='email'
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="bottom__box">
        <div className="register__info">
          <p>
            Continuing to use BubbleChat means you accept our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
          </p>
        </div>
        <Button text='Continue' disabled={!isEmailValid} onClick={handleSubmit} />
      </div>
    </div>
  );
};
