import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import '../Styles/Nav.scss';

const Nav = () => {

    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    let links = 'links-black link';


    switch(active) {
        case '/':
            links = 'links-white link active'
            break;
        case '/about':
            links = 'links-black link active' 
            break;
        case '/episodes':
            links = 'links-black link active'
            break;
        case '/blog':
            links = 'links-black link active'
            break;
        case '/contact':
            links = 'links-white link active'
            break;

        default: break;
    }
   
    return (
        <div className='nav-wrapper'>
            <nav className="navbar navbar-expand-lg navbar-light nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">Paloma</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav">
                    <li className={links} onClick={() => setActive('/about')}><Link to="/about">About</Link></li>
                    <li className={links} onClick={() => setActive('/episodes')}><Link to="/episodes">Episodes</Link></li>
                    <li className={links} onClick={() => setActive('/blog')}><Link to="/blog">Blog</Link></li>
                    <li className={links} onClick={() => setActive('/contact')}><Link to="/contact">Contact</Link></li>
                    <li className={links} onClick={() => setActive('/')}><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                    <li className={links} onClick={() => setActive('/')}><Link to="/"><i className="fab fa-youtube"></i></Link></li>
                    <li className={links} onClick={() => setActive('/')}><Link to="/"><i className="fab fa-facebook"></i></Link></li>
                    <div className={links} >Donate</div>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
