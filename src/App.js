import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Timeline from './components/Timeline';

function App() {
  const [user, setUser] = useState({});
  const [isUserSelected, setIsUserSelected] = useState(false);
  
  return (
    <div className="App" >
      <NavBar setUser={setUser} setIsUserSelected={setIsUserSelected}/>
      
      <div style={{ float: "left", width: "70%",  maxHeight: "1000px", overflowY: "auto"  }}>
      <Timeline style={{}} user={user} isUserSelected={isUserSelected}/>
      </div>
      <div style={{ float: "right", width: "30%", minHeight: "1000px"}}>
        <SideBar user={user} isUserSelected={isUserSelected}/>
      </div>
    </div>

  );
}

export default App;
