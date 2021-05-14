import React from 'react'
import '../Styles/Main.scss'

const Main = () =>  {

    return (
        <div className='main'>
            <img src="https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1571165022143-V3SNHRHIH3YX9097I2L5/ke17ZwdGBToddI8pDm48kFvsyJ0Kmni3Em4u-CHCbl97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0m_nwPNs2kYVhoOQZiVFxSYpWTZWrU8D9qSouKWm-gd6YaKbvV_fc7vVcviTKKtgcA/06_480-copy.jpg?format=original"/>
            <div className="main-text">
                <h1>A podcast about culture, travel and relationships.</h1>
                <div className='main-btn'>Listen Now</div>
            </div>


            <div className="main-info">
                <div className='main-info-inner'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1559772841781-IIH5RGD5481YYKXMD58I/ke17ZwdGBToddI8pDm48kL0wnp32zB1vzhXw_2gaBkB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcG3YoAskU7OwaP6hmAtNlPG3UZtxAk_4vRAQSWlrVzQj3puZN32Aa4H3cmpC1xZMQ/image-asset.jpeg?format=750w" />
                    <div className='main-info-text'>
                        <h1>The Paloma Podcast is hosted by Fran Tirado, a writer and speaker on all things queer.</h1>
                        <div>Learn More</div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Main;
