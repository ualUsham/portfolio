import React from 'react'
import './Contact.css'


const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="title">Contact <span>Me</span></div>
            <div className="contacts">
                <div className="social">
                <a href='mailto:2022mmb1392@iitrpr.ac.in'><i className="fa-solid fa-envelope" style={{color: '#5cf64a'}}></i></a>
                <a href='https://www.linkedin.com/in/usham-adhitya-luwang/'><i className="fa-brands fa-linkedin" style={{color: '#5cf64a'}} ></i></a>
                <a href='https://www.instagram.com/adhitya_ual/'><i className="fa-brands fa-instagram" style={{color: '#5cf64a'}} ></i></a>
                <a href='https://github.com/ualUsham'><i className="fa-brands fa-github" style={{color: '#5cf64a'}} ></i></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
