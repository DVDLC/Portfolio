import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import profilePic  from "../assets/profile.png"
import cvFile from '../assets/Le-Invito-a-leer-mi-CV.pdf'

const About = () => {
  return (
    <section className="about_section" >
          <h2 className="title" >ABOUT ME</h2>
          <span className="subtitle" >My Introduction</span>
        <div className="about_container">
            <img src={ profilePic } alt="profile picture" className="about_profile" />
            <div className="about_data">
                <p className="description">
                    I am a civil engineering student and passionate about programming.
                    I specialized in web development with one year of experience in designing pioneering applications.
                    With greater interest and experience in Backend development
                    Expert in teamwork and independent problem-solving.
                </p>
                <div className="about_info">
                    <div>
                        <span className="info_title">+1</span>
                        <span className="info_name">year <br />expirence</span>
                    </div>
                    <div>
                        <span className="info_title">+10</span>
                        <span className="info_name">Completed <br />projects</span>
                    </div>
                </div>
                <div className="about_btn">
                        <a 
                            className="btn-flex" 
                            download="DAVID_CV.pdf" 
                            href={ cvFile } 
                        >
                            Download CV <FontAwesomeIcon className="btn_icon" icon={ faDownload } />
                        </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About