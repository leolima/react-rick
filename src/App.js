import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { characterList } from "./redux/characterAction";

function App() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characterData);

  useEffect(() => {
    dispatch(characterList());
  }, []);

  const changeSearchedTerm = useCallback(
    (input) => setSearchedTerm(input?.target?.value),
    []
  );

  return (
    <div className="App">
      <input type="text" onChange={changeSearchedTerm} placeholder="Buscar" />
      {characters
        .filter((c) => c?.name?.includes(searchedTerm))
        .map((c) => (
          <div key={c.name}>
            <div>{c.name}</div>
            <div>{c.gender}</div>
            <div>{c.status}</div>
            <div>{c.species}</div>
          </div>
        ))}
    </div>
  );
}

export default App;
