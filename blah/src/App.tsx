import React from "react";
// Import the json file
import CollegeBasketballTeams from "./CollegeBasketballTeams.json";
import "./App.css";

// an interface to define the types of the properties
interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// The welcome function just returns a header
function Welcome() {
  return <h1> March Madness Team Info</h1>;
}

// The Team Component that allows us to create teams based on the properties passed in
class Team extends React.Component<TeamProps> {
  render() {
    const team = this.props;
    return (
      <div>
        <h2>{team.school}</h2>
        <h3>{team.name}</h3>
        <h3>
          {team.city}, {team.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  const teams = CollegeBasketballTeams.teams;
  return (
    // Map the json to a Team object for each team to create the list
    <div>
      {teams.map((team) => (
        <Team {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    // Return a div that contains our 2 components (the Welcome and TeamList)
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
