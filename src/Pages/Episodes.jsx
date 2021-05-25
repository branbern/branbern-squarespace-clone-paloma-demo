import React from 'react'
import ProjectDisplay from '../Comps/ProjectDisplay'
import '../Styles/Episodes.scss';

const Episodes = ({episodes}) =>  {

    return (
        <div className='episodes'>

            {episodes.reverse().map((episode) => {
                return <ProjectDisplay project={episode}/>
            })}

        </div>)
}

export default Episodes;
