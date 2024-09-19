import './Select.css';

const Select = ({label,items}) => {
    return (
        <div className="select">
            <label>{label}</label>
            <select>
                {items.length === 0 && <option>No items</option> }
                {items.length !== 0 && <option>Select a option</option> }
                {items.map((item,idx) => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default Select;