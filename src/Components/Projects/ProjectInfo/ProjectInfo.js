import React, {useState, useEffect} from 'react';
import './ProjectInfo.css';
import Screenshots from '../Screenshots/Screenshots';
import { CgCloseO } from 'react-icons/cg';


export default function ProjectInfo({project, setCurrentInfo}) {
    const [appeared, setAppeared] = useState(false);
    const techList = project.technologies.map((item) => {
        return <p>{item}</p>
    });

    useEffect(() => {
        setTimeout(() => {setAppeared(true)}, 10);
    }, []);

    const handleClick = () => {
        setAppeared(false);
        setTimeout(() => {
            setCurrentInfo(null);
        }, 200);
        if (window.innerWidth < 480) {
            document.getElementById('projects').scrollIntoView(true);
        }
    }

    const visibleStyle = (window.innerWidth > 480) ? { right: '0' } : {top: '0'};
    const invisibleStyle = (window.innerWidth > 480) ? { right: '-1000px' } : {top: '-1000px'};

        return (
            <div key={project.title} style={(appeared) ? visibleStyle : invisibleStyle} className="ProjectCard">
                <CgCloseO 
                    size="2em" className="closeButton"
                    onClick={handleClick}
                />  
                <h3>{project.title}</h3>
                {(project.screenshots.length > 0) && <Screenshots screenshotList={project.screenshots} />}
                <div className="linkButtons">
                    {(project.code_url) && <a href={project.code_url} target='_blank' rel='noreferrer'><button >GitHub Repository</button></a> }
                    {(project.deployment_url) && <a href={project.deployment_url} target='_blank' rel='noreferrer'><button >Deployed Site</button></a> }
                </div>

                <p>{project.description}</p>
                <div className="techList">
                    {techList}
                </div>
            </div>
        )
}
