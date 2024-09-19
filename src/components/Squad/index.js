import Member from '../Member';
import './Squad.css';

const Squad = ({name, members,principalColor,secondaryColor}) => {
    return (
        members.length > 0 ? 
            <section style={{backgroundColor:secondaryColor}} className='squad'>
                <h3 style={{borderBottom:`4px solid ${principalColor}`}}>{name}</h3>
                <div className='members'>
                    {members.map((member, index) => (
                        <Member
                            key={index}
                            name={member.name}
                            position={member.position}
                            image={member.image}
                            squad={member.squad}
                            backgroundColor={principalColor}
                        />
                    ))}
                </div>
            </section>
            :
            null
    );
}

export default Squad;