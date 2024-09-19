import Banner from './components/Banner';
import Form from './components/Form';
import Squad from './components/Squad';
import { useState } from 'react';

function App() {

  const squads = [
      {name:'Programming',principalColor:'#57C278',secondaryColor:'#D9F7E9'},
      {name:'Front-End',principalColor:'#82CFFA',secondaryColor:'#E8F8FF'},
      {name:'Data Science',principalColor:'#A6D157',secondaryColor:'#F0F8E2'},
      {name:'Devops',principalColor:'#E06B69 ',secondaryColor:'#FDE7E8'},
      {name:'UI/UX',principalColor:'#DB6EBF',secondaryColor:'#FAE9F5'},
      {name:'Mobile',principalColor:'#FFBA05',secondaryColor:'#FFF5D9'},
      {name:'Innovation',principalColor:'#FF8A29',secondaryColor:'#FFEEDF'}
    ];
  const [teamMembers, setTeamMembers] = useState([{name:'Fabio Abreu',position:'Developer',image:'https://github.com/fabious054.png',squad:'Programming'}]);
// MEMBER = {name, position, image, squad}

  return (
    <div className="App">
      <Banner />
      <Form setMember={setTeamMembers} squads={squads} />
     {squads.map((squad, index) => (
       <Squad
        key={index}
        name={squad.name}
        members={teamMembers.filter(member => member.squad === squad.name)}
        principalColor={squad.principalColor}
        secondaryColor={squad.secondaryColor} />
     ))}
    </div>
  );
}

export default App;
