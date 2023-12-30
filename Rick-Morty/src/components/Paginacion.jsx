import React from "react";
import "../general-css/Pagination.css";

function Paginacion({ prev, next, retoceder, adelantar }) {
  const handleRetroceder = () => {
    retoceder();
  };

  const handleAdelantar = () => {
    adelantar();
  };

  return (
    <div className="Paginas">
      <nav>
        <button onClick={handleRetroceder} disabled={!prev}>
          Pagina Previa
        </button>
        <button onClick={handleAdelantar} disabled={!next}>
          Proxima Pagina
        </button>
      </nav>
    </div>
  );
}

export default Paginacion;