import React from 'react';
import javascript from '../../assets/logos/js-logo.png';
import html from '../../assets/logos/HTML5-logo.png';
import css from '../../assets/logos/CSS3-logo.png';
import reactLogo from '../../assets/logos/react-logo.png';
import reduxLogo from '../../assets/logos/redux-logo.png';
import threejsLogo from '../../assets/logos/threejs-logo.png';
import expressjsLogo from '../../assets/logos/expressjs.png';
import socketIOLogo from '../../assets/logos/socketio-logo.png';
import axiosLogo from '../../assets/logos/axios-logo.svg';
import nodeLogo from '../../assets/logos/node_logo.svg';
import npmLogo from '../../assets/logos/npm-logo.png';
import './Skills.css';

const techReg = [
    {
        title: "JavaScript",
        logo: javascript
    },
    {
        title: "HTML5",
        logo: html
    },
    {
        title: "CSS3",
        logo: css
    },
    {
        title: "React",
        logo: reactLogo
    },
    {
        title: "Redux",
        logo: reduxLogo
    },
    {
        title: "express.js",
        logo: expressjsLogo
    },
    {
        title: "axios",
        logo: axiosLogo
    },
    {
        title: "Node.js",
        logo: nodeLogo
    },
    {
        title: "npm",
        logo: npmLogo
    },
];

const techOther = [
    {
        title: 'Socket.IO',
        logo: socketIOLogo
    },
    {
        title: 'three.js',
        logo: threejsLogo
    },
    {
        title: 'MongoDB',
    },
    {
        title: 'Mongoose',
    },
    {
        title: 'Heroku',
    },
    {
        title: 'GitHub',
    },
    {
        title: 'passport.js',
    },
    {
        title: 'bcrypt',
    }
]

export default function Skills() {

    const regTechList = techReg.map((item) => {
        return (
            <div key={item.title} className='skill-card'>
                {(item.logo) && <img className='skill-logo' src={item.logo} alt={item.title} />}
                <h3>{item.title}</h3>
            </div>
        )
    });

    const occTechList = techOther.map((item) => {
        return (
            <div key={item.title} className='skill-card'>
                {(item.logo) && <img className='skill-logo' src={item.logo} alt={item.title} />}
                <h3>{item.title}</h3>
            </div>
        );
    });

    return (
        <div id="skills">
            <h2>My Skills</h2>
            <div>
                <h3>Technologies I use regularly:</h3>
                <div className='skill-display'>
                    {regTechList}
                </div>
            </div>
            <div>
                <h3>Other technologies I have used:</h3>
                <div className='skill-display'>
                    {occTechList}
                </div>
            </div>
        </div>
    )
}
