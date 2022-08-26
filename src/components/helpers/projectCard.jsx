import { faCss3, faHtml5, faJs, faReact, faSass, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const ProjectCard = ({ proyectInfo }) => {

    const { img, name, desc, link, dl, tech, dev } = proyectInfo
    const [ isVisible, setIsVisible ] = useState( false )

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

    const handleModalVisible = () => {
        setIsVisible( true )
    }

    const handleModalInvisible = () => {
        setIsVisible( false )
    }

    return (
        <>  
            <div className="modal"
                style={ isVisible? { visibility: 'visible' }: { visibility: 'hidden' }}
            >
                <div 
                    className="card-modal"
                >
                    <FontAwesomeIcon 
                        id="close" icon={ faX } 
                        color='#c63637'
                        onClick={ handleModalInvisible }
                    />
                    <div className="project-details">
                        <img src={ img } alt="project image" />
                    </div>
                    <div className="modal-info">
                        <h2>{ name.toUpperCase() }</h2>
                        <p>{ desc }</p>
                        <a 
                            href={ dl || link  } 
                            target="_blank" 
                        >
                        {
                                dl
                                    ? 'Download'
                                    : 'Open'
                            }
                        </a>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="card-img">
                    <img src={ img } alt="project image" />
                    <div 
                        className="overlay"
                        onClick={ handleModalVisible }
                    >
                        <a className="details">DETAILS</a>
                    </div>
                </div>
                <div className="detail-box">
                    <div className="project-name">
                        <a href={dl} target='_blank'>{ name.toUpperCase() }</a>
                        <span>{dev}</span>
                    </div>
                    <div className="tech-container" >
                        {
                            tech.map( ability => (
                                ability === 'nodejs' 
                                    ? <a 
                                        target='_blank' 
                                        href={ link } 
                                        key={ `${ ability }_icon` } 
                                        > 
                                            <FontAwesomeIcon className={`tech-icon ${ability}`} icon={ iconTech( ability ) } color="#fafafa" />
                                        </a>
                                    :  <FontAwesomeIcon 
                                            className={`tech-icon ${ability}`} 
                                            icon={ iconTech( ability ) } 
                                            color="#fafafa" 
                                            key={ `${ ability }_icon` } 
                                        />
                                
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )   
}

export default ProjectCard




        // <div className={ `card ${ dinamicClass }` } >
        //     <div className="face front">
        //         <img src={ img } alt="proyect image" />
        //         <h3>{ name }</h3>
        //     </div>
        //     <div className="face back">
        //         <h3>{ name }</h3>
        //         <p>{ desc }</p>
        //         <div className="link">
        //             <a href={ dl || link  } target="_blank" >
        //                 {
        //                     dl
        //                         ? 'Download'
        //                         : 'Open'
        //                 }
        //             </a>
        //         </div>
        //         <div className="tecnologies">
        //             {
        //                 tech.map( ability => (
        //                     ability === 'nodejs' 
        //                         ? <a target='_blank' href={ link } key={ `${ ability }_icon` } > <FontAwesomeIcon className={`tech-icon ${ability}`} icon={ iconTech( ability ) } color="#fafafa" /></a>
        //                         :  <FontAwesomeIcon className={`tech-icon ${ability}`} icon={ iconTech( ability ) } color="#fafafa" key={ `${ ability }_icon` } />
                           
        //                 ))
        //             }
        //         </div>
        //     </div>
        // </div>