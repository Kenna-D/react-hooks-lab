import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = (props) => {
  console.log(props)
  const {name} = props.match.params;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => {
        setPokemon(res.data)
      })
  }, [name]);
  return(
    <div>
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.sprites?.back_shiny} />
    </div>
  )
}
export default Pokemon;