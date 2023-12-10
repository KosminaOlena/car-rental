import { Item, Button, Image, Title, Span, Desc } from "./ItemListAdverts.styled";
import Modal from "components/Modal/Modal";
// import { useDispatch } from "react-redux";
import { useState } from "react";

export const ItemListAdverts = ({advert}) => {
    const[showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal)
    };
    // const dispatch = useDispatch()
    const {img, make, model, year, price, address, company, type, mileage, functionalities} = advert;

    const shortAddress = address.split(',').slice(-2).join(' | ');



    return(
        <>
        <Item>
            <Image src={img} alt={model} />
            <Title>
            <p>{make}<Span>{model}</Span>,{year}</p>
            <p>{price}</p>
            </Title> 
            <Desc>{shortAddress} | {company}</Desc>
            <Desc>{type} | {make} | {mileage} | {functionalities[0]}</Desc>
            <Button type="button" onClick={toggleModal}>Learn more</Button>
        </Item>
        {showModal && <Modal advert={advert} onClose = {toggleModal}></Modal>}
        </>
    )
}