import React from 'react';
import './Home.css';

const Home = () => { 
    return (
        <div className='home-container'>
            <div className='image-container'>
            <img src='/home/home1.jpeg' alt='homeimage1' />
                <img src='/home/home2.jpg' alt='homeimage2' />
                
            </div>
            <div className='content'>
                <h3><span>Hi<span className="wave">👋</span></span> It's&nbsp;<span> U A L ...</span></h3>

                <h1>I'm a <ol>
                    <li><span>Student</span></li>
                    <li><span>Developer</span></li>
                    <li><span>Engineer</span></li>
                    <li><span>Explorer</span></li>
                </ol>
                </h1>
                <p>Currently pursuing <span>B.Tech</span> degree at the prestigious institution of <span>IIT Ropar</span>, I am a <span>Techie </span>exploring the boundless realms of<span> AI</span> and<span> Web Development</span>. 
                I'm <span>super thrilled</span> to connect with you and can't wait for an engaging and productive interaction. <span>Welcome</span> to this intriguing <span>Portfolio !!</span>  </p>
                <a href='#resume'><button className="btn btn-lg mt-5 mb-2 mx-4 ps-3 " >Resume &gt;&gt;&gt;</button></a>
            </div>
        </div>
    )
}

export default Home
