import React from 'react'
import {Link} from "react-router-dom";

import '../Styles/Info.scss';

const Info = () => {
    return (
        <div className='info'>
            <div className='info-contents'>
                <li className='nav-link'><Link to="/episodes">Episode</Link></li>
                <li className='nav-link'><Link to="/about">About</Link></li>
                <li className='nav-link'><Link to="/about">Donate</Link></li>
                <div className="break"></div>
                <p>Made with my <span className='skills'>Skillz</span></p>
                <div className="break"></div>
                <li className='nav-link social' ><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                <li className='nav-link social' ><Link to="/"><i className="fab fa-youtube"></i></Link></li>
                <li className='nav-link social' ><Link to="/"><i className="fab fa-facebook"></i></Link></li>
            </div>
        </div>
       
    )
}

export default Info;
