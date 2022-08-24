import { faCss3, faHtml5, faJs, faNodeJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
import sequelize from '../../assets/tech/postgre.png'
import mongoose from '../../assets/tech/mongoose.png'
import python from '../../assets/tech/python.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { faBook } from "@fortawesome/free-solid-svg-icons"


const Skill = ({ tech, percentage }) => {

    const [active, setActive] = useState(false)

    const handleHover = () => {
        setActive(!active)
    }

    const handleTech = () => {
        switch (tech) {
            case 'html':
                return (<FontAwesomeIcon icon={faHtml5} color="#F06529" />)
            case 'css':
                return (<FontAwesomeIcon icon={faCss3} color="#0F5298" />)
            case 'sass':
                return (<FontAwesomeIcon icon={faSass} color="#CD6799" />)
            case 'js':
                return (<FontAwesomeIcon icon={faJs} color="#F0DB4F" />)
            case 'react':
                return (<FontAwesomeIcon icon={faReact} color="#61DBFB" />)
            case 'nodejs':
                return (<FontAwesomeIcon icon={faNodeJs} color="#68A063" />)
            case 'python':
                return ( <img src={ python } alt="express picture" /> )
            case 'express':
                return ( <FontAwesomeIcon icon={faBook} /> )
            case 'mongoose':
                return ( <img src={ sequelize } alt="express picture" /> )
            case 'sequelize':
                return ( <img src={ mongoose } alt="express picture" /> )
            default:
                break;
        }
    }

    return (
        <div className="skill">
            <div className="outer">
                <div className="inner">
                    <span
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                        className="tech-name" >{ handleTech() }</span>
                    <div className={active ? 'number active' : 'number'}>
                        {percentage}
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#aa367c" />
                        <stop offset="100%" stop-color="#4a2fbd" />
                    </linearGradient>
                </defs>
                <circle className={tech} cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
        </div>
    )
}

export default Skill