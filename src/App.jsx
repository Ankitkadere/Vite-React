import React, { useState } from "react";
import "./App.css";

function App() {
  const [todolist, settodolist] = useState([]);

  const saveToDoList = (event) => {
    event.preventDefault();
    const toname = event.target.toname.value;

    if (!todolist.includes(toname)) {
      const finalDolist = [...todolist, toname];
      settodolist(finalDolist);
      event.target.reset();
    } else {
      alert("Already Exists...");
    }
  };

  const deletebox = (index) => {
    const newList = todolist.filter((_, i) => i !== index);
    settodolist(newList);
  };

  return (
    <div>
      <div className="main">
        <h1>My Application</h1>
        <form onSubmit={saveToDoList}>
          <input
            type="text"
            name="toname"
            placeholder="Enter a task"
            required
          />
          <button type="submit">Save</button>
        </form>
      </div>
      <div className="outerdiv">
        <ul>
          {todolist.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <span onClick={() => deletebox(index)} className="cross">
                DELETE
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
