"use client";
import { useEffect, useState } from "react";
import { Character, CharacterResponse } from "@/types";
import api from "@/api/api";
import CharacterCard from "./components/CharacterCard";
import Filtros from "./components/Filtros";
import Paginador from "./components/Paginador";
import "./page.css";

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [miError, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const [status, setStatus] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");
  const [nombreAplicado, setNombreAplicado] = useState<string>("");

  const fetchCharacters = () => {
    setLoading(true);
    const params: Record<string, string> = { page: String(page) };
    if (status) params.status = status;
    if (gender) params.gender = gender;
    if (nombreAplicado) params.name = nombreAplicado;

    const query = new URLSearchParams(params).toString();

    api.get<CharacterResponse>(`/character?${query}`)
      .then((e) => {
        setCharacters(e.data.results);
        setTotalPages(e.data.info.pages);
        setError("");
      })
      .catch(() => {
        setCharacters([]);
        setError("No se encontraron personajes.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, [page, status, gender, nombreAplicado]);

  const handleBuscar = () => {
    setPage(1);
    setNombreAplicado(nombre);
  };

  const handleStatusChange = (s: string) => {
    setStatus(s);
    setPage(1);
  };

  const handleGenderChange = (g: string) => {
    setGender(g);
    setPage(1);
  };

  return (
    <div className="ContainerCharacters">
      <Filtros
        status={status}
        gender={gender}
        nombre={nombre}
        onStatusChange={handleStatusChange}
        onGenderChange={handleGenderChange}
        onNombreChange={setNombre}
        onBuscar={handleBuscar}
      />

      {loading && <h2 style={{ color: "white" }}>Loading...</h2>}
      {!loading && miError && <h2 style={{ color: "white" }}>{miError}</h2>}

      {!loading && !miError && characters.map((c) => (
        <CharacterCard key={c.id} character={c} />
      ))}

      {!loading && !miError && (
        <Paginador page={page} totalPages={totalPages} setPage={(p) => setPage(p)} />
      )}
    </div>
  );
};

export default Home;
