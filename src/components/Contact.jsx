import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import DSearch from '../assets/DSearch.png'


const Contact = () => {

    const refForm = useRef()
    const sendEmail = ( event ) => {
        event.preventDefault()

        emailjs
            .sendForm(
                'service_gp2o9ak',
                'template_4we6qrn',
                refForm.current,
                'IGaZW_zGpcq75bMP0'
            )
            .then( () => {
                alert('Message successfully sent!')
                window.location.reload( false )
            },
            ( err ) => {
                console.log( err )
                alert('Failed to send the message, please try again')
            }
            )
    }

    return (
        <>
            <div className="container-contact contact-page">
                <div className="contact-form">
                    <div className="text-zone">
                        <h1>CONTACT ME</h1>
                        <p>I am interested in working for companies - especially if they are ambitious or long projects.
                            However, if you have any requests or questions, don't hesitate to contact me using the below form either.
                        </p>
                    </div>
                    <form ref={refForm} onSubmit={ sendEmail }>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="text" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input type="text" placeholder="Subject" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
                <div className="info-map" >
                    David Cisneros,
                    <br />
                    México
                    <br />
                    Coyoacán, CDMX
                    <br />
                    <span>Let's contact :D</span>
                </div>
                <div className="map-wrapper" >
                    <MapContainer center={[ 19.3467, -99.16174 ]} zoom={13}  >
                        <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[ 19.3467, -99.16174 ]} >
                            <Popup>DavidC. lives around here, come over for a cup of coffee :D</Popup>
                        </Marker>
                    </MapContainer>
                    <img className="dsearch-img" src={ DSearch } alt="david search" />
                </div>
            </div>
        </>
    )
}

export default Contact