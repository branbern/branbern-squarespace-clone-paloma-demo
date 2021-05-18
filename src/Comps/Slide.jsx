import React, { useState } from 'react';
import ProjectDisplaySlideBox from './ProjectDisplaySlideBox'
import '../Styles/Slide.scss'

const Slide = ({data}) =>  {
    const [episodes, setEpisodes] = useState([data[2], data[1], data[0]]);

 

    return (
        <div className='slide'>
            {episodes.map((episode, i) => {
                return <ProjectDisplaySlideBox project={episode} key={i}/>
            })}
        </div>
        )
}

export default Slide;
