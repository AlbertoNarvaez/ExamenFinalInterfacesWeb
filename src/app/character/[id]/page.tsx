"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Character } from "@/types";
import api from "@/api/api";
import "./page.css";

const CharacterDetalle = () => {
  const { id } = useParams();
  const router = useRouter();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [miError, setError] = useState<string>("");

    useEffect(() => {
      api.get<Character>(`/character/${id}`)
        .then((e) => {
          setCharacter(e.data);
          setError("");
        })
        .catch((e) => {
          setError(`Error: ${e.message}`);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [id]);

  return (
    <div className="DetalleContainer">
      {loading && <h2>Loading...</h2>}
      {miError && <h2>{miError}</h2>}

        {character && (
          <>
            <img src={character.image} alt={character.name} />
            <div className="InfoDetalle">
              <h1>{character.name}</h1>
              <p><span>Género: </span>{character.gender}</p>
              <p><span>Estado: </span>{character.status}</p>
              <p><span>Especie: </span>{character.species}</p>
              <p><span>ID: </span>{character.id}</p>
              <p><span>Origen: </span>{character.origin.name}</p>
              <p><span>Location: </span>{character.location.name}</p>
            </div>
          </>
      )}

      <button className="botonVolver" onClick={() => router.push("/")}>
      Volver
      </button>
    </div>
  );
};

export default CharacterDetalle;
