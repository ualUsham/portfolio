import React, { useState } from 'react';
import './resume.css'

const Resume = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState('');

    const handleAsk = async () => {
        if (!question) return;
        setLoading(true);
        try {
            const res = await fetch('https://portfolio-z1pb.onrender.com/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question }),
            });

            const data = await res.json();
            setResponse(data.answer);
            setQuestion('');
            setLoading(false);
        } catch (error) {
            setResponse("Error: Could not fetch answer.");
            setLoading(false);
        }
    };

    return (
        <div className='resume-container' >
            <h1>Resume</h1>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="d-flex flex-column justify-content-between align-items-center text-center">
                    <div className="d-flex flex-column justify-content-between align-items-center text-center p-4 answer">
                        <div className="mb-4">
                            <div className="input-group ask">
                                <input type="text" className="form-control" placeholder="Ask my Resume..." value={question} onChange={(e) => setQuestion(e.target.value)} />

                                <button className="btn btn-lg" id="ask" onClick={handleAsk} disabled={loading}>
                                    {loading ? (<div className="spinner-border spinner-border-sm text-light" role="status"></div>)
                                        : ('Ask')}
                                </button>

                            </div>
                        </div>

                        {response && (
                            <div className='response mt-3 p-3'>{response} </div>
                        )}

                    </div>

                    <a href="/resume-UshamAdhityaLuwang.pdf" download className="btn btn-lg mt-5" id='download' style={{ maxWidth: '300px' }} >Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
