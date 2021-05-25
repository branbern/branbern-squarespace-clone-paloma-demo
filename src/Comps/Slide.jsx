import React, { useState } from 'react';
import ProjectDisplaySlideBox from './ProjectDisplaySlideBox'
import '../Styles/Slide.scss'

// TODO: I still need to implement the slide animation!

const Slide = ({data}) =>  {
    const [episodes, setEpisodes] = useState(data.slice(3, 6).reverse());
    const [Shift, setShift] = useState(false);


    const ShiftSlide = (direction) => {
        if (direction == 'left') {
            setEpisodes(data.slice(3, 6).reverse())
        } else {
            setEpisodes(data.slice(0, 3).reverse())
        }
        setShift(!Shift)
    }


    console.log(episodes)
    return (
        <div className='slide'>
            <div className='slide-controls'><i className={Shift ? "not-active fas fa-chevron-left" : 'active fas fa-chevron-left'} onClick={() => ShiftSlide('left')}></i><i class={Shift ? "active fas fa-chevron-right" : 'not-active fas fa-chevron-right'} onClick={() => ShiftSlide('right')}></i></div>
            <div className='slide-projects'>
                {episodes.map((episode, i) => {
                    return <ProjectDisplaySlideBox project={episode} key={i}/>
                })}
            </div>
        </div>
        )
}

export default Slide;
