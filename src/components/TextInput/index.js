import './TextInput.css';

const TextInput = ({label,placeholder}) => {
  return (
    <div className='text-input'>
        <label htmlFor="name">{label}</label>
        <input type="text" name="name" placeholder={placeholder} />
    </div>
  );
};

export default TextInput;