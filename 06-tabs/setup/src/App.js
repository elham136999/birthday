import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setloading] = useState(true);
  const [jobs, setjobs] = useState([]);
  const [value, setvalue] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const newJob = await response.json();
    setjobs(newJob);
    setloading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <section className='section loading'>
        <h1>LOADING...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className='section'>
      <div className='title'>
        <h2>expierence</h2>
        <div className='underline'></div>
      </div>
      <div className='job-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button
                className={`job btn ${index === value}`}
                key={job.id}
                onClick={() => setvalue(index)}>
                {job.company}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
