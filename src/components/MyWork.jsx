import { data } from "../data/data"
import Slider from "./Slider"

const MyWork = () => {

    return(
        <section className="skills-container">
            <div className="text-zone" >
                <h1> 
                    My work 
                </h1>
                <div className="eye">
                    <div className="shut">
                        <span></span>
                    </div>
                    <div className="ball"></div>
                </div>
            </div>
            <Slider data={ data } />
    </section>
    )
}

export default MyWork