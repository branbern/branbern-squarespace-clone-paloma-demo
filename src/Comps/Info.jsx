import React from 'react'
import '../Styles/Info.scss';

const Info = () => {
    return (
        <div className='info'>
            <div className='info-contents'>
                <p>email@email.com</p>
                <p>(555) 555-5555</p>

                <p className='credits'>Made with my <u>skillzzz</u></p>
            </div>
        </div>
       
    )
}

export default Info;
