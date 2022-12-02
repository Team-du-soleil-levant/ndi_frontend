import React from 'react';
import './App.css';
import {Button} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={()=>{
          navigate('/chapter1')
        }}>
          Jouer !
        </Button>
      </header>
    </div>
  );
}

export default App;
