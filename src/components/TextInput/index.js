import './TextInput.css';

const TextInput = ({label,placeholder,required,value,setValue}) => {

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='text-input'>
        <label htmlFor="name">{label}</label>
        <input 
          value={value}
          onChange={handleChange}
          required={required}
          type="text"
          name="name"
          placeholder={placeholder} />
    </div>
  );
};

export default TextInput;