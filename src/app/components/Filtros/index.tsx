"use client";
import "./styles.css";

type FiltrosProps = {
  status: string;
  gender: string;
  nombre: string;
  onStatusChange: (s: string) => void;
  onGenderChange: (g: string) => void;
  onNombreChange: (n: string) => void;
  onBuscar: () => void;
};

const ESTADOS = ["", "Alive", "Dead", "unknown"];
const GENEROS = ["", "Female", "Male", "Genderless", "unknown"];

const Filtros = ({
  status,
  gender,
  nombre,
  onStatusChange,
  onGenderChange,
  onNombreChange,
  onBuscar,
}: FiltrosProps) => {

  const handleStatusClick = () => {
    const idx = ESTADOS.indexOf(status);
    const next = ESTADOS[(idx + 1) % ESTADOS.length];
    onStatusChange(next);
  };

  const handleGenderClick = () => {
    const idx = GENEROS.indexOf(gender);
    const next = GENEROS[(idx + 1) % GENEROS.length];
    onGenderChange(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onBuscar();
    }
  };

  return (
    <div className="FiltrosContainer">
      <button className="filtroBoton" onClick={handleStatusClick}>
        Estado: {status || "Todos"}
      </button>
      <button className="filtroBoton" onClick={handleGenderClick}>
        Género: {gender || "Todos"}
      </button>
      <div className="nombreContainer">
        <input
          className="nombreInput"
          type="text"
          placeholder="Buscar por nombre..."
          value={nombre}
          onChange={(e) => onNombreChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="buscarBoton" onClick={onBuscar}>
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Filtros;
