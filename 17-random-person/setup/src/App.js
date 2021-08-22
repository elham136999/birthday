import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const { age } = person.dob;
    const { number, name } = person.location.street;
    const newperson = {
      phone,
      email,
      image,
      password,
      age,
      name: `${first}${last}`,
      street: `${number}${name}`,
    };
    setPerson(newperson);
    setLoading(false);
    setTitle("name");
    setValue(newperson.name);
  };
  useEffect(() => {
    getPerson();
  }, []);
  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newvalue = e.target.dataset.lable;
      setValue(person[newvalue]);
      setTitle(newvalue);
    }
  };

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={(person && person.image) || defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className='user-title'>my {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button
              className='icon'
              data-lable='name'
              onMouseOver={handleValue}>
              <FaUser />
            </button>
            <button
              className='icon'
              data-lable='email'
              onMouseOver={handleValue}>
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-lable='age' onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-lable='password'
              onMouseOver={handleValue}>
              <FaLock />
            </button>
            <button
              className='icon'
              data-lable='street'
              onMouseOver={handleValue}>
              <FaMap />
            </button>
            <button
              className='icon'
              data-lable='phone'
              onMouseOver={handleValue}>
              <FaPhone />
            </button>
          </div>
          <button className='btn' type='button'>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
