import React from 'react'
import Slide from '../Comps/Slide'
import '../Styles/Main.scss'

const Main = () =>  {

    const episodes = [
    {Title: 'Episode 01: Slow Travel', Date: 'Apr 24, 2019', 'Text': 'It’s not where you go, it’s what you see once you’re there. Travel slowly and experience more.', Image: 'https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1559324299058-M92DW1ZRABK1UF46UTGF/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/3-copy.jpg?format=500w'},
    {Title: 'Episode 02: Peak CBD', Date: 'May 15, 2019', 'Text': 'CBD is officially in everything now. Is it a wonder ingredient or just another fad?', Image: 'https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1559324286763-RFRJELUXW1L1NOBVFFAN/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/4-copy.jpg?format=500w'},
    {Title: 'Episode 03: Developing a Design Eye', Date: 'May 15, 2019', 'Text': 'You don’t have to be a professional designer to appreciate visual balance and beauty.', Image: 'https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1561903082498-0URRXQJ2A1SO8KK0HSF6/ke17ZwdGBToddI8pDm48kADfnGuywisS9THZ-V-oBXR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUnnWhbAu4ZsAnXeVBI-WEZVhwFpOfY7BYmg6pTPp-OTdyCkb1b6Zgi5IDAmkjIgAQ/10_PAINTS_2_3118.jpg?format=500w'},
    {Title: 'Episode 04: Long Distance', Date: 'May 27, 2019', 'Text': 'What do you do when geography gets in the way of friendship or love?', Image: 'https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1559324263708-WJKFWPLRB1PPMKMVZ4GF/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/6-copy.jpg?format=500w'},
    {Title: 'Episode 05: The Anywhere Workout', Date: 'May 29, 2019', 'Text': 'Design a fitness plan that’s simple and fun and you’ll never miss a workout.', Image: 'https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1559324253469-4HPDLJ43ON9C0NP7VO5G/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/Atlt-1-copy.jpg?format=500w'},
    {Title: 'Episode 06: Staycationing', Date: 'May 29, 2019', 'Text': 'Sometimes the most relaxing place to travel is nowhere at all.', Image: 'https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1559324341545-PCCBGVTY69CSNVWIP1BI/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/_21-copy.jpg?format=500w'}]

    return (
        <div className='main'>
            <img src="https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1571165022143-V3SNHRHIH3YX9097I2L5/ke17ZwdGBToddI8pDm48kFvsyJ0Kmni3Em4u-CHCbl97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0m_nwPNs2kYVhoOQZiVFxSYpWTZWrU8D9qSouKWm-gd6YaKbvV_fc7vVcviTKKtgcA/06_480-copy.jpg?format=original"/>
            <div className="main-text">
                <h1>A podcast about culture, travel and relationships.</h1>
                <div className='main-btn'>Listen Now</div>
            </div>

            <div className='main-episodes'>
                <h1 className='main-episodes-title'>Latest Episodes</h1>
                <Slide data={episodes}/>
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
