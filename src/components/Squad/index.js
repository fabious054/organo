import Member from '../Member';
import { useState } from 'react';
import './Squad.css';

const Squad = ({name, members,principalColor,secondaryColor,deleteMember}) => {

    const [colorBg, setColorBg] = useState(secondaryColor);

    return (
        members.length > 0 ? 
            <section style={{backgroundImage:'url(/images/fundo.png)',backgroundColor:colorBg}} className='squad'>
                <input type='color' onChange={(color) => setColorBg(color.target.value)} value={principalColor} className='color-input' />
                <h3 style={{borderBottom:`4px solid ${principalColor}`}}>{name}</h3>
                <div className='members'>
                    {members.map((member, index) => (
                        <Member
                            id = {member.id}
                            key={member.name}
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