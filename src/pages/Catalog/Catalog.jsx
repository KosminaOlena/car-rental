import { useSelector } from "react-redux";
import { ListAdverts } from "components/ListAdverts/ListAdverts";
import { MoreButton } from "components/MoreButton/MoreButton";
import { Loader } from "components/Loader/Loader";
import { selectorIsLoading } from "forRedux/selectors";

const CatalogPage = () => {
    const isLoading = useSelector(selectorIsLoading);
    return(
        <div>
            {isLoading && <Loader />}
            <ListAdverts />
            <MoreButton />
        </div>
    )
}

export default CatalogPage;