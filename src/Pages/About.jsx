import React from 'react'
import '../Styles/About.scss';

const About = () =>  {
    return (
        <div className='about'>
            <div className='about-me'>
              <p className='about-text'>Fran Tirado is a writer and speaker. You might know him as the deputy editor of Out, the co-creator of Food 4 Thot, and formerly the executive editor of Hello Mr. He is also generally very loud on <span class='underline'>social media</span>.</p>
            </div>
            <div className='about-sub-wrapper'>
              <img src='https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1561902574874-0TNHDCEXEFFAEJPP4GP2/ke17ZwdGBToddI8pDm48kMDXlOtwm3re7UlQ5O10qWp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Udjg1j6jfIvUychZBYpCKifHtfnQSbNALzA97NQPhKRfkC7MTV4zpKUlQG8_gHGYTQ/fran.jpg?format=750w'/>
              <div className='about-info'>
                <p>Fran lives, works and podcasts from Brooklyn, New York and is available to travel for speaking engagements.</p>
                <p><span className='about-contact'>Contact Fran</span> for more info.</p>
              </div>
            </div>
        </div>) 
}

export default About;
