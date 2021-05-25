import React from 'react'
import '../Styles/ProjectDisplay.scss';

const ProjectDisplay = ({project}) => {

    return (
        <div className='project'>
            <div className='project-wrapper'>
                <div className='project-image'> 
                    <img src={project.Image}/>
                </div>
                <p className='project-date'>{project.DateSimple} • {project.Topics.toString().replace(/,/g, ', ')}</p>
                <h1 className='project-title'>{project.Title}</h1>
                <p className='project-text'>{project.Text}</p>
                <p className='project-enter'>Read More</p>
            </div>
        </div>
    )
}

export default ProjectDisplay;
