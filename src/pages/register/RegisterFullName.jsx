// import { useState } from "react";
// import { ArrowButton, Button, Input } from "../../components";
// import { useNavigate } from "react-router-dom";

// export const RegisterFullName = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [isFormValid, setIsFormValid] = useState(false);
//   const navigate = useNavigate();

//   const handleFirstNameChange = (e) => {
//     const value = e.target.value;
//     setFirstName(value);
//     validateForm(value, lastName);
//   };

//   const handleLastNameChange = (e) => {
//     const value = e.target.value;
//     setLastName(value);
//     validateForm(firstName, value);
//   };

//   const validateForm = (firstName, lastName) => {
//     setIsFormValid(firstName.trim() !== '' && lastName.trim() !== '');
//   };

//   const handleSubmit = () => {
//     if (isFormValid) {
//       navigate('/register-finished', { state: { fullName: `${firstName} ${lastName}` } });
//     }
//   };

//   return (
//     <div className="register__page">
//       <div>
//         <ArrowButton path='/register-password' text='Registration' prevIcon={true} />
//         <h1 className="register__title">What&apos;s your name?</h1>
//         <div className="full__name-inputs">
//           <Input
//             label='First name'
//             type='text'
//             value={firstName}
//             onChange={handleFirstNameChange}
//           />
//           <Input
//             label='Last name'
//             type='text'
//             value={lastName}
//             onChange={handleLastNameChange}
//           />
//         </div>
//       </div>
//       <div>
//         <Button
//           text='Continue'
//           onClick={handleSubmit}
//           disabled={!isFormValid}
//         />
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { ArrowButton, Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";

export const RegisterFullName = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
    validateForm(value, lastName);
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
    validateForm(firstName, value);
  };

  const validateForm = (firstName, lastName) => {
    setIsFormValid(firstName.trim() !== '' && lastName.trim() !== '');
  };

  const handleSubmit = () => {
    if (isFormValid) {
      navigate('/user-profile', { state: { fullName: `${firstName} ${lastName}` } });
    }
  };

  return (
    <div className="register__page">
      <div>
        <ArrowButton path='/register-password' text='Registration' prevIcon={true} />
        <h1 className="register__title">What&apos;s your name?</h1>
        <div className="full__name-inputs">
          <Input
            label='First name'
            type='text'
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <Input
            label='Last name'
            type='text'
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
      </div>
      <div>
        <Button
          text='Continue'
          onClick={handleSubmit}
          disabled={!isFormValid}
        />
      </div>
    </div>
  );
}
