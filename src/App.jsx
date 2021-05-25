import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Main from './Pages/Main'
import About from './Pages/About'
import Episodes from './Pages/Episodes'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'

import Info from './Comps/Info';
import Nav from './Comps/Nav';
import './Styles/App.css';

const App = () => {


  const episodes = [
    {
        Topics: ['Travel'], 
        Title:  'Episode 01: Slow Travel', 
        DateNormal: 'Apr 24, 2019', 
        DateSimple: '4/24/19', 
        Text: 'It’s not where you go, it’s what you see once you’re there. Travel slowly and experience more.', 
        Image: 'https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1559324299058-M92DW1ZRABK1UF46UTGF/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/3-copy.jpg?format=500w'},
    {
        Topics: ['Culture', 'Health'], 
        Title:  'Episode 02: Peak CBD', 
        DateNormal: 'May 15, 2019', 
        DateSimple: '5/15/19', 
        Text: 'CBD is officially in everything now. Is it a wonder ingredient or just another fad?', 
        Image: 'https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1559324286763-RFRJELUXW1L1NOBVFFAN/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/4-copy.jpg?format=500w'},
    {
        Topics: ['Culture'], 
        Title:  'Episode 03: Developing a Design Eye', 
        DateNormal: 'May 15, 2019', 
        DateSimple: '5/15/19', 
        Text: 'You don’t have to be a professional designer to appreciate visual balance and beauty.', 
        Image: 'https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1561903082498-0URRXQJ2A1SO8KK0HSF6/ke17ZwdGBToddI8pDm48kADfnGuywisS9THZ-V-oBXR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUnnWhbAu4ZsAnXeVBI-WEZVhwFpOfY7BYmg6pTPp-OTdyCkb1b6Zgi5IDAmkjIgAQ/10_PAINTS_2_3118.jpg?format=500w'},
    {
        Topics: ['Relationships'], 
        Title:  'Episode 04: Long Distance', 
        DateNormal: 'May 27, 2019', 
        DateSimple: '5/27/19', 
        Text: 'What do you do when geography gets in the way of friendship or love?', 
        Image: 'https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1559324263708-WJKFWPLRB1PPMKMVZ4GF/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/6-copy.jpg?format=500w'},
    {
        Topics: ['Health'], 
        Title:  'Episode 05: The Anywhere Workout', 
        DateNormal: 'May 29, 2019', 
        DateSimple: '5/29/19', 
        Text: 'Design a fitness plan that’s simple and fun and you’ll never miss a workout.', 
        Image: 'https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1559324253469-4HPDLJ43ON9C0NP7VO5G/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/Atlt-1-copy.jpg?format=500w'},
    {
        Topics: ['Travel'], 
        Title:  'Episode 06: Staycationing', 
        DateNormal: 'May 29, 2019', 
        DateSimple: '5/29/19',  
        Text: 'Sometimes the most relaxing place to travel is nowhere at all.', 
        Image: 'https://images.squarespace-cdn.com/content/v1/5cee9df5880cbc000150d93b/1559324341545-PCCBGVTY69CSNVWIP1BI/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/_21-copy.jpg?format=500w'}]

    const blogs = [
      { Date: '8/14/19',Title: 'Backpacking through Europe'},
      { Date: '8/14/19',Title: 'Big City vs. Small Town' },
      { Date: '3/11/19',Title: 'Music & Mood'},
      { Date: '8/11/19',Title: 'My Morning Routine'},
      { Date: '8/11/19',Title: 'Productive Habits'},
      { Date: '8/11/19',Title: 'Top 10 Places to Visit'},
    ]
  return (
    <Router>
      <Nav data={episodes}/>
      <Switch>
        <Route path="/" exact render={() => (
                                      <Main episodes={episodes} />
                                    )}/>
        <Route path="/about" exact component={About} />
        <Route path="/episodes" exact render={() => (
                                      <Episodes episodes={episodes} />
                                    )}/>
        <Route path="/blog" exact render={() => (
                                      <Blog blogs={blogs} />
                                    )}/>
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Info />
    </Router>
  )}

export default App;