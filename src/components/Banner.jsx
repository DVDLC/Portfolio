import DHome from '../assets/DHome.png' 
import hand  from '../assets/waving-hand.png'

const Banner = () => {
    return(
        <div className="banner">
            <div className="text-zone">
                <h1>
                    Hi,
                    <img className='wave' src={hand} alt="waving-hand" />
                    <br />
                    I am DavidC.
                    <br />
                    Web developer.
                </h1>
                <h2> Backend Jr Developer </h2>
                <button className='btn-contact' >CONTACT</button>
            </div>
            <div className='d-container' >
                <img className='banner-img' src={DHome} alt="david-home" />
            </div>
        </div> 
    )
}

export default Banner