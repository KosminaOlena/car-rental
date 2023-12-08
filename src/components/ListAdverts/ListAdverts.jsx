import { ItemListAdverts } from "components/ItemListAdverts/ItemListAdverts";
import { List } from "./ListAdverts.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdvertsThunk } from "forRedux/thunk";
import { choiceVisibleArray } from "forRedux/selectors";

export const ListAdverts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAdvertsThunk())
    },[dispatch])

    const visibleArray = useSelector(choiceVisibleArray);

    return(
        <List>
            {visibleArray.map(advert => (<ItemListAdverts
            key={advert.id}
            img={advert.img}
            make={advert.make}
            model={advert.model}
            year={advert.year}
            price={advert.rentalPrice}
            address={advert.address}
            company={advert.rentalCompany}
            type={advert.type}
            mileage={advert.mileage}
            functionalities={advert.functionalities}/>))}   
        </List>
    )
}

