import React from 'react'

const SkillsBar = ({ tech, state }) => {

    return (
        <div className={ state? 'bar active': 'bar' }>
            <div className="info">
                <span>{ tech.toUpperCase() }</span>
            </div>
            <div className={`progress-line ${tech}`}>
                <span></span>
            </div>
        </div>
    )
}

export default SkillsBar