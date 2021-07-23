import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [editId, setEditId] = useState(null);
  const [list, setList] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //code
    } else if (name && isEditing) {
      //code
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList(...list, newItem);
      setName("");
    }
  };
  return (
    <section className='section-center'>
      <form onSubmit={handlerSubmit} className='grocery-form'>
        {alert.show && <Alert />}
        <h3>grocery BUD</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder='e.g.  eggs'
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? "EDIT" : "SUBMIT"}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List items={list} />
        <button className='clear-btn'> clear items</button>
      </div>
    </section>
  );
}

export default App;
