import './common.css';

import Home from './Home';
import Music from './Music';
import Projects from './Projects';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as _ from 'underscore'

const THEME_NAMES = [
  'cheesecake',
  'cinema',
  'earth',
  'mint',
  'nautilus',
  'eggplant',
  'coffee',
]

function App() {
  const theme = _.sample(THEME_NAMES)    
  document.documentElement.setAttribute('data-theme', theme!)

  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
        </Switch>
      </Router>
    );
}

export default App;
