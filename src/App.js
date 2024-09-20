import Banner from './components/Banner';
import Form from './components/Form';
import Squad from './components/Squad';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const squads = [
      {name:'Programming',principalColor:'#57C278',secondaryColor:'#D9F7E9',id:uuidv4()},
      {name:'Front-End',principalColor:'#82CFFA',secondaryColor:'#E8F8FF',id:uuidv4()},
      {name:'Data Science',principalColor:'#A6D157',secondaryColor:'#F0F8E2',id:uuidv4()},
      {name:'Devops',principalColor:'#E06B69 ',secondaryColor:'#FDE7E8',id:uuidv4()},
      {name:'UI/UX',principalColor:'#DB6EBF',secondaryColor:'#FAE9F5',id:uuidv4()},
      {name:'Mobile',principalColor:'#FFBA05',secondaryColor:'#FFF5D9',id:uuidv4()},
      {name:'Innovation',principalColor:'#FF8A29',secondaryColor:'#FFEEDF',id:uuidv4()}
    ];
  const [teamMembers, setTeamMembers] = useState([{name:'Fabio Abreu',position:'Developer',image:'https://github.com/fabious054.png',squad:'Programming',id:uuidv4()}]);
  
  const deleteMember = (e,id) =>{
    e.preventDefault();
    setTeamMembers(teamMembers.filter(member => member.id !== id)); 
  }
  
  return (
    <div className="App">
      <Banner />
      <Form setMember={setTeamMembers} squads={squads} />
     {squads.map((squad, index) => (
       <Squad
        deleteMember={deleteMember}
        key={squad.id}
        name={squad.name}
        members={teamMembers.filter(member => member.squad === squad.name)}
        principalColor={squad.principalColor}
        secondaryColor={squad.secondaryColor} />
     ))}
    </div>
  );
}

export default App;
