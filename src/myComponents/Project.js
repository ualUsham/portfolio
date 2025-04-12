import React from 'react';
import './Project.css'

const Project = () => {
    return (
        <div className="project-container">
            
            <div className="projects">
                <span>" AIvaluation "</span>
                
                <p>-an Interview App where you can upload your resume and take an AI Interview for free</p>
                
                <a type="button" className='btn btn-outline' href='https://aivaluation.vercel.app/'>Project Link</a>
            </div>

            <div className="projects">
                <span>" Habit Tracker "</span>
                
                <p>-a React app that tracks your daily habits using a visual Calendar</p>
                <br></br>
                <a type="button" className='btn btn-outline' href='https://heinabi-habit-tracker.vercel.app/'>Project Link</a>
            </div>

            <div className="projects">
                <span>" ualBot "</span>
                
                <p>-a telegram bot to generate AI responses & image analysis using Gemini & Node.js</p>
                
                <a type="button" className='btn btn-outline' href='http://t.me/ualushambot'>Project Link</a>
            </div>

            <div className="projects">
                <span>" Amazon AI Assisted FAQ "</span>
                
                <p>-a conversational chatbot based on RAG to assist Amazon customers </p>
                
                <a type="button" className='btn btn-outline' href='https://amazonaiassistedfaq.streamlit.app/'>Project Link</a>
            </div>
            <div className="projects">
                <span>"Skin Disease Treatment"</span>
                
                <p>-a Transfer learning model to predict medications based on uploaded photos</p>
            
                <a type="button" className='btn btn-outline' href='https://github.com/ualUsham/Skin_Disease_Treatment_Recommendation'>Project Link</a>
            </div>
        </div>
    );
};

export default Project;
