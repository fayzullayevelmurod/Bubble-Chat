import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowButton, Button, Input } from '../../components';
import './register.css';
import assets from '../../assets';

export const RegisterPassword = () => {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setIsPasswordValid(passwordValue.length >= 8);
  };

  const handleSubmit = () => {
    if (isPasswordValid) {
      navigate('/register-full-name', { state: { password } });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div className="register__page">
      <div>
        <ArrowButton path='/register-code' text='Registration' prevIcon={true} />
        <h1 className="register__title">Choose a password</h1>
        <div className='password__box'>
          <Input
            label='Password'
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
          />
          <img
            className='see__password-icon'
            src={assets.seeIcon}
            alt="see password icon"
            onClick={togglePasswordVisibility}
          />
        </div>
        <span className='password__info'>Your password must be at least 8 characters</span>
      </div>
      <div className="bottom__box">
        <Button text='Continue' disabled={!isPasswordValid} onClick={handleSubmit} />
      </div>
    </div>
  );
};
