import React from "react"
import { useState, useEffect } from "react"
import axios from 'axios';

const ResidentInfo = ({ url }) => {

  const [character, setCharacter] = useState({})
  let color = 'white'

  //CODE FOR ALIVE OR DEAD
  if (character.status == "Alive") {
    color = 'green';
  } else if (character.status == 'Dead') {
    color = 'red';
  }

  useEffect(() => {
    axios.get(url)
      .then(res => setCharacter(res.data));
  }, []);

  console.log(character)

  return (
    <div className="character-card">
      <header>
        <img src={character.image} />
        <div className="card-name">
          <h2>{character.name}</h2>
          <span style={{ color: color }}>{character.status}</span>
        </div>
      </header>

      <div>
        <ul>
          <li><span>Origin: </span>{character.origin?.name}</li>
          <li><span>Species: </span>{character.species}</li>
          <li><span>Number of episodes: </span>{character.episode?.length}</li>
        </ul>
      </div>
    </div>
  );
};

export default ResidentInfo;