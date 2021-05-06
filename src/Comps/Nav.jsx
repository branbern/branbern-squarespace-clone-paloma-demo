import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import '../Styles/Nav.scss';

const Nav = () => {

    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    return (
        <div className='nav-wrapper'>
            <nav className="navbar navbar-expand-lg navbar-light nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Hollie Beaumont</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className={active === '/' ? 'nav-link active': 'nav-link'} onClick={() => setActive('/')}><Link to="/">Work</Link></li>
                    <li className={active === '/about' ? 'nav-link active': 'nav-link'} onClick={() => setActive('/about')}><Link to="/about">About</Link></li>
                    <li className={active === '/contact' ? 'nav-link active': 'nav-link'} onClick={() => setActive('/contact')}><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className="navbar-nav mr-auto my-2 my-lg-0 socials">
                    <li className='nav-link' onClick={() => setActive('/')}><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                    <li className='nav-link' onClick={() => setActive('/')}><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
