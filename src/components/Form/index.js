import { useState } from 'react';
import Button from '../Button';
import Select from '../Select';
import TextInput from '../TextInput';
import './Form.css';


const Form = ({setMember,squads}) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [squad, setSquad] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const member = {name, position, image, squad};
        setMember((prev) => [...prev, member]);

        setName('');
        setPosition('');
        setImage('');
        setSquad('');
    };
    
    return (
        <section className='form'>
            <form onSubmit={handleSubmit}>
                <h2>Add a new team member</h2>
                <TextInput
                    value={name}
                    setValue={setName}
                    required={true}
                    label="Name"
                    placeholder="Your name" />
                <TextInput
                    value={position}
                    setValue={setPosition}
                    required={true}
                    label="Position"
                    placeholder="Your position" />
                <TextInput
                    value={image}
                    setValue={setImage}
                    required={true}
                    label="Image"
                    placeholder="Image Address" />
                <Select
                    required={true}
                    value={squad}
                    setValue={setSquad}
                    label="Squad"
                    items={squads}/>
                <Button>
                    Add Card
                </Button>
            </form>
        </section>
    );
};

export default Form;