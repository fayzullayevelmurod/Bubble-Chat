import { Link, useLocation } from 'react-router-dom';
import { ArrowButton, Button } from '../../components';

export const RegisterCode = () => {
  const location = useLocation();
  const email = location.state?.email || '';

  return (
    <div className='register__page'>
      <div>
        <ArrowButton path='/' text='Registration' prevIcon={true} />
        <h1 className="register__title">Enter code</h1>
        <div className='input__form'>
          <input className='register__input' type="number" />
          <input className='register__input' type="number" />
          <input className='register__input' type="number" />
          <input className='register__input' type="number" />
        </div>
      </div>
      <div className="bottom__box">
        <div className="register__info">
          <p>
            We set the verification code to <br /> <Link>{email}</Link>
          </p>
        </div>
        <Button text='Continue' to='/register-password' />
      </div>
    </div>
  );
};
