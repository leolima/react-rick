import React, { useCallback, useEffect, useState } from "react";
import "./styles/main.sass";
import { useDispatch, useSelector } from "react-redux";
import { characterList } from "./redux/characterAction";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characterData);

  useEffect(() => {
    dispatch(characterList());
  }, []);

  const changeSearchTerm = useCallback(
    (input) => setSearchTerm(input?.target?.value),
    []
  );

  return (
    <div className="App">
      <img src="/logo.svg" alt="Rick and Morty" />
      <input type="text" onChange={changeSearchTerm} placeholder="Buscar" />
      {characters
        .filter((c) =>
          c?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((c) => (
          <div className="card" key={c.name}>
            <h2>{c.name}</h2>
            <div>{c.gender}</div>
            <div>{c.status}</div>
            <div>{c.species}</div>
          </div>
        ))}
    </div>
  );
}

export default App;
