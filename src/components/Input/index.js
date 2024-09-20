import './TextInput.css';

const Input = ({label,placeholder,required,value,setValue,type}) => {

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  type = type || 'text';

  return (
    <div className='text-input'>
        <label htmlFor="name">{label}</label>
        <input 
          value={value}
          onChange={handleChange}
          required={required}
          type={type}
          name="name"
          placeholder={placeholder} />
    </div>
  );
};

export default Input;