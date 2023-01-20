import React from "react";
import "../../styles/Character.css";

function Character(character) {
  return (
    <div className="text-center p-5 glass-2 text-white">
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt={character.name}
        className="img-fluid image-character"
      />
      <p>
        <strong>{`Origin: ${
          character.origin && character.origin.name
        }`}</strong>
      </p>
    </div>
  );
}

export default Character;
