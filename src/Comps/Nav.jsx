import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import '../Styles/Nav.scss';

const Nav = () => {

    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    let links = 'links-black link';
    let donateLink = 'white-donate';
    let underlineColor = 'active-black';


    switch(active) {
        case '/':
            links = 'links-white link'
            donateLink = 'colored-donate'
            break;
        case '/about':
            links = 'links-white link' 
            underlineColor = 'active-white';
            break;
        case '/episodes':
            donateLink = 'colored-donate';
            break;
        case '/blog':
            donateLink = 'colored-donate'
            break;
        case '/contact':
            links = 'links-white link'
            underlineColor = 'active-white';

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
                    <li className={active === '/about' ? `${links} ${underlineColor}` : links} ><Link to="/about" onClick={() => setActive('/about')}>About</Link></li>
                    <li className={active === '/episodes' ? `${links} ${underlineColor}` : links} ><Link to="/episodes" onClick={() => setActive('/episodes')}>Episodes</Link></li>
                    <li className={active === '/blog' ? `${links} ${underlineColor}` : links} ><Link to="/blog" onClick={() => setActive('/blog')}>Blog</Link></li>
                    <li className={active === '/contact' ? `${links} ${underlineColor}` : links} ><Link to="/contact" onClick={() => setActive('/contact')}>Contact</Link></li>
                    <li className={links} onClick={() => setActive('/')}><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                    <li className={links} onClick={() => setActive('/')}><Link to="/"><i className="fab fa-youtube"></i></Link></li>
                    <li className={links} onClick={() => setActive('/')}><Link to="/"><i className="fab fa-facebook"></i></Link></li>
                    <div className={donateLink} >Donate</div>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
