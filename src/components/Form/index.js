import Button from '../Button';
import Select from '../Select';
import TextInput from '../TextInput';
import './Form.css';

const Form = () => {
    const squads = ['Programmimg', 'Front-End', 'Data Science', 'Devops', 'UI/UX', 'Mobile', 'Innovation'];
    return (
        <section className='form'>
            <form>
                <h2>Add a new team member</h2>
                <TextInput label="Name" placeholder="Your name" />
                <TextInput label="Position" placeholder="Your position" />
                <TextInput label="Image" placeholder="Image Address" />
                <Select label="Squad" items={squads}/>
                <Button>
                    Add Card
                </Button>
            </form>
        </section>
    );
};

export default Form;