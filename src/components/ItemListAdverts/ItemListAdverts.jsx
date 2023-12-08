import { Item, Button, Image, Title, Span, Desc } from "./ItemListAdverts.styled";
// import { useDispatch } from "react-redux";

export const ItemListAdverts = ({img, make, model, year, price, address, company, type, mileage, functionalities}) => {
    // const dispatch = useDispatch()

    const shortAddress = address.split(',').slice(-2).join(' | ');


    return(
        <Item>
            <Image src={img} alt="the car" />
            <Title>
            <p>{make}<Span>{model}</Span>,{year}</p>
            <p>{price}</p>
            </Title> 
            <Desc>{shortAddress} | {company}</Desc>
            <Desc>{type} | {make} | {mileage} | {functionalities[0]}</Desc>
            <Button type="button">Learn more</Button>
        </Item>
    )
}