import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <footer>
        <ul className="social-icons" >
            <li>
                <a href="#" target="_blank">
                    <FontAwesomeIcon className="github" icon={ faGithub } />
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <FontAwesomeIcon className="linkedin" icon={ faLinkedin } />
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <FontAwesomeIcon className="twitter" icon={ faTwitter } />
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer


// https://github.com/DVDLC
// https://www.linkedin.com/in/david-lagunes-cisneros-564753172/
// https://twitter.com/DLC_97