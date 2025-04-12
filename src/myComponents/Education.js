import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div className='education-container'>
      <h1>Education</h1> 
      <div className="school">
        <div className="school-item">
          <h3>High School</h3>
          <h5>Tiny Tots' Unique School</h5>
          <p>Board of Secondary Education, Manipur<br></br>(State 8th Position Holder)</p>
        </div>

        <div className="school-item">
          <h3>Higher Secondary</h3>
          <h5>Millennium Institute of Sciences</h5>
          <p>Council of Higher Secondary Education, Manipur</p>
        </div>

        <div className="school-item">
          <h3>College</h3>
          <h5>IIT Ropar</h5>
          <p>Metallurgical & Materials Engineering<br></br>Minor in Electrical Engineering.</p>
        </div>

      </div>
      <div className="skill">
        <h2>Skills</h2>
        <p>Python / Javascript / C / C++</p>
        <p>AI & ML</p>
        <p>MCP / RAG</p>
        <p>LLMs, OpenCV</p>
        <p>React js, HTML / CSS</p>        
        <p>Express js, Flask / Django</p>
        <p>MongoDB, PostgreSQL</p>
        <p>Git / Github</p>
        <p>Firebase</p>
        <p>JWT / OAuth</p>
      </div>

    </div>
  )
}

export default Education
