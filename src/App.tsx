import './App.css';
import Home from './Home';
import './themes.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as _ from 'underscore'

const THEME_NAMES = [
  'cheesecake',
  'chrome',
  'cinema',
  'earth',
  'mint',
  'nautilus',
]

function App() {
  const theme = _.sample(THEME_NAMES)    
  document.documentElement.setAttribute('data-theme', theme!)

  return (
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
}

export default App;
