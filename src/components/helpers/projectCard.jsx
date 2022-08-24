import { faCss3, faHtml5, faJs, faReact, faSass, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProjectCard = ({ proyectInfo, dinamicClass }) => {

    const { img, name, desc, link, dl, tech } = proyectInfo

    const iconTech = ( icon ) => {
        switch ( icon ) {
            case 'html':
                return faHtml5
            case 'css':
                return faCss3
            case 'js':
                return faJs
            case 'nodejs':
                return faNodeJs
            case 'sass':
                return faSass
            case 'react':
                return faReact        
            case 'db':
                return faDatabase 
            default:
                break;
        }
    }

    return (
        <div className={ `card ${ dinamicClass }` } >
            <div className="face front">
                <img src={ img } alt="proyect image" />
                <h3>{ name }</h3>
            </div>
            <div className="face back">
                <h3>{ name }</h3>
                <p>{ desc }</p>
                <div className="link">
                    <a href={ dl || link  } target="_blank" >
                        {
                            dl
                                ? 'Download'
                                : 'Open'
                        }
                    </a>
                </div>
                <div className="tecnologies">
                    {
                        tech.map( ability => (
                            ability === 'nodejs' 
                                ? <a target='_blank' href={ link } key={ `${ ability }_icon` } > <FontAwesomeIcon className={`tech-icon ${ability}`} icon={ iconTech( ability ) } color="#fafafa" /></a>
                                :  <FontAwesomeIcon className={`tech-icon ${ability}`} icon={ iconTech( ability ) } color="#fafafa" key={ `${ ability }_icon` } />
                           
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard