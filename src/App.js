import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterList } from "./redux/characterAction";
import { Card } from "./components/Card";
import "./styles/main.sass";

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
      <div className="logo-container">
        <img src="/logo.svg" alt="Rick and Morty" className="logo" />
      </div>

      <div className="search-container">
        <input type="text" onChange={changeSearchTerm} placeholder="Buscar" />
      </div>

      <div className="list">
        {characters
          .filter((c) =>
            c?.name?.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((c) => (
            <Card key={c.name} {...c} />
          ))}
      </div>
    </div>
  );
}

export default App;
