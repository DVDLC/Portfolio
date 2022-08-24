import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import ProjectCard from "./helpers/projectCard"


const Slider = ({ data = [] }) => {

    const cardAnimatedClass = 'card-animate'

    const [ actualWidth, setActualWidth ] = useState( 0 )
    const [ cardsPerPage, setCardsPerPage ] = useState( 0 )
    const [ currentPage, setCurrentPage ] = useState(1)

    

    useEffect(() => {
        window.onresize = () =>  {
            setActualWidth( window.innerWidth )
        }
        if( actualWidth >= 1132 ){
            setCardsPerPage( 6 )
        }else if( actualWidth >= 592 ){
            setCardsPerPage( 4 )
        }else if( actualWidth <= 592 ){
            setCardsPerPage( 1 )
        }else{
            setCardsPerPage( 6 )
        }
    })

    const maxCards = Math.ceil( data.length / cardsPerPage )
    data = data.slice(
        (currentPage - 1) * cardsPerPage, 
        (currentPage - 1) * cardsPerPage + cardsPerPage 
    )

    return (
        <div className="carousel">
            <button 
                className="previous"
                disabled={ currentPage <= 1 }
                onClick={ () => setCurrentPage( currentPage - 1 ) }
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {
               data.map((infoCard, idx) => (
                    <ProjectCard
                        key={`portfolio_card_${idx}`}
                        proyectInfo={infoCard}
                        dinamicClass={`${cardAnimatedClass} _${idx}`}
                    />
                ))
            }
            <button 
                className="next"
                disabled={ currentPage >= maxCards }
                onClick={ () => setCurrentPage( currentPage + 1 ) }
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}

export default Slider