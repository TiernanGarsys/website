import './Home.css'
import {ReactComponent as GithubLogo} from '../assets/github.svg';
import {ReactComponent as InstagramLogo} from '../assets/instagram.svg';
import {ReactComponent as TwitterLogo} from '../assets/twitter.svg';
import {ReactComponent as LinkedInLogo} from '../assets/linkedin.svg';

function Home() {
  return (
    <div className="App">
      <div className="cell">
        <div className="subtitle">
          Welcome to the internet homepage of
        </div>
        <div className="title">
          Tiernan Garsys
        </div>
      </div>
      <div className="cell">
        <div className="mini-cell">
          <a href="https://www.linkedin.com/in/tiernangarsys/">
            <LinkedInLogo className="inline" />
            tiernangarsys
          </a>
        </div>
        <div className="mini-cell">
          <a href="https://twitter.com/tiernan_garsys">
            <TwitterLogo className="inline" />
            tiernan_garsys
          </a>
        </div>
        <div className="mini-cell">
          <a href="https://github.com/TiernanGarsys">
            <GithubLogo className="inline" />
            TiernanGarsys
          </a>
        </div>
        <div className="mini-cell">
          <a href="https://www.instagram.com/garsysistic/">
            <InstagramLogo className="inline" />
            garsysistic
          </a>
        </div>
      </div>
      <div className="cell">
        <div className="subtitle">
          Code
        </div>
      </div>
      <div className="cell">
        <div className="subtitle">
          Music
        </div>
      </div>
    </div>
    
  );
}

export default Home;
