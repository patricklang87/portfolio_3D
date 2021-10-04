import './Hero.css';
import React from 'react'

export default function Hero() {
    return (
        <div className="Hero">
            <div className="heroMessage">
                <h1>
                    Hi! I'm Patrick Lang.
                </h1>
                <h2>
                    I'm a full stack developer & natural language enthusiast who loves solving interesting problems.
                </h2>
                <a href="#contact">
                    <button>
                        Get in touch!
                    </button> 
                </a>
            </div>
        </div>
    )
}
