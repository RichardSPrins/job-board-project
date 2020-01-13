import React from 'react';
import Navbar from './Components/Navbar/Navbar.component'
import HomePage from './Components/HomePage/HomePage.component'
import {Switch, Route} from 'react-router-dom'
import JobBoardContainer from './Components/JobBoardContainer/JobBoardContainer.component'
import SignUpPage from './Components/SignUpPage/SignUpPage.component';


const DUMMY_DATA = [
  {
    id: 0,
    title: 'Front End Intern',
    snippet: 'Get some valuable on the job experience before college is over!',
    description: "Mixtape street art blue bottle mlkshk, roof party hot chicken neutra kale chips cornhole. Live-edge pabst vegan you probably haven't heard of them unicorn, neutra venmo dreamcatcher church-key gochujang. Franzen you probably haven't heard of them gastropub XOXO schlitz tofu. Crucifix hexagon franzen typewriter. Synth wayfarers gentrify hexagon PBR&B butcher direct trade typewriter. \b Mlkshk sartorial scenester vegan hot chicken health goth four loko church-key kinfolk knausgaard man braid typewriter tumblr. YOLO ugh DIY, tilde subway tile woke kogi hot chicken. Intelligentsia cold-pressed thundercats, adaptogen raclette occupy yr actually cred sriracha meditation vice kale chips. Coloring book banjo enamel pin, organic retro gastropub cloud bread drinking vinegar lyft thundercats.",
    sourceURL: 'www.google.com',
    company: 'Google'
    
  },
  {
    id: 1,
    title: 'Full Stack Developer',
    snippet: 'Full Stack Dev needed for long term contract',
    description: "Mixtape street art blue bottle mlkshk, roof party hot chicken neutra kale chips cornhole. Live-edge pabst vegan you probably haven't heard of them unicorn, neutra venmo dreamcatcher church-key gochujang. Franzen you probably haven't heard of them gastropub XOXO schlitz tofu. Crucifix hexagon franzen typewriter. Synth wayfarers gentrify hexagon PBR&B butcher direct trade typewriter. \b Mlkshk sartorial scenester vegan hot chicken health goth four loko church-key kinfolk knausgaard man braid typewriter tumblr. YOLO ugh DIY, tilde subway tile woke kogi hot chicken. Intelligentsia cold-pressed thundercats, adaptogen raclette occupy yr actually cred sriracha meditation vice kale chips. Coloring book banjo enamel pin, organic retro gastropub cloud bread drinking vinegar lyft thundercats.",
    sourceURL: 'www.linkedIn.com',
    company: 'LinkedIn'
    
  },
  {
    id: 2,
    title: 'Front End Wizard Needed',
    snippet: 'khjsbdfsadfsfgasd',
    description: "Mixtape street art blue bottle mlkshk, roof party hot chicken neutra kale chips cornhole. Live-edge pabst vegan you probably haven't heard of them unicorn, neutra venmo dreamcatcher church-key gochujang. Franzen you probably haven't heard of them gastropub XOXO schlitz tofu. Crucifix hexagon franzen typewriter. Synth wayfarers gentrify hexagon PBR&B butcher direct trade typewriter. \b Mlkshk sartorial scenester vegan hot chicken health goth four loko church-key kinfolk knausgaard man braid typewriter tumblr. YOLO ugh DIY, tilde subway tile woke kogi hot chicken. Intelligentsia cold-pressed thundercats, adaptogen raclette occupy yr actually cred sriracha meditation vice kale chips. Coloring book banjo enamel pin, organic retro gastropub cloud bread drinking vinegar lyft thundercats.",
    sourceURL: 'www.facebook.com',
    company: 'facebook'
    
  },
  {
    id: 3,
    title: 'Back End Dev',
    snippet: 'Django Dev needed for project',
    description: "Mixtape street art blue bottle mlkshk, roof party hot chicken neutra kale chips cornhole. Live-edge pabst vegan you probably haven't heard of them unicorn, neutra venmo dreamcatcher church-key gochujang. Franzen you probably haven't heard of them gastropub XOXO schlitz tofu. Crucifix hexagon franzen typewriter. Synth wayfarers gentrify hexagon PBR&B butcher direct trade typewriter. \b Mlkshk sartorial scenester vegan hot chicken health goth four loko church-key kinfolk knausgaard man braid typewriter tumblr. YOLO ugh DIY, tilde subway tile woke kogi hot chicken. Intelligentsia cold-pressed thundercats, adaptogen raclette occupy yr actually cred sriracha meditation vice kale chips. Coloring book banjo enamel pin, organic retro gastropub cloud bread drinking vinegar lyft thundercats.",
    sourceURL: 'www.uber.com',
    company: 'Uber'
  }
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" />
        <Route path="/register" render={props => <SignUpPage {...props}/> } />
        <Route path="/jobs" render={(props) => <JobBoardContainer {...props} jobs={DUMMY_DATA}/>}/>
      </Switch>
    </div>
  );
}

export default App;
