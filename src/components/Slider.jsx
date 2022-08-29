import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import ProjectCard from "./helpers/projectCard"

const Slider = ({ data = [] }) => {

    const [ actualWidth, setActualWidth ] = useState( window.innerWidth )
    const [ cardsPerPage, setCardsPerPage ] = useState( 3 )
    const [ currentPage, setCurrentPage ] = useState(1)


     const setPerPage = () => {
    
        if( actualWidth >= 1132 ){
            return setCardsPerPage( 3 )
        }else if( actualWidth >= 592 ){
            return setCardsPerPage( 2 )
        }else if( actualWidth <= 592 ){
            return setCardsPerPage( 1 )
        }else{
            return setCardsPerPage( 6 )
        }
    }

     useEffect(() => {

        console.log( cardsPerPage )

        window.onresize = () =>  {
            setActualWidth( window.innerWidth )
        }   

        setPerPage()

    }, [ actualWidth ])

    const maxCards = Math.ceil( data.length / cardsPerPage )
    data = data.slice(
        (currentPage - 1) * cardsPerPage, 
        (currentPage - 1) * cardsPerPage + cardsPerPage 
    )

    const btnpressprev = () => {
        setCurrentPage( currentPage - 1 )
    }

    const btnpressnext = () => {
        setCurrentPage( currentPage + 1 )
    }

    return (
        <div className="carousel">
            <button
                className="pre-btn"
                disabled={ currentPage <= 1 }
                onClick={btnpressprev}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
                className="next-btn"
                disabled={currentPage >= maxCards}
                onClick={btnpressnext}
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </button> 
            {
                data.map((infoCard, idx) => (
                    <ProjectCard
                        key={`portfolio_card_${idx}`}
                        proyectInfo={infoCard}
                    />
                ))
            }
        </div>
    )
}

export default Slider


    

   


            

      