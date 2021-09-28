import React, {useState, useEffect} from 'react';
import './ProjectInfo.css';
import Screenshots from '../Screenshots/Screenshots';


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
                <button onClick={handleClick}><strong>Close</strong></button>
                <h3>{project.title}</h3>
                {(project.screenshots.length > 0) && <Screenshots screenshotList={project.screenshots} />}
                {(project.code_url) && <a href={project.code_url} target='_blank' rel='noreferrer'>GitHub Repository</a> }
                {(project.code_url && project.deployment_url) && <span> | </span>}
                {(project.deployment_url) && <a href={project.deployment_url} target='_blank' rel='noreferrer'>Deployed Site</a> }
                <p>{project.description}</p>
                <div className="techList">
                    {techList}
                </div>
            </div>
        )
}
