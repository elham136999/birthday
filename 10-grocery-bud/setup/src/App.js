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
      alertShow(true, "please enter value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      alertShow(true, "edite title", "success");
      setName("");
      setEditId(null);
      setIsEditing(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      alertShow(true, "item added", "success");
    }
  };
  const alertShow = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const clearList = () => {
    setList([]);
    alertShow(true, "empty list", "danger");
  };
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    alertShow(true, "delete Item", "danger");
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };
  return (
    <section className='section-center'>
      <form onSubmit={handlerSubmit} className='grocery-form'>
        {alert.show && <Alert {...alert} removeAlert={alertShow} />}
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
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className='clear-btn' onClick={clearList}>
          clear items
        </button>
      </div>
    </section>
  );
}

export default App;
