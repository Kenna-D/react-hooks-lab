import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const PokemonList = (props) => {

  const [list, setList] = useState([]);
  
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        setList(res.data.results)
      })
    }, [])

  
  
  return(
    <div>
      <p>Pokemon list</p>
        {list.map((pokemon) => {
          return(
            <Link to={`/pokemon/${pokemon.name}`} key={pokemon.url}>
              <h2>
                {pokemon.name}
              </h2>
            </Link>
          )
        })}
    </div>
  )

};
export default PokemonList;

