import { faBook, faCode, faDatabase, faL } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"
import Skill from "./helpers/skill"


const Skills = () => {

    const [ openFront, setOpenFront ] = useState( false )
    const [ openBack, setOpenBack ] = useState( false )
    const [ openOthers, setOpenOthers ] = useState( false )
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
        setOpenOthers( false )
    }

    const handlerOpenFront = () => {
        setOpenFront( !openFront )
        setOpenBack( false )
        setOpenOthers( false )
    }

    const handlerOpenOthers = () => {
        setOpenOthers( !openOthers )
        setOpenFront( false )
        setOpenBack( false )
    }
  


    return (
        <section className="skills_container">
           
        </section>

    )
}

export default Skills


 // <section className="skills_container">
        //      <div className="text-zone">
        //         <h1>
        //             Skills
        //         </h1>
        //         <h2>My technical level</h2>
        //     </div>
        //     <div>
        //         <div className="skills_content" >
        //             <div 
        //                 className="skills_header"
        //                 onClick={ handlerOpenFront }    
        //             >
        //                 <FontAwesomeIcon className="skills-icon" icon={faCode} />
        //                 <div>
        //                     <h1 className="skills_title" >Frontend</h1>
        //                 </div>
        //             </div>
        //             <div className={ openFront? "sk-container open": "sk-container close" }>
        //                 {
        //                     Frontedskills.map((skill, idx) => (
        //                         <Skill
        //                             tech={skill.tech}
        //                             percentage={skill.percentage}
        //                             key={`${skill.tech}_${idx}`}
        //                         />
        //                     ))
        //                 }
        //             </div>
        //         </div>
        //         <div className="skills_content" >
        //             <div 
        //                 className="skills_header"
        //                 onClick={ handlerOpenBack }
        //             >
        //                 <FontAwesomeIcon className="skills-icon" icon={faDatabase} />
        //                 <div>
        //                     <h1 className="skills_title" >Backend</h1>
        //                 </div>
        //             </div>
        //             <div className={ openBack? "sk-container open": "sk-container close" }>
        //                 {
        //                     BackendSkills.map((skill, idx) => (
        //                         <Skill
        //                             tech={skill.tech}
        //                             percentage={skill.percentage}
        //                             key={`${skill.tech}_${idx}`}
        //                         />
        //                     ))
        //                 }
        //             </div>
        //         </div>
        //         <div className="skills_content" >
        //             <div 
        //                 className="skills_header"
        //                 onClick={ handlerOpenOthers }
        //             >
        //                 <FontAwesomeIcon className="skills-icon" icon={ faBook } />
        //                 <div>
        //                     <h1 className="skills_title" >Others...</h1>
        //                 </div>
        //             </div>
        //             <div className= { openOthers? "sk-container open": "sk-container close" } >
        //                <img 
        //                     src="https://firebasestorage.googleapis.com/v0/b/portfolio-img-5d1bb.appspot.com/o/Technologies%2Fazur.png?alt=media&token=0e6fe136-8f22-4ad6-a45d-9e4a2d0e1c01" 
        //                     alt="azure picture" 
        //                 />
        //                 <img
        //                     src="https://firebasestorage.googleapis.com/v0/b/portfolio-img-5d1bb.appspot.com/o/Technologies%2Fkisspng-firebase-cloud-messaging-google-cloud-messaging-ap-5ceed4e7807469.1362716115591559435262.png?alt=media&token=0b4f04a0-2238-4904-a34b-fc943f44320b"
        //                     alt="firebase-picture"
        //                 />
        //                 <img
        //                     src="https://firebasestorage.googleapis.com/v0/b/portfolio-img-5d1bb.appspot.com/o/Technologies%2Fbootstrap.png?alt=media&token=c6d66e44-9a53-4601-9258-06c346d2dd08"
        //                     alt="boostrap picture"
        //                 />
        //                 <img
        //                     src="https://firebasestorage.googleapis.com/v0/b/portfolio-img-5d1bb.appspot.com/o/Technologies%2Fgit.png?alt=media&token=b7443bbf-f89d-442b-9537-cd9469035e45"
        //                     alt="git picture"
        //                 />
        //                 <img
        //                     src="https://firebasestorage.googleapis.com/v0/b/portfolio-img-5d1bb.appspot.com/o/Technologies%2Fheroku.png?alt=media&token=36667119-073d-4ae0-8f91-8e3df79ecd68"
        //                     alt="heroku picture"
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </section>