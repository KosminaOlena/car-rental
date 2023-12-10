import { useEffect } from "react";
import { Overlay, ModalWindow, Image, Header, Span, Desc, Text, Title, Button } from "./Modal.styled";

const Modal = ({advert, onClose}) => {
    useEffect(()=>{
        const handleKeyDown = e => {
            if(e.code === 'Escape'){
                onClose();
            }
        }
    window.addEventListener('keydown', handleKeyDown);
    return() => {window.removeEventListener('keydown', handleKeyDown)}
    },[onClose])
    const handleOverlayClick = e => {
        if(e.currentTarget === e.target){
            onClose()
        }
    }

    const {img, make, model, year, address, id, type, fuelConsumption, engineSize, description, accessories, functionalities, rentalConditions, mileage, rentalPrice} = advert;
    const shortAddress = address.split(',').slice(-2).join(' | ');
    const preparedAccessories = accessories.map(accessory => `${accessory}`).join(' | ');
    const preparedFunctionalities = functionalities.map(functionality => `${functionality}`).join(' | ');

    return(
        <Overlay onClick={handleOverlayClick}>
            <ModalWindow>
                <Image src={img} alt={model}/>
                <Header>{make}<Span>{model}</Span>, {year}</Header>
                <Desc>{shortAddress} | Id:{id} | Year:{year} | Type:{type}</Desc>
                <Desc>Fuel Consumption:{fuelConsumption} | Engine Size:{engineSize}</Desc>
                <Text>{description}</Text>
                <Title>Accessories and functionalities:</Title>
                <Desc>{preparedAccessories}</Desc>
                <Desc>{preparedFunctionalities}</Desc>
                <Title>Rental Conditions:</Title>
                <Button href="+380730000000">Rental car</Button>

            </ModalWindow>
        </Overlay>
    )
}

export default Modal;