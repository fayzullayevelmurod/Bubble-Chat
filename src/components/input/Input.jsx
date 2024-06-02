// eslint-disable-next-line react/prop-types
export const Input = ({ label, type, onChange }) => (
  <input className="register__input" type={type} placeholder={label} onChange={onChange} />
)