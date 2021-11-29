import { useState } from 'react'
import NavBar from "./components/NavBar";
import Waitlist from "./components/Waitlist";
import Graphic from "./components/Graphic.js";
import Section3 from './components/Section3';

function App() {

  return (
        <div className="App">
          <div className ="block1">
            <NavBar />
          </div>
          <div className ="block2">
            <Waitlist title="Enter email address"/>
            <Graphic />
          </div>
          <div className ="block3">
            <Section3 />

          </div>
        </div>
  );
}

export default App;
