import React, { Fragment, useState } from "react";
import "./App.css";
import UserList from "./UserList";

function App() {
  const [add, setadd] = useState("");
  const [list, setlist] = useState([]);
  const item = (e) => {
    setadd(e.target.value);
  };
  const additem = () => {
    setlist((olditems) => {
      return [...olditems, add];
    });
    setadd("");
  };
  const handledelete = (id) => {
    let items = [...list];
    items.splice(id, 1);
    setlist(items);
  };
  return (
    <>
      <h1>Add a item</h1>
      <input type="text" value={add} placeholder="add a item" onChange={item} />
      <button onClick={additem}>+</button>
      <ol>
        {list.map((items, i) => {
          return (
            <li key={i}>
              {items}
              <button onClick={() => handledelete(i)}>X</button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default App;
