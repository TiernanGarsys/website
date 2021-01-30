import Home from './Home';

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
        </Switch>
      </Router>
    );
}

export default App;
