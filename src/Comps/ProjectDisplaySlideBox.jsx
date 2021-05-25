import React from 'react'
import useState from 'react'
import '../Styles/ProjectDisplaySlideBox.scss'

const ProjectDisplaySlideBox = ({project}) =>  {

    return (
        <div className='project'>
            <div className='project-image'> 
                <img src={project.Image}/>
            </div>
            <span className='project-date'>{project.DateNormal}</span>
            <h1 className='project-title'>{project.Title}</h1>
            <p className='project-text'>{project.Text}</p>
        </div>
        )
}

export default ProjectDisplaySlideBox;
