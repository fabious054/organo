import './Select.css';

const Select = ({label,items,value,setValue,required}) => {

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <div className="select">
            <label>{label}</label>
            <select required={required} value={value} onChange={handleChange}>
                {items.length === 0 && <option>No items</option> }
                {items.length !== 0 && <option>Select a option</option> }
                {items.map((item,idx) => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default Select;