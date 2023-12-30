import React, { useState, useEffect } from 'react';
import './App.css';
import Characters from "./components/Characters";
import Paginacion from './components/Paginacion';
import Filter from './components/Filter';



function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const [info, setInfo] = useState([]);

  function fetchCharacters(url) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        // Limita los personajes a los primeros 6 elementos
        setCharacters(data.results.slice(0, 16));
        setInfo(data.info);
        console.log(data.info);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }
  
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  const retroceder = () => {
    fetchCharacters(info.prev);
  };

  const adelantar = () => {
    fetchCharacters(info.next);
  };
  
  const handleSearch = (searchTerm) => {
    console.log('Buscar:', searchTerm);
    fetchCharacters(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
      .then(() => console.log('Búsqueda completa'))
      .catch(error => console.error('Error en la búsqueda:', error));
  }

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
    <header className="mi-header">
      
      <h1>Rick and Morty</h1>
      
    </header>
    
    <div className='cambio-de-pagina'>
      <Paginacion
        prev={info.prev}
        next={info.next}
        adelantar={adelantar}
        retoceder={retroceder}
      />
      
      <Filter onSearch={handleSearch} />
      <Characters characters={characters} />
    </div>
    </div>
  );
}


export default App;