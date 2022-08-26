import { faEmpire } from "@fortawesome/free-brands-svg-icons"
import { faArrowDown, faJedi, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import SkillsBar from "./helpers/skillsBars"


const Skills = () => {

    const [ openFront, setOpenFront ] = useState( false )
    const [ openBack, setOpenBack ] = useState( false )

    const Frontedskills = [{
            tech: 'html',
            percentage: '90%'
        }, {
            tech: 'css',
            percentage: '70%'
        }, {
            tech: 'sass',
            percentage: '50%'
        }, {
            tech: 'js',
            percentage: '85%'
        }, {
            tech: 'react',
            percentage: '65%'
        }
    ]

    const BackendSkills = [
        {
            tech: 'nodejs',
            percentage: '90%'
        }, {
            tech: 'express',
            percentage: '100%'
        }, {
            tech: 'python',
            percentage: '50%'
        }, {
            tech: 'mongoose',
            percentage: '90%'
        }, {
            tech: 'sequelize',
            percentage: '90%'
        }
    ]

    const handlerOpenBack = () => {
        setOpenBack( !openBack )
        setOpenFront( false )
    }

    const handlerOpenFront = () => {
        setOpenFront( !openFront )
        setOpenBack( false )
    }

    return (
        <section className="skills_container">
            {/* <img src={} alt="david thinking" /> */}
            <div className="info-skills">
                <h1>Skills</h1>
                <h2>My technical level</h2>
            </div>
            <div className="skill-bars">
                <div className="skill-tech" >
                    <div 
                        className="menu"
                        onClick={ handlerOpenFront }
                    >
                            <h2>
                                Frontend
                                <FontAwesomeIcon className="icon-bars" icon={ faJedi } color="#ffd700" />
                            </h2>
                            <FontAwesomeIcon icon={ faArrowDown } color='#fff'/>
                        </div>
                        {
                            Frontedskills.map(( data, idx ) => (
                                <SkillsBar 
                                    key={ idx } 
                                    tech={ data.tech }
                                    state={ openFront }
                                />
                            ))
                        }
                    </div>
                <div className="skill-tech" >
                    <div 
                        className="menu"
                        onClick={ handlerOpenBack }
                    >
                        <h2>
                            Backend
                            <FontAwesomeIcon className="icon-bars" icon={ faEmpire } color="#ffd700" />
                        </h2>
                        <FontAwesomeIcon icon={ faArrowDown } color='#fff'/>
                    </div>
                    {
                        BackendSkills.map(( data, idx ) => (
                            <SkillsBar 
                                key={ idx } 
                                tech={ data.tech }
                                state={ openBack }
                            />
                        ))
                    }
                </div>
            </div>
           
        </section>

    )
}

export default Skills
