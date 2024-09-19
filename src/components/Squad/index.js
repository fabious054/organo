import Member from '../Member';
import './Squad.css';

const Squad = ({name, members,principalColor,secondaryColor}) => {
    return (
        <section style={{backgroundColor:secondaryColor}} className='squad'>
            <h3 style={{borderBottom:`4px solid ${principalColor}`}}>{name}</h3>
            <Member />
        </section>
    );
}

export default Squad;