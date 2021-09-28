import React, {useState, useEffect} from 'react';
import './Header.css';
import hamburger from '../../assets/images/Hamburger_icon.png';

export default function Header() {
    const [navVisible, setNavVisible] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 480) {
            setNavVisible(true);
        }
    }, [navVisible]);

    const handleClick = () => {
        if (window.innerWidth <= 480) {
            setNavVisible(false);
        }
    }

    return (
        <>
        <img 
            className="hamburgerIcon"
            src={hamburger}
            alt="hamburger icon"
            style={(navVisible) ? {display: 'none'} : {}}
            onClick={() => setNavVisible(true)}
        />
        <header style={(navVisible) ? {transform: 'translateY(0px)'} : {transform: 'translateY(-200px)'}}>

            <div className="logo" >
                <p><strong>P.LANG WebDev</strong></p>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href='#about' onClick={handleClick}>About</a>
                    </li>
                    <li>
                        <a href='#skills' onClick={handleClick}>Skills</a>
                    </li>
                    <li>
                        <a href='#projects' onClick={handleClick}>Projects</a>
                    </li>
                    {/* <li>
                        Contact + Resume
                    </li> */}
                </ul>
            </nav>
        </header>
        </>
        
    )
}
