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
                <a className="navbar-brand" href="/">Hollie Beaumont</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav">
                    <li className={active === '/about' ? 'nav-link active': 'nav-link'} onClick={() => setActive('/about')}><Link to="/about">About</Link></li>
                    <li className={active === '/episodes' ? 'nav-link active': 'nav-link'} onClick={() => setActive('/episodes')}><Link to="/episodes">Episodes</Link></li>
                    <li className={active === '/blog' ? 'nav-link active': 'nav-link'} onClick={() => setActive('/blog')}><Link to="/blogs">Blogs</Link></li>
                    <li className={active === '/contact' ? 'nav-link active': 'nav-link'} onClick={() => setActive('/contact')}><Link to="/contact">Contact</Link></li>
                    <li className='nav-link' onClick={() => setActive('/')}><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                    <li className='nav-link' onClick={() => setActive('/')}><Link to="/"><i className="fab fa-youtube"></i></Link></li>
                    <li className='nav-link' onClick={() => setActive('/')}><Link to="/"><i className="fab fa-facebook"></i></Link></li>
                    <div className='donate'>Donate</div>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
