import { useState } from 'react';
import Button from '../Button';
import Select from '../Select';
import TextInput from '../TextInput';
import { v4 as uuidv4 } from 'uuid';
import './Form.css';


const Form = ({setMember,squads,setNewSquad}) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [squad, setSquad] = useState('');

    const [squadName, setSquadName] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const member = {name, position, image, squad};
        setMember((prev) => [...prev, member]);

        setName('');
        setPosition('');
        setImage('');
        setSquad('');
    };
    
    const handleSubmitTeam = (e) => {
        e.preventDefault();
        let id = uuidv4();
        let principalColor = `#${color}`;
        let secondaryColor = `#${color}`;
        let name = squadName;
        
        const squad = {id, name, principalColor, secondaryColor};
        setNewSquad((prev) => [...prev, squad]);

        setSquadName('');
        setColor('');

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
            <form onSubmit={handleSubmitTeam}>
                <h2>Add a new squad</h2>
                <TextInput
                    value={squadName}
                    setValue={setSquadName}
                    required
                    label="Name"
                    placeholder="Squad name" />
                <TextInput
                    value={color}
                    setValue={setColor}
                    required
                    label="Color"
                    placeholder="Squad color" />
                <Button>
                    Add Squad
                </Button>
            </form>
        </section>
    );
};

export default Form;