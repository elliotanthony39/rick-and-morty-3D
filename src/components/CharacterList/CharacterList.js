import { useState, useEffect } from "react";
import NavPage from "../NavPage/NavPage";
import Character from "../Character/Character";
import "../../styles/CharacterList.css";

function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [usPage, setUsPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results, info } = await data.json();
      setCharacters(results);
      setLoading(false);
      setUsPage(info.pages);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} usPage={usPage} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row glass">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
              />
            </div>
          ))}
        </div>
      )}

      <NavPage page={page} setPage={setPage} usPage={usPage} />
    </div>
  );
}

export default CharacterList;
