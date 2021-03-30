import './App.css';
import React, {useState, useEffect} from 'react';
import ListItem from './Components/ListItem';
import axios from 'axios';

const App = () => {
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    axios
      .get('https://cat-fact.herokuapp.com/facts')
      .then(res => {
        setCatFacts(res.data)
      })
      
      return () => {
        console.log('goodbye')
      }
    }, [])

  return (
    <div className="App">
      <ListItem catFacts={catFacts}/>
    </div>
  );
};

export default App;
