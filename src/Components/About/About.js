import React from 'react';
import portrait from '../../assets/images/self2.jpg';
import './About.css';

export default function About() {
    return (
        <div id="about">
            
            <div className='about'> 
                <div>
                    <img src={portrait} alt="Patrick Lang" />
                </div>
                <div className='aboutInfo'>
                    <h2>About Me</h2>
                    <p>I am a self-taught web developer working to break into the industry. I'm constantly working to expand my skillset. I enjoy both both frontend and backend challenges, and, as a former language instructor, and interesting in learning more about NLP and manipulating language digitally!</p>

                    <p><a href="https://github.com/patricklang87" target="_blank" rel='noreferrer'>GitHub</a> | <a href="https://www.linkedin.com/in/pslang/" target="_blank" rel='noreferrer' >LinkedIn</a>
                    {/* | <a href="/documents/Lang_Patrick_Resume_20210908.pdf" download>PDF Resume</a> */}
                    </p>
                    <p>Write to me: patricklang87 @ gmail.com</p>
                </div>    
            </div>
            
        </div>
    )
}
