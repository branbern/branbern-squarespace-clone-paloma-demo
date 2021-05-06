import React from 'react'
import '../Styles/ProjectDisplay.scss';

const ProjectDisplay = ({txt, src}) => {
    return (
        <div className='display col-5'>
            <div className='img-box'> 
                <img src={src}/>
            </div>
            <p>{txt}</p>
        </div>
    )
}

export default ProjectDisplay;
