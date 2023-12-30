import React, { useState } from 'react';
import "../general-css/Filter.css"

const Filtro = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="filtro-container">
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={handleInputChange}
        className="filtro-input"
      />
      <button onClick={handleSearch} className="filtro-button">
        Buscar
      </button>
    </div>
  );
};

export default Filtro;
