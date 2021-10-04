import React from 'react';
import portrait from '../../assets/images/self2.jpg';
import './About.css';
import Skills from '../Skills/Skills';

export default function About() {
    return (
        <div id="about">           
            <div className='about'> 
                <div className='aboutInfo'>
                    <h2>A little about me... </h2>
                    <p>I am a self-taught web developer working to become a professional programmer. I'm constantly expanding my skillset by delving into tutorials and developing my own projects. I enjoy both frontend and backend challenges, and, as a former language instructor, am interested in learning more about NLP and manipulating language digitally!</p>
                    {/* | <a href="/documents/Lang_Patrick_Resume_20210908.pdf" download>PDF Resume</a> */}
                </div>
                <div class="aboutPortrait">
                    <img src={portrait} alt="Patrick Lang" />
                </div>    
            </div>
            <Skills />
        </div>
    )
}
