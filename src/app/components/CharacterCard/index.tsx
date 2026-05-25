"use client";
import { Character } from "@/types";
import { useRouter } from "next/navigation";
import "./styles.css";

const CharacterCard = ({ character }: { character: Character }) => {
  const router = useRouter();

  return (
    <div className="ContainerCard" onClick={() => router.push(`/character/${character.id}`)}>
      <img src={character.image} alt={character.name} />
      <div className="InfoContainer">
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.gender}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
