import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Inconplete">Incompletass</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button>Ascendente</button>
          <button>Decrescente</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
