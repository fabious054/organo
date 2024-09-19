import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';

function App() {

  const squads = ['Programmimg', 'Front-End', 'Data Science', 'Devops', 'UI/UX', 'Mobile', 'Innovation'];
  const [teamMembers, setTeamMembers] = useState([]);
  console.log(teamMembers);

  return (
    <div className="App">
      <Banner />
      <Form setMember={setTeamMembers} squads={squads} />
    </div>
  );
}

export default App;
