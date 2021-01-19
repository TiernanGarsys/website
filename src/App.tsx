import * as _ from 'underscore'
import './App.css';

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
    <div className="App">
      <div className="centered">
        <div className="pod">
          <div className="subtitle">
            You've found the internet homepage of
          </div>
          <div className="title">
            Tiernan Garsys
          </div>
        </div>
      </div>
      <div className="centered">
        <div className="pod">
          <div className="subtitle">
            About
          </div>
        </div>
      </div>
      <div className="centered">
        <div className="pod">
          <div className="subtitle">
            Code
          </div>
        </div>
      </div>
      <div className="centered">
        <div className="pod">
          <div className="subtitle">
            Music
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
