import React from 'react'
import ProjectDisplay from '../../Comps/ProjectDisplay'
import '../../Styles/Work.scss'

const Work = () =>  {
    return (
    <div>
        <div className="row justify-content-between">
            <ProjectDisplay txt='Clay Ceramics' src='https://images.squarespace-cdn.com/content/v1/5d37161e0198630001386071/1564671878561-T2Q122FSQ1RMLSMU143M/ke17ZwdGBToddI8pDm48kJVSTvS5NKQRREEAlyT7Qt17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UY2FLnfhRrBkVQtC1VzXrd63fFsPMInzN-2uz2fT8ag6Jrp0Q3qRhvCXOPRnHq6klQ/13_20161004S1_CERAMICS_047.jpg?format=1000w'/>
            <ProjectDisplay txt='5Past Watches' src='https://images.squarespace-cdn.com/content/v1/5d37161e0198630001386071/1564673273407-NI2Z1YS7KDZU0UA65IOJ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/1509-10f-01_Watches_Details_0068-RGB.jpg?format=1000w'/>
        </div>
        <div className="row justify-content-between">
            <ProjectDisplay txt='Specialists' src='https://images.squarespace-cdn.com/content/v1/5d37161e0198630001386071/1564673303865-N80GTOGEPM5CZQ3B34UR/ke17ZwdGBToddI8pDm48kNWEijDgOM3qhupCxD6zaoF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hveExjbswnAj1UrRPScjfAvO9Gft18tQs-1jKy_ly9FZSn22QQVyfmA5BW_sN6yjg/06_STILL_LIFE_265_V3_Master_OP2.jpg?format=1000w'/>
            <ProjectDisplay txt='Studio Vega' src='https://images.squarespace-cdn.com/content/v1/5d37161e0198630001386071/1564673344431-I3GOSWAXY1HZAGHKU817/ke17ZwdGBToddI8pDm48kIIi01MzlT6s0Ay7rhSX3Od7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVt_9Kf_zDV337d7QtZV4g8W2Jzsluz8Fln6_Zithp5faxWHsOZ9Sp5tdeSL6PL17g/Stocksy_txp46315712VFE200_Large_2317055.jpg?format=1000w'/>
        </div>
        <div className="row justify-content-between">
            <ProjectDisplay txt='Sackett Woodworking' src='https://images.squarespace-cdn.com/content/v1/5d37161e0198630001386071/1564679197010-KR4K85LMTHLKM7DV3REH/ke17ZwdGBToddI8pDm48kM4hVnc8kBimH-s8itOnGXF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UeinEv7oYSK84LaPxbB_97DCBh52nANhYiNv4CVkV8vbELQUv11dQuHZj93ZCN1-8g/1509-07i-07_Build_It_Details_2_0385-RGB.jpg?format=1000w'/>
            <ProjectDisplay txt='Crosby Nursery' src='https://images.squarespace-cdn.com/content/v1/5d37161e0198630001386071/1564678998966-PZO62YB0EYQN8HFOSHV7/ke17ZwdGBToddI8pDm48kH0gRy6RMW20rIGs2o2LxkZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUBI5LO1F8pYgtpMoef6HrH2KqEu2QkizOgSNEaSslFdVui_uwT1L0qH0SjV2jNRDA/Header_04_008-copy.jpg?format=1000w'/>
        </div>


        <div className='wrap'>
            <h3>Hollie Beaumont is a photographer and art director based in London. She shoots a diverse range of subjects for commercial and editorial clients, all with a clean and elegant aesthetic.</h3>
            <h3 style={{textDecoration: 'underline', paddingTop: 20}}>Let's work together.</h3>
        </div>

    </div>)
}

export default Work;
