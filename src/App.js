import React, {useState, useRef, useEffect} from 'react';
import CVProject from './components/CVProject';
import './components/styles.css';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "detailed.details"

function App() {
  const [details, enroll] = useState([])
  const detailName = useRef()
  const detailEmail = useRef()
  const detailNum = useRef()

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(details))
  }, [details])

  function handleDetails(e) {
    const name = detailName.current.value
    const email = detailEmail.current.value
    const num = detailNum.current.value

    if (name === '') return
    enroll(prev => {
      return [...prev, {id: uuidv4(), name: name, email: email, num: num}]
    })

    detailName.current.value = null
    detailEmail.current.value = null
    detailNum.current.value = null
  }

  return (
    <>
      <CVProject details={details} />
      <h1 className='App'>CV Project</h1><br/>
      Name: <input ref={detailName} type="text" /><br />
      Email: <input ref={detailEmail} type="text" /><br />
      Phone number: <input ref={detailNum} type="text" /><br />
      <button onClick={handleDetails}>Submit</button>
      <section>
        <h2>Educational experience:</h2><br />
        School: <input type="text" /><br />
        Degree: <input type="text" /><br />
        Field of study: <input type="text" /><br />
        Start date: <input type="date" /><br />
        End date (or expected): <input type="date" /><br />
        <button onClick={handleDetails}>Submit</button>
      </section>
      <section>
        <h2>Work experience:</h2><br />
        Title: <input type="text" /><br />
        Employment type: <select name="Employment" id="employments">
          <option value="" disabled selected hidden>Please select</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Self-employed">Self-employed</option>
          <option value="Freelance">Freelance</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
          <option value="Apprenticeship">Apprenticeship</option>
          <option value="Seasonal">Seasonal</option>
        </select><br />
        Company name: <input type="text" /><br />
        Location: <input type="text" /><br />
        Start date: <input type="date" /><br />
        End date: <input type="date" /><br />
        Industry: <input type="text" /><br /><br />
        Description: <textarea id="description" name="description" rows="4" cols="50"/><br />
        <button onClick={handleDetails}>Submit</button>
      </section>
    </>
  )
}

export default App;
