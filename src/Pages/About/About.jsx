import React from 'react'
import '../../Styles/About.scss';

const About = () =>  {
    return (
        <div className='about'>
          <div className='about-intro'>
              <h3>Hollie Beaumont is a photographer and art director based in London. She shoots a diverse range of subjects for commercial and editorial clients, all with a clean and elegant aesthetic.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Bibendum est ultricies integer quis auctor. Convallis tellus id interdum velit laoreet id donec. Vestibulum lectus mauris ultrices eros in. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut.</p>
          </div>

          <div className="row">
            <div className="col bold">Services</div>
            <div className="col bold">Clients</div>
          </div>
          <div className="row">
            <div className="col">Photography</div>
            <div className="col">Example Client</div>
          </div>
          <div className="row">
            <div className="col">Art Direction</div>
            <div className="col">Example Client</div>
          </div>
          <div className="row">
            <div className="col">Photo retouching</div>
            <div className="col">Example Client</div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col">Example Client</div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col">Example Client</div>
          </div>
        </div>)
}

export default About;
