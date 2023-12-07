import { NavBar, StyledLink} from "./Header.styled"

const Header = () => {

    return (
            <NavBar>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/catalog">Catalog</StyledLink>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </NavBar>
)}

export default Header;