import { useEffect } from "react";
import { Overlay, ModalWindow, Image, Header, Span, SpanBold, Desc, Text, Title, Button, List, Item } from "./Modal.styled";

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
    const preparedRentalConditions = rentalConditions.split('\n');
    const preparedAge = preparedRentalConditions[0].split(':');
    const preparedMileage = String(mileage).slice(0,1)+','+String(mileage).slice(1);


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
                <List>
                    <Item>Minimum age: <SpanBold>{preparedAge[1]}</SpanBold></Item>
                    <Item>{preparedRentalConditions[1]}</Item>
                </List>
                <List>
                    <Item>{preparedRentalConditions[2]}</Item>
                    <Item>Mileage: <SpanBold>{preparedMileage}</SpanBold></Item>
                    <Item>Price: <SpanBold>{rentalPrice.slice(1)+'$'}</SpanBold></Item>
                </List>
                <Button href="+380730000000">Rental car</Button>

            </ModalWindow>
        </Overlay>
    )
}

export default Modal;