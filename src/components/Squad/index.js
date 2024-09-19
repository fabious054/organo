import Member from '../Member';
import './Squad.css';

const Squad = ({name, members,principalColor,secondaryColor,deleteMember}) => {
    return (
        members.length > 0 ? 
            <section style={{backgroundImage:'url(/images/fundo.png)',backgroundColor:secondaryColor}} className='squad'>
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
                            deleteMember={deleteMember}
                        />
                    ))}
                </div>
            </section>
            :
            null
    );
}

export default Squad;