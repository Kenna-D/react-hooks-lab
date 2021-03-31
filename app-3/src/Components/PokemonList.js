import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const PokemonList = (props) => {

  const [list, setList] = useState([]);
  
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        setList(res.data)
      })
    }, [])

  
  return(
    <div>
      {list.map((item, index) => {
        return(
          <Link to={`/${item.name}`} key={index}>{item.name}</Link>
        )
      })}
    </div>
  )

};
export default PokemonList;

