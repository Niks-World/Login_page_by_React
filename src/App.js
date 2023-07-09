
import './App.css';
import { User } from './compnents/User';
import { Myprofile } from './compnents/Myprofile';
import { useState } from 'react';
import { Nav } from './compnents/Nav';
function App() {
  const[loggedin, setLoggedin]=useState(false)
  return (
    <div className="App">
   <Nav/>
      {
        loggedin?  <Myprofile setLoggedin={setLoggedin} />: <User setLoggedin={setLoggedin}/>
      }
      
     
    </div>
  );
}

export default App;
