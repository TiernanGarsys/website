import './Home.css'
import {ReactComponent as CodeLogo} from '../assets/code.svg';
import {ReactComponent as GithubLogo} from '../assets/github.svg';
import {ReactComponent as InstagramLogo} from '../assets/instagram.svg';
import {ReactComponent as LinkedInLogo} from '../assets/linkedin.svg';
import {ReactComponent as MusicLogo} from '../assets/music.svg';
import {ReactComponent as TwitterLogo} from '../assets/twitter.svg';

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
          <LinkedInLogo />
          <a href="https://www.linkedin.com/in/tiernangarsys/">
            tiernangarsys
          </a>
        </div>
        <div className="mini-cell">
          <TwitterLogo />
          <a href="https://twitter.com/tiernan_garsys">
            tiernan_garsys
          </a>
        </div>
        <div className="mini-cell">
          <GithubLogo />
          <a href="https://github.com/TiernanGarsys">
            tiernangarsys
          </a>
        </div>
        <div className="mini-cell">
          <InstagramLogo />
          <a href="https://www.instagram.com/garsysistic/">
            garsysistic
          </a>
        </div>
      </div>
      <div className="cell">
        <div className="mini-cell">
          <CodeLogo/>
          <a href="https://www.instagram.com/garsysistic/">
            code
          </a>
        </div>
        <div className="mini-cell">
          <MusicLogo/>
          <a href="https://www.instagram.com/garsysistic/">
            music
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
