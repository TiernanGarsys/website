import {Link} from 'react-router-dom';
import {ReactComponent as CodeLogo} from '../assets/code.svg';
import {ReactComponent as ContactLogo} from '../assets/contact.svg';
import {ReactComponent as GithubLogo} from '../assets/github.svg';
import {ReactComponent as InstagramLogo} from '../assets/instagram.svg';
import {ReactComponent as InvaderLogo} from '../assets/invader.svg';
import {ReactComponent as LinkedInLogo} from '../assets/linkedin.svg';
import {ReactComponent as MailLogo} from '../assets/mail.svg';
import {ReactComponent as MusicLogo} from '../assets/music.svg';
import {ReactComponent as TwitterLogo} from '../assets/twitter.svg';

function Home() {
  return (
    <div className="App">
      <div className="cell">
        <div className="mini-cell text">
          welcome to the internet homepage of
          <div className="headtext">
            tiernan garsys
          </div>
        </div>
      </div>
      <div className="cell">
        <div className="title">
          <ContactLogo />
          socials
        </div>
        <div className="mini-cell subtitle">
          <LinkedInLogo />
          <a href="https://www.linkedin.com/in/tiernangarsys/" target="_blank" rel="noreferrer noopener">
            tiernangarsys
          </a>
        </div>
        <div className="mini-cell subtitle">
          <TwitterLogo />
          <a href="https://twitter.com/tiernan_garsys" target="_blank" rel="noreferrer noopener">
            tiernan_garsys
          </a>
        </div>
        <div className="mini-cell subtitle">
          <GithubLogo />
          <a href="https://github.com/TiernanGarsys" target="_blank" rel="noreferrer noopener">
            tiernangarsys
          </a>
        </div>
        <div className="mini-cell subtitle">
          <InstagramLogo />
          <a href="https://www.instagram.com/garsysistic/" target="_blank" rel="noreferrer noopener">
            garsysistic
          </a>
        </div>
        <div className="mini-cell subtitle">
          <MailLogo />
          <a href="mailto:garsystiernan@gmail.com" target="_blank" rel="noreferrer noopener">
            garsystiernan@gmail
          </a>
        </div>
      </div>
      <div className="cell">
        <div className="mini-cell title">
          <CodeLogo />
          code
        </div>
        <div className="mini-cell subtitle">
          UNDER CONSTRUCTION.
        </div>
      </div>
      <div className="cell">
        <div className="title">
          <MusicLogo />
          music
        </div>
        <div className="mini-cell text">
          <MusicLogo />
          <a href="https://soundcloud.com/glasscanon" target="_blank" rel="noreferrer noopener" className="subtitle">
            glass canon
          </a>: beep boop electronic music
        </div>
      </div>
      <div className="cell footnote">
        remember to drink water!
      </div>
    </div>
  );
}

export default Home;
