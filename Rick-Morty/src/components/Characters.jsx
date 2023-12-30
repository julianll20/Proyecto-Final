import React from 'react';
import "../general-css/characters.css";

function Characters({ characters }) {
  return (

    <div className='Padre-card'>
      {characters.map((character, indice) => (
        <div key={indice} className='card'>
          <div>
            <img src={character.image} alt="personaje" />
            <div>
              <h5>{character.name}</h5>
              <hr />
              <p>Especie: {character.species}</p>
              <p>Ubicacion: {character.location.name}</p>
              <p>Estado: {character.status}</p>
              <p>Genero: {character.gender}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;