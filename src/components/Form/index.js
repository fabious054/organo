import TextInput from '../TextInput';
import './Form.css';

const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Add a new team member</h2>
                <TextInput label="Name" placeholder="Your name" />
                <TextInput label="Position" placeholder="Your position" />
                <TextInput label="Image" placeholder="Image Address" />
            </form>
        </section>
    );
};

export default Form;